chrome.extension.onMessage.addListener(function(request, sender, sendResponse) { // eslint-disable-line no-unused-vars
  if (request === "Action") {
    let str = get_str();
    str = replace(str);
    write_str(str);
  }
});

function get_str() {
  return document.getElementById("source").value;
}

function replace(str) {
  return str
    .replace(/\n/g, " ") // 不自然な改行を除去
    .replace(/-\s/g, "") // ハイフネーション
    .replace(/\. +/g, ".\n\n") // 文末で２回改行
    .replace(/\? */g, "?\n\n"); // 疑問文で２回改行
}

function write_str(str) {
  return document.getElementById("source").value = str;
}
