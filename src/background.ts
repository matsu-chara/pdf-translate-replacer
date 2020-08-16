import { browser, Tabs } from "webextension-polyfill-ts";
import * as targets from "./domain/targets";

const tabUpdateListener = async (
  tabId: number,
  tab: Tabs.Tab
): Promise<void> => {
  if (tab.url == undefined) {
    return;
  }

  const found = targets.findTarget(tab.url);
  if (found == undefined) {
    return;
  }
  await browser.pageAction.show(tabId);
};

const onClickedListener = async (tab: Tabs.Tab): Promise<void> => {
  if (tab.url == undefined || tab.id == undefined) {
    return;
  }

  const found = targets.findTarget(tab.url);
  if (found == undefined) {
    return;
  }
  await browser.tabs.sendMessage(tab.id, found);
};

browser.tabs.onUpdated.addListener((tabId, _, tab) => {
  void tabUpdateListener(tabId, tab);
});

browser.pageAction.onClicked.addListener((tab) => {
  void onClickedListener(tab);
});
