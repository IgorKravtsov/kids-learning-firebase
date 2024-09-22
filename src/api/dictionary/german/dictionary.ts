import {
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "config/firebase.config";

import { usersCollectionName } from "../../user/user.types";
import { getUserByEmail } from "../../user/user";

import { AddTranslationReq } from "./dictionary.types";

export const userRef = doc(
  db,
  usersCollectionName,
  auth.currentUser?.uid ?? ""
);

export const updateTranslationsForWord = async ({
  germanWord,
  translations,
}: AddTranslationReq) => {
  const user = await getUserByEmail(auth.currentUser?.email ?? "");
  const dict = user?.germanDictionary ?? {};
  await updateDoc(userRef, {
    germanDictionary: {
      ...dict,
      [germanWord]: Array.from(new Set(translations)),
    },
  });
};

export const addTranslations = async ({
  germanWord,
  translations,
}: AddTranslationReq) => {
  const user = await getUserByEmail(auth.currentUser?.email ?? "");
  const dict = user?.germanDictionary ?? {};

  const updatedTranslations = translations.filter((t) => !!t);

  await updateDoc(userRef, {
    germanDictionary: {
      ...dict,
      [germanWord]: {
        createdAt: dict?.[germanWord]?.createdAt ?? serverTimestamp(),
        updatedAt: serverTimestamp(),
        translations: Array.from(new Set(updatedTranslations)),
      },
    },
  });
};

export const getLiveDictionary = (cb: (doc: any) => any) => {
  return onSnapshot(userRef, cb);
};

export const deleteOneTranslation = async (germanWord: string) => {
  const user = await getUserByEmail(auth.currentUser?.email ?? "");
  const dict = user?.germanDictionary ?? {};
  delete dict[germanWord];
  await updateDoc(userRef, {
    germanDictionary: dict,
  });
};
