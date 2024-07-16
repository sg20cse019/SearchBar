import DecHOC from "./DecHoc"

let DecCallback = (props)=>{
    return(
        <>
            <h1>{props.Count}</h1>
            <button onMouseOver={props.Dec}>DECre</button>
        </>
    )
}
export default DecHOC(DecCallback)