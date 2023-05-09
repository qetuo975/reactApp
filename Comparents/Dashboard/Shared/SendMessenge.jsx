import { Names } from "../../../Data/data";
import { useState } from "react";
import {
  Autocomplete,
  TextField,
  Box,
  Snackbar,
  Button,
  Alert,
} from "@mui/material";

function SendMessenge() {
  const [MessengeAlert, setMessengeAlert] = useState(false);
  return (
    <>
      <Box
        display={"flex"}
        mb={1}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Autocomplete
          disablePortal
          options={Names}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Öğretmen" />}
        />
        <Autocomplete
          disablePortal
          sx={{ width: 250 }}
          options={Names}
          renderInput={(params) => <TextField {...params} label="Öğrenci" />}
        />
      </Box>

      <Box mb={2}>
        <TextField
          placeholder="Mesajınızı Giriniz."
          fullWidth
          required
          multiline
          rows={8}
          maxRows={8}
          label="Mesajınızı Yazınız"
        ></TextField>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={MessengeAlert}
        autoHideDuration={3000}
        onClose={() => setMessengeAlert(false)}
      >
        <Alert
          onClose={() => setMessengeAlert(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Mesaj Gönderimi Başarılı !
        </Alert>
      </Snackbar>

      <Button
        onClick={() => setMessengeAlert(true)}
        color="success"
        fullWidth
        variant="contained"
      >
        Gönder
      </Button>
    </>
  );
}

export default SendMessenge;
