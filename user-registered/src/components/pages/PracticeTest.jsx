import { useEffect, useState } from 'react';
import WebCamFeed from './WebCamFeed';
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'; // Import axios

const PracticeTest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from || '/home';
  const [allDetections, setAllDetections] = useState([]); // Default to home if no state passed

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showWebcamAlert, setShowWebcamAlert] = useState(true);
  const [recognitionStatus, setRecognitionStatus] = useState('pending');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Check face recognition status
    fetch('http://localhost:5001/recognition_status')
      .then(response => response.json())
      .then(data => setRecognitionStatus(data.status))
      .catch(err => console.error('Error:', err));

    // Cleanup on unmount
    return () => {
      if (window.stream) {
        window.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      setAllDetections([]);
    };
  }, []);

  const handleNewDetection = (detection) => {
    setAllDetections(prev => [...prev, detection]);
  };

  const handleEndExam = async () => {
    try {
      console.log('All detections before saving:', allDetections);
      const token = localStorage.getItem('authToken');
      console.log('Retrieved token:', token); // Debug: Log the token

      // Check token existence and format
      if (!token) {
        alert('No active session. Please login.');
        navigate('/login');
        return;
      }

      // Validate token format
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        console.error('Invalid token format:', token);
        alert('Invalid token format. Please login again.');
        localStorage.removeItem('authToken'); // Correct key
        navigate('/login');
        return;
      }

      // Decode without verification first
      const decoded = jwtDecode(token);
      console.log('Decoded token:', decoded); // Debug: Log decoded token
      
      // Check expiration manually
      if (Date.now() >= decoded.exp * 1000) {
        alert('Session expired. Please login again.');
        localStorage.removeItem('authToken'); // Correct key
        navigate('/login');
        return;
      }

      // Ensure allDetections is populated
      if (allDetections.length === 0) {
        console.log('No detections to save.');
      }

      // Construct the report in the same format as WebCamFeed.jsx
      const report = allDetections.reduce((acc, d) => ({
        ...acc,
        [d.id]: {
          type: d.type,
          message: d.message,
          timestamp: d.timestamp,
          userName: decoded.name || 'Unknown'
        }
      }), {});
      console.log('Report to save:', report);

      // Use axios to save the report
      const response = await axios.post('http://localhost:5000/api/save-report', {
        userId: decoded.id,
        report: report
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Save report response:', response.data);
      setShowResult(true); // Show the result after saving the report
    } catch (error) {
      console.error('Save Error:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Response text:', error.response.statusText);
        alert(`Save failed: ${error.response.data.message || error.message}`);
      } else {
        console.error('Network or other error:', error.message);
        alert(`Save failed: ${error.message}`);
      }
      if (error.message.includes('expired') || error.message.includes('Invalid token')) {
        localStorage.removeItem('authToken'); // Correct key
        alert('Session expired or invalid token. Please login again.');
        navigate('/login');
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate("/");
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: index,
    });
  };

  const calculateResult = () => {
    return questions.reduce((score, question, index) => {
      return question.correctAnswer === selectedAnswers[index]
        ? score + 1
        : score;
    }, 0);
  };

  const questions = [
    {
      id: 1,
      question: "Which of the following drugs is a beta-blocker commonly used to treat hypertension?",
      options: ["Amlodipine", "Lisinopril", "Metoprolol", "Furosemide"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "What is the normal range for human body temperature in Fahrenheit?",
      options: ["96-98°F", "98-100°F", "97-99°F", "99-101°F"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Which organ is primarily responsible for detoxification in the human body?",
      options: ["Liver", "Kidney", "Lungs", "Heart"],
      correctAnswer: 0,
    },
    {
      id: 4,
      question: "What is the main function of hemoglobin in the blood?",
      options: ["Transport nutrients", "Fight infections", "Carry oxygen", "Regulate temperature"],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Which vitamin is known as the 'sunshine vitamin'?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      correctAnswer: 2,
    },
    {
      id: 6,
      question: "What is the chemical symbol for sodium?",
      options: ["Na", "So", "Sm", "Sn"],
      correctAnswer: 0,
    },
    {
      id: 7,
      question: "Which part of the brain is responsible for balance and coordination?",
      options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Which blood type is considered the universal donor?",
      options: ["A", "B", "AB", "O"],
      correctAnswer: 3,
    },
    {
      id: 9,
      question: "What is the primary energy source for the human body?",
      options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
      correctAnswer: 2,
    },
    {
      id: 10,
      question: "Which hormone regulates blood sugar levels?",
      options: ["Insulin", "Adrenaline", "Cortisol", "Glucagon"],
      correctAnswer: 0,
    },
  ];

  return (
    <section className="px-[3%] py-7">
      <div>
        <h1 className="text-xl text-black font-semibold poppins capitalize text-center">
          PROCTOR AI
        </h1>
        <hr className="mt-5" />
      </div>

      <div className="md:my-7 my-3 sm:border border border-border-clr rounded-lg md:p-5 p-3">
        {!showResult ? (
          <>
            <div className="border border-border-clr rounded-lg p-4 gap-5 flex justify-between md:flex-row flex-col">
              <div className="md:w-1/2 w-full">
                <h1 className="lg:text-3xl md:text-xl text-base text-black font-semibold poppins capitalize md:py-2 py-0">
                  NAR: Nursing - Pharm D (Practice Test) PATHOLOGY
                </h1>
              </div>
              <div className="md:w-1/2 w-full text-black lg:text-lg text-sm font-normal md:space-y-1 text-end">
                <h1>Time Remaining : 00: 00:00</h1>
                <h1>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h1>
                <h1>Flag for REVIEW</h1>
              </div>
            </div>

            <div className="flex gap-10 mt-10 items-start md:flex-row flex-col-reverse">
              <div className="lg:w-[85%] md:w-[70%] w-full">
                <h1 className="text-black text-xl font-semibold">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h1>
                <h1 className="text-black md:text-xl text-base font-semibold">
                  {questions[currentQuestionIndex].question}
                </h1>
                <div className="md:space-y-3 space-y-1 mt-4">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-base text-black font-normal"
                      >
                        <input
                          type="radio"
                          className="accent-black"
                          name={`question-${currentQuestionIndex}`}
                          id={`option-${index}`}
                          checked={
                            selectedAnswers[currentQuestionIndex] === index
                          }
                          onChange={() => handleAnswerSelect(index)}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                      </div>
                    )
                  )}
                </div>

                <button className="text-base capitalize lg:w-[20%] md:w-[50%] w-[70%] font-medium bg-black text-white py-4 mt-5 rounded-lg">
                  Add Comments
                </button>
                <div className="mt-4">
                  <WebCamFeed onDetection={handleNewDetection} />
                </div>
              </div>
              <div className="lg:w-[15%] md:w-[30%] w-full flex items-center text-center">
                <button className="text-base text-black font-medium border border-black py-4 w-full rounded-lg">
                  Shuffle Subjects
                </button>
              </div>
            </div>
            <div className="md:mt-32 mt-20">
              <div className="flex items-end mb-5 md:justify-end gap-5 md:flex-col flex-row">
                <button className="text-base capitalize md:w-[20%] w-1/2 font-medium bg-black text-white py-4 rounded-lg">
                  Calculator
                </button>
                <button className="text-base capitalize md:w-[20%] w-1/2 font-medium bg-black text-white py-4 rounded-lg">
                  White Board
                </button>
              </div>

              <div className="flex justify-between items-center border-t border-border-clr pt-4">
                <div className="">
                  <button
                    onClick={handleEndExam}
                    className="font-semibold text-black md:text-xl text-sm"
                  >
                    End Exam
                  </button>
                </div>

                <div className="">
                  <button
                    onClick={handlePrevious}
                    className="font-semibold text-black md:text-xl text-sm"
                  >
                    Back
                  </button>

                  {currentQuestionIndex < questions.length - 1 ? (
                    <button
                      onClick={handleNext}
                      className="font-semibold text-black md:text-xl text-sm ml-5"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleEndExam}
                      className="font-semibold text-black md:text-xl text-sm ml-5"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Exam Completed!</h1>
            <p className="text-lg">
              Your Score: {calculateResult()} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticeTest;