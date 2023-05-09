import React from "react";
import { Box } from "@mui/material";
import FlexOne from "./Shared/FlexOne";
import FlexTwo from "./Shared/FlexTwo";
import "../../CSS/TeachersPage/FlexOne.css";
import "../../CSS/TeachersPage/FlexTwo.css";

function TeacherDashboard() {
  return (
    <Box className="TeacherContainer">
      <Box className="ContainerBox-1">
        <FlexOne />
      </Box>
      <Box className="ContainerBox-2">
        <FlexTwo />
      </Box>
    </Box>
  );
}

export default TeacherDashboard;
