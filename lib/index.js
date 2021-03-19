
/**
 * a标签文件下载
 * @param target 字符串
 * @param fileName 文件名
 * @example
 * ```
 * simpleDownload(JSON.stringify({ alrale: 'simpleDownload' }, null, '\t'), 'alrale.json')
 * ```
 */
exports.simpleDownload = function (target, fileName) {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + target)
    element.setAttribute('download', fileName)
    element.style.display = 'none'
    element.click()
}