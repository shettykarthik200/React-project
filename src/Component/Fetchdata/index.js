import React,{useEffect, useState} from 'react';
//import ReactDOM from 'react-dom';
import './index.css'

const Fetchdata=props=>{
    const[append,setAppend]=useState(0);
    const[decrease,setDecrese]=useState(120);
    const Decresenum=()=>{
        setDecrese(num=>num-1);
    }
    const appendnumber=()=>{
        setAppend(num=>num+1);
    }
    useEffect(()=>{

        console.log("Fetchdata componenet is about to be rendered!")
    },[decrease]);
    return(
        <>
        <h1 class="first" >Fetch data</h1>
        <p >Append number current state is - {append}</p>
        <button onClick={appendnumber}>increase</button>
        <p>Decrease number current state is - {decrease}</p>
        <button onClick={Decresenum} > Decrease</button>
        
        
        </>
    )
};
export default Fetchdata;


