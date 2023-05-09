import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import {
  Mail,
  Airplay,
  Groups,
  Send,
  Settings,
  CalendarMonth,
} from "@mui/icons-material";
import NivoLine from "./Shared/NivoLine";
import "../../CSS/DashBoard/Dashboard.FlexTwo.css";
import { data } from "../../Data/data";
function FlexTwo() {
  const [TabPanelTwo, setTabValueTwo] = useState(0);
  return (
    <Box className="FlexTwo">
      <Box className="FlexTwoTabsArea">
        <Tabs
          className="FlexTwoTabs"
          value={TabPanelTwo}
          onChange={(e, n) => setTabValueTwo(n)}
          aria-label="My Tabs"
        >
          <Tab
            className="FlexTwoTab"
            icon={<Airplay />}
            label="ORT. Aktiflik"
          />
          <Tab className="FlexTwoTab" icon={<Settings />} label="ORT. Bütçe" />
          <Tab
            className="FlexTwoTab"
            icon={<CalendarMonth />}
            label="ORT. Giderler"
          />
          <Tab className="FlexTwoTab" icon={<Send />} label="ORT. Aktiflik" />
          <Tab
            className="FlexTwoTab"
            icon={<Groups />}
            label="ORT. Çalışma Süresi"
          />
          <Tab
            className="FlexTwoTab"
            icon={<Mail />}
            label="ORT. Mesaj Sayısı"
          />
        </Tabs>

        {TabPanelTwo === 0 && (
          <Box className="TabPanelTwo">
            <NivoLine data={data} />
          </Box>
        )}

        {TabPanelTwo === 1 && (
          <Box className="TabPanelTwo">
            <NivoLine data={data} />
          </Box>
        )}

        {TabPanelTwo === 2 && (
          <Box className="TabPanelTwo">
            <NivoLine data={data} />
          </Box>
        )}

        {TabPanelTwo === 3 && (
          <Box className="TabPanelTwo">
            <NivoLine data={data} />
          </Box>
        )}

        {TabPanelTwo === 4 && (
          <Box className="TabPanelTwo">
            <NivoLine data={data} />
          </Box>
        )}

        {TabPanelTwo === 5 && (
          <Box className="TabPanelTwo">
            <NivoLine data={data} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FlexTwo;
