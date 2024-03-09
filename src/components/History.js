import React from "react"

export default function History() {
    const historyArr = ['00:00:00','01:00:00','02:00:00']
    const printHistory = (Arr0) => {
        const newList =  Arr0.map( (item,index) => {
            return <li key = {index}>{item}</li>
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