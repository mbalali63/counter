import React from "react"


export default function Buttons({appStatus, startTimer, stopTimer, setTime}) {
    function onStart() {
        if (appStatus) {
            return;
        }
        startTimer();
    }
    function onStop() {
        if (!appStatus) {
            return;
        }
        stopTimer();
    }
    function onSet(){
        if (!appStatus) {
            return;
        }
        setTime();
    }
    return (
        <section id="buttons-section">
            <button onClick={onStart}>Start</button>
            <button onClick={onSet}>Set</button>
            <button onClick={onStop}>Stop</button>
        </section>
    )
}