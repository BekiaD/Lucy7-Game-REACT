import { useState } from "react";
import Box from "./Box";

export default function BoxGrid({ numBoxes = 9 }) {
    const [boxes, setBoxes] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false])

    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false])
    }

    // const toggleBox = (idx) => {
    //     boxes.map((value, i) => {
    //         if (i === idx) {
    //             return !value
    //         } else {
    //             return value
    //         }
    //     })
    // }

    const toggleBox = (idx) => {
        setBoxes(oldBoxes => {
            oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value
                } else {
                    return value
                }
            })
        })
    }

    return (
        <div className="BoxGrid">
            {boxes.map((b, idx) => (
                <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}