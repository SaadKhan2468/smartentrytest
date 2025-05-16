import cv2
from roboflow import Roboflow
import supervision as sv

rf = Roboflow(api_key="BD16x0OrAbVFoCYXC74J")

model = rf.workspace().project("cheating-detection-xklw9").version(1).model

box_annotator = sv.BoxAnnotator()
label_annotator = sv.LabelAnnotator()

cap = cv2.VideoCapture(0)

cheating_counter = 0

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame_resized = cv2.resize(frame, (640, 480))
    results = model.predict(frame).json()

    detections = sv.Detections.from_inference(results)

    labels = [
        f"{d['class']} {d['confidence']*100:.1f}%"
        for d in results['predictions']
    ]

    for d in results['predictions']:
        if d['confidence'] > 0.7:
            cheating_counter += 1
            break

    if cheating_counter >= 1:
        break

    frame = box_annotator.annotate(scene=frame, detections=detections)
    frame = label_annotator.annotate(scene=frame, detections=detections, labels=labels)

    cv2.imwrite("annotated_frame.jpg", frame)
    cv2.imshow("Real-Time Cheating Detection", frame)

    if cv2.waitKey(66) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
