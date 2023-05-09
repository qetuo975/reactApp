import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material/";
import {
  Notifications,
  SensorsOff,
  Sensors,
  DarkMode,
} from "@mui/icons-material";
import { useState } from "react";
import "../../CSS/Global/Topbar.css";
import ManAvatar from "../../Assert/man.png";
import PandaAvatar from "../../Assert/panda.png";
import RabbitAvatar from "../../Assert/rabbit.png";

function ToolbarComparent({ SidebarOpenControl }) {
  const [Online, setOnline] = useState(false);
  const [BadgeNumber, setBadgeNumber] = useState(5);
  const [Notification, setNotification] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const notificationOpen = Boolean(Notification);
  const open = Boolean(anchorEl);

  return (
    <div className="Global">
            <AppBar className="AppBar">
      <Toolbar className="ToolBar">
        <Box className="ToolBarBox-1">
          <IconButton onClick={() => SidebarOpenControl(true)}>
            <MenuIcon className="SidebarOpen" color="warning" />
          </IconButton>
        </Box>

        <Box className="ToolBarBox-2">
          <Button
            className="Notification-Button"
            aria-controls={notificationOpen ? "notification-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={notificationOpen ? "true" : undefined}
            onClick={(event) => {
              setNotification(event.currentTarget);
              setBadgeNumber(0);
            }}
            startIcon={
              <Badge
                className="Notification-Badge"
                variant="standard"
                max={99}
                color="success"
                badgeContent={BadgeNumber}
              >
                <Notifications
                  className="Notification-Badge"
                  color="warning"
                ></Notifications>
              </Badge>
            }
          ></Button>
          <Menu
            MenuListProps={{
              "aria-labelledby": "notification-button",
            }}
            anchorEl={Notification}
            open={notificationOpen}
            onClose={() => setNotification(null)}
            TransitionComponent={Fade}
          >
            <MenuItem
              className="AccountMenuItem"
              onClick={() => setNotification(null)}
            >
              <ListItemIcon>
                <Avatar
                  sizes="large"
                  className="AccountMenuItemAvatar"
                  src={ManAvatar}
                ></Avatar>
              </ListItemIcon>
              <ListItemText
                primary=" Enes Arpacık "
                secondary=" Merhaba Can, Neredesin ? "
              ></ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem
              className="AccountMenuItem"
              onClick={() => setNotification(null)}
            >
              <ListItemIcon>
                <Avatar
                  className="AccountMenuItemAvatar"
                  src={PandaAvatar}
                ></Avatar>
              </ListItemIcon>
              <ListItemText
                primary=" Matematik Hocam"
                secondary=" Ders Başlıyor "
              ></ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem
              className="AccountMenuItem"
              onClick={() => setNotification(null)}
            >
              <ListItemIcon>
                <Avatar
                  className="AccountMenuItemAvatar"
                  src={RabbitAvatar}
                ></Avatar>
              </ListItemIcon>
              <ListItemText
                primary=" Manita "
                secondary=" Canım, Offline'sin ? "
              ></ListItemText>
            </MenuItem>
          </Menu>

          <IconButton
            onClick={() => {
              console.log("Dark Mode");
            }}
          >
            <DarkMode className="DarkMode" color="primary"></DarkMode>
          </IconButton>

          <IconButton
            className={Online ? "OnlineButton" : "OfflineButton"}
            onClick={() => setOnline(!Online)}
          >
            {Online ? (
              <Sensors className="Sensor" sx={{ color: "#00e676" }} />
            ) : (
              <SensorsOff className="Sensor" color="error" />
            )}
          </IconButton>

          <Button
            className="AccountButton"
            startIcon={
              <Avatar className="AccountButtonAvatar" src={ManAvatar}></Avatar>
            }
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          ></Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            TransitionComponent={Fade}
          >
            <MenuItem
              className="AccountMenuItem"
              onClick={() => setAnchorEl(null)}
            >
              <ListItemIcon>
                <Avatar sx={{ paddingRight: 1 }} src={ManAvatar}></Avatar>
              </ListItemIcon>
              <ListItemText
                primary=" Profilim"
                secondary=" John Doe"
              ></ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem
              className="AccountMenuItem"
              onClick={() => setAnchorEl(null)}
            >
              My account
            </MenuItem>
            <MenuItem
              className="AccountMenuItem"
              onClick={() => setAnchorEl(null)}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default ToolbarComparent;
