import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Slider,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import "../../../CSS/Market/FlexThree.css";
import { Sınıf } from "../../../Data/data";
import Kaşar from "../../../Assert/kaşarlı.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
function valuetext(value) {
  return `${value}°C`;
}

function FlexThree() {
  const [value, setValue] = useState([10, 55]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Data = [[], [], [], [], [], [], [], []];
  return (
    <Box className="ContainerFlex">
      <Box className="Filter">
        <Typography variant="h5" className="FilterHeader">
          {" "}
          Filtreleme{" "}
        </Typography>

        <Box className="FilterBody">
          <form>
            <Autocomplete
              disablePortal
              fullWidth
              options={Sınıf}
              renderInput={(params) => (
                <TextField
                  className="FilterBody-TextField"
                  color="warning"
                  name="sınıf"
                  required={true}
                  placeholder="Kategori Seçiniz"
                  variant="outlined"
                  {...params}
                  label="Kategori Seçiniz"
                />
              )}
            />
            <Autocomplete
              disablePortal
              fullWidth
              options={Sınıf}
              renderInput={(params) => (
                <TextField
                  className="FilterBody-TextField"
                  color="warning"
                  name="sınıf"
                  required={true}
                  placeholder="Ürün Adı"
                  variant="outlined"
                  {...params}
                  label="Ürün Adı"
                />
              )}
            />
            <Box sx={{ marginBottom: 2 }} p={1} mt={1}>
              <Typography variant="h6" className="FilterBodyHeader">
                {" "}
                Fiyat Aralığı{" "}
              </Typography>
              <Slider
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="secondary"
                aria-label="Volume"
                value={value}
                onChange={handleChange}
                getAriaLabel={() => "Temperature range"}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={1}>
              <Button
                sx={{ marginBottom: 1 }}
                color="success"
                variant="contained"
              >
                {" "}
                Filtrele
              </Button>
              <Button
                sx={{ marginBottom: 1 }}
                color="error"
                variant="contained"
              >
                {" "}
                Son İşlemler
              </Button>
              <Button
                sx={{ marginBottom: 1 }}
                color="warning"
                variant="contained"
              >
                {" "}
                Beğenilenler{" "}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box className="MarketBox">
        <Box className="MarketBoxUrunler">
          {Data.map((dataitem, keys) => {
            return (
              <>
                <Card key={keys} className="MarketBoxCard">
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="85"
                    image={Kaşar}
                  />
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      className="FilterBody-TextField"
                      textAlign={"center"}
                      variant="h6"
                    >
                      Kaşarlı Tost
                    </Typography>
                    <Typography
                      className="FilterBody-TextField"
                      textAlign={"center"}
                      variant="body2"
                    >
                      290 TL
                    </Typography>
                  </CardContent>
                  <CardActions className="MarketBoxCardAction">
                    <IconButton>
                      {" "}
                      <ShoppingCartIcon />
                    </IconButton>
                    <Button>
                      {" "}
                      <FavoriteIcon color="error" />
                    </Button>
                  </CardActions>
                </Card>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default FlexThree;
