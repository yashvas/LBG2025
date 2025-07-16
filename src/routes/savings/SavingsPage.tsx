import React, { constructor } from "react";
import ToDoList from "../../components/toDoList/ToDoList";
import { HorizontalFlexBox } from "../../components/horizontalFlexBox/HorizontalFlexBox.styled";

export default function SavingsPage() {
  const [currentSavings, setCurrentSavings] = React.useState("");
  const [savingsGoal, setSavingsGoal] = React.useState("");
  const [interestRate, setInterestRate] = React.useState("");
  const [objectives, setObjectives] = React.useState<string[]>([]);

  // Removed duplicate handleSubmit

  const [monthsNeeded, setMonthsNeeded] = React.useState<number | null>(null);

    function calculateMonthsToGoal(
        current: number,
        goal: number,
        rate: number,
    ): number | null {
        if (rate <= 0 || current <= 0 || goal <= current) {
            return null; // Invalid input or goal already reached
        }
        let months = 0;
        let savings = current;
        while (savings < goal && months < 1000) { // Prevent infinite loop
            savings += savings * (rate / 100)/12;
            months++;
        }
        return savings >= goal ? months : null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const current = parseFloat(currentSavings);
        const goal = parseFloat(savingsGoal);
        const rate = parseFloat(interestRate);

        if (
            isNaN(current) ||
            isNaN(goal) ||
            isNaN(rate) ||
            currentSavings === '' ||
            savingsGoal === '' ||
            interestRate === ''
        ) {
            setMonthsNeeded(null);
            return;
        }

        const months = calculateMonthsToGoal(current, goal, rate);
        setMonthsNeeded(months);
    };

    return (
        <div>
            <h1>Savings Page</h1>
            
            <p>Welcome to the savings page. Here you can manage your savings accounts.</p>
            <HorizontalFlexBox gap={80}>
                <div>
                    constructor(parameters) {  
                    }
                
                    <ToDoList
                        objectives={objectives}
                        setObjectives={setObjectives}
                    />
                </div>

                <div>
                <h2>Savings Tracker</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="current-savings">Current Savings: </label>
                    <input
                        type="number"
                        id="current-savings"
                        name="currentSavings"
                        placeholder="Enter your current savings"
                        value={currentSavings}
                        onChange={e => setCurrentSavings(e.target.value)}
                    />
                    <p></p>
                    <label htmlFor="savings-goal">Savings Goal: </label>
                        <input
                            type="number"
                            id="savings-goal"
                            name="savingsGoal"
                            placeholder="Enter your savings goal"
                            value={savingsGoal}
                            onChange={e => setSavingsGoal(e.target.value)}
                        />
                    <p></p>
                    <label htmlFor="interest-rate">Interest Rate: </label>
                        <input
                            type="number"
                            id="interest-rate"
                            name="interestRate"
                            placeholder="Enter the interest rate (%)"
                            value={interestRate}
                            onChange={e => setInterestRate(e.target.value)}
                        />
                    <p>
                        <button type="submit">Calculate</button>
                    </p>
                </form>
        {monthsNeeded !== null && (
                <div>
                    <h2>Calculation Result</h2>
                    <p>
                        Time to reach your savings goal: <strong>{monthsNeeded}</strong> months
                    </p>
                </div>
            )}    
            </div>
        </HorizontalFlexBox>
        </div>
    );
}
