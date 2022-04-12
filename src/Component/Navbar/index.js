import React from 'react';
import {NavLink} from 'react-router-dom'
import '../Fetchdata/index.css'

const Navbar=props=>{
    return(
       
        <div className="ui menu" style={{backgroundcolor:'blue'}}>
            
           <NavLink className='header item' to='/'>Users</NavLink>
            <NavLink className='item' to='/addusers'>Add user</NavLink>
            
            
    </div>

    )
}
export default Navbar;