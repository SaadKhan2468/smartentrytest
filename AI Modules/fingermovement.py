import cv2
import mediapipe as mp
import numpy as np
import time

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)
mp_draw = mp.solutions.drawing_utils

finger_tips_ids = [4, 8, 12, 16, 20]

cap = cv2.VideoCapture(0)

prev_positions = {}
suspicious_flag = False
suspicious_start_time = None
warning_count = 0

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb)

    frame_height, frame_width, _ = frame.shape

    if results.multi_hand_landmarks:
        for hand_idx, hand_landmarks in enumerate(results.multi_hand_landmarks):
            mp_draw.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

            fingers_up = 0
            current_positions = {}

            for idx, lm in enumerate(hand_landmarks.landmark):
                x, y = int(lm.x * frame_width), int(lm.y * frame_height)
                current_positions[idx] = (x, y)

                if idx in finger_tips_ids:
                    cv2.circle(frame, (x, y), 10, (255, 0, 255), cv2.FILLED)

            if current_positions:
                if current_positions[4][1] < current_positions[2][1]:
                    fingers_up += 1

                for tip_id in finger_tips_ids[1:]:
                    if current_positions[tip_id][1] < current_positions[tip_id - 2][1]:
                        fingers_up += 1

            if hand_idx in prev_positions:
                total_movement = 0
                for idx in finger_tips_ids:
                    if idx in current_positions and idx in prev_positions[hand_idx]:
                        dist = np.linalg.norm(np.array(current_positions[idx]) - np.array(prev_positions[hand_idx][idx]))
                        total_movement += dist

                movement_percent = min(int((total_movement / 5) / 10), 100)
                cv2.putText(frame, f'Movement: {movement_percent}%', (10, 100 + 30 * hand_idx),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

                if movement_percent > 60:
                    suspicious_flag = True

            prev_positions[hand_idx] = current_positions

            cv2.putText(frame, f'Fingers Up: {fingers_up}', (10, 50 + 30 * hand_idx),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 0), 2)

            if fingers_up >= 4 or suspicious_flag:
                if suspicious_start_time is None:
                    suspicious_start_time = time.time()
                elif time.time() - suspicious_start_time >= 2:
                    warning_count += 1
                    suspicious_start_time = None

                if warning_count == 1:
                    cv2.putText(frame, "1st Warning: Suspicious Activity", (10, 450),
                                cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 255, 255), 3)
                elif warning_count == 2:
                    cv2.putText(frame, "2nd Warning: Suspicious Activity", (10, 450),
                                cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 255, 255), 3)
                elif warning_count == 3:
                    cv2.putText(frame, "3rd Warning: Suspicious Activity", (10, 450),
                                cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 255, 255), 3)
                elif warning_count >= 4:
                    cv2.putText(frame, "Paper Canceled! Suspicious Activity Detected", (10, 450),
                                cv2.FONT_HERSHEY_SIMPLEX, 1.5, (0, 0, 255), 4)
                    cv2.putText(frame, "Recording Stopped", (10, 500),
                                cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255), 2)
                    break

    cv2.imshow("Smart Proctor - Finger Tracker", frame)

    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
cv2.destroyAllWindows()
