import React from "react"
import formatElapsedTime from "../utility";

export default function ElapsedTime({historyArr}) {
    let elapsedTime = historyArr[0]; //seconds    
    return (
        <section id="elapsed-time-section">
            <h1>{formatElapsedTime(elapsedTime)}</h1>
        </section>
    )
}