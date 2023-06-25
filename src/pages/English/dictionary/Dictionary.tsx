import React, { useMemo, useState } from "react";

import { useForm, useWatch } from "react-hook-form";

import { useAuth } from "hooks/useAuth";

import { Title } from "components/Title/Title";

import { Form } from "./components/form/Form";
import TranslateList from "./components/translate-list/TranslateList";

import { AddWordForm } from "./interfaces";
import { useLiveTranslations } from "./useLiveTranslations";
import Button from "@mui/material/Button";
import { DownloadModal } from "pages/English/dictionary/components/download-modal/DownloadModal";
import Grid from "@mui/material/Grid";

const Dictionary: React.FC = () => {
  const [isSaveModalOpened, setIsSaveModalOpened] = useState(false);
  const methods = useForm<AddWordForm>();
  const { control } = methods;

  const { translateWord, engWord } = useWatch<AddWordForm>({ control });
  const { translations } = useLiveTranslations();

  const filteredTranslations = useMemo(() => {
    return translations.filter((t) => {
      return (
        t.engWord.includes(engWord ?? "") &&
        t.translate.includes(translateWord ?? "")
      );
    });
  }, [translateWord, engWord, translations]);

  const handleClose = () => setIsSaveModalOpened(false);

  return (
    <>
      <Title sx={{ mb: 4 }} variant={"h4"}>
        Словничок з англійської мови
      </Title>
      <Form methods={methods} />
      <TranslateList rows={filteredTranslations} />
      <DownloadModal
        open={isSaveModalOpened}
        handleClose={handleClose}
        translations={translations}
      />
      <Grid container justifyContent={"end"}>
        <Button onClick={() => setIsSaveModalOpened(true)}>
          Зберегти слова
        </Button>
      </Grid>
    </>
  );
};

export default Dictionary;
