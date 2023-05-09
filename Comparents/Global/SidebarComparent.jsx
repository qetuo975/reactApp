import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Drawer,
  Avatar,
} from "@mui/material";
import {
  Mail,
  Home,
  Build,
  School,
  Group,
  Android,
  Apps,
  Store,
} from "@mui/icons-material/";
import ManAvatar from "../../Assert/man.png";
import SliderDarkTheme from "../../Assert/deneme2.gif";
import "../../CSS/Global/Sidebar.css";
import { Link } from "react-router-dom";

function SidebarComparent({ Open, Close }) {
  const paperStyle = {
    backgroundImage: `url(${SliderDarkTheme})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  };

  return (
    <Drawer
      className="SidebarDrawer"
      anchor="left"
      open={Open}
      PaperProps={{
        style: paperStyle,
      }}
      onClose={() => Close(true)}
    >
      <Box className="Sidebar">
        <Box className="SidebarAvatarBox">
          <Box className="SidebarAvatar">
            <Avatar
              sx={{ width: 100, height: 100 }}
              sizes="large"
              src={ManAvatar}
            ></Avatar>
            <Typography className="SidebarAvatarText"> Can Erciyas </Typography>
          </Box>
        </Box>

        <List className="SidebarList">
          <Link className="Link" to={"/"}>
            <ListItem className="SidebarListItem SidebarListItemAnim2">
              <ListItemButton sx={{ borderRadius: 50 }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <Typography className="SidebarListItemText"> Anasayfa </Typography>
              </ListItemButton>
            </ListItem>
          </Link>

          <Link className="Link" to={"/studentsetting"}>
            <ListItem className="SidebarListItem SidebarListItemAnim2">
              <ListItemButton sx={{ borderRadius: 50 }}>
                <ListItemIcon>
                  <Group color="primary" />
                </ListItemIcon>
                <Typography className="SidebarListItemText"> Öğrenci İşlemleri</Typography>
              </ListItemButton>
            </ListItem>
          </Link>


          <Link className="Link" to={"/teachersetting"}>
            <ListItem className="SidebarListItem SidebarListItemAnim2">
              <ListItemButton sx={{ borderRadius: 50 }}>
                <ListItemIcon>
                  <School color="primary" />
                </ListItemIcon>
                <Typography className="SidebarListItemText"> Öğretmen İşlemleri</Typography>
              </ListItemButton>
            </ListItem>
          </Link>

          <Link className="Link" to={"/velisetting"}>
            <ListItem className="SidebarListItem SidebarListItemAnim2">
              <ListItemButton sx={{ borderRadius: 50 }}>
                <ListItemIcon>
                  <Apps color="primary" />
                </ListItemIcon>
                <Typography className="SidebarListItemText"> Veli İşlemleri</Typography>
              </ListItemButton>
            </ListItem>
          </Link>

          <Link className="Link" to={"/market"}>
            <ListItem className="SidebarListItem SidebarListItemAnim2">
              <ListItemButton sx={{ borderRadius: 50 }}>
                <ListItemIcon>
                  <Store color="primary" />
                </ListItemIcon>
                <Typography className="SidebarListItemText"> Market </Typography>
              </ListItemButton>
            </ListItem>
          </Link>

          <Link className="Link" to={"/blog"}>
            <ListItem className="SidebarListItem SidebarListItemAnim2">
              <ListItemButton sx={{ borderRadius: 50 }}>
                <ListItemIcon>
                  <Mail color="primary" />
                </ListItemIcon>
                <Typography className="SidebarListItemText"> Bloglar </Typography>
              </ListItemButton>
            </ListItem>
          </Link>

          <Link className="Link" to={"/destek"}>
            <ListItem className="SidebarListItem SidebarListItemAnim2">
              <ListItemButton sx={{ borderRadius: 50 }}>
                <ListItemIcon>
                  <Android color="primary" />
                </ListItemIcon>
                <Typography className="SidebarListItemText"> Destek </Typography>
              </ListItemButton>
            </ListItem>
          </Link>


        </List>
      </Box>

      <Box className="SidebarDigiSchools">
        <svg
          width="160.1630708281155"
          height="150.203125"
          viewBox="0 0 350 246.74013721784416"
          className="css-1j8o68f"
        >
          <defs id="SvgjsDefs1021"></defs>

          <g
            id="SvgjsG1023"
            featurekey="ewgXDI-0"
            transform="matrix(3.2716394561350124,0,0,3.2716394561350124,-2.2901469952788043,167.82819703035562)"
            fill="#ffffff"
          >
            <path d="M8.5 5.859999999999999 l3.16 0 l0 5.08 l0 9.06 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -4.7 z M6.28 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M16.86 5.859999999999999 l0 2.66 l-3.16 0 l0 -2.66 l3.16 0 z M16.86 9.6 l0 10.4 l-3.16 0 l0 -10.4 l3.16 0 z M26.38 9.6 l3.16 0 l0 10.4 c0 3.16 -3.2 4.12 -5.52 4.12 c-1.1 0 -2.1 -0.18 -2.74 -0.52 l0 -2.58 c0.64 0.34 1.6 0.48 2.74 0.48 c1.86 0 2.36 -0.96 2.36 -1.5 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -0.96 z M24.16 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M34.739999999999995 5.859999999999999 l0 2.66 l-3.16 0 l0 -2.66 l3.16 0 z M34.739999999999995 9.6 l0 10.4 l-3.16 0 l0 -10.4 l3.16 0 z M41.72 12.879999999999999 c-0.28 -0.72 -0.7 -0.96 -1.16 -0.96 c-0.42 0 -0.84 0.24 -0.84 0.64 c0 0.38 0.24 0.6 0.7 0.76 l1.32 0.46 c1.48 0.54 2.98 1.08 2.98 3.16 c0 2.1 -2.1 3.3 -4.26 3.3 c-1.94 0 -3.76 -1.14 -4.2 -2.96 l2.48 -0.78 c0.26 0.58 0.72 1.24 1.72 1.24 c0.68 0 1.12 -0.44 1.12 -0.84 c0 -0.2 -0.16 -0.46 -0.66 -0.66 l-1.22 -0.44 c-2.08 -0.76 -3.06 -1.82 -3.06 -3.3 c0 -1.94 1.8 -3.08 3.78 -3.08 c2.02 0 3.36 1.1 3.96 2.76 z M51.46 9.42 c1.9 0 3.5 0.8 4.48 2.48 l-2.4 1.14 c-0.52 -0.44 -0.94 -0.84 -2.04 -0.84 c-1.2 0 -2.42 0.92 -2.42 2.62 c0 1.68 1.22 2.56 2.42 2.56 c1.1 0 1.52 -0.36 2.04 -0.8 l2.44 1.14 c-1.02 1.68 -2.58 2.44 -4.52 2.44 c-2.32 0 -5.44 -1.66 -5.44 -5.34 c0 -3.62 3.12 -5.4 5.44 -5.4 z M63.98 9.44 c1.94 0 3.92 1.3 3.92 4.6 l0 5.96 l-3.16 0 l0 -5.74 c0 -1.58 -0.54 -2.08 -1.54 -2.08 c-1.42 0 -2.24 1.38 -2.44 1.98 l0 5.84 l-3.16 0 l0 -14.14 l3.16 0 l0 5.54 c0.2 -0.5 1.26 -1.96 3.22 -1.96 z M74.97999999999999 9.42 c2.36 0 5.48 1.78 5.48 5.42 c0 3.66 -3.12 5.36 -5.48 5.36 s-5.48 -1.7 -5.48 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M74.97999999999999 12.2 c-1.2 0 -2.42 0.92 -2.42 2.64 c0 1.66 1.22 2.58 2.42 2.58 s2.44 -0.92 2.44 -2.58 c0 -1.72 -1.24 -2.64 -2.44 -2.64 z M87.34 9.42 c2.36 0 5.48 1.78 5.48 5.42 c0 3.66 -3.12 5.36 -5.48 5.36 s-5.48 -1.7 -5.48 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M87.34 12.2 c-1.2 0 -2.42 0.92 -2.42 2.64 c0 1.66 1.22 2.58 2.42 2.58 s2.44 -0.92 2.44 -2.58 c0 -1.72 -1.24 -2.64 -2.44 -2.64 z M97.69999999999999 5.859999999999999 l0 14.14 l-3.16 0 l0 -14.14 l3.16 0 z M104.67999999999999 12.879999999999999 c-0.28 -0.72 -0.7 -0.96 -1.16 -0.96 c-0.42 0 -0.84 0.24 -0.84 0.64 c0 0.38 0.24 0.6 0.7 0.76 l1.32 0.46 c1.48 0.54 2.98 1.08 2.98 3.16 c0 2.1 -2.1 3.3 -4.26 3.3 c-1.94 0 -3.76 -1.14 -4.2 -2.96 l2.48 -0.78 c0.26 0.58 0.72 1.24 1.72 1.24 c0.68 0 1.12 -0.44 1.12 -0.84 c0 -0.2 -0.16 -0.46 -0.66 -0.66 l-1.22 -0.44 c-2.08 -0.76 -3.06 -1.82 -3.06 -3.3 c0 -1.94 1.8 -3.08 3.78 -3.08 c2.02 0 3.36 1.1 3.96 2.76 z"></path>
          </g>
        </svg>
      </Box>
    </Drawer>
  );
}

export default SidebarComparent;
