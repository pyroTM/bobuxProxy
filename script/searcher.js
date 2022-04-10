function encode(str) {
    if (!str) return str;
    return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
};
function searcher() {
  var input = document.getElementById("searchBox").value;
  if (parseInt(input) === null) return;
  var urlObj = new window.URL(window.location.href); var url = "https://cdn.bobux.gq/service/" + encode("https://" + input); if (url) { var win;{ if (win) { win.focus(); } else { win = window.open(); win.document.body.style.margin = '0'; win.document.body.style.height = '100vh'; var iframe = win.document.createElement('iframe'); iframe.style.border = 'none'; iframe.style.width = '100%'; iframe.style.height = '100%'; iframe.style.margin = '0'; iframe.src = url; win.document.body.appendChild(iframe)}}}}
