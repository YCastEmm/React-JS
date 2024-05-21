import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <form action="" className="d-flex justify-center">
                <h2>Contact Us</h2>
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" />

                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName"/>

                <label htmlFor="firstName">Email Adress</label>
                <input type="email" />

                <label htmlFor="queryType">Query type</label>
                <select name="queryType" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <label htmlFor="message">Message</label>
                <textarea name="message" id=""></textarea>

                <label htmlFor="firstName">I consent to being contacted by the team</label>
                <input type="checkbox" />
                <button>Submit</button>
            </form>
        </>
    );
}

export default App;
