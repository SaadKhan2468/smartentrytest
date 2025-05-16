import cv2
from deepface import DeepFace
import os
from scipy.spatial.distance import cosine 

model_name = 'OpenFace'

#webcamera ka index
cap = cv2.VideoCapture(0)

#images aur un k labels
reference_images = {
    "Najam":"Najam.jpg",
    "Farooq": "farooq.jpg",
    # "Bisma": "C:\Users\Admin\Desktop\hh\bisma.jpeg",
    # "Imran Khan": "C:\Users\Admin\Desktop\hh\Imrankhan.jfif"n
}

reference_embeddings = {}

for label, image_path in reference_images.items():
    try:
        embedding = DeepFace.represent(img_path=image_path, model_name=model_name, enforce_detection=False)
        reference_embeddings[label] = embedding[0]['embedding']
    except Exception as e:
        raise e
        print(f"Error processing reference image {label}: {e}")

while True:
    ret, frame = cap.read()
    if not ret:
        break

    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    faces = face_cascade.detectMultiScale(rgb_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in faces:

        face_image = rgb_frame[y:y+h, x:x+w]

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

        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

        cv2.putText(frame, matched_label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36, 255, 12), 2)

    cv2.imshow('Real-Time Face Recognition', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()