import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect,useState } from 'react'
import { Link,useLocation } from "react-router-dom";

const UserInfo = ( ) => {
  



 const location =  useLocation();


// location state 

const [locationState, setLocationState] = useState({selectUser:'',secreateKey:''})

const [userData, setUserData] = useState([{userName:'',secreateKey:''}]);
// console.log(userData)


const [userList, setUserList] = useState([{ username:'',secreate:''} ])

 
 



const users = locationState.selectUser;
const userkey = locationState.secreateKey;

// console.log(users)
 
 

    useEffect(()=>{
        console.log("location form home",location)
        if(location.state){
         
            setLocationState(location.state);
           

        }
    },[location])


    // add user 
const addUser =() =>{
     setUserList([...userList,{username:'',secreate:''} ])
 
} 
 


// remove user 

const removeUser =(index)=>{
     const list = [...userList]
     list.splice(index,1);
     setUserList(list)
}


// handleOnchange

const handleChange = (e,index)=>{
    const {name,value} = e.target
    const list = [...userList];
  
    list[index][name] = value;
    setUserData(list)
   
}



  return (
     <>
     {/* <h2>{locationState.selectUser}</h2>
     <h2>{locationState.secreateKey}</h2> */}

 
 
   
 

 <div className='container'>
     <h2>Add user and secreate key</h2>
     <h3> Please enter only {users} user and secreate key between 0 to  {userkey}</h3>
    
       
       {userList.map((user,index)=>{
           return(
            <>
             <div className='row' key={index}>
                   <div className='col '>
         <div className="mb-3">
    <label  htmlFor="exampleInputEmail1" className="form-label">User Name</label>
    <input type="text" className="form-control" id="username" name='username' aria-describedby="username" value={user.username}  onChange={(e)=>handleChange(e,index)} required/>
   
  </div>
         </div>
         <div className='col '>
         <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Secreate Key</label>
    <input type="password" className="form-control" id="secreate" name='secreate' value={user.secreate} onChange={(e)=>handleChange(e,index)} required />
  </div>
         </div>
         <div className='col mb-3  ' style={{"marginTop":"32px"}} >
             {userList.length -1 === index && userList.length < locationState.selectUser &&    (  <button type="submit" className="btn btn-primary" onClick={addUser}>Add user</button>)}

             {/* {userList.length > 1 && ( <button type="submit" className="btn btn-danger mx-2" onClick={removeUser} >Remove user</button>)}

       */}
        
         </div>
         
             {userList.length -1 === index && userList.length <= locationState.selectUser && (
                  <div>

                  <Link to='/startgame'  state={ {users,userkey,userList,userData}}> <button type="submit" className="btn btn-primary mt-3" >Start Game</button></Link>
              </div>
             )}
         </div>
        
            </>
           )
       })}
        
  
        
     
 </div>
  
     
     
     </>
  )
}

export default UserInfo