import { Box, Tabs, Tab } from "@mui/material";
import {
  Airplay,
  Send,
  Settings,
  CalendarMonth,
  Group,
} from "@mui/icons-material";

import { useState } from "react";
import "../../../CSS/TeachersPage/FlexTwo.css";
import AddVeli from "./Shared/AddVeli";
import DeleteVeli from "./Shared/DeleteVeli";
import SonOlaylar from "./Shared/SonOlaylar";

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
          <Tab className="Tab" icon={<Airplay />} label="Veli Ekle" />
          <Tab className="Tab" icon={<Group />} label="Veli Sil" />
        </Tabs>

        {TabPanel === 0 && (
          <Box className="TabPanel">
            <AddVeli />
          </Box>
        )}

        {TabPanel === 1 && (
          <Box className="TabPanel">
            <DeleteVeli />
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
