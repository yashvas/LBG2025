export default function SavingsPage() {
    return (
        <div>
        <h1>Savings Page</h1>
        <p>Welcome to the savings page. Here you can manage your savings accounts.</p>
        <h2>Savings Tracker</h2>
        <label htmlFor="current-savings">Current Savings:</label>
        <input
            type="number"
            id="current-savings"
            name="currentSavings"
            placeholder="Enter your current savings"
        />

        <label htmlFor="savings-goal">Savings Goal:</label>
        <input
            type="number"
            id="savings-goal"
            name="savingsGoal"
            placeholder="Enter your savings goal"
        />
        <button type="submit">Calculate</button>
        </div>
<<<<<<< HEAD
    );
    }
    
=======
    )
    }
>>>>>>> 4a7e14cace7f954d4c45de0393d3cbdc6221c637
