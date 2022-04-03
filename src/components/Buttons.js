import React, { Component } from 'react'
 

export default class Buttons extends Component {
    

    constructor(){
        super();
        this.state = {
            disable : [],
            user:"suraj",
            win:"",
           

        }
        
    }

   
   
    

   


    handleClick = i =>{
        this.setState(currentState => ({
            disable: [...currentState.disable, i],
           
        }));
        // alert(i+1)

        const user1 = {"name":"suraj","key":'20'};
        const user2 = {"name":"suraj","key":'25'};

         
        if((i+1)== user1.key){
            // alert(`${this.state.user} is win`)
            this.setState({
                win:this.state.user,
            })

        }else if(i+1 == user2.key){
            // alert(`${this.state.user} is win`)
            this.setState({
                win:this.state.user,
            })
        }

        let val =  this.state.user;

        if(val === "suraj"){
            this.setState({
                user:"pavan",
            })
        }else{
            this.setState({
                user:'suraj',
            })
        }

         

         

        
     

    
    }


    
    
    render(){
         

        return(
            <>
            <div className='App'>
            <Button onClick={this.handleClick}  disable={this.state.disable} />
           <h2> user : {this.state.user} </h2> 
           <h1> winner:  {this.state.win}</h1> 
           
            </div>
            </>
        )
    }
 



}

const n = 50;

const Button = (props) =>{
        const buttons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,920,93,94,95,96,97,98,99,100];
        return(
            <div>
                {
                    buttons.slice(0,n).map((button,i)=>{
                        return(
                            <>
                            <button key={button} disabled={props.disable.includes(i)} style={{"backgroundColor":"#89deea","padding":'14px',"borderRadius":'33px',"margin":'10px'}} onClick={()=>props.onClick(i)} >{button}</button>
                            </>
                        )
                    })
                }
            </div>
        )
}
