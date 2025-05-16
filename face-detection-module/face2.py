from flask import Flask, Response, jsonify, request
from flask_socketio import SocketIO
import cv2
from deepface import DeepFace
import threading

app = Flask(__name__)
socketio = SocketIO(app)

# Video capture object
cap = cv2.VideoCapture(0)  # Change 0 to your camera index if needed

def generate_frames():
    while True:
        success, frame = cap.read()  # Read the camera frame
        if not success:
            break

        # Perform face detection
        try:
            result = DeepFace.detectFace(frame, enforce_detection=False)
            # You can add more processing here if needed
            
            # Draw rectangles around detected faces
            for (x, y, w, h) in result:
                cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)

            # Convert frame to JPEG
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()

            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        except Exception as e:
            print("Face detection error:", e)

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@socketio.on('update_user')
def update_user(data):
    user_id = data['user_id']
    recognized = data['recognized']
    # Here, you would update your MongoDB data using Mongoose or another method
    print(f'User {user_id} recognized: {recognized}')

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
