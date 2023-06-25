import {
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "config/firebase.config";

import { usersCollectionName } from "../user/user.types";
import { getUserByEmail } from "../user/user";

import { AddManyTranslationsReq, AddTranslationReq } from "./dictionary.types";

export const userRef = doc(
  db,
  usersCollectionName,
  auth.currentUser?.uid ?? ""
);

export const updateTranslationsForWord = async ({
  englishWord,
  translations,
}: AddTranslationReq) => {
  const user = await getUserByEmail(auth.currentUser?.email ?? "");
  const dict = user?.dictionary ?? {};
  await updateDoc(userRef, {
    dictionary: {
      ...dict,
      [englishWord]: Array.from(new Set(translations)),
    },
  });
};

export const addTranslations = async ({
  englishWord,
  translations,
}: AddTranslationReq) => {
  const user = await getUserByEmail(auth.currentUser?.email ?? "");
  const dict = user?.dictionary ?? {};

  const updatedTranslations = translations.filter(Boolean);

  await updateDoc(userRef, {
    dictionary: {
      ...dict,
      [englishWord]: {
        createdAt: dict?.[englishWord]?.createdAt ?? serverTimestamp(),
        updatedAt: serverTimestamp(),
        translations: Array.from(new Set(updatedTranslations)),
      },
    },
  });
};

export const addManyTranslations = async ({
  dictionary,
}: AddManyTranslationsReq) => {
  const user = await getUserByEmail(auth.currentUser?.email ?? "");
  const dict = user?.dictionary ?? {};

  const requestDict = Object.entries(dictionary).reduce((acc, [key, value]) => {
    // @ts-ignore
    acc[key] = {
      createdAt: dict?.[key] ? dict[key]?.createdAt : serverTimestamp(),
      updatedAt: serverTimestamp(),
      translations: Array.from(new Set(value)),
    };
    return acc;
  }, {});

  await updateDoc(userRef, {
    dictionary: {
      ...dict,
      ...requestDict,
    },
  });
};

export const getLiveDictionary = (cb: (doc: any) => any) => {
  return onSnapshot(userRef, cb);
};

export const deleteOneTranslation = async (engWord: string) => {
  const user = await getUserByEmail(auth.currentUser?.email ?? "");
  const dict = user?.dictionary ?? {};
  delete dict[engWord];
  await updateDoc(userRef, {
    dictionary: dict,
  });
};
