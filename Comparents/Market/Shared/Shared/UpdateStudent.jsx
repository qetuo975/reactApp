import { Sınıf, Names } from "../../../../Data/data";
import { TextField, Button, Autocomplete, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

function UpdateUrun() {
  return (
    <form className="TabPanelForm">
      <Autocomplete
        disablePortal
        fullWidth
        options={Names}
        renderInput={(params) => (
          <TextField
            color="warning"
            name="sınıf"
            required={true}
            placeholder="Ürün Seçiniz"
            variant="outlined"
            {...params}
            label="Ürün Seçiniz"
          />
        )}
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

      <label htmlFor="resim">
        <Typography>Resim Seçiniz</Typography>
      </label>
      <input type="file" name="resim" id="resim" />

      <Button
        sx= {{marginTop: 2}}
        startIcon={<Send sx={{ marginRight: 1 }} />}
        type="submit"
        variant="contained"
      >
        {" "}
        Güncelle{" "}
      </Button>
    </form>
  );
}

export default UpdateUrun;
