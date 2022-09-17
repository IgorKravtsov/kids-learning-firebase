import { User } from "firebase/auth";

export interface RegisterRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  form: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginRegisterResponse {
  user: User;
}

export interface AppUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  displayName: string | null;
  isAdmin: boolean;
  // providerData: ProviderData[];
  // stsTokenManager: StsTokenManager;
  // createdAt: string;
  // lastLoginAt: string;
  // apiKey: string;
  // appName: string;
}
