export enum TypeOfTranslator {
  GOOGLE_TRANSLATE,
  DEEP_L,
}

export interface Target {
  urlPrefix: string;
  typeOfTranslator: TypeOfTranslator;
}

const targets: Target[] = [
  {
    urlPrefix: "https://translate.google",
    typeOfTranslator: TypeOfTranslator.GOOGLE_TRANSLATE,
  },
  {
    urlPrefix: "https://www.deepl.com/",
    typeOfTranslator: TypeOfTranslator.DEEP_L,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isInstanceOfTarget = (obj: any): obj is Target => {
  return "urlPrefix" in obj;
};

export const findTarget = (url: string): Target | undefined => {
  return targets.find((t) => url.startsWith(t.urlPrefix));
};
