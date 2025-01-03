import React from "react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const Profile = () => {
  const onlinecheck = useOnline();
  if (!onlinecheck)  {   
    return (
      <Offline/>
    )
  };
  return (
    <div className="profile-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpK6DibZ8rjt974_abGKBQgsHJos2hJkxU_g&s"
        alt="Profile"
        className="profile-picture"
      />
      <div className="profile-header">
        <h1 className="profile-name">Nikhil Singh Baghel</h1>
        <p className="profile-email">Email: nbaghel392@gmail.com</p>
      </div>
      <div className="profile-content">
        <h2>InstaMart Order </h2>
        <p>No order yet....</p>

        <h2>Order Details</h2>
        <p>There have No Previous Order ....</p>
      </div>
    </div>
  );
};

export default Profile;
