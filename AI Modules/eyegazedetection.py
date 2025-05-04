import cv2
from deepface import DeepFace
import mediapipe as mp
from scipy.spatial.distance import cosine
import time

mp_face_mesh = mp.solutions.face_mesh
cap = cv2.VideoCapture(0)
cap.set(3, 640) 
cap.set(4, 480) 

reference_images = {
    "Baqir": r"C:\Users\Admin\Desktop\hh\baqir.jpeg",
    "Bisma": r"C:\Users\Admin\Desktop\hh\bisma.jpeg",
    "Imran Khan": r"C:\Users\Admin\Desktop\hh\Imrankhan.jfif"
}
reference_embeddings = {}
model_name = 'OpenFace'

for label, image_path in reference_images.items():
    try:
        embedding = DeepFace.represent(img_path=image_path, model_name=model_name, enforce_detection=False)
        reference_embeddings[label] = embedding[0]['embedding']
    except Exception as e:
        print(f"Error processing reference image {label}: {e}")

gaze_threshold = 3  
frame_rate = 30 

with mp_face_mesh.FaceMesh(min_detection_confidence=0.5, min_tracking_confidence=0.5) as face_mesh:
    gaze_timer = 0
    prompt_active = False

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = face_mesh.process(rgb_frame)

        gaze_direction = "Center"  

        if results.multi_face_landmarks:
            for landmarks in results.multi_face_landmarks:
                left_eye = landmarks.landmark[33]
                right_eye = landmarks.landmark[133]

                left_eye_x, left_eye_y = int(left_eye.x * frame.shape[1]), int(left_eye.y * frame.shape[0])
                right_eye_x, right_eye_y = int(right_eye.x * frame.shape[1]), int(right_eye.y * frame.shape[0])

                if left_eye_x < right_eye_x - 10:
                    gaze_direction = "Looking Left"
                elif left_eye_x > right_eye_x + 10:
                    gaze_direction = "Looking Right"
                elif left_eye_y > right_eye_y + 10:
                    gaze_direction = "Looking Down"
                elif left_eye_y < right_eye_y - 10:
                    gaze_direction = "Looking Up"
                else:
                    gaze_direction = "Center"

        if gaze_direction != "Center":
            gaze_timer += 1
            if gaze_timer >= gaze_threshold * frame_rate and not prompt_active:
                prompt_active = True
        else:
            gaze_timer = 0
            prompt_active = False  

        if prompt_active:
            cv2.putText(frame, "Please look forward!", (frame.shape[1] // 4, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

        face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
        faces = face_cascade.detectMultiScale(rgb_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in faces:
            face_image = rgb_frame[y:y + h, x:x + w]

            matched_label = "Not Matched"
            try:
                face_embedding = DeepFace.represent(face_image, model_name=model_name, enforce_detection=False)
                if face_embedding:
                    face_embedding = face_embedding[0]['embedding']

                    for label, ref_embedding in reference_embeddings.items():
                        distance = cosine(face_embedding, ref_embedding)
                        if distance < 0.4: 
                            matched_label = label
                            break

            except Exception as e:
                print(f"Error verifying face: {e}")

            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
          
            cv2.putText(frame, matched_label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36, 255, 12), 2)

        cv2.imshow('Real-Time Face Recognition & Eye Gaze Detection', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()
