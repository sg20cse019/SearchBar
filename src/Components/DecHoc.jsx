import { useState } from "react";

let DecHoc = (Comp)=>{
    let WrappedComp=()=>{
        let [Count,setCount] = useState(100)
        let dec = ()=>{setCount(--Count)}
        return(
            <div>
               <Comp Count={Count} Dec={dec}/>
            </div>
        )
    }
    return WrappedComp;
}

export default DecHoc