'use client'
import { useRef, useEffect, useState } from 'react';

const CameraAccess = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCameraAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError('Error accessing camera: ' + err.message);
      }
    };

    getCameraAccess();
  }, []);

  return (
    <div>
      <h1>Camera Access</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />
      )}
    </div>
  );
};

export default CameraAccess;
