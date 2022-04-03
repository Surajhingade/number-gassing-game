import React,{useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom';



const Startgame = () => {

    const location =  useLocation();
    
    const [locationState, setLocationState] = useState({users:'',userkey:'' });
    const [finaluserarray, setFinaluserarray] = useState([]);
    const finaluserlist = finaluserarray;

 
    // console.log(finaluserarray[0].secreate);
     

    // console.log(finaluserarray[0].username );

    // const user1 = finaluserarray[0];
    // const user2 = finaluserarray[1];

    // console.log(user1)
    // console.log(user2)


    const [disable, setDisable] = useState([]);
    const [user, setUser] = useState("user1");
    const [winner, setWinner] = useState("");
    const [key, setKey] = useState();
    const [show, setShow] = useState(false);
 
  


   


    const finalUsers = locationState.users;
    const finaluserkey = locationState.userkey;


   


    //  console.log(finalUser)
    //  console.log(finaluserkey)
    //  console.log(finaluserlist)
    //  console.log(finaluserlist[0].username);
    //  console.log(finaluserlist[1].username);


    useEffect(()=>{
        console.log("location form home",location )
        if(location.state){
        
            setLocationState(location.state);
            setFinaluserarray(location.state.userList)
            
            
            // console.log(locationState)
        }
    },[location,finaluserlist,finaluserarray])


    const handleClick =(i) => {
       
        setDisable([...disable,i])

        
        // const user1 = {"name":"suraj","key":'20'};
        // const user2 = {"name":"suraj","key":'25'};
        // finaluserarray[0].secreate

        

       
        // let val =  user;

        // if(val === "suraj"){
            
        //     setUser("pavan")
        // }else{
        //     setUser("suraj")
        // }

        // const val =  user.username;

        // if(val === finaluserlist[0].username){
            
        //     setUser(finaluserlist[1].username)
        // }else{
        //     setUser(finaluserlist[0].username)
        // }

        if(finalUsers == 2){
            // console.log(finalUsers)
            let val =  user;

            if(val === "user1"){
                
                setUser("user2")
             
            }else{
                setUser("user1")
              
            }
          
            
        }else if(finalUsers == 3){
            // console.log(finalUsers);
            let val =  user;

            if(val === "user1"){
                
                setUser("user2")
              
            }else if(val === "user2"){
                setUser('user3')
                
            }else{
                setUser("user1")
                 
            }
            
        }else if(finalUsers === 4){
            // console.log(finalUsers);
            let val =  user;

            if(val === "user1"){
                
                setUser("user2")
            
            }else if(val ==="user2"){
                setUser('user3')
                
            } else if(val === "user3"){
                setUser('user4')
               
            }else{
                setUser("user1")
              
            }
            
        }else{
            if(finalUsers == 5){
                // console.log(finalUsers);
                let val =  user;

                if(val === "user1"){
                    
                    setUser("user2")
                   
                }else if(val === "user2"){
                    setUser('user3')
                   
                } else if(val === "user3"){
                    setUser('user4')
                   
                } else if(val === "user4"){
                    setUser('user5')
            
                }
                else{
                    setUser("user1")
                    
                }
                
            }
        }


        if((i+1)== finaluserarray[0].secreate){
            // alert(`${this.state.user} is win`)
       

               
                setWinner(user)
                setUser("")
                
                setKey(finaluserarray[0].secreate)
           
           

        }else if(i+1 == finaluserarray[1].secreate){
            // alert(`${this.state.user} is win`)
            
           
                setWinner(user)
                setUser("")
                
                setKey(finaluserarray[1].secreate)
                
                 
                
           
        }else if(i+1 == finaluserarray[2].secreate){
           
            setWinner(user)
            setUser("")
           
            setKey(finaluserarray[2].secreate)
            
             
        }else if(i+1 == finaluserarray[3].secreate){
           
            setWinner(user)
            setUser("")
         
            setKey(finaluserarray[3].secreate)
           
          
        }else {
            if(i+1 == finaluserarray[4].secreate){
                
                setWinner(user)
                setUser("")
              
                setKey(finaluserarray[4].secreate)
               
              
            }
        }
        
    }
   


    
const n = finaluserkey;

const Button = (props) =>{
        const buttons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,920,93,94,95,96,97,98,99,100];
        return(
            <div>
                {
                    buttons.slice(0,n).map((button,i)=>{
                        return(
                            <>
                            <button key={button}  disabled={props.disable.includes(i)} style={{"backgroundColor":"#89deea","padding":'14px',"borderRadius":'33px',"margin":'10px'}} onClick={()=>props.onClick(i)} >{button}</button>
                            </>
                        )
                    })
                }
            </div>
        )
}
   

  return (
    <>
    
    <>
            <div className='App'>
            <Button onClick={handleClick} disable={disable}   />
            <h2> Active user : {user } </h2> 
           <h1> winner:  {winner}</h1>           
            </div>




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
               finaluserlist.map((e,i)=>{
                   return(
                       <>

                    <div className='row'>
                        <div className='col'>
                            <h3>User{i+1} :- </h3>
                        </div>
                        <div className='col' style={{"border":'1px solid black', "margin":'2px'}}>
                        <h2> {e.username}</h2>
                        {/* <h2> {e.secreate}</h2> */}
                        </div>
                        <div className='col'>
                         
                        </div>
                    </div>


                    
                    </>
                   )
                  
               })
           }
         {/* {  console.log(finaluserlist[0].secreate)} */}

       </div>
       <div className='col'>

           <div>
               {/* after click show secrate key of user  */}
               <h3>See secrate key</h3>
                    <button className='btn btn-secondary mx-2' onClick={()=>setShow(true)}>show</button>
                    <button className='btn btn-secondary mx-2' onClick={()=>setShow(false)}>hide</button>
              
               {
                   
                    show?<div>{
                        finaluserlist.map((e,i)=>{
                            return(
                                <>
                                <h3>user{i+1} : {e.secreate}</h3>
                                </>
                            )
                        })
                        }</div>:null
                        
                   }
                 
                  
               
           </div>

        </div>
        <div className='col'>
          Secreate key   is crossed by {winner} and secreate key  is  : {key}
        </div>
   </div>




 
            </>
    
    </>
  )
}






export default Startgame