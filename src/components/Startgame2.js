import { render } from '@testing-library/react';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React,{useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom';
import './startgame.css'

const StartGame = () => {

    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,920,93,94,95,96,97,98,99,100];

 

    
const location =  useLocation();

const [locationState, setLocationState] = useState({users:'',userkey:'' });
const [finaluserarray, setFinaluserarray] = useState([]);





const finalUsers = locationState.users;
const finaluserkey = locationState.userkey;


const finaluserlist = finaluserarray;

//  console.log(finalUser)
//  console.log(finaluserkey)
//  console.log(finaluserlist)



        useEffect(()=>{
            console.log("location form home",location )
            if(location.state){
            
                setLocationState(location.state);
                setFinaluserarray(location.state.userList)
                
                
                // console.log(locationState)
            }
        },[location])


        const [user, setUser] = useState("suraj")

const handleClickbtn = ()=>{
        const value = user;
        if(value === "suraj"){
            setUser("pavan");
        }else{
            setUser("suraj");
        }
}

 


 


  return (
      <>
    <div>StartGame</div>
 
 {/* loop according to secrate key 
  */}
  {/* {(()=>{
          let posts =[];
          for(let i = 1; i <= finaluserkey; i++){
            posts.push(<button style={{"backgroundColor":"#89deea","padding":'14px',"borderRadius":'33px',"margin":'10px'}} onClick={handleClickbtn} value={i}   key={i}   >{i}</button>)
            // console.log(i)
            
          }
          return posts;
      })()}    */}


 
      
  

     
   
   <div className='row fixed-bottom my-3 ml-4' style={{"marginLeft":"1100px"}}>
       <div className='col'></div>
       <div className='col'>
           <Link to="/" ><button className='btn btn-secondary'>Reset Game</button></Link>
       </div>
       <div className='col'></div>
       
   </div>

 <hr/>
   <div className='row'>
       <div className='col'>
           {
               finaluserlist.map((e)=>{
                   return(
                       <>

                    <div className='row'>
                        <div className='col'>
                            <h3>User :- </h3>
                        </div>
                        <div className='col' style={{"border":'1px solid black', "margin":'2px'}}>
                        <h2> {e.username}</h2>
                        </div>
                        <div className='col'>
                         
                        </div>
                    </div>


                    
                    </>
                   )
                  
               })
           }
         {  console.log(finaluserlist)}

       </div>
       <div className='col'>

        </div>
        <div className='col'>

        </div>
   </div>

</>
  )
}

export default  



{/* <div>

{finaluserlist.map((e)=>{
        return(
            <>
            <h1>{e.username} {e.secreate} </h1>
           
            </>
            
             
        )
    })}

{finalUsers} {finaluserkey}
    </div> */}