import { useEffect, useState } from "react";

import { getLiveDictionary } from "api/dictionary/dictionary";
import { Timestamp } from "firebase/firestore";
import { GermanTranslationGrid } from "pages/English/dictionary/interfaces";

export const useLiveTranslations = () => {
  const [translations, setTranslations] = useState<GermanTranslationGrid[]>([]);

  useEffect(() => {
    const unSub = getLiveDictionary((doc: any) => {
      const tmp: GermanTranslationGrid[] = [];
      const dict = doc.data()?.germanDictionary;
      for (const german in dict) {
        const current = dict[german];

        const translate = current.translations.join(", ");
        tmp.push({
          id: german,
          germanWord: german,
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
