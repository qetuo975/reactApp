import { OgrenciNo } from "../../../../Data/data";
import { TextField, Button, Autocomplete } from "@mui/material";
import { Send } from "@mui/icons-material";
function AddVeli() {
  return (
    <form className="TabPanelForm">
      <TextField
        name="adsoyad"
        placeholder="Ad ve Soyad Giriniz"
        required={true}
        label="Ad ve Soyad Giriniz"
        variant="outlined"
        color="warning"
      />

      <TextField
        name="adsoyad"
        placeholder="Telefon Numarası"
        required={true}
        label="Telefon Numarası"
        variant="outlined"
        color="warning"
      />

      <TextField
        name="adsoyad"
        placeholder="E-Mail"
        required={true}
        label="E-Mail"
        variant="outlined"
        color="warning"
      />

      <Autocomplete
        disablePortal
        fullWidth
        options={OgrenciNo}
        renderInput={(params) => (
          <TextField
            color="warning"
            name="sınıf"
            required={true}
            placeholder="Öğrenci Numarası"
            variant="outlined"
            {...params}
            label="Öğrenci Numarası"
          />
        )}
      />

      <Button
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

export default AddVeli;
