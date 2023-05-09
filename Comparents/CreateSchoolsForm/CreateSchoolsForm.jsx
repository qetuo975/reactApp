import "../../CSS/CreateSchoolsForm/CreateSchoolsForm.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Gif from "../../Assert/formbg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateSchoolsForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/createschool",
        formData
      );

      if (res.status === 200) {
        return navigate("/login?success=ok");
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
            <Typography className="FormHeader"> DigiSchool Oluştur </Typography>
          </Box>
          <form onSubmit={handleSubmit} className="FormBox">
            <TextField
              name="adsoyad"
              onChange={handleChange}
              className="FormItem"
              helperText="* İsim ve Soyisim Giriniz."
              placeholder="Ad ve Soyad Giriniz"
              required={true}
              label="Ad ve Soyad Giriniz"
              variant="outlined"
              color="primary"
            ></TextField>
            <TextField
              name="name"
              onChange={handleChange}
              className="FormItem"
              helperText="* Okulun Adını Giriniz."
              placeholder="Okulun Adını Giriniz."
              required={true}
              label="Okul Adı"
              variant="outlined"
              color="primary"
            ></TextField>
            <TextField
              name="email"
              onChange={handleChange}
              className="FormItem"
              helperText="* Okul E-Mail Giriniz."
              placeholder="Okulun E-Mail Giriniz."
              required={true}
              label="Okulun E-Mail Giriniz."
              variant="outlined"
              color="primary"
            ></TextField>

            <TextField
              name="password"
              type="password"
              onChange={handleChange}
              className="FormItem"
              helperText="* Şifre Giriniz"
              placeholder="Oluşturmak İstediğiniz Şifreyi Giriniz"
              required={true}
              label="Şifre Giriniz"
              variant="outlined"
              color="primary"
            ></TextField>

            <TextField
              name="telefon"
              onChange={handleChange}
              className="FormItem"
              helperText="* Okul Telefon Numarası"
              placeholder="Okul Telefon Numarasını Giriniz."
              required={true}
              label="Okul Telefon Numarasını Giriniz."
              variant="outlined"
              color="primary"
            ></TextField>
            <TextField
              name="bireyseltelefon"
              onChange={handleChange}
              className="FormItem"
              helperText="* İletişim Sağlanıcak Ekstra Telefon."
              placeholder="Bireysel Okul Telefon Numarasını Giriniz."
              required={true}
              label="Bireysel Okul Telefon Numarasını Giriniz."
              variant="outlined"
              color="primary"
            ></TextField>
            <TextField
              name="adres"
              onChange={handleChange}
              className="FormItem"
              helperText="* Okul Adres Bilgisi"
              placeholder="Adres Giriniz."
              required={true}
              label="Okul Adresi Giriniz."
              variant="outlined"
              color="primary"
            ></TextField>

            <Button
              type="submit"
              sx={{ marginTop: 5 }}
              color="secondary"
              variant="contained"
            >
              {" "}
              DigiSchool Oluştur.{" "}
            </Button>
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

export default CreateSchoolsForm;
