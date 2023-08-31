import React from "react";
import "../styles/stylesLoad.css";
import { Spinner } from "react-loading-io";
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"center",marginTop:16}}>
      <Spinner size={175} />
    </Box>
  );
};

export default Loading;
