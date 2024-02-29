import { useState, useRef } from "react";

export let UseState = () => {
    let [counter, setCounter] = useState(0);
    let data = useRef(null);
    console.log(data);

    let handleClick = () => {
        setCounter(counter + 1);
        let {current} = data
        console.log(current.innerHTML);
        
    };

    return (
        <>
            <button onClick={handleClick} className="btn btn-warning mt-2">Incrementar cuenta {counter}</button>
            <ul ref={data}>
                <li>Rome</li>
                <li>Paris</li>
                <li>Amsterdam</li>
                <li>Barcelona</li>
            </ul>
        </>
    );
};
