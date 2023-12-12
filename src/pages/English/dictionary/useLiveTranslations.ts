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
      const dict = doc.data()?.dictionary;
      for (const eng in dict) {
        const current = dict[eng];
        const translate = current.translations.join(", ");
        tmp.push({
          id: eng,
          engWord: eng,
          translate,
          createdAt: current.createdAt
            ? new Timestamp(
                current.createdAt?.seconds,
                current.createdAt?.nanoseconds
              ).toDate()
            : new Date(),
          updatedAt: current.updatedAt
            ? new Timestamp(
                current.updatedAt?.seconds,
                current.updatedAt?.nanoseconds
              ).toDate()
            : new Date(),
        });
      }
      setTranslations(tmp);
    });
    return () => unSub();
  }, []);

  return { translations };
};
