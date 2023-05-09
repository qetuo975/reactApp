import { Departman, Sınıf, Names } from "../../../../Data/data";
import { TextField, Button, Autocomplete } from "@mui/material";
import { Send } from "@mui/icons-material";

function UpdateTeacher() {
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
            placeholder="Öğretmen"
            variant="outlined"
            {...params}
            label="Öğretmen Seçiniz"
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

export default UpdateTeacher;
