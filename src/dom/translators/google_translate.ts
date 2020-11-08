import { DomProcessor } from "../processor";

export class GoogleTranslator implements DomProcessor {
  private readonly textareaLabel = "原文";

  getStr(document: Document): string | undefined {
    const dom = document.querySelector(`[aria-label="${this.textareaLabel}"]`);
    if (dom == null) {
      return undefined;
    }

    const content = dom?.textContent;
    if (content == null) {
      return undefined;
    }

    return content;
  }

  writeStr(document: Document, newValue: string): void {
    const dom = document.querySelector(`[aria-label="${this.textareaLabel}"]`);
    if (dom == null) {
      return;
    }

    const content = dom?.textContent;
    if (content == null) {
      return undefined;
    }

    dom.textContent = newValue;
  }
}
