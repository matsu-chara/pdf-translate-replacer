import { DomProcessor } from "../processor";

export class DeepLTranslator implements DomProcessor {
  private readonly textareaClassName = "lmt__source_textarea";

  getStr(document: Document): string | undefined {
    const doms = document.getElementsByClassName(this.textareaClassName);
    if (doms.length == 0) {
      return undefined;
    }

    const inputElement = checkIntputElement(doms[0]);
    if (inputElement == undefined) {
      return undefined;
    }

    return inputElement.value;
  }

  writeStr(document: Document, newValue: string): void {
    const doms = document.getElementsByClassName(this.textareaClassName);
    if (doms.length == 0) {
      return;
    }

    const domElement = doms[0];
    const inputElement = checkIntputElement(domElement);
    if (inputElement == undefined) {
      return;
    }

    inputElement.value = newValue;
    domElement.dispatchEvent(
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
