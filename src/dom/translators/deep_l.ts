import { DomProcessor } from "../processor";

export class DeepLTranslator implements DomProcessor {
  private readonly domSelector = "textarea";

  getStr(document: Document): string | undefined {
    const dom = document.querySelector(this.domSelector);
    if (dom == null) {
      console.log("can't get DOM");
      return undefined;
    }

    const inputElement = checkIntputElement(dom);
    if (inputElement == undefined) {
      console.log("checkIntputElement failed");
      return undefined;
    }

    return inputElement.value;
  }

  writeStr(document: Document, newValue: string): void {
    const dom = document.querySelector(this.domSelector);
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

const checkIntputElement = (dom: Element): HTMLTextAreaElement | undefined => {
  if (dom instanceof HTMLTextAreaElement) {
    return dom;
  }

  return undefined
};
