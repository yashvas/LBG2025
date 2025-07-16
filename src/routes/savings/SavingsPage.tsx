import React, { useState } from "react";
import "./Savings.css";

// Import your images
import babyHorse from "../../assets/Baby-Horse.png";
import teenHorse from "../../assets/Teen-Horse.png";
import adultHorse from "../../assets/Adult-Horse.png";

const getHorseLevel = (amount: number) => {
  if (amount < 1000) return { img: babyHorse, label: "Baby Horse" };
  if (amount < 5000) return { img: teenHorse, label: "Teen Horse" };
  return { img: adultHorse, label: "Adult Horse" };
};

const SavingsPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const horse = getHorseLevel(amount);

  return (
    <div className="page-container">
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
        <span style={{ fontSize: "2rem", marginTop: "1rem" }}>{horse.label}</span>
        <span style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>£{amount} saved</span>
      </div>
      <div style={{ marginTop: "2rem", maxWidth: 400, textAlign: "left", background: "#f9f9f9", padding: "1rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
        <h3>How to use:</h3>
        <ol>
          <li>Type the amount of money you have saved in the box above.</li>
          <li>See your horse level and picture appear inside the green circle.</li>
          <li>Try saving more to reach the next horse level!</li>
        </ol>
      </div>
    </div>
  );
};

export default SavingsPage;