import { TextField } from "@mui/material";
import React, { useState } from "react";
import { resetPasswordAction } from "../redux/actions/adminAction";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ResetPassword = () => {
  const [resetinput, setResetInput] = useState("");
  const [resetinputconfirm, setResetInputConfirm] = useState("");
  const { resetReducer } = useSelector((state) => state.auth);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetbtn = (e) => {
    e.preventDefault();
    dispatch(resetPasswordAction(params.token, resetinput, resetinputconfirm));
  };
  if (resetReducer === true) {
    navigate("/login");
  }

  return (
    <div className="resetpassword">
      <TextField
        className="forgetinput"
        onChange={(e) => setResetInput(e.target.value)}
        required
        label="Enter Password"
        value={resetinput}
        variant="standard"
      />
      <TextField
        className="forgetinput"
        onChange={(e) => setResetInputConfirm(e.target.value)}
        required
        label="Confirm Password"
        value={resetinputconfirm}
        variant="standard"
      />
      <button className="loginbtn" onClick={resetbtn} type="submit">
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
