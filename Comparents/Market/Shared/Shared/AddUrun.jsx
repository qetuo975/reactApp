import { Sınıf } from "../../../../Data/data";
import { TextField, Button, Autocomplete, Box, Input, Typography } from "@mui/material";
import { Label, Send } from "@mui/icons-material";
function AddUrun() {
  return (
    <form className="TabPanelForm">
      <TextField
        name="adsoyad"
        placeholder="Ürün Adı"
        required={true}
        label="Ürün Adı"
        variant="outlined"
        color="warning"
      />

      <TextField
        name="adsoyad"
        placeholder="Ürün Fiyatı"
        required={true}
        label="Ürün Fiyatı"
        variant="outlined"
        color="warning"
      />

      <Autocomplete
        disablePortal
        fullWidth
        options={Sınıf}
        renderInput={(params) => (
          <TextField
            color="warning"
            name="sınıf"
            required={true}
            placeholder="Ürün Kategorisi"
            variant="outlined"
            {...params}
            label="Ürün Kategorisi"
          />
        )}
      />

      <label htmlFor="resim"><Typography>Resim Seçiniz</Typography></label>
      <input type="file" name="resim" id="resim" />
      
      <Button
        sx= {{marginTop: 2}}
        startIcon={<Send sx={{ marginRight: 1 }} />}
        type="submit"
        variant="contained"
      >
        {" "}
        Ekle{" "}
      </Button>
    </form>
  );
}

export default AddUrun;
