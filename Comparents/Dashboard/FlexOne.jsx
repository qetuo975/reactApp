import { Box, Tabs, Tab } from "@mui/material";
import {
  Mail,
  Airplay,
  Groups,
  Send,
  Settings,
  CalendarMonth,
} from "@mui/icons-material";
import { useState } from "react";
import SettingDataGrid from "./Shared/SettingDataGrid";
import VeliDataGrid from "./Shared/VeliDataGrid";
import MessengeDataGrid from "./Shared/MessengeDataGrid";
import SonOlayListe from "./Shared/SonOlayListe";
import SendMessenge from "./Shared/SendMessenge";
import CreateWork from "./Shared/CreateWork";
import HızlıMenu from "./Shared/HızlıMenu";
import "../../CSS/DashBoard/Dashboard.FlexOne.css";

function FlexOne() {
  const [TabPanel, setTabValue] = useState(0);

  return (
    <Box className="FlexOne">
      <Box className="FlexOneTabsArea">
        <Tabs
          className="FlexOneTabs"
          value={TabPanel}
          onChange={(e, n) => setTabValue(n)}
          aria-label="My Tabs"
        >
          <Tab className="FlexOneTab" icon={<Airplay />} label="Hızlı Menü" />
          <Tab
            className="FlexOneTab"
            icon={<Settings />}
            label="İşlem Oluştur"
          />
          <Tab
            className="FlexOneTab"
            icon={<CalendarMonth />}
            label="İşlemlerim"
          />
          <Tab className="FlexOneTab" icon={<Send />} label="Gelen Kutusu" />
          <Tab className="FlexOneTab" icon={<Groups />} label="Veliler" />
          <Tab className="FlexOneTab" icon={<Mail />} label="Mesaj Gönder" />
        </Tabs>

        {TabPanel === 0 && (
          <Box
            className="TabPanel"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <HızlıMenu />
          </Box>
        )}

        {TabPanel === 1 && (
          <Box className="TabPanel">
            <CreateWork />
          </Box>
        )}

        {TabPanel === 2 && (
          <Box className="TabPanel">
            <SettingDataGrid />
          </Box>
        )}

        {TabPanel === 3 && (
          <Box className="TabPanel">
            <MessengeDataGrid />
          </Box>
        )}

        {TabPanel === 4 && (
          <Box className="TabPanel">
            <VeliDataGrid />
          </Box>
        )}

        {TabPanel === 5 && (
          <Box className="TabPanel">
            <SendMessenge />
          </Box>
        )}
      </Box>

      <Box className="FlexOneList">
        <SonOlayListe />
      </Box>
    </Box>
  );
}

export default FlexOne;
