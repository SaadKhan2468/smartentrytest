import random
import json
import time
import matplotlib.pyplot as plt

def simulate_exam_data(total_students=50):
    warning_data = {f"student_{i}": random.randint(0, 5) for i in range(1, total_students+1) if random.random() < 0.4}
    cancelled_papers = random.randint(0, 5)
    noise_levels = [random.randint(500, 5000) for _ in range(10)]

    return total_students, warning_data, cancelled_papers, noise_levels

def generate_post_exam_report(total_students, warning_data, cancelled_papers, noise_levels):
    total_warnings = sum(warning_data.values())
    students_warned = len(warning_data)
    safe_students = total_students - students_warned
    avg_noise = sum(noise_levels) / len(noise_levels) if noise_levels else 0

    if avg_noise < 1000 and cancelled_papers == 0:
        environment_status = "Calm and Well-Controlled"
    elif avg_noise < 3000 and cancelled_papers < 3:
        environment_status = "Moderate Noise, Minor Disruptions"
    else:
        environment_status = "Disruptive, Needs Improvement"

    report = {
        "Total Students Appeared": total_students,
        "Students Who Received Warnings": students_warned,
        "Total Warnings Issued": total_warnings,
        "Cancelled Papers": cancelled_papers,
        "Safe Students (No Warnings)": safe_students,
        "Overall Exam Environment": environment_status,
        "Average Noise Level": avg_noise
    }
    with open("simulateddata.json", "w") as file:
        json.dump(report, file, indent=4)

    print("\n📊 Generating Real-Time Post-Exam Report...\n")
    time.sleep(1)

    print(f"Total Students Appeared in the exam: {total_students}")
    time.sleep(1)

    print(f"\nOut of {total_students} students, {students_warned} students received warnings for potential disruptions during the exam.")
    time.sleep(1)

    print(f"\nA total of {total_warnings} warnings were issued.")
    time.sleep(1)

    print(f"\nThe number of students who appeared to be in a safe environment with no warnings was: {safe_students}.")
    time.sleep(1)

    print(f"\n{cancelled_papers} papers were cancelled during the exam due to various disruptions.")
    time.sleep(1)

    print(f"\nThe average noise level recorded during the exam was {avg_noise} decibels.")
    time.sleep(1)

    print(f"\nBased on the noise level and disruption reports, the overall exam environment can be classified as: {environment_status}")
    time.sleep(1)

    print("\n📈 Generating Visualization...")
    time.sleep(1)

    return report

def visualize_exam_report(report):
    categories = [
        "Students With Warnings", 
        "Safe Students", 
        "Cancelled Papers", 
        "Average Noise Level"
    ]
    values = [
        report["Students Who Received Warnings"],
        report["Safe Students (No Warnings)"],
        report["Cancelled Papers"],
        report["Average Noise Level"]
    ]

    fig, ax = plt.subplots()

    ax.barh(categories, values, color=['#FF6F61', '#6CBE45', '#FFC312', '#2E86C1'])
    ax.set_xlabel("Count / Noise Level")
    ax.set_title("Post-Exam Analysis Report")

    plt.tight_layout()
    plt.show()

data = simulate_exam_data()
report = generate_post_exam_report(*data)
visualize_exam_report(report)
