import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Send } from "@mui/icons-material";

function CreateWork() {
  const [IslemSubmit, setIslemSubmit] = useState(false);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          components={["MobileTimePicker"]}
        >
          <MobileTimePicker
            sx={{ width: 50 }}
            label={"Saat Seçiniz."}
            views={["minutes", "seconds"]}
            format="mm:ss"
          />

          <DatePicker
            className="TabPanelDataPicker"
            sx={{ width: 50 }}
            label="Tarih Seçiniz."
          />
        </DemoContainer>
      </LocalizationProvider>

      <TextField
        sx={{ marginTop: 1 }}
        placeholder="Mesajınızı Giriniz."
        fullWidth
        required
        multiline
        rows={8}
        maxRows={8}
        label="Mesajınızı Yazınız"
      ></TextField>

      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          setIslemSubmit(true);
        }}
        startIcon={<Send />}
        color="success"
        fullWidth
        variant="contained"
      >
        Gönder
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={IslemSubmit}
        autoHideDuration={3000}
        onClose={() => setIslemSubmit(false)}
      >
        <Alert
          onClose={() => setIslemSubmit(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          İşlem Oluşturma Tamamlandı !
        </Alert>
      </Snackbar>
    </>
  );
}

export default CreateWork;
