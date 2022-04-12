import React from 'react';
//import ReactDOM from 'react-dom';
import Housedetail from './Directive';

 const FirstComponent=props=>{
    return(
        <>
        <h1>First Component</h1>
        <Housedetail society={"Mayur"}name={"Pinkvilla"}state={"Maharastra"}nfloor={10} area={2500} />
        
        </>
    )
}
export default FirstComponent
