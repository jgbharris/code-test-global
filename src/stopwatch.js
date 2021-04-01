import React, { useState, useEffect } from 'react';

export default function Stopwatch(props) {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const onStart = () => {
        setIsActive(!isActive);
    }
    const onReset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    const milliseconds = (seconds % 1).toFixed(3).substring(2)
    return (
        <div>
            <span type="text" id="display">{seconds}:{milliseconds}</span>
            <fieldset>
                <button id="btn_st" onClick={() => onStart()}>Start/Stop</button>
                <button disabled id="btn_lap">Lap</button>
                <button id="btn_reset" onClick={() => onReset()}>Reset</button>
            </fieldset>
        </div>
    );
}
