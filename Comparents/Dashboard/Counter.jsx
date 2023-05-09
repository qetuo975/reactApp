import { Box, Card, CardHeader, CardMedia, CardContent } from "@mui/material";
import Gif from "../../Assert/CounterCard-1.gif";
import Gif2 from "../../Assert/CounterCard-2.gif";
import Gif3 from "../../Assert/CounterCard-3.gif";
import Gif4 from "../../Assert/CounterCard-4.gif";
import "../../CSS/DashBoard/Dashboard.Counter.css";

function Counter() {
  const data = [
    ["Aktif Öğrenci", 1552, Gif],
    ["Aktif Öğretmen", 1772, Gif2],
    ["Aktif Yönetici", 324, Gif3],
    ["Aktif Destek", 4, Gif4],
  ];

  return (
    <Box className="Counter">
      {data.map((dataitem, key) => {
        return (
          <Card key={key} className={`CounterItem CounterItem-${key}-Anim`}>
            <CardHeader
              className={`CounterItemHeader CounterItem-${key}-Color`}
              title={dataitem[0]}
            ></CardHeader>
            <CardMedia
              className="CounterItemMedia"
              component={"img"}
              image={dataitem[2]}
            ></CardMedia>
            <CardContent
              className={`CounterItemContent CounterItem-${key}-Color`}
            >
              {dataitem[1]}
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default Counter;
