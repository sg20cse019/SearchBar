import axios from "axios";
import { useState } from "react";
import React from 'react';

const Practice = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState('');

    const fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then((res) => setData(res.data))
            .catch(()=>{setData(false)})
            // .catch((err) => console.error(err));
    };

    return (
        <div>
            <input type="number" value={userId} onChange={(e)=>setUserId(e.target.value)} /> 
            <button onClick={fetchData}>getData</button>
            {data.map((post) => (
                <div>
                    <h1>{post.userId}</h1>
                    <h1>{post.title}</h1>
                </div>
            ))}
            <h1>{data?data.title:"no DAta FOund"}</h1>
        </div>
    );
};

export default Practice;
