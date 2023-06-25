export interface AddTranslationReq {
  englishWord: string;
  translations: string[];
}

export interface AddManyTranslationsReq {
  dictionary: Record<string, string[]>;
}
