import "../../CSS/Login/Login.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Gif from "../../Assert/resetpassword.jpg";

function ResetPassword() {
  return (
    <Box className="FormContainer">
      <Box className="FormContainerBorder">
        <img
          src={Gif}
          alt="FormContainer-SVG"
          className="FormContainer-SVG"
        ></img>
        <Box className="FormContainerForm">
          <Box className="FormHeaderBox">
            <Typography className="FormHeader"> Parola Sıfırla </Typography>
          </Box>
          <Box className="FormBox">
            <TextField
              className="FormItem"
              helperText="* E-Postanızı Giriniz"
              placeholder="E-Posta"
              required={true}
              label="E-Posta"
              variant="outlined"
              color="primary"
            ></TextField>

            <Button sx={{ marginTop: 3 }} color="warning" variant="contained">
              {" "}
              Parola Sıfırla.{" "}
            </Button>
          </Box>
          <Box className="DigiMetaSchoolsBox">
            <Typography sx={{ color: "gray" }}>
              {" "}
              DigiSchool Tüm Hakları Saklıdır.{" "}
            </Typography>
            <Typography sx={{ color: "gray", marginTop: 1 }}>
              {" "}
              @MetaSchools Platforms{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ResetPassword;
