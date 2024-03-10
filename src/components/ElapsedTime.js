import React from "react"
import formatElapsedTime from "../utility";

export default function ElapsedTime({historyArr}) {
    let elapsedTime = historyArr[historyArr.length - 1]; //seconds    
    return (
        <section id="elapsed-time-section">
            <h1>{formatElapsedTime(elapsedTime)}</h1>
        </section>
    )
}