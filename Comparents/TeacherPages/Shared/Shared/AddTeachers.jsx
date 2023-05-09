import { Departman, Sınıf } from "../../../../Data/data";
import { TextField, Button, Autocomplete } from "@mui/material";
import { Send } from "@mui/icons-material";
function AddTeachers() {
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


      <Autocomplete
        disablePortal
        fullWidth
        options={Sınıf}
        renderInput={(params) => (
          <TextField
            color="warning"
            name="sınıf"
            required={true}
            placeholder="Sorumlu Olduğu Sınıf"
            variant="outlined"
            {...params}
            label="Sorumlu Olduğu Sınıf"
          />
        )}
      />

      <Autocomplete
        disablePortal
        fullWidth
        options={Departman}
        renderInput={(params) => (
          <TextField
            color="warning"
            name="sınıf"
            required={true}
            placeholder="Departman Seçiniz"
            variant="outlined"
            {...params}
            label="Departman"
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

export default AddTeachers;
