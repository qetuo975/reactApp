import {
  FormControl,
  FormLabel,
  RadioGroup,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import Gif from "../../../Assert/Rocket.gif";

function HızlıMenu() {
  return (
    <>
      <FormControl className="FlexOneFormControl">
        <FormLabel className="TabPanelFormControllabel">
          Genel Ayarlar
        </FormLabel>
        <RadioGroup className="TabPanelRadioGroup">
          <FormControlLabel
            color="secondary"
            label="Otomatik Yoklama"
            value="2000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Bildirimleri Kapat"
            value="3000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Yapay Zeka Kapat"
            value="4000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Mesajlaşmayı Kapat"
            value="2000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Bildirimleri Kapat"
            value="3000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Yüz Tanıma Aktifleştir"
            value="4000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Otomatik Yoklama"
            value="2000$"
            control={<Switch color="success" />}
          />
        </RadioGroup>
      </FormControl>
      <img className="TabPanelCard" alt="TabPanelCard" src={Gif}></img>
      <FormControl className="FlexOneFormControl">
        <FormLabel className="TabPanelFormControllabel">
          Genel Ayarlar
        </FormLabel>
        <RadioGroup className="TabPanelRadioGroup">
          <FormControlLabel
            className="FormLabel"
            color="secondary"
            label="Otomatik Yoklama"
            value="2000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Bildirimleri Kapat"
            value="3000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Yapay Zeka Kapat"
            value="4000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Mesajlaşmayı Kapat"
            value="2000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Bildirimleri Kapat"
            value="3000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Yüz Tanıma Aktifleştir"
            value="4000$"
            control={<Switch color="success" />}
          />
          <Divider />
          <FormControlLabel
            color="secondary"
            label="Otomatik Yoklama"
            value="2000$"
            control={<Switch color="success" />}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default HızlıMenu;
