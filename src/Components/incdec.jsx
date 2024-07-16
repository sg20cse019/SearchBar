import { useState } from "react";

const IncState = ()=>{
    // let [ABC,setABC]=useState(0)
    // let x =()=>{setABC(++ABC)}
    // let y =()=>{setABC(--ABC)}
    // let z =()=>{setABC(0)}
    // return(
    //     <div>
    //         <h1>{ABC}
    //         <button onClick={x}>inc</button>
    //         <button onClick={y}>dec</button>
    //         <button onClick={z}>reset</button>
    //         </h1>
    //     </div>
    // )
    let [arr,setarr] = useState(["hi","this","is","a","array"])
    return(
        <div>
            {arr.map((elem)=>{
                    return(
                        <h1>{elem}</h1>
                    )
                })
            }
        </div>
    )
}

export default IncState