import { DomProcessor } from "../processor";

export class GoogleTranslator implements DomProcessor {
  private readonly textareaLabel = "原文";

  getStr(document: Document): string | undefined {
    const dom = document.querySelector(`[aria-label="${this.textareaLabel}"]`);
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
    const dom = document.querySelector(`[aria-label="${this.textareaLabel}"]`);
    if (dom == null) {
      return;
    }

    const domValue = checkHasValue(dom);
    if (domValue == undefined) {
      return undefined;
    }

    (dom as HTMLTextAreaElement).value = newValue;
  }
}

const checkHasValue = (dom: Element): { value: string } | undefined => {
  return "value" in dom ? dom : undefined;
};