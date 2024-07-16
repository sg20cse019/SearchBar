import { useState } from "react"

const Hoc = (Comp)=>{
  return function WrappedComp(){
    let [Count,setCount]=useState(0)
    let incre = ()=>setCount(++Count)
    return(
      <div>
        <Comp fun={incre} data={Count}/>
      </div>
    )
  }
}
export default Hoc