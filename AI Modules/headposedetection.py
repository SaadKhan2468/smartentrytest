import cv2
import mediapipe as mp
import numpy as np
import math
from collections import deque

mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh(min_detection_confidence=0.5, min_tracking_confidence=0.5)

model_points = np.array([
    (0.0, 0.0, 0.0),
    (0.0, -50.0, -10.0),
    (-30.0, 40.0, -10.0),
    (30.0, 40.0, -10.0),
    (-25.0, -30.0, -10.0),
    (25.0, -30.0, -10.0)
], dtype=np.float64)

focal_length = 640
center = (320, 240)
camera_matrix = np.array([
    [focal_length, 0, center[0]],
    [0, focal_length, center[1]],
    [0, 0, 1]
], dtype=np.float64)
dist_coeffs = np.zeros((4, 1))

ANGLE_HISTORY_SIZE = 10
yaw_history = deque(maxlen=ANGLE_HISTORY_SIZE)
pitch_history = deque(maxlen=ANGLE_HISTORY_SIZE)
roll_history = deque(maxlen=ANGLE_HISTORY_SIZE)

previous_state = "Looking at Screen"

def get_head_pose_angles(image_points):
    success, rotation_vector, translation_vector = cv2.solvePnP(
        model_points, image_points, camera_matrix, dist_coeffs, flags=cv2.SOLVEPNP_ITERATIVE
    )
    if not success:
        return None
    rotation_matrix, _ = cv2.Rodrigues(rotation_vector)
    sy = math.sqrt(rotation_matrix[0, 0]**2 + rotation_matrix[1, 0]**2)
    singular = sy < 1e-6
    if not singular:
        pitch = math.atan2(rotation_matrix[2, 1], rotation_matrix[2, 2])
        yaw = math.atan2(-rotation_matrix[2, 0], sy)
        roll = math.atan2(rotation_matrix[1, 0], rotation_matrix[0, 0])
    else:
        pitch = math.atan2(-rotation_matrix[1, 2], rotation_matrix[1, 1])
        yaw = math.atan2(-rotation_matrix[2, 0], sy)
        roll = 0
    return np.degrees(pitch), np.degrees(yaw), np.degrees(roll)

def smooth_angle(history, new_angle):
    history.append(new_angle)
    return np.mean(history)

def get_direction(pitch, yaw, roll):
    if -15 < yaw < 15 and -10 < pitch < 10:
        return "Looking at Screen"
    if yaw <= -15:
        return "Looking Left"
    if yaw >= 15:
        return "Looking Right"
    if pitch >= 10:
        return "Looking Up"
    if pitch <= -10:
        return "Looking Down"
    if abs(roll) >= 10:
        return "Tilted"
    return previous_state

def process_head_pose(frame):
    global previous_state
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = face_mesh.process(rgb_frame)
    direction = "No Face Detected"
    if results.multi_face_landmarks:
        for face_landmarks in results.multi_face_landmarks:
            image_points = np.array([
                (face_landmarks.landmark[30].x * frame.shape[1], face_landmarks.landmark[30].y * frame.shape[0]),
                (face_landmarks.landmark[8].x * frame.shape[1], face_landmarks.landmark[8].y * frame.shape[0]),
                (face_landmarks.landmark[36].x * frame.shape[1], face_landmarks.landmark[36].y * frame.shape[0]),
                (face_landmarks.landmark[45].x * frame.shape[1], face_landmarks.landmark[45].y * frame.shape[0]),
                (face_landmarks.landmark[48].x * frame.shape[1], face_landmarks.landmark[48].y * frame.shape[0]),
                (face_landmarks.landmark[54].x * frame.shape[1], face_landmarks.landmark[54].y * frame.shape[0])
            ], dtype=np.float64)
            angles = get_head_pose_angles(image_points)
            if angles is None:
                continue
            pitch = smooth_angle(pitch_history, angles[0])
            yaw = smooth_angle(yaw_history, angles[1])
            roll = smooth_angle(roll_history, angles[2])
            direction = get_direction(pitch, yaw, roll)
            previous_state = direction
    return frame, direction

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    frame, head_direction = process_head_pose(frame)
    cv2.putText(frame, head_direction, (30, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 255, 0), 3)
    cv2.imshow("Head Pose Detection", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
