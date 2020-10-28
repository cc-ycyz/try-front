new Vue({
    el: '#pk_online_income',
    data: {
        iNow: -1, //控制选择的第几个支付方式
        isShowMore: true, //true=更多 false=收起
        bankList: [], //后台返回的
        showBankList: [], //页面展示的
        singleBankInfo: {}, //点击选择的银行信息
        isShowIncomeForm: true, //是否显示存款表单
        isShowIncomeHelp: false, //是否显示存款帮助
        isShowIncomeSuccess: false, //是否显示存款成功
        isShowIncomeSuccessInfo:false,//是否显示存款成功-详情
        isShowIncomeCompleteInfo:false,//是否显示存款完成-详情
        isShowIncomeTitle: true, //是否显示公司入款和线上存款tab切换title
        fastMoneyList: [100000, 50000, 10000, 5000, 1000, 500, 200, 100],
        iFastNow: '', //控制快捷选择的金额

        depositMoney: '', //存款金额
        remark: '',
        pointNum: '00', //随机生成2位数点
    },
    created() {
        this.getBankList();
        this.getAdvs();
    },
    mounted() {},
    methods: {
        getBankList() {
            var self = this;
            ajax.post(ifcUrl.ONLINE_INCOME_BANK_LIST).then(function (res) {
                self.bankList = res.data;
                self.bankList.map(function (item) {
                    item.bankIcon = cdnUrl + '/setPay/pc/' + item.payType + '.png';
                })
                self.showBankList = self.bankList.slice(0, 9);
            }).catch(function (err) {
                toast('error', err)
            })
        },
        setPointNum() {
            //随机生成2位数点
            if (this.singleBankInfo.isRandom === 1) {
                while (true) {
                    this.pointNum = parseInt(Math.random() * 100);
                    if (this.pointNum <= 99 && this.pointNum >= 11) {
                        return;
                    }
                }
            } else {
                this.pointNum = '00';
            }
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
        //选择支付方式
        chooseBankItem(index, item) {
            this.iNow = index;
            this.singleBankInfo = item;
            //禁止重复点击同一个支付方式
            if (!$(".pk-income-banklist-item").eq(index).hasClass('active')) {
                this.getBankSelect(item.payId);
                this.setPointNum();
            }
        },
        //点击存款帮助
        clickIncomeHelp() {
            this.isShowIncomeForm = false;
            this.isShowIncomeHelp = true;
            this.isShowIncomeTitle = false;
        },
        //存款帮助返回
        goBackHelp() {
            this.isShowIncomeForm = true;
            this.isShowIncomeHelp = false;
            this.isShowIncomeTitle = true;
        },
        //获取银行下拉框
        getBankSelect(payId) {
            ajax.post(ifcUrl.ONLINE_INCOME_BANK_SELECT, {
                payId: payId.toString(),
            }).then(function (res) {
                console.log(res)
                var data = res.data;
                var options = [];
                data.forEach(function (item, index) {
                    var option = '<option value="' + item.bankCode + '">' + item.bankName + '</option>';
                    options.push(option);
                })
                $('#pk_bank_select')[0].innerHTML = options.join('');
                $('#pk_bank_select').selectpicker('refresh');

            }).catch(function (err) {
                toast('error', err)
            })
        },
        //提交
        clickSubmit() {
            var self = this;
            var postData = {
                depositMoney: this.depositMoney * 1 + this.pointNum / 100,
                paidType: this.singleBankInfo.payType * 1,
                isFast: 2, ////是否快速充值 1是2否
                setId: this.singleBankInfo.id,
                remark: this.remark
            }
            if (!postData.paidType) {
                setTimeout(function () {
                    toast('error', '请选择支付方式');
                },10)
                return;
            }
            if (!$("#pk_bank_select").val()) {
                setTimeout(function () {
                    toast('error', '请选择银行');
                },10)
                return;
            }
            if (!postData.depositMoney) {
                setTimeout(function () {
                    toast('error', '请输入存款金额');
                },10)
                return;
            }
            if (postData.depositMoney > this.singleBankInfo.singleMax || postData.depositMoney < this.singleBankInfo.singleMin) {
                setTimeout(function () {
                    toast('error', '存款范围' + self.singleBankInfo.singleMin + '~' + self.singleBankInfo.singleMax);
                },10)
                return;
            }
            ajax.post(ifcUrl.ONLINE_INCOME_ADD, postData).then(function (res) {
                if (res) {
                    self.orderId = res.data;

                    self.isShowIncomeForm = false;
                    self.isShowIncomeSuccess = true;
                    self.isShowIncomeSuccessInfo = true;
                    self.isShowIncomeCompleteInfo = false;
                    self.isShowIncomeTitle = true;

                    $("#order").val(res.data);
                    $("#s_amount").val(postData.depositMoney);
                    $("#bank_v").val($("#pk_bank_select").val());
                    $("#payid").val(self.singleBankInfo.payId);
                    $('#paytype').val(self.singleBankInfo.payType);
                    $('#businessnum').val(self.singleBankInfo.businessNum);
                    $('#merId').val(self.singleBankInfo.merId);
                    document.getElementById("confirm1").submit();
                    self.resetData();
                }

            }).catch(function (err) {
                toast('error', err)
            })

        },
        resetData() {
            this.iNow = -1;
            this.depositMoney = ''; //存款金额
            this.remark = ''; //备注
            this.singleBankInfo = {};
            this.iFastNow = '';
            $('#pk_bank_select').selectpicker('val', '');
            $('#pk_bank_select')[0].innerHTML = '';
                $('#pk_bank_select').selectpicker('refresh');
            this.setPointNum();
        },
        //出款成功-去已完成存款
        goCompplete() {
            this.isShowIncomeSuccess = true;
            this.isShowIncomeSuccessInfo = false;
            this.isShowIncomeCompleteInfo = true;
        },
        //寻找其他支付方式和完成存款-确认
        goBack() {
            this.isShowIncomeForm = true;
            this.isShowIncomeSuccess = false;
            this.isShowIncomeTitle = true;
            this.resetData();

        },
        chooseFastMoney(index) {
            this.iFastNow = index;
            this.depositMoney = this.fastMoneyList[this.iFastNow];
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


