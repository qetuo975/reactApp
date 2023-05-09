import { Box, Tabs, Tab} from "@mui/material";
import {
  Airplay,
  Send,
  Group,
} from "@mui/icons-material";

import { useState } from "react";
import "../../../CSS/Blog/FlexTwo.css";
import SonOlaylar from "./Shared/SonOlaylar";
import AddBlog from "./Shared/AddBlog";


function FlexTwo() {
  const [TabPanel, setTabValue] = useState(0);

  return (
    <Box className="ContainerBox-2">
      <Box className="ContainerBoxItem-1">
        <Tabs
          className="ContainerTabs"
          value={TabPanel}
          onChange={(e, n) => setTabValue(n)}
          aria-label="My Tabs"
        >
          <Tab className="Tab" icon={<Airplay />} label="Blog Ekle" />
          <Tab className="Tab" icon={<Send />} label="Blog Düzenle" />
          <Tab className="Tab" icon={<Group />} label="Blog Sil" />
        </Tabs>

        {TabPanel === 0 && (
          <Box className="TabPanel">
            <AddBlog />
          </Box>
        )}

        {TabPanel === 1 && (
          <Box className="TabPanel">
          </Box>
        )}

        {TabPanel === 2 && (
          <Box className="TabPanel">
          </Box>
        )}
      </Box>

      <Box className="ContainerBoxItem-2">
        <SonOlaylar />
      </Box>
    </Box>
  );
}

export default FlexTwo;
