import { RegisterRequest } from "api/auth/auth.types";

export interface SubmitRegisterData extends RegisterRequest {
  confirmPass: string;
}
