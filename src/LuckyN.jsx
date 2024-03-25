import './LuckyN.css'
import { useState } from 'react'
import { getRolls } from './utils'
import Dice from './Dice'
import './Button.css'
import Button from './Button'

export default function LuckyN({ title='Dice Game', numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice))//initializer function
    const isWinner = winCheck(dice)
    const roll = () => setDice(getRolls(numDice))
    return (
        <main className='LuckyN'>
            <h1>Lucky {title} {isWinner && 'You win!'}
            </h1>
            <Dice dice={dice} />
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button clickFunc={roll} label='Re-roll'/>
        </main>
    )
}