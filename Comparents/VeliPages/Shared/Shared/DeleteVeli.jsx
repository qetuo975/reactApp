import { OgrenciNo } from "../../../../Data/data";
import { TextField, Button, Autocomplete } from "@mui/material";
import { Send } from "@mui/icons-material";

function DeleteVeli() {
  return (
    <form className="TabPanelForm">
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
        Sil{" "}
      </Button>
    </form>
  );
}

export default DeleteVeli;
