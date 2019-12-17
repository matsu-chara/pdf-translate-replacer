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
    .replace(/\n/g," ")
    .replace(/e\.g\./g, "eg")
    .replace(/(\d+)\.(\d+)/g, "$1_$2")
    .replace(/\. */g,".\n\n")
    .replace(/\? */g,"?\n\n");
}

function write_str(str) {
  return document.getElementById("source").value = str;
}
