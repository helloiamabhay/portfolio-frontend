import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loader = () => {
  return (
    <div>
      <Box textAlign={"center"} mt={"200px"}>
        <CircularProgress size={"80px"} />
      </Box>
    </div>
  );
};

export default Loader;
