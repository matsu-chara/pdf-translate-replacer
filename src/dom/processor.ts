import { Target, TypeOfTranslator } from "../domain/targets";
import { GoogleTranslator } from "./translators/google_translate";
import { DeepLTranslator } from "./translators/deep_l";

export interface DomProcessor {
  getStr(document: Document): string | undefined;
  writeStr(document: Document, newValue: string): void;
}

export const getTranslator = (target: Target): DomProcessor | undefined => {
  switch (target.typeOfTranslator) {
    case TypeOfTranslator.GOOGLE_TRANSLATE:
      return new GoogleTranslator();
    case TypeOfTranslator.DEEP_L:
      return new DeepLTranslator();
    default:
      return undefined;
  }
};
