import { Departman, Names, Sınıf, Gün } from "../../../../Data/data";
import { TextField, Button, Autocomplete } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Send } from "@mui/icons-material";

function AddCalendar() {
  return (
    <form className="TabPanelForm">
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
            sx={{ width: 300 }}
            label={"Saat Seçiniz."}
            views={["minutes", "seconds"]}
            format="mm:ss"
          />

          <Autocomplete
            disablePortal
            sx={{ width: 300 }}
            options={Gün}
            renderInput={(params) => (
              <TextField
                color="warning"
                name="departman"
                required={true}
                placeholder="Gün Seçiniz"
                variant="outlined"
                {...params}
                label="Gün"
              />
            )}
          />
        </DemoContainer>
      </LocalizationProvider>

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

      <Autocomplete
        disablePortal
        fullWidth
        options={Departman}
        renderInput={(params) => (
          <TextField
            color="warning"
            name="departman"
            required={true}
            placeholder="Departman Seçiniz"
            variant="outlined"
            {...params}
            label="Departman"
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
            placeholder="Sınıf Seçiniz"
            variant="outlined"
            {...params}
            label="Sınıf"
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

export default AddCalendar;
