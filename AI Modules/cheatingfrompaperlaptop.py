import cv2
from inference_sdk import InferenceHTTPClient

CLIENT = InferenceHTTPClient(
    api_url="https://serverless.roboflow.com",
    api_key="BD16x0OrAbVFoCYXC74J"
)

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    cv2.imwrite("frame.jpg", frame)

    result = CLIENT.infer("frame.jpg", model_id="grad-project2-bkyej/4")

    detections = result["predictions"]
    for det in detections:
        label = det["class"]
        confidence = det["confidence"] * 100
        print(f"Detected: {label} ({confidence:.2f}%)")

        x1, y1, x2, y2 = int(det["x"] - det["width"]/2), int(det["y"] - det["height"]/2), \
                         int(det["x"] + det["width"]/2), int(det["y"] + det["height"]/2)
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(frame, f"{label} ({confidence:.1f}%)", (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    cv2.imshow("Proctoring Detection", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
