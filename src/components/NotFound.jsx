import { Button } from "@mui/material";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <RiErrorWarningFill size={"5rem"} />
      <h1>Page Not Found</h1>
      <Link to="/">
        <Button variant={"ghost"}>Go to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
