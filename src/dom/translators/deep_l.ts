import { DomProcessor } from "../processor";

export class DeepLTranslator implements DomProcessor {
  private readonly textareaClassName = "lmt__source_textarea";

  getStr(document: Document): string | undefined {
    const doms = document.getElementsByClassName(this.textareaClassName);
    if (doms.length == 0) {
      console.log("can't get DOM");
      return undefined;
    }

    const inputElement = checkIntputElement(doms[0]);
    if (inputElement == undefined) {
      console.log("checkIntputElement failed");
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

const checkIntputElement = (dom: Element): HTMLTextAreaElement | undefined => {
  if (dom instanceof HTMLTextAreaElement) {
    return dom;
  }

  return undefined
};
