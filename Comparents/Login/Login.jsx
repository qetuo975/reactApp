import "../../CSS/Login/Login.css";
import { Box, Button, Link, TextField, Typography, Alert } from "@mui/material";
import Gif from "../../Assert/login.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const search = location.search;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", formData);

      if (res.data === "OK") {
        return navigate("/");
      } else {
        return navigate("/login?auth=no");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

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
            <Typography className="FormHeader"> Giriş Yap </Typography>
          </Box>

          <form onSubmit={handleSubmit} className="FormBox">
            <TextField
              name="eposta"
              onChange={handleChange}
              className="FormItem"
              helperText="* E-Postanızı Giriniz"
              placeholder="E-Posta"
              required={true}
              label="E-Posta"
              variant="outlined"
              color="primary"
            ></TextField>
            <TextField
              name="password"
              onChange={handleChange}
              className="FormItem"
              helperText="* Şifrenizi Giriniz"
              placeholder="Şifre"
              required={true}
              type="password"
              label="Şifre"
              variant="outlined"
              color="primary"
            ></TextField>

            <Link href="resetpassword" className="ResetPassword">
              {" "}
              Şifremi Unuttum.
            </Link>

            <Button
              sx={{ marginTop: 5 }}
              color="warning"
              type="submit"
              variant="contained"
            >
              {" "}
              Giriş Yap.{" "}
            </Button>
            {search === "?auth=no" ? (
              <Alert
                className="FormItem"
                severity="error"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Kullanıcı Adı veya Parola Yanlış !</Typography>
              </Alert>
            ) : (
              ""
            )}

            {search === "?success=ok" ? (
              <Alert
                className="FormItem"
                severity="success"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>Okul Oluşturma Başarılı !</Typography>
              </Alert>
            ) : (
              ""
            )}
          </form>

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

export default Login;
