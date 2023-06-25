import { useEffect, useState } from "react";

import { Timestamp } from "firebase/firestore";

import { getLiveDictionary } from "api/dictionary/dictionary";
import { EnglishTranslationGrid } from "./interfaces";

export const useLiveTranslations = () => {
  const [translations, setTranslations] = useState<EnglishTranslationGrid[]>(
    []
  );

  useEffect(() => {
    const unSub = getLiveDictionary((doc: any) => {
      const tmp: EnglishTranslationGrid[] = [];
      for (const eng in doc.data()?.dictionary) {
        const current = doc.data()?.dictionary[eng];
        const translate = current.translations.join(", ");
        tmp.push({
          id: eng,
          engWord: eng,
          translate,
          createdAt: new Timestamp(
            current.createdAt.seconds,
            current.createdAt.nanoseconds
          ).toDate(),
          updatedAt: new Timestamp(
            current.updatedAt.seconds,
            current.updatedAt.nanoseconds
          ).toDate(),
        });
      }
      setTranslations(tmp);
    });
    return () => unSub();
  }, []);

  return { translations };
};
