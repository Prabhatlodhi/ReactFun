import { useState } from "react";
import { dummyData } from "../constants/Constant";

const AdvHooks = () => {

  const [userDetails, setUserDetails] = useState(dummyData);

  const RemoveUser = (id)=>{
     let newUserDetails = userDetails.filter((userDetail) => 
        userDetail.id !== id);
     setUserDetails(newUserDetails);
  };

  const RemoveAll = ()=>{
    console.log("RemoveAll");
    setUserDetails([]);
  }

  return (
    <div>
      <h4>User Details</h4>
      {userDetails.map((userDetail) => {
        const { id, name, age } = userDetail;
        return (
          <div key={id} style={{border:"2px solid red", width:"190px"}} >
            <h4>Name -  {name} </h4>
            <h6>Age -  {age} </h6>
            <button  onClick={ ()=>RemoveUser(id)} >Remove User</button>
          </div>
        );
      })}
      <button onClick={RemoveAll} >REMOVE ALL USER</button>
    </div>
  );
};

export default AdvHooks;
