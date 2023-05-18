import axios from 'axios';
import React from 'react';

async function getData(){
    let data= await axios.get('http://localhost:3001/data');
    return data;
}
function Content(){
    const [data, setData]= React.useState();
    let dataN = getData();
    console.log(data);
    return(
    <div>
        <h1>Data</h1>
        <h2>{data.name}</h2>
        <h2>{data.title}</h2>
    </div>);
}
export default Content;