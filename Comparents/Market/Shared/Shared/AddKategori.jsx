import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
function AddKategori() {
  return (
    <form className="TabPanelForm">
      <TextField
        name="adsoyad"
        placeholder="Kategori Adı"
        required={true}
        label="Kategori Adı"
        variant="outlined"
        color="warning"
      />

      <Button
        sx={{ marginTop: 2 }}
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

export default AddKategori;
