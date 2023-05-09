import React from "react";
import { Box } from "@mui/material";
import FlexOne from "./Shared/FlexOne";
import FlexTwo from "./Shared/FlexTwo";
import "../../CSS/VeliPage/FlexOne.css";
import "../../CSS/VeliPage/FlexTwo.css";

function VeliDashboard() {
  return (
    <Box className="VeliContainer">
      <Box className="ContainerBox-1">
        <FlexOne />
      </Box>
      <Box className="ContainerBox-2">
        <FlexTwo />
      </Box>
    </Box>
  );
}

export default VeliDashboard;
