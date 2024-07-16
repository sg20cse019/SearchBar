import axios from "axios";
import { useState } from "react";
import React from 'react';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const searchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                    setData(res.data); 
                    const filtered = res.data.filter(post => post.title.toLowerCase().startsWith(userId.toLowerCase()));
                    setFilteredData(filtered);})
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} /> 
            <button onClick={searchData}>Search-Data</button>
            {filteredData.map((user) => (
                <div key={user.id}>
                    <h1>{user.title}</h1>
                </div>
            ))}
        </div>
    );
};

export default SearchBar;
