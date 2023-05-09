import { TextField, Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

function AddBlog() {
  return (
    <form className="TabPanelForm">
      <TextField
        name="adsoyad"
        placeholder="Başlık"
        required={true}
        label="Başlık"
        variant="outlined"
        color="warning"
      />

      <TextField
        name="adsoyad"
        placeholder="Açıklama"
        required={true}
        label="Açıklama"
        variant="outlined"
        color="warning"
      />

      <label htmlFor="resim">
        <Typography>Resim Seçiniz</Typography>
      </label>
      <input type="file" name="resim" id="resim" />

      <Button
        sx ={{marginTop: 3}}
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

export default AddBlog;
