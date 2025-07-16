import { Main } from "../../components/styled/Main.styled";

export default function InsurancePage() {
    return (
        <Main>
            <h1>Insurance Page</h1>
            <p>Welcome to the insurance page. Here you can:</p>
            <ul>
                <li>Check policy details</li>
                <li>File a claim</li>
                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact support</a></li>
            </ul>
            <p>Thank you for choosing our insurance services!</p>
            <p>We have 4 different types of insurance available</p>
            <ul>
                <li>life insurance</li>
                <li>home insurance</li>
                <li>pet insurance</li>
                <li>car insurance</li>
            </ul>
        </Main>
    );
}    