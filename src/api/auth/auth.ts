import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";

import {auth, db} from "config/firebase.config";

import {getUserByEmail} from "api/user/user";
import {usersCollectionName} from "api/user/user.types";

import {transformUser} from "utils/transformUser";
import {RegisterRequest} from "./auth.types";

// const usersRef = collection(db, usersCollectionName);

export const registerUser = async ({
  email,
  password,
  ...others
}: RegisterRequest) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const docRef = doc(db, usersCollectionName, response.user.uid);
  await setDoc(docRef, {
    isAdmin: false,
    email,
    ...others,
  });
  return transformUser(response.user);
};

export const loginUser = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  const user = await getUserByEmail(response.user.uid);
  return transformUser(response.user, user);
};

export const logoutUser = async () => {
  return await signOut(auth);
};

// export const updateUser = async (user: AppUser) => {

//   updateCurrentUser(auth, {...user})
// }
