import React from "react";
import "./User.css";
import { useDispatch } from "react-redux";
import { setActiveUserId } from "../../redux/Reducers/activeUserReducer";

const User = ({ user }) => {
  const { name, profile_pic, status } = user;
  const dispatch = useDispatch()

  return (
    <div className="User" onClick={() => dispatch(setActiveUserId(user.user_id))}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;