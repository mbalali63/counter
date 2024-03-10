import React from "react"
import formatElapsedTime from "../utility"

export default function History({historyArr}) {
    const printHistory = (Arr0) => {
        const newList =  Arr0.map( (item,index) => {
            if (index !== 0){
                return <li key = {index}>{formatElapsedTime(item)}</li>
            }
            else {
                return null;
            }
        })
        return newList
    }
    return (
        <section id="history-section">
            <ul>
                {printHistory(historyArr)}
            </ul>
        </section>
    )    
}