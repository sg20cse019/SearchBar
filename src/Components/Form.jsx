import React, { useRef } from "react";

let Form = ()=>{
    let xyz = useRef();
    return(
        <div>
            <form>
                <input type="text" placeholder="UserName" ref={xyz}/>
                <input type="text" placeholder="UserPlace"/>
                <button onClick={()=>{console.log()}} >Submit</button>
            </form>
        </div>
    )
}

export default Form