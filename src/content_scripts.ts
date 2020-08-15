import { browser } from "webextension-polyfill-ts";
import * as replacer from "./domain/replacer";
import * as targets from "./domain/targets";
import * as processor from "./dom/processor";

browser.runtime.onMessage.addListener((request) => {
  if (!targets.isInstanceOfTarget(request)) {
    return;
  }
  const domProcessor = processor.getTranslator(request);
  if (domProcessor == undefined) {
    console.error(
      `failed to get a processor corresponding to ${request.typeOfTranslator}`
    );
    return;
  }

  const original = domProcessor.getStr(document);
  if (original == undefined) {
    console.error("failed to get a string from DOM");
    return;
  }

  const replaced = replacer.replace(original);
  domProcessor.writeStr(document, replaced);
});
