import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contactus=(props)=>{
    const navigate =useNavigate();
    return(<>
        <h1>This is Contactus  component</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
        </>
    )
}
export default Contactus;