import React from "react";
import { Typography } from "@mui/material";


const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
      Welcome Back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
       Connecting Communities
      </Typography>
    </>
  );
};

export default LoginPageHeader;
