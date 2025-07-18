import React, { useEffect, useState } from "react";
import "./Savings.css";

// Import your images
import babyHorse from "../../assets/baby-horse.png";
import teenHorse from "../../assets/teen-horse.png";
import adultHorse from "../../assets/adult-horse.png";
import ProgressBar from "../../components/progressBar/ProgressBar";

const getHorseLevel = (amount: number) => {
  if (amount < 1000) return { img: babyHorse, label: "Baby Horse" };
  if (amount < 5000) return { img: teenHorse, label: "Teen Horse" };
  return { img: adultHorse, label: "Adult Horse" };
};

const maxSavings = 5000;

const SavingsPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const horse = getHorseLevel(amount);

        const [progress, setProgress] = useState(0);

        useEffect(() => {
          setProgress((amount / maxSavings) * 100);
        }, [amount])

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
    <div className="page-container" style={{paddingTop: 200}}>
      <div style={{width: 200, height: 200}}>
        <ProgressBar  progress={progress} />
      </div>
      <h2>Enter your savings amount:</h2>
      <input
        type="number"
        value={amount}
        min={0}
        onChange={e => setAmount(Number(e.target.value))}
        placeholder="Enter amount (£)"
        style={{ fontSize: "1.2rem", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <div className="circle" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2.5rem",
        color: "#fff"
      }}>
        <img src={horse.img} alt={horse.label} style={{ width: "200px", height: "200px", objectFit: "contain" }} />
        <span style={{ fontSize: "2rem" }}>{horse.label}</span>
        <span style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>£{amount} saved</span>
      </div>
      <div style={{ marginTop: "2rem", maxWidth: 400, textAlign: "left", background: "#f9f9f9", padding: "1rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
        <h3 style={{color: "black"}}>How to use:</h3>
        <ol>
          <li style={{color: "black"}}>Type the amount of money you have saved in the box above.</li>
          <li style={{color: "black"}}>See your horse level and picture appear inside the green circle.</li>
          <li style={{color: "black"}}>Try saving more to reach the next horse level!</li>
        </ol>
      </div>
                 <div className="circle"></div> {/* This is the circle */}
                <div style={{ textAlign: "center", padding: "2rem" }}>
    </div>
          <h1>Curved Progress Bar</h1>
      <div className="progress-container">
      
      </div>
    </div>
  );
};

export default SavingsPage;