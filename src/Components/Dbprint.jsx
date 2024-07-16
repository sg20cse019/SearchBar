// import React from "react";
// import DB from "./DB.json";

// const Dbprint = () => {
//     return (
//         <div>
//             <h1>fetch</h1>
//             {DB.todos.map((element) => (
//                 <h1>{element.todo}</h1>
//             ))}

//         </div>
//     );
// };

// export default Dbprint;

import React, { useState } from "react";
import DB from "./DB.json";
import "./global.css"
import style from "./amodule.css";

const Dbprint = () => {
    const [randomTodo, setRandomTodo] = useState(null);

    const generateRandomTodo = () => {
        const randomIndex = Math.floor(Math.random() * DB.todos.length);
        const randomTodoElement = DB.todos[randomIndex];
        setRandomTodo(randomTodoElement);
    };

    return (
        <div>
            <h1 style={{color:"pink",background:"black"}}>fetch</h1>
            <button onClick={generateRandomTodo}>Generate Random Todo</button>
             <h1 id="{style.nav}">Random Todo: {randomTodo.todo}</h1>
        </div>
    );
};

export default Dbprint;

// import React,{useState} from "react";
// import DB from "./DB.json";
// const Dbprint = () => {
//     const DisplayData = () =>{
//         let [index , setIndex] = useState(29)

//         let generateValue = ()=>{
//             if (index>=29) {
//                 setIndex(0)
//             }else{
//                 setIndex(index+1)
//             }
//             console.log(index)
//         }
//   return (
//     <div>
//       <h1>fetch {DB[index].todo}</h1>

//     </div>
//   );
// }
// };

// export default Dbprint;
