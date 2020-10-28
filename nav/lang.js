var enlang = {
    download: "APP download",
    service: "Customer service",
    address: "Save permanent update address",
    Safer: "Safer/not lost",
    detection: "Line detection",
    Customer: "Customer service",
    intoGame: "Enter",
    loading: "Loading...",
    Language: "Language",
    station: "Navigation station",
    timeout: "Timeout",
}
var cnlang = {
    download: "APP下载",
    service: "在线客服",
    address: "保存永久更新地址",
    Safer: "更安全/不迷路",
    detection: "线路检测",
    Customer: "联系客服",
    intoGame: "进入游戏",
    loading: "加载中...",
    Language: "多語言",
    station: "导航站",
    timeout: "超时",
}
var tclang = {
    download: "APP下載",
    service: "在線客服",
    address: "保存永久更新地址",
    Safer: "更安全/不迷路",
    detection: "線路檢測",
    Customer: "聯繫客服",
    intoGame: "進入遊戲",
    loading: "加載中...",
    Language: "多語言",
    station: "導航站",
    timeout: "超時",
}
var thlang = {
    download: "ดาวน์โหลด APP",
    service: "ติดต่อฝ่ายบริการลกูค้า",
    address: "บันทึกที่อยู่อัพเดตถาวร",
    Safer: "ปลอดภัยกว่า / ไม่สูญหาย",
    detection: "การตรวจจับเส้น",
    Customer: "ติดต่อฝ่ายบริการลกูค้า",
    intoGame: "เข้าสู่เกม",
    loading: "กาลังโหลด",
    Language: "หลายภาษา",
    station: "สถานีนำทาง",
    timeout: "หมดเวลา",
}
var vilang = {
    download: "APP tải",
    service: "Liên hệ",
    address: "Lưu địa chỉ cập nhật vĩnh viễn",
    Safer: "An toàn / không bị mất",
    detection: "Phát hiện dòng",
    Customer: "Liên hệ",
    intoGame: "đi vào",
    loading: "Đang tải",
    Language: "đa ngôn ngữ",
    station: "Trạm điều hướng",
    timeout: "Hết giờ",
}
//cookie
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function setCookie(name,value,day) {
    var exp = new Date();
    exp.setTime(exp.getTime() + day*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString();
}
var i18n = enlang;
var langList = [];

var BASE_URL = window.location.origin + '/app/api/navigation';

function judgeLang(thisLang){
    switch(thisLang){
        case 'zh_TC':
            i18n = tclang;
            break;
        case 'en':
            i18n = enlang;
            break;
        case 'vi':
            i18n = vilang;
            break;
        case 'th':
            i18n = thlang;
            break;
    }
}
function rendering(){
    $(".footer .Customer").text(i18n.Customer)
    $(".nav-download .text").text(i18n.download)
    $(".nav-contact .text").text(i18n.Customer)
}
$.ajax({
    url: BASE_URL + '/lang',
    method: 'post',
    async: false,
}).then((res)=> {
    if(res.message){
        langList = res.data;
        res.data.map(item=>{
            if(item.isDefault === 1){
                getCookie('lang')? '':setCookie("lang",item.defaultLangCode)
                judgeLang(getCookie('lang'))
                rendering()
                $("html").attr("lang",getCookie('lang'));
            }
        })
    }else{
        alert(res.msg);
    }
})