import pandas as pd
import json
from flask import Flask, request, jsonify

with open("simulateddata.json", "r") as file:
    student_results = json.load(file)

recommendations = {
    "Math": ["Watch Khan Academy Math Lectures", "Practice Algebra Problems"],
    "Physics": ["Review Newton's Laws", "Use Interactive Physics Simulators"],
    "English": ["Read Grammar Books", "Practice Writing Essays"]
}

def get_recommendations(user_result):
    weak_subjects = {subj: score for subj, score in user_result.items() if isinstance(score, int) and score < 60}
    study_plan = {subj: recommendations[subj] for subj in weak_subjects}
    return {"Student_ID": user_result["Student_ID"], "Weak_Subjects": list(weak_subjects.keys()), "Recommendations": study_plan}

app = Flask(__name__)

@app.route('/study_recommendation', methods=['POST'])
def study_recommendation():
    data = request.json
    if not data or "Student_ID" not in data:
        return jsonify({"error": "Invalid data format"}), 400
    recommendation = get_recommendations(data)
    return jsonify(recommendation)

if __name__ == '__main__':
    app.run(debug=True)
