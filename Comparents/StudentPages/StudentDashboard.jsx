import React from "react";
import { Box } from "@mui/material";
import FlexOne from "./Shared/FlexOne";
import FlexTwo from "./Shared/FlexTwo";
import "../../CSS/StudentPage/FlexOne.css";
import "../../CSS/StudentPage/FlexTwo.css";

function StudentDashboard() {
  return (
    <Box className="StudentContainer">
      <Box className="ContainerBox-1">
        <FlexOne />
      </Box>
      <Box className="ContainerBox-2">
        <FlexTwo />
      </Box>
    </Box>
  );
}

export default StudentDashboard;
