import browser, { Tabs } from "webextension-polyfill";
import * as targets from "./domain/targets";

const tabUpdateListener = async (
  tabId: number,
  tab: Tabs.Tab
): Promise<void> => {
  if (tab.url == undefined) {
    return;
  }

  const found = targets.findTarget(tab.url);
  if (found) {
    await browser.action.enable(tabId);
  } else {
    await browser.action.disable(tabId);
  }
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

browser.action.onClicked.addListener((tab) => {
  void onClickedListener(tab);
});
