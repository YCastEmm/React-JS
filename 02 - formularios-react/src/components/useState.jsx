import { useState, useRef } from "react";

export let UseState = () => {
    let [counter, setCounter] = useState(0);
    let data = useRef(null);

    let handleClick = () => {
        setCounter(counter + 1);
        let {current} = data
        console.log(current.innerHTML);
    };


    return (
        <div className="border p-2 rounded my-2 mr-2 ml-0">
            <ul ref={data}>
                <li>Sumo 5: {counter + 5}</li>
                <li>Sumo 10: {counter + 10}</li>
                <li>Sumo 20: {counter + 20}</li>
                <li>Sumo 40: {counter + 40}</li>
            </ul>
            <button onClick={handleClick} className="btn btn-warning mt-2">Incrementar cuenta {counter}</button>
        </div>
    );
};
