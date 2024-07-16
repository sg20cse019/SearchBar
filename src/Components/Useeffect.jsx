import React, { useEffect, useState } from "react";

let Useeffect = ()=>{
    let [Count,setCount] = useState('0')
    let [Count1,setCount1] = useState('0')
    useEffect(()=>{
        console.log('hi')
    },[Count])
    return(
        <div>
            <h1>check log</h1>
            <h1>use effect is applied:{Count}</h1>
            <button onClick={()=>{setCount(++Count)}}>Increased with effect</button>
            <h1>use effect is not applied:{Count1}</h1>
            <button onClick={()=>{setCount1(++Count1)}}>Increased without effect</button>
        </div>
    )
}
export default Useeffect