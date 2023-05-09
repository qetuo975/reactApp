import { Box } from "@mui/material";
import "../../CSS/Market/FlexOne.css";
import "../../CSS/Market/FlexTwo.css";
import FlexOne from "./Shared/FlexOne";
import FlexTwo from "./Shared/FlexTwo";
import FlexThree from "./Shared/FlexThree";

function Market() {
  return (
    <Box className="MarketContainer">
      <Box className="ContainerBox-1">
        <FlexOne />
      </Box>
      <Box className="ContainerBox-2">
        <FlexTwo />
      </Box>
      <Box className="ContainerBox-3">
        <FlexThree />
      </Box>
    </Box>
  );
}

export default Market;
