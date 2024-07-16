import { useState } from "react";

const States =()=>{
    let [ABC , setABC] = useState("hi")
    let x = ()=>{setABC("hello")}
    return(
        <div>
            <h1>{ABC}
            <button onClick={x}>greet</button></h1>
        </div>
    )
}
export default States
