import "./App.css";
import Card from "./components/Card";

let title = "Improve your front-end skills by building projects"
let texto = "Scan the QR code to visit Frontend Mentor and take your coiding skills to the next level."

function App() {

    return <>
                <Card texto={texto} titulo={title}></Card>
            </>;
}

export default App;
