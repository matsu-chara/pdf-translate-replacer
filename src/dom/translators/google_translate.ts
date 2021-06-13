import { DomProcessor } from "../processor";

export class GoogleTranslator implements DomProcessor {
  private readonly textareaLabel = "原文";

  getStr(document: Document): string | undefined {
    const dom = document.querySelector(`[aria-label="${this.textareaLabel}"]`);
    if (dom == null) {
      return undefined;
    }

    const inputElement = checkIntputElement(dom);
    if (inputElement == undefined) {
      return undefined;
    }

    return inputElement.value;
  }

  writeStr(document: Document, newValue: string): void {
    const dom = document.querySelector(`[aria-label="${this.textareaLabel}"]`);
    if (dom == null) {
      return;
    }

    const inputElement = checkIntputElement(dom);
    if (inputElement == undefined) {
      return;
    }
    inputElement.value = newValue;
    dom.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }
}

const checkIntputElement = (dom: Element): HTMLInputElement | undefined => {
  if (dom instanceof HTMLInputElement) {
    return dom;
  }

  return undefined
};
