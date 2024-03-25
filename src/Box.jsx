import './Box.css'
import { useState } from 'react'

export default function Box(isActive, toggle) {
    // const [isActive, setIsActive] = useState(false)

    // const toggleIsActive = () => setIsActive(!isActive)

    return <div onClick={toggle} 
                className='Box' // onClick={toggleIsActive}
                style={{ backgroundColor: isActive ? 'red' : 'black' }}></div>
}