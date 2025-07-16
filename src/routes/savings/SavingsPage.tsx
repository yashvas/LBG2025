import React from "react";
import ToDoList from "../../components/toDoList/ToDoList";
import { HorizontalFlexBox } from "../../components/horizontalFlexBox/HorizontalFlexBox.styled";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function SavingsPage() {
  const [currentSavings, setCurrentSavings] = React.useState("");
  const [monthlyContribution, setMonthlyContribution] = React.useState("");
  const [savingsGoal, setSavingsGoal] = React.useState("");
  const [interestRate, setInterestRate] = React.useState("");
  const [objectives, setObjectives] = React.useState<string[]>([]);
  

  const [monthsNeeded, setMonthsNeeded] = React.useState<number | null>(null);

    function calculateMonthsToGoal(
        current: number,
        monthlyContribution: number,
        goal: number,
        rate: number,
    ): number | null {
        if (rate <= 0 || current <= 0 || goal <= current) {
            return null; // Invalid input or goal already reached
        }
        let months = 0;
        let savings = current;
        while (savings < goal && months < 1000) { // Prevent infinite loop
            savings += (savings * (rate / 100)/12) + monthlyContribution;
            months++;
        }
        return savings >= goal ? months : null;
    }

    function calcProg(current: number, goal: number): number {
        if (goal <= 0) return 0;
        return (current / goal) * 100;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const current = parseFloat(currentSavings);
        const monthlyContributionValue = parseFloat(monthlyContribution);
        const goalValue = parseFloat(savingsGoal);
        const rateValue = parseFloat(interestRate);

        if (
            isNaN(current) ||
            isNaN(monthlyContributionValue) ||
            isNaN(goalValue) ||
            isNaN(rateValue) ||
            currentSavings === '' ||
            monthlyContribution === '' ||
            savingsGoal === '' ||
            interestRate === ''
        ) {
            setMonthsNeeded(null);
            return;
        }

        const months = calculateMonthsToGoal(current, monthlyContributionValue, goalValue, rateValue);
        setMonthsNeeded(months);

        // const progressPercentage = calcProg(current, goalValue);
    };

    return (
        <div>
            <h1>Savings Page</h1>
            
            <p>Welcome to the savings page. Here you can manage your savings accounts.</p>
            <HorizontalFlexBox gap={80}>
                <div>
                    <h2>To-Do List</h2>
                    <ToDoList
                        objectives={objectives}
                        setObjectives={setObjectives}
                    />
                </div>

                <div>
                <h2>Savings Tracker</h2>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="current-savings">Current Savings:</label>
                    <input
                        type="number"
                        id="current-savings"
                        name="currentSavings"
                        placeholder="Enter your current savings"
                        value={currentSavings}
                        onChange={e => setCurrentSavings(e.target.value)}
                    />
                    <p></p>
                    <label htmlFor="monthly-contribution">Monthly Contribution:</label>
                    <input
                        type="number"
                        id="monthly-contribution"
                        name="monthlyContribution"
                        placeholder="Enter your monthly contribution"
                        value={monthlyContribution}
                        onChange={e => setMonthlyContribution(e.target.value)}
                    />
                    <p></p>
                    <label htmlFor="savings-goal">Savings Goal:</label>
                        <input
                            type="number"
                            id="savings-goal"
                            name="savingsGoal"
                            placeholder="Enter your savings goal"
                            value={savingsGoal}
                            onChange={e => setSavingsGoal(e.target.value)}
                        />
                    <p></p>
                    <label htmlFor="interest-rate">Interest Rate:</label>
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
        {monthsNeeded !== null && (() => {
            const progressPercentage = calcProg(
                parseFloat(currentSavings),
                parseFloat(savingsGoal)
            );
            return (
                <div>
                    <h2>Calculation Result</h2>
                    <p>
                        Time to reach your savings goal: <strong>{monthsNeeded}</strong> months
                    </p>
                    <ProgressBar progress={progressPercentage}/>
                </div>
            );
        })()}    
            </div>
        </HorizontalFlexBox>
        </div>
    );
}
