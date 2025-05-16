// SocketDebug.jsx
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketDebug = () => {
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [events, setEvents] = useState([]);
  const [lastDetection, setLastDetection] = useState(null);
  
  useEffect(() => {
    // Create socket with explicit configuration
    const socket = io('http://localhost:5001', {
      reconnectionAttempts: 5,
      timeout: 10000,
      transports: ['websocket', 'polling'] // Try websocket first, fall back to polling
    });

    socket.on('connect', () => {
      console.log('Socket connected!', socket.id);
      setConnectionStatus(`Connected (ID: ${socket.id})`);
      
      // Manually trigger a test detection after connection
      fetch('http://localhost:5001/test_detection')
        .then(res => res.json())
        .then(data => console.log('Test detection triggered:', data))
        .catch(err => console.error('Test detection failed:', err));
    });

    socket.on('connect_error', (err) => {
      console.error('Connection Error:', err);
      setConnectionStatus(`Connection Error: ${err.message}`);
    });

    socket.on('detection', (data) => {
      console.log('Detection received:', data);
      setLastDetection(data);
      setEvents(prev => [...prev.slice(-9), {
        id: Date.now(),
        type: 'detection',
        data: data,
        time: new Date().toLocaleTimeString()
      }]);
    });

    socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
      setConnectionStatus(`Disconnected: ${reason}`);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h2 className="text-xl font-bold mb-2">Socket.IO Debug</h2>
      <div className="mb-4">
        <span className="font-semibold">Status: </span>
        <span className={`px-2 py-1 rounded ${
          connectionStatus.includes('Connected') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {connectionStatus}
        </span>
      </div>
      
      {lastDetection && (
        <div className="mb-4 p-3 border rounded bg-blue-50">
          <h3 className="font-semibold">Last Detection:</h3>
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(lastDetection, null, 2)}
          </pre>
        </div>
      )}
      
      <h3 className="font-semibold mb-2">Event Log:</h3>
      <div className="h-64 overflow-y-auto border rounded p-2 bg-white">
        {events.length === 0 ? (
          <p className="text-gray-500 italic">No events received yet</p>
        ) : (
          events.map(event => (
            <div key={event.id} className="mb-2 p-2 border-b">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{event.type}</span>
                <span className="text-gray-500">{event.time}</span>
              </div>
              <pre className="whitespace-pre-wrap text-xs mt-1">
                {JSON.stringify(event.data, null, 2)}
              </pre>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4">
        <button 
          onClick={() => fetch('http://localhost:5001/test_detection')}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Trigger Test Detection
        </button>
      </div>
    </div>
  );
};

export default SocketDebug;