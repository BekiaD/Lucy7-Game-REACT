import LuckyN from './LuckyN'
import { sum } from './utils'
import Dice from './Dice'
import Die from './Die'
import Box from './Box'
import BoxGrid from './BoxGrid'

function lessThan4(dice) {
  return sum(dice) < 4
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0])
}//win if they are equal

function App() {

  return (
    <div>
      {/* <LuckyN winCheck={lessThan4} title='Roll less than 4' />
      <LuckyN winCheck={allSameValue} numDice={3} title='Roll the same' /> */}

      <BoxGrid />
    
    </div>
  )
}

export default App
