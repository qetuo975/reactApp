import { Sınıf, Names } from "../../../../Data/data";
import { TextField, Button, Autocomplete } from "@mui/material";
import { Send } from "@mui/icons-material";

function UpdateStudent() {
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
            placeholder="Öğrenci"
            variant="outlined"
            {...params}
            label="Öğrenci Seçiniz"
          />
        )}
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

export default UpdateStudent;
