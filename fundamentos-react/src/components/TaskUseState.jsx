import { useState } from "react";

export let Button = () => {
    let [count, setCount] = useState(0);
    let Cliqueo = () => {
        setCount(count + 15);
    };
    return <button onClick={() => Cliqueo()}>{`Sumar 15 = ${count}`}</button>;
};
