new Vue({
    el: '#pk_company_income',
    data: {
        iNow: -1, //控制选择的第几个支付方式
        isShowMore: true, //true=更多 false=收起
        bankList: [], //后台返回的
        showBankList: [], //页面展示的
        singleBankInfo: {}, //点击选择的银行信息
        pointNum: 0, //随机生成2位小数
        isShowIncomeForm: true, //是否显示存款表单
        isShowIncomeHelp: false, //是否显示存款帮助
        isShowIncomeSuccess: false, //是否显示存款成功
        isShowIncomeTitle: true, //是否显示公司入款和线上存款tab切换title

        depositAccount: '', //存款人姓名
        depositMoney: '', //存款金额
        orderCode: 0, //附言码
        remark: '', //备注
        depositTime: '', //存款时间
        orderId: '', //订单号
        advs: [], //广告
    },
    created() {
        this.getBankList();
        this.getAdvs();
    },
    mounted() {

        //随机生成2位数点
        while (true) {
            this.pointNum = parseInt(Math.random() * 100);
            if (this.pointNum <= 99 && this.pointNum >= 11) {
                return;
            }
        }

    },
    methods: {
        getBankList() {
            var self = this;
            ajax.post(ifcUrl.COMPANY_INCOME_BANK_LIST).then(function (res) {
                self.bankList = res.data;
                self.bankList.map(function (item) {
                    item.bankIcon = item.bankImg ? item.bankImg : cdnUrl + '/bank/pc/' + item.bankId + '.png';
                })
                self.showBankList = self.bankList.slice(0, 9);
                console.log(self.showBankList)
            }).catch(function (err) {
                toast('error', err)
            })
        },
        //点击更多和收起
        clickMore() {
            this.isShowMore = !this.isShowMore;
            if (this.isShowMore) {
                this.showBankList = this.bankList.slice(0, 9);
            } else {
                this.showBankList = this.bankList
            }
        },
        //生成附言码
        setOrderCode() {
            while (true) {
                this.orderCode = parseInt(Math.random() * 10000);
                if (this.orderCode <= 9999 && this.orderCode >= 1111) {
                    return;
                }
            }
        },
        //选择支付方式
        chooseBankItem(index, item) {
            this.iNow = index;
            this.singleBankInfo = item;
            //禁止重复点击同一个支付方式
            if (!$(".pk-income-banklist-item").eq(index).hasClass('active')) {
                this.setOrderCode();
            }
        },
        copy(value) {
            var clipboard3 = new Clipboard('.pk-copy', {
                text: function () {
                    return value;
                }
            });
            clipboard3.on('success', function (e) {
                setTimeout(function () {
                    toast("success", '复制成功！');
                }, 10)
            });
            clipboard3.on('error', function (e) {
                setTimeout(function () {
                    toast("error", '复制失败！');
                }, 10)
            });
        },
        //点击存款帮助
        clickIncomeHelp() {
            this.isShowIncomeForm = false;
            this.isShowIncomeHelp = true;
            this.isShowIncomeTitle = false;
        },
        //存款帮助返回
        goBack() {
            this.isShowIncomeForm = true;
            this.isShowIncomeHelp = false;
            this.isShowIncomeTitle = true;

        },
        //提交
        clickSubmit() {

            var postData = {
                setId: this.singleBankInfo.id,
                depositAccount: this.depositAccount, //存款人姓名
                depositMoney: this.depositMoney * 1, //存款金额
                orderCode: this.orderCode, //附言码
                remark: this.remark, //备注
                depositTime: Math.floor(+new Date($("#pk_depositTime").find("input").val()) / 1000), //存款时间

            }
            var validate = $('#pk_company_income_form').data('bootstrapValidator').validate();

            if (!validate.isValid()) {
                return;
            }
            console.log(postData);
            var self = this;
            ajax.post(ifcUrl.COMPANY_INCOME_ADD, postData).then(function (res) {
                if (res.data) {
                    self.orderId = res.data;
                    self.isShowIncomeForm = false;
                    self.isShowIncomeSuccess = true;
                    self.isShowIncomeTitle = true;
                    self.resetData();
                    self.getAdvs();
                }

            }).catch(function (err) {
                toast('error', err)
                $('#pk_company_income_form').data("bootstrapValidator").resetForm();

            })
        },
        resetData() {
            this.iNow = -1;
            this.depositAccount = ''; //存款人姓名
            this.depositMoney = ''; //存款金额

            this.setOrderCode(); //重新生成附言码

            this.remark = ''; //备注
            this.singleBankInfo = {};
            this.depositTime = '';
            $("#pk_depositTime").find("input").val('');
            $("#pk_depositTime").find("input").val(strToDate(+new Date() / 1000, 'YYYY-MM-DD HH:mm'));
            $('#pk_company_income_form').data("bootstrapValidator").resetForm();
        },
        //出款成功-确认
        incomeOk() {
            this.isShowIncomeForm = true;
            this.isShowIncomeSuccess = false;
            this.isShowIncomeTitle = true;
        },
        getAdvs() {
            var postData = {
                itype: 2, //广告类型  1 游戏广告 2 其他公告
                typeId: 1, // 游戏类型ID 1 彩票 2 电子 3 视讯 4 棋牌 5 体育  1存款成功 2取款成功
            }
            ajax.post(ifcUrl.ADV_SHOW, postData).then(function (res) {
                var advs = res.data;
                if (advs.length < 1) return;
                $("#pk_carousel").empty();
                advs.forEach(function (item, i) {
                    if (i == 0) {
                        $("#pk_carousel").append("<div onclick='goLink(" + JSON.stringify(item) + ")' class='item active'>" +
                            "<img src='" + item.advImg + "' alt=''>" +
                            "</div>");
                    } else {
                        $("#pk_carousel").append("<div onclick='goLink(" + JSON.stringify(item) + ")' class='item'>" +
                            "<img src='" + item.advImg + "' alt=''>" +
                            "</div>");
                    }
                })

            }).catch(function (err) {
                toast('error', err)
            })
        }
    }
})

function goLink(item) {
    if (item.isLink === 1) { //外链
        if (item.advUrl) {
            window.open(item.advUrl);
        }
    } else {
        if (item.advUrl) {
            window.location.href = item.advUrl;
        }
    }
}


$(document).ready(function () {
    $('#pk_depositTime').datetimepicker({
        language: 'zh-CN',
        // format:'yyyy-mm-dd hh:mm',
        initialDate: new Date(),
        autoclose: 1,
        todayHighlight: 1,
        todayBtn: 1,
        showMeridian: 1,
        pickerPosition: "bottom-left",
        endDate: new Date(),
    });
    $("#pk_depositTime").find("input").val(strToDate(+new Date() / 1000, 'YYYY-MM-DD HH:mm'));
    $('#pk_company_income_form').bootstrapValidator({
            message: '输入值不满足系统要求',
            excluded: [':disabled'],
            // feedbackIcons: {
            //     valid: 'glyphicon glyphicon-ok',
            //     invalid: 'glyphicon glyphicon-remove',
            //     validating: 'glyphicon glyphicon-refresh'
            // },
            live: 'enabled',
            fields: {
                pk_money: {
                    validators: {
                        callback: {
                            message: '请先选择存款账号',
                            callback: function (value, validator, $field) {
                                var isChooseBank = $("[name='isChooseBank']").val();
                                if (isChooseBank == -1) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }
                        },
                        notEmpty: {
                            message: '存款金额不能为空'
                        },

                        between: {
                            min: 'lineDepositMin',
                            max: 'lineDepositMax',
                            message: '存款金额范围%s-%s'
                        },
                        integer: {
                            message: '存款金额只能输入正整数'
                        },
                    }
                },
                pk_depositAccount: {
                    validators: {
                        notEmpty: {
                            message: '请输入存款人姓名'
                        },

                    }
                },
                pk_remark: {
                    validators: {
                        callback: {
                            message: '请输入订单号后4位',
                            callback: function (value, validator, $field) {
                                if (value) {
                                    if (/^\d{4}$/.test(value.toString())) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return true;
                                }
                            }
                        }

                    }
                }

            }
        })

        .on('success.form.bv', function (e) {
            e.preventDefault();
        });
})