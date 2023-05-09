import { Box, Tabs, Tab} from "@mui/material";
import {
  Airplay,
  Send,
  Settings,
  Group,
} from "@mui/icons-material";

import { useState } from "react";
import "../../../CSS/TeachersPage/FlexTwo.css";
import AddStudent from "./Shared/AddStudent";
import UpdateStudent from "./Shared/UpdateStudent";
import DeleteStudent from "./Shared/DeleteStudent";
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
          <Tab className="Tab" icon={<Airplay />} label="Öğrenci Ekle" />
          <Tab className="Tab" icon={<Send />} label="Öğrenci Düzenle" />
          <Tab className="Tab" icon={<Group />} label="Öğrenci Sil" />
        </Tabs>

        {TabPanel === 0 && (
          <Box className="TabPanel">
            <AddStudent />
          </Box>
        )}

        {TabPanel === 1 && (
          <Box className="TabPanel">
            <UpdateStudent />
          </Box>
        )}

        {TabPanel === 2 && (
          <Box className="TabPanel">
            <DeleteStudent />
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
