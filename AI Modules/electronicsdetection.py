from ultralytics import YOLO
import cv2

model = YOLO('yolov8n.pt')
gadget_classes = ['cell phone', 'laptop', 'remote', 'keyboard', 'mouse', 'tv', 'monitor']

camera = cv2.VideoCapture(0)

if not camera.isOpened():
    print("Error: Could not access the camera.")
    exit()

while True:
    ret, frame = camera.read()
    if not ret:
        break

    results = model.predict(source=frame, conf=0.5, show=False)

    for box in results[0].boxes:
        class_id = int(box.cls)
        label = model.names[class_id]

        if label in gadget_classes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            conf = box.conf[0]
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
            cv2.putText(frame, f"{label} {conf:.2f}", (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        else:
            print(f"Detected: {label} (Not a gadget)")

    cv2.imshow('Electronic Gadget Detection', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

camera.release()
cv2.destroyAllWindows()
