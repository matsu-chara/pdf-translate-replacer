import { DomProcessor } from "../processor";

export class GoogleTranslator implements DomProcessor {
  private readonly textareaId = "source";

  getStr(document: Document): string | undefined {
    const dom = document.getElementById(this.textareaId);
    if (dom == null) {
      return undefined;
    }

    const domValue = checkHasValue(dom);
    if (domValue == undefined) {
      return undefined;
    }

    return domValue.value;
  }

  writeStr(document: Document, newValue: string): void {
    const dom = document.getElementById(this.textareaId);
    if (dom == null) {
      return;
    }

    const domValue = checkHasValue(dom);
    if (domValue == undefined) {
      return;
    }

    domValue.value = newValue;
  }
}

const checkHasValue = (dom: Element): { value: string } | undefined => {
  return "value" in dom ? dom : undefined;
};
