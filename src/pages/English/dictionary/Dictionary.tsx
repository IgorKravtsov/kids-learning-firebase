import React, { FC, useMemo, useState } from "react";

import { useForm, useWatch } from "react-hook-form";

import { Title } from "components/Title/Title";

import { Form } from "./components/form/Form";
import TranslateList from "./components/translate-list/TranslateList";

import { AddWordForm } from "./interfaces";
import { useLiveTranslations } from "./useLiveTranslations";
import Button from "@mui/material/Button";
import { DownloadModal } from "pages/English/dictionary/components/download-modal/DownloadModal";
import Grid from "@mui/material/Grid";

const Dictionary: FC = () => {
  const [isSaveModalOpened, setIsSaveModalOpened] = useState(false);
  const methods = useForm<AddWordForm>();
  const { control } = methods;

  const { translateWord, engWord } = useWatch<AddWordForm>({ control });
  const { translations } = useLiveTranslations();
  // const [file, setFile] = useState<File | null>(null);

  const filteredTranslations = useMemo(() => {
    return translations.filter((t) => {
      return (
        t.engWord.toLowerCase().includes(engWord?.toLowerCase() ?? "") &&
        t.translate.toLowerCase().includes(translateWord?.toLowerCase() ?? "")
      );
    });
  }, [translateWord, engWord, translations]);

  const handleClose = () => setIsSaveModalOpened(false);

  // const test = () => {
  //   const fr = new FileReader();
  //
  //   const prepareTranslation = (translation: string) => {
  //     const res = translation.trim();
  //     if (res[res.length - 1] === ",") {
  //       return res.slice(0, res.length - 1);
  //     }
  //     return res;
  //   };
  //
  //   fr.onload = async () => {
  //     const result = fr.result
  //       ?.toString()
  //       .split("\t")
  //       .map((t) => t.split(".")[1])
  //       .filter(Boolean)
  //       .map((t) => t.split("\n")[0])
  //       .filter(Boolean)
  //       .map((t) => t.split(" - "))
  //       .reduce((acc, [eng, ...translates]) => {
  //         // @ts-ignore
  //         acc[eng.trim()] = translates.map(prepareTranslation);
  //         return acc;
  //       }, {});
  //     console.log("===fr.result===", result);
  //     if (result) {
  //       await addManyTranslations({ dictionary: result });
  //     }
  //   };
  //
  //   if (file) {
  //     fr.readAsText(file);
  //   }
  // };

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
      {/*<Button onClick={test}>Test</Button>*/}
      {/*<input*/}
      {/*  type={"file"}*/}
      {/*  onChange={(e) => setFile(e.target.files?.[0] ?? null)}*/}
      {/*/>*/}
    </>
  );
};

export default Dictionary;
