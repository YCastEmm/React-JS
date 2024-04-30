import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Form from "../components/Form";

function App() {
    const [count, setCount] = useState(0);

    let [values, setValues] = useState({text: ""})

    console.log(values);
    return (
        <>
            <Form>
                <form action="">
                    <input type="text" value={values.text} onChange={e => setValues({...values, text: e.target.value})} />
                    
                    <button type="submit">Submit</button>
                </form>
            </Form>
        </>
    );
}

export default App;
