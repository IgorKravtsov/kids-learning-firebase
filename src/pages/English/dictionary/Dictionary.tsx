import React, { useMemo } from "react";

import { useForm, useWatch } from "react-hook-form";

import { Title } from "components/Title/Title";

import { Form } from "./components/form/Form";
import TranslateList from "./components/translate-list/TranslateList";

import { AddWordForm } from "./interfaces";
import { useLiveTranslations } from "./useLiveTranslations";

const Dictionary: React.FC = () => {
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

  return (
    <>
      <Title sx={{ mb: 4 }} variant={"h4"}>
        Словничок з англійської мови
      </Title>
      <Form methods={methods} />
      <TranslateList rows={filteredTranslations} />
    </>
  );
};

export default Dictionary;
