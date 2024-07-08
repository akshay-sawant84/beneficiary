import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useTranslation } from "next-i18next";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { locale, locales, asPath } = router;
  const [open, setOpen] = React.useState(false);
  const [selectedLocale, setSelectedLocale] = useState("");

  useEffect(() => {
    const localeItem = localStorage.getItem("locale");
    if (localeItem) {
      router.replace(asPath, asPath, { locale: localeItem });
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    setSelectedLocale(newLocale);
    handleClickOpen();
    // router.replace(asPath, asPath, { locale: newLocale });
    // router.reload();
    // localStorage.setItem("locale", newLocale);
  };

  const handleOnClickYes = () => {
    router.replace(asPath, asPath, { locale: selectedLocale });
    router.reload();
    localStorage.setItem("locale", selectedLocale);
  };

  return (
    <>
      <FormControl size="small" sx={{ width: "150px" }}>
        <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={t("language")}
          value={locale}
          onChange={changeLanguage}
        >
          {locales.map((loc) => (
            <MenuItem key={loc} value={loc}>
              {" "}
              {loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {open && (
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>{t("dialog_title")}</DialogTitle>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginBottom="20px"
          >
            <Button
              variant="contained"
              onClick={handleOnClickYes}
              sx={{ marginRight: "10px" }}
            >
              Yes
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Dialog>
      )}
      {/* <select value={locale} onChange={changeLanguage}>
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select> */}
    </>
  );
}
