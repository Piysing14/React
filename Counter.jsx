import { useState } from "react"

function Counter(){
    let[count,setCount]=useState(0)
    function handlePlus(){
        setCount(count+1)
    }

    function handleMinus(){


        setCount(count-1)
    }
    return(
        <>
        <p>{count}</p>
        <button onClick={handlePlus}>+1</button>
        <button onClick={handleMinus}>-1</button>
        </>
    )
}

export default Counter