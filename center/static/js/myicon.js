/**
 * [setDate 通用日期格式转换]
 * @param {[type]} para [时间戳]
 */
window.setDate = function (para) {
    var newTime = new Date(para * 1000);
    var result = newTime.getFullYear() + "-" + toDouble(newTime.getMonth() + 1) + "-" + toDouble(newTime.getDate()) + " " + toDouble(newTime.getHours()) + ":" + toDouble(newTime.getMinutes()) + ":" + toDouble(newTime.getSeconds());
    return result;
};
window.setDateTime = function (para) {
    var newTime = new Date(para * 1000);
    var result = newTime.getFullYear() + "-" + toDouble(newTime.getMonth() + 1) + "-" + toDouble(newTime.getDate());
    return result;
};
window.setDateTimes = function (para) {
    var newTime = new Date(para * 1000);
    var result = newTime.getFullYear() + "." + toDouble(newTime.getMonth() + 1) + "." + toDouble(newTime.getDate());
    return result;
};
/**
 *getWkDay 获取
 */
function getWkDay(date) {
    var week;
    if (date.getDay() == 0) week = "周日"
    if (date.getDay() == 1) week = "周一"
    if (date.getDay() == 2) week = "周二"
    if (date.getDay() == 3) week = "周三"
    if (date.getDay() == 4) week = "周四"
    if (date.getDay() == 5) week = "周五"
    if (date.getDay() == 6) week = "周六"
    return week;
};





