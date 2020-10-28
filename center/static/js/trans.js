new Vue({
    el: '#pk_trans',
    data: {
        transInfo: {},
        transSingleInfo: {}, //单条详情
        balanceRatio: '', //快捷转入比例
        dayFirst: false, //是否当天首次
        fastMoneyList: [100000, 50000, 10000, 5000, 1000, 500, 200, 100],
        iFastNow: '', //控制快捷选择的金额
        money: '', //转入/转出金额
        doType: 2, //2= 钱包余额转入视讯/1= 视讯转出钱包余额
    },
    created() {
        this.getTransInfo();
    },
    mounted() {},
    methods: {
        getTransInfo(t) {
            var self = this;
            ajax.post(ifcUrl.TRANS_MEMBERINFO, {
                updateRemote: true
            }).then(function (res) {
                self.transInfo = res.data;
                if (t) {
                    toast('success', '刷新成功');
                }
            }).catch(function (err) {
                toast('error', err);
            })
        },
        refresh() {
            this.getTransInfo(1);
        },

        clickInOrOut(doType, item) {
            $('#pk_trans_in').fadeIn(300);
            $('body').addClass('pk-modal-open');
            this.doType = doType;
            this.transSingleInfo = item;
            this.resetTrans();
        },
        //提交转入转出金额
        transSubmit() {
            var postData = {
                money: +this.money,
                doType: this.doType,
                platformId: this.transSingleInfo.platformId,
                platformName: this.transSingleInfo.platformName
            }
            if (!postData.money) {
                setTimeout(function () {
                    toast('error','请输入或选择转换金额')
                },10)
                return;
            }
            if (postData.doType === 1) { //转出
                if (postData.money > this.transSingleInfo.balance) {
                    setTimeout(function () {
                        toast('error','转出金额不能大于视讯余额')
                    },10)
                    return;
                }
            }
            var self = this;
            ajax.post(ifcUrl.TRANS_IN_OUT, postData).then(function (res) {
                self.resetTrans();
                self.getTransInfo();
                $('#pk_trans_in').fadeOut(300);
                $('body').removeClass('pk-modal-open');
                toast('success', '转换成功');
            }).catch(function (err) {
                toast('error', err);
            })
        },
        resetTrans() {
            this.iFastNow = '';
            this.money = '';
        },


        //选择快捷金额
        chooseFastMoney(index) {
            this.iFastNow = index;
            this.money = this.fastMoneyList[this.iFastNow];
        },


        //设置快捷转入
        getFastPay() {
            var self = this;
            ajax.post(ifcUrl.TRANS_FAST_GET, {}).then(function (res) {
                $('#pk_fast_pay').fadeIn(300);
                self.balanceRatio = res.data.balanceRatio;
                self.dayFirst = res.data.dayFirst === 1;
            }).catch(function (err) {
                toast('error', err);
            })
        },
        setFastPaySubmit() {
            ajax.post(ifcUrl.TRANS_FAST_SET, {
                balanceRatio: +this.balanceRatio,
                dayFirst: this.dayFirst ? 1 : 2
            }).then(function (res) {
                $('#pk_fast_pay').fadeOut(300);
                $('body').removeClass('pk-modal-open');
                toast('success', '快捷转入设置成功');
            }).catch(function (err) {
                toast('error', err);
            })
        },

        //一键归户
        setFastBackSubmit() {
            var self = this;
            ajax.post(ifcUrl.TRANS_FAST_BACK, {}).then(function (res) {
                self.getTransInfo();
                $('#pk_fast_back').fadeOut(300);
                $('body').removeClass('pk-modal-open');
                toast('success', '一键归户成功');
            }).catch(function (err) {
                toast('error', err);
            })
        },

    }
})