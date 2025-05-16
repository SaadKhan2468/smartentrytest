// WebCamFeed.jsx
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const WebCamFeed = ({ onDetection }) => {
  const [detections, setDetections] = useState([]);
  const messagesEndRef = useRef(null);
  const [sessionReport, setSessionReport] = useState({});
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [reportSaved, setReportSaved] = useState(false);
  const [saveInterval, setSaveInterval] = useState(null);
  const [autoScroll, setAutoScroll] = useState(true); // New state for auto-scroll control

  // Get user information from token when component mounts
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.id);
        setUserName(decoded.name || 'User');
        console.log('User authenticated:', decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  // Update session report whenever detections change
  useEffect(() => {
    const report = detections.reduce((acc, detection) => {
      const key = `${detection.type}_${detection.timestamp}`;
      acc[key] = {
        type: detection.type,
        message: detection.message,
        timestamp: detection.timestamp,
        userName: userName
      };
      return acc;
    }, {});
    
    setSessionReport(report);
    console.log('Session report updated:', report);
  }, [detections, userName]);

  // Set up auto-save interval after we have user ID
  useEffect(() => {
    if (userId && !saveInterval) {
      console.log('Setting up auto-save interval for user:', userId);
      
      const interval = setInterval(() => {
        if (Object.keys(sessionReport).length > 0) {
          console.log('Auto-saving report...');
          saveReport(false);
        }
      }, 30000);
      
      setSaveInterval(interval);
      
      return () => clearInterval(interval);
    }
  }, [userId, sessionReport]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (saveInterval) {
        clearInterval(saveInterval);
      }
      if (userId && Object.keys(sessionReport).length > 0) {
        saveReport(false);
      }
    };
  }, [userId, sessionReport]);

  const saveReport = async (showAlert = true) => {
    if (!userId) {
      console.error('Cannot save report: User not authenticated');
      if (showAlert) alert('User not authenticated!');
      return;
    }

    if (Object.keys(sessionReport).length === 0) {
      console.log('No detections to save');
      if (showAlert) alert('No detections to save');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('Cannot save report: Authentication token missing');
        if (showAlert) alert('Authentication token missing!');
        return;
      }

      console.log('Saving report to server:', sessionReport);
      
      const response = await axios.post('http://localhost:5000/api/save-report', 
        {
          userId: userId,
          report: sessionReport
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      console.log('Save report response:', response.data);
      setReportSaved(true);
      if (showAlert) alert('Report saved successfully');
    } catch (error) {
      console.error('Error saving report:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
        console.error('Status:', error.response.status);
        if (showAlert) alert(`Failed to save report: ${error.response.data.message || error.message}`);
      } else {
        console.error('Network or other error:', error.message);
        if (showAlert) alert(`Failed to save report: ${error.message}`);
      }
    }
  };

  // Poll for detections every 2 seconds
  useEffect(() => {
    console.log('Setting up polling for detections');

    const fetchDetections = async () => {
      try {
        const response = await axios.get('http://localhost:5001/get_detections');
        const newDetections = response.data;

        if (newDetections.length > 0) {
          console.log('Fetched detections:', newDetections);

          setDetections(prev => {
            const updatedDetections = [...prev];
            newDetections.forEach(data => {
              const newDetection = {
                id: `${data.type}_${data.timestamp}`,
                type: data.type,
                message: data.message,
                time: new Date(data.timestamp * 1000).toLocaleTimeString(),
                timestamp: data.timestamp
              };

              const exists = updatedDetections.some(d => d.id === newDetection.id);
              if (!exists) {
                updatedDetections.push(newDetection);
                if (onDetection) {
                  onDetection(newDetection);
                }
              }
            });

            return updatedDetections.slice(-9); // Keep only the last 10 detections
          });
        }
      } catch (error) {
        console.error('Error fetching detections:', error);
      }
    };

    // Fetch detections immediately and then every 2 seconds
    fetchDetections();
    const interval = setInterval(fetchDetections, 2000);

    return () => {
      console.log('Cleaning up polling interval');
      clearInterval(interval);
    };
  }, [onDetection]);

  // Auto-scroll to bottom only if autoScroll is enabled and user hasn't scrolled up
  const scrollToBottom = () => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [detections, autoScroll]);

  // Detect manual scroll to disable auto-scroll
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight < scrollHeight - 10 && autoScroll) { // User scrolled up
      setAutoScroll(false);
      console.log('Auto-scroll disabled due to manual scroll');
    }
  };

  // Manual trigger for testing
  const triggerTestDetection = () => {
    fetch('http://localhost:5001/test_detection')
      .then(res => res.json())
      .then(data => console.log('Test detection triggered:', data))
      .catch(err => console.error('Test detection failed:', err));
  };

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Live Proctoring</h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => saveReport(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            disabled={Object.keys(sessionReport).length === 0}
          >
            Save Report
          </button>
          <button
            onClick={triggerTestDetection}
            className="px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            Test
          </button>
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${autoScroll ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white`}
          >
            {autoScroll ? 'Auto-Scroll On' : 'Auto-Scroll Off'}
          </button>
        </div>
      </div>
      
      <div className="flex gap-6">
        <div className="w-1/2 bg-white rounded-xl shadow-lg p-4">
          <img 
            src="http://localhost:5001/video_feed" 
            alt="Live Proctoring Feed"
            className="w-full h-full object-contain rounded-lg border-4 border-gray-200"
            style={{ maxHeight: '300px' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YxZjFmMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5OTkiPkNhbWVyYSBmZWVkIHVuYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
              console.error('Failed to load camera feed');
            }}
          />
        </div>
        
        <div className="w-1/2 bg-white rounded-xl shadow-lg p-4 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Detection Alerts
            {reportSaved && <span className="ml-2 text-sm text-green-600">(Report Saved)</span>}
          </h2>
          <div 
            className="h-64 overflow-y-auto space-y-3"
            onScroll={handleScroll} // Add scroll event listener
          >
            {detections.length === 0 ? (
              <p className="text-gray-500 italic">No detections yet</p>
            ) : (
              detections.map((detection) => (
                <div 
                  key={detection.id}
                  className={`p-3 rounded-lg border-l-4 ${
                    detection.type === 'head_pose' ? 'border-blue-500' :
                    detection.type === 'eye_gaze' ? 'border-purple-500' :
                    detection.type === 'electronics' ? 'border-green-500' :
                    detection.type === 'hands' ? 'border-red-500' :
                    detection.type === 'audio' ? 'border-orange-500' :
                    detection.type === 'test' ? 'border-yellow-500' :
                    'border-gray-500'
                  } bg-gray-50`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500">{detection.time}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      detection.type === 'head_pose' ? 'bg-blue-100 text-blue-800' :
                      detection.type === 'eye_gaze' ? 'bg-purple-100 text-purple-800' :
                      detection.type === 'electronics' ? 'bg-green-100 text-green-800' :
                      detection.type === 'hands' ? 'bg-red-100 text-red-800' :
                      detection.type === 'audio' ? 'bg-orange-100 text-orange-800' :
                      detection.type === 'test' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {detection.type.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{detection.message}</p>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCamFeed;