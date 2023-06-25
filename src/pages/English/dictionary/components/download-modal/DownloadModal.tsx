import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import styles from "./download-modal.module.scss";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useAuth } from "hooks/useAuth";
import { TranslationGrid } from "pages/German/dictionary/interfaces";
import { EnglishTranslationGrid } from "pages/English/dictionary/interfaces";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface DownloadModalProps {
  open: boolean;
  handleClose: () => void;
  translations: EnglishTranslationGrid[];
}

export const DownloadModal: FC<DownloadModalProps> = ({
  open,
  handleClose,
  translations,
}) => {
  const { user } = useAuth();
  const [start, setStart] = useState("1");
  const [end, setEnd] = useState("");
  const [isAddIndexes, setIsAddIndexes] = useState(true);
  const [fileExtenstion, setFileExtension] = useState("txt");

  const [preview, setPreview] = useState("");

  const transformWords = useCallback(() => {
    const currentStart = Number(start);
    return JSON.stringify(
      translations
        .sort((a, b) =>
          a.engWord.toLowerCase() < b.engWord.toLowerCase() ? -1 : 1
        )
        .slice(currentStart - 1, Number(end))
        .map((t, i) =>
          `${isAddIndexes ? `${currentStart + i}.` : ""} ${t.engWord} - ${
            t.translate
          }`.trim()
        ),
      null,
      "\t"
    )
      .replaceAll("]", "")
      .replaceAll("[", "")
      .replaceAll('"', "");
  }, [end, start, translations, isAddIndexes]);

  function exportUserInfo() {
    const fileData = transformWords();

    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const date = new Date();
    link.download = `Англійські слова для ${
      user?.displayName ?? user?.email
    }-${date.toLocaleDateString()}:${date.toLocaleTimeString()}.${fileExtenstion}`;
    link.href = url;
    link.click();
  }

  const handleSetStart = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < Number(end)) {
      setStart("1");
    }
    setStart(e.target.value || "1");
  };

  const handleSubmit = () => {
    exportUserInfo();
    handleClose();
  };

  useEffect(() => {
    setEnd(translations.length.toString());
    setPreview(transformWords());
  }, [translations]);

  useEffect(() => {
    setPreview(transformWords());
  }, [start, end, isAddIndexes]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Завантажити слова</DialogTitle>
      <DialogContent>
        <Grid container alignItems={"center"} className={styles.content}>
          <TextField
            onChange={handleSetStart}
            value={start || 1}
            variant={"outlined"}
            label={"Почати з"}
            type={"number"}
          />
          -
          <TextField
            onChange={(e) =>
              setEnd(e.target.value || translations.length.toString())
            }
            value={end || translations.length}
            variant={"outlined"}
            label={"Скачати до"}
            type={"number"}
          />
        </Grid>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAddIndexes}
                onChange={(e, checked) => setIsAddIndexes(checked)}
              />
            }
            label="Додати номера"
          />
        </FormGroup>
        <p>Всього: {translations.length}</p>
        <p>Як буде виглядати:</p>
        <div className={styles.preview}>
          <pre>{preview}</pre>
        </div>
        {/*<FormControl>*/}
        {/*  <FormLabel id="demo-radio-buttons-group-label">*/}
        {/*    Тип файлу завантаження*/}
        {/*  </FormLabel>*/}
        {/*  <RadioGroup*/}
        {/*    row*/}
        {/*    aria-labelledby="demo-radio-buttons-group-label"*/}
        {/*    defaultValue="female"*/}
        {/*    name="radio-buttons-group"*/}
        {/*    value={fileExtenstion}*/}
        {/*    onChange={(e) => setFileExtension(e.target.value)}*/}
        {/*  >*/}
        {/*    <FormControlLabel value="txt" control={<Radio />} label=".txt" />*/}
        {/*    <FormControlLabel value="docx" control={<Radio />} label=".docx" />*/}
        {/*  </RadioGroup>*/}
        {/*</FormControl>*/}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Відмінити
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Завантажити слова
        </Button>
      </DialogActions>
    </Dialog>
  );
};
