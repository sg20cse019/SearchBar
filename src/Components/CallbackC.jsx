import Hoc from "./Hoc";
let Callback = (props)=>{
  console.log(props);
  return(
    <div>
<h1>{props.data}</h1>
<button onMouseOver={props.fun}>IncRE</button>
    </div>
  )
} 
export default Hoc(Callback)