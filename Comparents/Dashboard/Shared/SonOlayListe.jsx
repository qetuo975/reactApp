import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
  Divider,
} from "@mui/material";

import ManAvatar from "../../../Assert/man.png";
import PandaAvatar from "../../../Assert/panda.png";
import RabbitAvatar from "../../../Assert/rabbit.png";

function SonOlayListe() {
  const data = [
    [
      ManAvatar,
      "Remy Sharp",
      "Brunch this weekend?",
      "Ali Connors",
      "— I'll be in your neighborhood doing errands this…",
    ],
    [
      ManAvatar,
      "Remy Sharp",
      "Brunch this weekend?",
      "Ali Connors",
      "— I'll be in your neighborhood doing errands this…",
    ],
    [
      ManAvatar,
      "Remy Sharp",
      "Brunch this weekend?",
      "Ali Connors",
      "— I'll be in your neighborhood doing errands this…",
    ],
    [
      ManAvatar,
      "Remy Sharp",
      "Brunch this weekend?",
      "Ali Connors",
      "— I'll be in your neighborhood doing errands this…",
    ],
  ];

  return (
    <List
      subheader={
        <ListSubheader className="ListSubHeader">Son Olaylar</ListSubheader>
      }
    >
      {data.map((dataitem, keys) => {
        return (
          <>
            <ListItem key={keys} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={dataitem[1]} src={dataitem[0]} />
              </ListItemAvatar>
              <ListItemText
                primary={dataitem[2]}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {dataitem[3]}
                    </Typography>
                    {dataitem[4]}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}

export default SonOlayListe;
