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
import AddTeachers from "./Shared/AddTeachers";
import AddCalendar from "./Shared/AddCalendar";
import AddYetki from "./Shared/AddYetki";
import UpdateTeacher from "./Shared/UpdateTeacher";
import DeleteTeacher from "./Shared/DeleteTeachers";
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
          <Tab className="Tab" icon={<Airplay />} label="Öğretmen Ekle" />
          <Tab className="Tab" icon={<Settings />} label="Öğretmen Yetki" />
          <Tab className="Tab" icon={<Send />} label="Öğretmen Düzenle" />
          <Tab className="Tab" icon={<Group />} label="Öğretmen Sil" />
          <Tab className="Tab" icon={<CalendarMonth />} label="Ders Programı" />
        </Tabs>

        {TabPanel === 0 && (
          <Box className="TabPanel">
            <AddTeachers />
          </Box>
        )}

        {TabPanel === 1 && (
          <Box className="TabPanel">
            <AddYetki />
          </Box>
        )}

        {TabPanel === 2 && (
          <Box className="TabPanel">
            <UpdateTeacher />
          </Box>
        )}

        {TabPanel === 3 && (
          <Box className="TabPanel">
            <DeleteTeacher />
          </Box>
        )}

        {TabPanel === 4 && (
          <Box className="TabPanel">
            <AddCalendar />
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
