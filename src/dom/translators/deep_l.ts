import { DomProcessor } from "../processor";

export class DeepLTranslator implements DomProcessor {
  private readonly textareaClassName = "lmt__source_textarea";

  getStr(document: Document): string | undefined {
    const doms = document.getElementsByClassName(this.textareaClassName);
    if (doms.length == 0) {
      return undefined;
    }

    const dom = checkHasValue(doms[0]);
    if (dom == undefined) {
      return undefined;
    }

    return dom.value;
  }

  writeStr(document: Document, newValue: string): void {
    const doms = document.getElementsByClassName(this.textareaClassName);
    if (doms.length == 0) {
      return;
    }

    const dom = checkHasValue(doms[0]);
    if (dom == undefined) {
      return;
    }

    dom.value = newValue;
  }
}

const checkHasValue = (dom: Element): { value: string } | undefined => {
  return "value" in dom ? dom : undefined;
};
