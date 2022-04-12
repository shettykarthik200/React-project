//'../../Fetchdata/index.css'
import axios from 'axios';
import React,{useState} from 'react'
//import { useNavigate } from 'react-router-dom';
import '../Fetchdata/index.css'
//import { useEffect } from 'react';



const Login=props=>
{ 
    const [name,setName]=useState({value:'',error:''});
    const [username,setUsername]=useState({value:'',error:''});
    const [email,setEmail]=useState({value:'',error:''});
    //const [submiterror,setSubmiterror]=useState('');
    const[submit,setSubmit]=useState({success:'',error:''});
    

   
    


    

     
    const handlechange=(e)=>{
        switch(e.target.name){
            case 'name':
                if(e.target.value)
                { setName({value:e.target.value,errror:''});
                 }
                else{
                    setName({value:'',error:'Please enter Name'})
                }
                break;
            case 'username':
                if(e.target.value){
                    setUsername({value:e.target.value,error:''})
                }
                else{
                    setUsername({value:'',error:'Please enter Username'})
                }
               
                break;
            case 'email':
                if(e.target.value)
                {
                    const regex=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                    if(regex.test(e.target.value))
                    {
                        setEmail({value:e.target.value,error:''})
                    }
                    else{
                        setEmail({value:'',error:'Please enter email in valid format'})
                    }

                }
                else{
                    setEmail({value:'',error:'Please Enter email'})
                }
                break;
            default:
                console.log('Default')

        }
        
        
    }

    const handleclick=(e)=>{
        e.preventDefault()
        if(name.value && !name.error && username.value && !username.error && email.value && !email.error)
        {
            setSubmit({success:'Submitted Succesfully!',error:''});
            axios.post('https://jsonplaceholder.typicode.com/users',{
                user:{
                    name:name.value,
                    username:username.value,
                    email:email.value
                }
            }).then(res=>console.log(res.data));
            
            
        }
        else{
            setSubmit({success:'',error:'Please fill all the fields properly'})
        }


        
    }
    
    
    return(
    <>
    <div className="formcontainer">
        <div className="formcontent">
            <form>
                <div>
                <input type='text' className='forminput' name='name' placeholder='Name'onChange={handlechange}/>
              {name.error &&  <p style={{color:'red'}}>{name.error}</p>}
                </div>
               <div>
                   <input type='text' className='forminput' name='username' placeholder='Username'onChange={handlechange}/>
                   {username.error && <p style={{color:'red'}}>{username.error}</p>}
                   </div>
                <div>
                    <input type='text'name='email' className='forminput' placeholder='Email'onBlur={handlechange}/>
                  {email.error &&  <p style={{color:'red'}}>{email.error}</p>}

                </div>
                <div>
                <button  type='submit'  className='ui primary button' onClick={handleclick} >submit</button>
                { submit.error &&<p style={{color:'red'}}>{submit.error}</p>}
                { submit.success &&<p className='succestext'>{submit.success}</p>}
            

                </div>
                <div>
        
            </div>
            
            </form>
            
        </div>
    </div>
    
    </>
)
}
export default Login;
