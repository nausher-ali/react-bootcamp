import React, { useEffect, useState} from "react";
import axios from 'axios';

function App () {
    const [count, setCount] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            //call api using fetch
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // const data = await response.json();
    
        // setCount(data)
        
        // console.log(data);

             //another and best way to call api using fetch data

             //fetch('https://jsonplaceholder.typicode.com/users')
             //.then(res => res.json())
             //.then(data => setcount(data))
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setCount(res.data))
        }
        fetchData()
    }, [])
    return count.map( counts => <h1 key={counts.id}>{counts.name}</h1>)
}

export default App;