chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
    str = get_str();
		str = replace(str);
    write_str(str);
	}
});

function get_str() {
  return document.getElementById("source").value;
}

function replace(str) {
  return str
    .replace(/\n/g," ") // 不自然な改行を除去
    .replace(/-\s/g, "") // ハイフネーション
    .replace(/e\.g\./g, "eg") // e.g.
    .replace(/i\.e\./g, "ie") // i.e.
    .replace(/(\d+)\.(\d+)\.(\d+)/g, "$1_$2_$3") // section 3.2.1
    .replace(/(\d+)\.(\d+)/g, "$1_$2") // section 3.2
    .replace(/\. */g,".\n\n") // 文末で２回改行
    .replace(/\? */g,"?\n\n"); // 疑問文で２回改行
}

function write_str(str) {
  return document.getElementById("source").value = str;
}
