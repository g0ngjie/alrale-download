/**
 * a标签文件下载
 * @param {String} target 字符串
 * @param {String} fileName 文件名
 * @example
 * ```
 * simpleDownload(JSON.stringify({ alrale: 'simpleDownload' }, null, '\t'), 'alrale.json')
 * ```
 */
exports.simpleDownload = function (target, fileName) {
  const element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + target);
  element.setAttribute("download", fileName);
  element.style.display = "none";
  element.click();
};

// TODO: 这个需要完善
exports.blobDownload = function (url, type, method = "get") {
  const xhh = new XMLHttpRequest();
  xhh.open(method, url);
  xhh.responseType = "blob";
  // xhh.setRequestHeader("Content-Type", 'application/json;charset=utf-8');
  xhh.onreadystatechange = function () {
    if (xhh.readyState === 4 && xhh.status === 200) {
      // const name = xhh.getResponseHeader("Content-Disposition");
      // const filename = name.substring(20, name.length);
      // const fileName = name && name.split(';')[1].split('filename=')[1];
      // console.log("[debug]fileName:", fileName)
      const blob = new Blob([xhh.response]);
      const csvUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = csvUrl;
      link.target = "_blank";
      link.download = "fake." + type;
      link.click();
    }
  };
  xhh.send();
};
