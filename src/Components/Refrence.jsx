import { useRef } from 'react'


const Refrence = () => {
    let xyz = useRef()
  return (
    <div>
      <p ref={xyz}>para</p>
      <button onClick={()=>{xyz.current.style.backgroundColor="Red"}}>Click

      </button>
    </div>
  )
}

export default Refrence
