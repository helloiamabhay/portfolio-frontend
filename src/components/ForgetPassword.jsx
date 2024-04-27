import { TextField } from "@mui/material";
import React, { useState } from "react";
import { forgetPassword } from "../redux/actions/adminAction";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const forgetHandler = (e) => {
    e.preventDefault();
    const isOnline = navigator.onLine;
    if (!isOnline) {
      toast.error("Please check your connection.");
    } else {
      dispatch(forgetPassword(email));
    }
  };

  return (
    <div className="forgetbox">
      <TextField
        className="forgetinput"
        id="standard-basic"
        onChange={(e) => setEmail(e.target.value)}
        required={true}
        label="Enter Email"
        value={email}
        variant="standard"
      />

      <button className="loginbtn" onClick={forgetHandler} type="submit">
        Forget Password
      </button>
    </div>
  );
};

export default ForgetPassword;
