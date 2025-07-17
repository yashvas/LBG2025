import { useState, useEffect } from 'react';
import './Savings.css';
import ProgressBar from '../../components/progressBar/ProgressBar';

export default function SavingsPage() {
      const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  }, []);
    return (

        <div className="page-container">
            <h1>Savings Tracker</h1>
            <div className="circle"></div> {/* This is the circle */}
                <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Curved Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
            
        </div>

        
    );





}





