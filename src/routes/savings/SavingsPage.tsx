import React from 'react';

export default function SavingsPage() {
    const [currentSavings, setCurrentSavings] = React.useState('');
    const [savingsGoal, setSavingsGoal] = React.useState('');
    const [interestRate, setInterestRate] = React.useState('');

    // Removed duplicate handleSubmit

    const [monthsNeeded, setMonthsNeeded] = React.useState<number | null>(null);

    function calculateMonthsToGoal(
        current: number,
        goal: number,
        rate: number
    ): number | null {
        if (rate <= 0 || current >= goal) return null;
        // Monthly compound interest formula:
        // FV = PV * (1 + r)^n
        // n = log(FV/PV) / log(1 + r)
        const monthlyRate = rate / 100 / 12;
        const n = Math.log(goal / current) / Math.log(1 + monthlyRate);
        return n > 0 ? Math.ceil(n) : null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const current = parseFloat(currentSavings);
        const goal = parseFloat(savingsGoal);
        const rate = parseFloat(interestRate);
        const months = calculateMonthsToGoal(current, goal, rate);
        setMonthsNeeded(months);
    };

    return (
        <div>
            <h1>Savings Page</h1>
            <p>Welcome to the savings page. Here you can manage your savings accounts.</p>
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
                <p></p>
                <button type="submit">Calculate</button>
                <p></p>
            </form>
            {monthsNeeded !== null && (
                <>
                    <p>
                        Time to reach your savings goal: <strong>{monthsNeeded}</strong> months
                    </p>
                    <p>{monthsNeeded}</p>
                </>
            )}
        </div>
    )
    }

