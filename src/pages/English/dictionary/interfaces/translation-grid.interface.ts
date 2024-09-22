import { EnglishTranslation, GermanTranslation } from "interfaces";

export interface GermanTranslationGrid extends GermanTranslation {
  id: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface EnglishTranslationGrid extends EnglishTranslation {
  id: string;
  createdAt?: any;
  updatedAt?: any;
}
