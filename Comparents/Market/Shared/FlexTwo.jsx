import { Box, Tabs, Tab } from "@mui/material";
import { Airplay, Send, Group } from "@mui/icons-material";

import { useState } from "react";
import "../../../CSS/TeachersPage/FlexTwo.css";
import AddUrun from "./Shared/AddUrun";
import UpdateStudent from "./Shared/UpdateStudent";
import DeleteUrun from "./Shared/DeleteUrun";
import SonOlaylar from "./Shared/SonOlaylar";
import AddKategori from "./Shared/AddKategori";
import UpdateKategori from "./Shared/UpdateKategori";
import DeleteKategori from "./Shared/DeleteKategori";

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
          <Tab className="Tab" icon={<Airplay />} label="Ürün Ekle" />
          <Tab className="Tab" icon={<Send />} label="Ürün Güncelle" />
          <Tab className="Tab" icon={<Group />} label="Ürün Sil" />
          <Tab className="Tab" icon={<Airplay />} label="Kategori Ekle" />
          <Tab className="Tab" icon={<Send />} label="Kategori Güncelle" />
          <Tab className="Tab" icon={<Group />} label="Kategori Sil" />
        </Tabs>

        {TabPanel === 0 && (
          <Box className="TabPanel">
            <AddUrun />
          </Box>
        )}

        {TabPanel === 1 && (
          <Box className="TabPanel">
            <UpdateStudent />
          </Box>
        )}

        {TabPanel === 2 && (
          <Box className="TabPanel">
            <DeleteUrun />
          </Box>
        )}
        {TabPanel === 3 && (
          <Box className="TabPanel">
            <AddKategori />
          </Box>
        )}

        {TabPanel === 4 && (
          <Box className="TabPanel">
            <UpdateKategori />
          </Box>
        )}

        {TabPanel === 5 && (
          <Box className="TabPanel">
            <DeleteKategori />
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
