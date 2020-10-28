var timer = '';
$(function () {
    // $('#pk_header').load('/member/pk-header.tpl');
    // $('#navigation').load('./navigation.html');
    //顶部菜单
    $('.pk-nav ul li').click(function () {
        $('.pk-nav ul li').removeClass('active');
        $(this).addClass('active');
    });
    //-----左侧菜单
    $('.pk-left-nav ul li').click(function () {
        $('.pk-left-nav ul li').removeClass('active');
        $(this).addClass('active');
    });

    //-----模态框
    $('.pk-open-modal').click(function () {
        $('body').addClass('pk-modal-open');
    })
    $('.pk-modal-btn div ,.pk-close-modal').click(function () {
        $('.pk-modal').fadeOut(300);
        $('body').removeClass('pk-modal-open');
    });
    //-----处理全局点击，隐藏提示弹出框
    $(document).click(function () {
        clearTimeout(timer);
        $(".pk-alert-success").fadeOut(200);
        $(".pk-alert-error").fadeOut(200);
        $(".pk-alert").hide();
    });
});

//提示
/**
 *
 * @param {*} type  string success=成功 error=失败
 * @param {*} desc  成功，失败的描述语句
 * @param {*} timeout  多少秒自动关闭 默认3000
 */
window.toDouble = function (iNum) {
    if (iNum < 10) {
        return '0' + iNum;
    } else {
        return '' + iNum;
    }
};

function toast(type, desc, timeout) {
    $(".pk-alert .pk-alert-success,.pk-alert .pk-alert-error").hide();
    $(".pk-alert").stop().hide();
    clearTimeout(timer);
    timeout = timeout || 1500;
    if (type == "success") {
        desc = desc || '操作成功';
        $(".pk-alert").stop().show().find(".pk-alert-success").fadeIn().find(".desc").html(desc);
        clearTimeout(timer);
        timer = setTimeout(function () {
            $(".pk-alert").stop().hide().find(".pk-alert-success").fadeOut(200);
        }, timeout)

    } else if (type == "error") {
        desc = desc || '操作失败';
        $(".pk-alert").stop().show().find(".pk-alert-error").fadeIn().find(".desc").html(desc);
        clearTimeout(timer);
        timer = setTimeout(function () {
            $(".pk-alert").stop().hide().find(".pk-alert-error").fadeOut(200);
        }, timeout)
    }
}

//-----时间过滤器
Vue.filter('fiterTime', function (time) {
    if (time == 0) {
        var date = '';
        return date;
    } else {
        var timezone = 8; //目标时区时间，东八区
        var offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
        var nowDate = new Date(time * 1000).getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
        var targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
        var yy = targetDate.getFullYear();
        var MM = targetDate.getMonth() + 1;
        MM = MM < 10 ? '0' + MM : MM;
        var dd = targetDate.getDate();
        dd = dd < 10 ? '0' + dd : dd;
        var hh = targetDate.getHours();
        hh = hh < 10 ? '0' + hh : hh;
        var mm = targetDate.getMinutes();
        mm = mm < 10 ? '0' + mm : mm;
        var ss = targetDate.getSeconds();
        ss = ss < 10 ? '0' + ss : ss;
        var date = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;

        return date;
    }
});
//-----时间过滤器
Vue.filter('fiterDate', function (time) {
    if (time == 0) {
        var date = '';
        return date;
    } else {
        var times = JSON.parse(time)
        var timezone = 8; //目标时区时间，东八区
        var offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
        var nowDate = new Date(times * 1000).getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
        var targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
        var yy = targetDate.getFullYear();
        var MM = targetDate.getMonth() + 1;
        MM = MM < 10 ? '0' + MM : MM;
        var dd = targetDate.getDate();
        dd = dd < 10 ? '0' + dd : dd;
        var date = yy + '-' + MM + '-' + dd;

        return date;
    }
});

function strToDate(time) {
    if (time == 0) {
        var date = '';
        return date;
    } else {
        var timezone = 8; //目标时区时间，东八区
        var offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
        var nowDate = new Date(time * 1000).getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
        var targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
        var yy = targetDate.getFullYear();
        var MM = targetDate.getMonth() + 1;
        MM = MM < 10 ? '0' + MM : MM;
        var dd = targetDate.getDate();
        dd = dd < 10 ? '0' + dd : dd;
        var hh = targetDate.getHours();
        hh = hh < 10 ? '0' + hh : hh;
        var mm = targetDate.getMinutes();
        mm = mm < 10 ? '0' + mm : mm;
        var ss = targetDate.getSeconds();
        ss = ss < 10 ? '0' + ss : ss;
        var date = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;

        return date;
    }
}

//ajax--------
var address = "/api";

function Ajax() {
}

Ajax.prototype = {
    ajax: function (type, url, data, timeout) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: type,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'platform': "pc"
                },
                url: address + url,
                data: data,
                timeout: timeout || 100000,
                success: function (resp) {
                    console.log('success:', resp);
                    resolve(resp);
                },
                error: function (resp) {
                    reject(resp);
                }
            });
        })
    },
    post: function (url, data) {
        $('.pk-loading').fadeIn(200);
        var _this = this;
        data = data ? JSON.stringify(data) : '';
        return new Promise(function (resolve, reject) {
            _this.ajax("POST", url, data).then(function (res) {
                $('.pk-loading').fadeOut(200, function () {
                    resolve(res);
                })
            }).catch(function (error) {
                $('.pk-loading').fadeOut(200, function () {
                    if (error.status == 404) {
                        toast("error", '请求错误！请联系客服。');
                    } else if (error.status == 504) {
                        toast("error", '请求超时，请稍后再试！');
                        //-----TODO:处理504事件;
                    } else if (error.status == 401) {
                        toast("error", error.responseJSON.msg);
                        //-----TODO:处理401事件;
                    } else {
                        if (error.responseJSON.code == 8232) {
                            toast("error", error.responseJSON.msg);
                            //-----TODO:处理401事件;
                        } else {
                            console.log(error.responseJSON.msg, '111');
                            errStr = error.responseJSON.msg || '请求失败，请重试！';
                            reject(errStr);
                        }
                    }
                })
            })
        })

    }
};
var ajax = new Ajax();

window.toDouble = function (iNum) {
    if (iNum < 10) {
        return '0' + iNum;
    } else {
        return '' + iNum;
    }
};
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
window.strToDate = function (date, fmt) {
    if (!fmt) {
        fmt = 'YYYY-MM-DD HH:mm:ss'
    }
    if (!date) {
        return '';
    }
    if (typeof date === 'number') {
        date = new Date(date * 1000);
    }
    var o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }
    var week = {
        '0': '\u65e5',
        '1': '\u4e00',
        '2': '\u4e8c',
        '3': '\u4e09',
        '4': '\u56db',
        '5': '\u4e94',
        '6': '\u516d'
    }
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + ''])
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    console.log(fmt);
    return fmt
}
window.makeTimes = function (value){
    var str = Math.round(parseInt((new Date(value)).valueOf()) / 1000);
    if (isNaN(str)) { str = 0}
    return str
}

window.filter_doType = function (value) {
    var status = "";
    if (value === 1) {
        status = "入款";
    } else if (value === 2) {
        status = "出款";
    }
    return status;
}


/**
 * 将数值四舍五入(保留2位小数)后格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
window.formatCurrency = function (num) {
    // if(!num)return
    // console.log(typeof(num),123456)
    if(typeof(num)=='undefined'){
        return 0
    }
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}

window.fixmsg = function(msg, len) {
    if (msg.length > len) {
        return msg.slice(0, len) + "...";
    } else {
        return msg;
    }
}


//--------接口地址
var ifcUrl = {
    TEST_LIST: "/member/pay/list",
    SPERAD_INFO: "/spread/info",
    SPERAD_PROPORTION: "/spread/proportion",
    LEADER_BOARD: "/leader/board",
    LEADER_RECORD: "/rebate/record",
    MESSAGE_LIST: "/message/list",
    TRANS_MEMBERINFO: '/memberconversion/memberinfo', //获取会员系统余额和额度转换厂商列表
    TRANS_IN_OUT: '/memberconversion/balance', //转入、转出
    TRANS_FAST_BACK: '/memberconversion/balanceall', //一键归户
    TRANS_FAST_GET: '/balance/ratio/get', //获取快捷转入设置
    TRANS_FAST_SET: '/balance/ratio/edit', //设置快捷转入设置,
    MESSAGE_INFO: "/message/info",
    MESSAGE_DEL: "/message/delete",
    NOTICE_LIST: "/notice/list",
    TRANS_FAST_SET: '/balance/ratio/edit', //设置快捷转入设置
    // ---取款
    MEMBER_OUT: "/member/out",
    MEMBER_OUT_INFO: "/member/out/info",
    MEMBER_BANK_INFO: "/member/onlineout/bankinfo", //出款银行信息
    MEMBER_ON: "/member/carryOn", //继续出款
    PLATFORM_TYPE: "/new/platform/type",
    PLATFORM_NAME: "/new/platform/name",
    MEMBER_RECORD: "/new/member/record",

    INDEXINFO: '/member/info', //首页个人资料

    COMPANY_INCOME_BANK_LIST: '/member/company/list', //公司入款银行列表
    COMPANY_INCOME_ADD: '/member/company/add', //提交公司入款
    ADV_SHOW: '/adv/show', //存取款广告
    ONLINE_INCOME_ADD: '/member/online/add', //提交线上入款
    ONLINE_INCOME_BANK_LIST: '/member/pay/list', //线上入款列表银行列表
    ONLINE_INCOME_BANK_SELECT: '/pay/payBank', //线上入款 线上网银可用银行下拉



    INDEXINFO: '/member/info',//首页个人资料,
    MEMBERSELF_LIST: '/memberself/list',
    MEMBERSELF_GETCOUNT: '/memberself/getcount',
    MEMBERSELF_ADD: '/memberself/add',
    MEMBER_TODAY: '/member/today',
    PLATFORM_TYPE: "/new/platform/type", //交易记录 头部
    PLATFORM_NAME: "/new/platform/name", //交易记录 子级
    MEMBER_RECORD: "/new/member/record", //交易记录 列表
    CASH_DROP: "/cash/drop", //往来记录 下拉
    MEMBER_CASH: "/member/cash", //往来记录 列表//修改资料
    AUDIT_INFO: '/audit/info',//及时稽核
    MEMBER_REPORT:"/member/report", //报表统计
    INDEXINFO:'/member/info',//首页个人资料
    INFOEDIT:'/member/info/edit',//修改资料
    //密码
    GETPASSWORD: '/withdrawal/password/get',//查看是否有取款密码
    MOD_PASSWORD:'/member/password/edit ',//修改密码
    //银行卡
    BANKLIST:'/member/bank',//获取银行卡列表
    BANK_HASNAME: '/username/exist',//是否已有户主名
    BANK_INFO: '/bank/list', //银行卡下拉框
    BANK_ADD: '/member/bank/add',//添加银行卡
    SETBANKDEFAULT: '/member/bank/setDefault',//设置默认银行卡

}