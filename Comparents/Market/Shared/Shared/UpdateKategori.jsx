import { TextField, Button, Autocomplete } from "@mui/material";
import { Sınıf } from "../../../../Data/data";

import { Send } from "@mui/icons-material";
function UpdateKategori() {
  return (
    <form className="TabPanelForm">
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

      <Button
        sx={{ marginTop: 2 }}
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

export default UpdateKategori;
