import {
  Box,
} from "@mui/material";
import FlexOne from "../../Comparents/Blog/Shared/FlexOne";
import FlexTwo from "../../Comparents/Blog/Shared/FlexTwo";
import FlexThree from "../../Comparents/Blog/Shared/FlexThree";

import "../../CSS/Blog/Blog.css";
import SonOlaylar from "./Shared/Shared/SonOlaylar";

function Blog() {
  return (
    <Box className="BlogContainer">
      <Box className="ContainerBox-1">
        <FlexOne />
      </Box>
      <Box className="ContainerBox-2">
        <FlexTwo />
      </Box>
      <Box className="ContainerBox-2">
        <FlexThree />
      </Box>
    </Box>
  );
}

export default Blog;
