import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home=props=>{
    const navigate=useNavigate();
    return(
        <>
        <h1 style={{color:'purple',alighn:'centre'}}>Welcome to Tata Consultancy Services</h1>
        <button onClick={()=>navigate('/contactus')}>Go to Contact Us</button>
        </>
        

    )
}
export default Home;