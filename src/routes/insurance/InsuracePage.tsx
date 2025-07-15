export default function InsurancePage() {
    return (
        <div>
            <h1>Insurance Page</h1>
            <p>Welcome to the insurance page. Here you can manage your insurance policies.</p>
            <ul>
                <li>View your current policies</li>
                <li>File a claim</li>
                <li>Contact support</li>
                <li>Update your information</li>
            </ul>
            <p>For more information, please contact our support team.</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <button type="submit">Submit</button>
            <p>Thank you for choosing our insurance services!</p>
        </div>
    );
}   