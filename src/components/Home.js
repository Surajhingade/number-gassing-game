import React, { useState } from "react";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectUser, setSelectUser] = useState();
  const [secreateKey, setSecreateKey] = useState();
  
  



 
 
  

  return (
    <>
      <h1>Welcome to Number game</h1>

      <div className="row px-4 mx-4 my-3 ">
        <div className="col-md-3"></div>

        <div className="col-md-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectUser}
            onChange={(e) => setSelectUser(e.target.value)}
          >
            <option selected>Select User</option>

            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
        </div>


        

        <div className="col-md-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={secreateKey}
            onChange={(e) => setSecreateKey(e.target.value)}
          >
            <option selected>secreate key upto</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="col-md-3"></div>

        {/* column 3 */}
      </div>



      <div className="container">
        {/* <UserInfo secreate={secreateKey} user={selectUser}/> */}

        {/* <button type="button" className="btn btn-secondary" onClick={handleClick}>
          click
        </button> */}

        <Link to='/user' state={{selectUser , secreateKey}}> <button className="btn btn-secondary"> Start</button> </Link>
         
     
      </div>


 
 

     
    </>
  );
};

export default Home;
