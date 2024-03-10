import React from "react"

export default function Footer({appStatus}) {
    return (
        <footer className = {appStatus ? 'on-footer' : 'off-footer'}>
            <p>Created by Mahdi Balali <a href="https://twitter.com/codinggeek1984">@codinggeek1984</a></p>
        </footer>
    )
}