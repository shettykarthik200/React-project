import React from 'react';
import ReactDOM from 'react-dom';

export const Housedetail=props=>{
    const{
        society,
        name,
        state,
        nfloor,
        area
    }= props;

    return(
        <>
        <h1>{props.society}</h1>
        <table>
            <thead>
                <tr>
                    <th><h3>House name</h3></th>
                    
                    <th><h3>State</h3></th>
                    
                    <th><h3>Number of floor</h3></th>
                    
                    <th><h3>Ground area</h3></th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <td>{props.name}</td>
            
                    <td>{props.state}</td>
                    
                    <td>{props.nfloor}</td>
                     
                    <td>{props.area}</td>

            </tr></tbody>
        </table>
        </>
    )
    
}
export default Housedetail