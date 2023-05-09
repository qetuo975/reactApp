import { Names } from "../../../../Data/data";
import {
  TextField,
  Button,
  Autocomplete,
  Box,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { Send } from "@mui/icons-material";

function AddYetki() {
  return (
    <form className="TabPanelForm">
      <Autocomplete
        disablePortal
        fullWidth
        options={Names}
        renderInput={(params) => (
          <TextField
            color="warning"
            name="ogretmen"
            required={true}
            placeholder="Öğretmen Seçiniz"
            variant="outlined"
            {...params}
            label="Öğretmen"
          />
        )}
      />

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Switch />}
            label="Duyuru Yetkisi"
          ></FormControlLabel>
          <FormControlLabel
            control={<Switch />}
            label="Market Yetkisi"
          ></FormControlLabel>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Switch />}
            label="Öğrenci Kontrol Yetkisi"
          ></FormControlLabel>
          <FormControlLabel
            control={<Switch />}
            label="Plan Oluşturma Yetkisi"
          ></FormControlLabel>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Switch />}
            label="Etkinlik Oluşturma Yetkisi"
          ></FormControlLabel>
          <FormControlLabel
            control={<Switch />}
            label="Müdür Yardımcı Yetkisi"
          ></FormControlLabel>
        </Box>
      </FormGroup>

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

export default AddYetki;

// Duyuru, Market, Öğrenci Ayarı,
