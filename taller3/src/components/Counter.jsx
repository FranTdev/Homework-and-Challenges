import React, { useState } from "react";

const Counter = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleSubstract = () => {
        setCounter(counter - 1)
    };

    const handleReset = () => {
        setCounter(value);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <span>{counter}</span>
            <div>
                <button onClick={handleSubstract}>Substract</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter

