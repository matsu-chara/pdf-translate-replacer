import { DomProcessor } from "../processor";

export class DeepLTranslator implements DomProcessor {
  private readonly domSelector =
    'd-textarea[name="source"] > div[contenteditable="true"]';

  getStr(document: Document): string | undefined {
    const dom = document.querySelector(this.domSelector);
    if (dom == null) {
      console.log("can't get DOM");
      return undefined;
    }

    const text = dom.textContent;
    if (text == null) {
      console.log("textContent is null");
      return undefined;
    }
    return text;
  }

  writeStr(document: Document, newValue: string): void {
    const dom = document.querySelector(this.domSelector);
    if (dom == null) {
      return;
    }

    dom.textContent = newValue;
    dom.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }
}
