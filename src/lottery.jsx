import { useState } from "react"
import "./lottery.css"
import { genTicket, sum } from "./helper"
import Ticket from "./ticket"

export default function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n))
    let isWinning = winCondition(ticket);

    let buyTciket = () => {
        setTicket(genTicket(n))
    }
    return(
        
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTciket}>Buy you ticket</button>
            <h3>{isWinning && "Congratulation you won the lottery"}</h3>
        </div>
    )
}