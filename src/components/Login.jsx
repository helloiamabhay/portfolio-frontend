import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  if (isAuthenticated === true) {
    navigate("/");
  }
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "26ch" },
        }}
        noValidate
        autoComplete="off"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={["150px", "150px"]}
        fontSize={[22, 30]}
      >
        <TextField
          className="logininput"
          id="standard-basic"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          label="Enter Email"
          value={email}
          variant="standard"
        />

        <TextField
          className="logininput"
          id="standard-password-input"
          label="Password"
          type="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
      </Box>

      <button className="loginbtn" onClick={submitHandler} type="submit">
        Login
      </button>
      <Link className="forgetpassword" to="/forgetpassword">
        Forget Password
      </Link>
    </div>
  );
};

export default Login;
