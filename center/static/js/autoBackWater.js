new Vue({
    el: "#pk_autoback_water",
    data: {
        infoList: [],
        canrefresh: true,
        todayMoney: 0,
        weekMoney: 0,
        retreat:0,
        bet:0
    },
    created: function () {


    },
    mounted() {
        this.getListw();
        this.geuser();

    },
    methods: {
        getwater() {
            var _this = this
            ajax.post(ifcUrl.MEMBERSELF_ADD).then(function (res) {
                toast("success", '领取成功');
                _this.geuser();
            }).catch(function (err) {
                toast("error", err);
            })
        },
        getListw() {
            var _this = this;
            ajax.post(ifcUrl.MEMBERSELF_LIST).then(function (res) {
                _this.infoList = res.data.data;
                _this.todayMoney = res.data.todayMoney;
                _this.weekMoney = res.data.weekMoney
                console.log(_this.infoList, '....llll')
            })
        },
        geuser() {
            var _this = this;
            ajax.post(ifcUrl.MEMBERSELF_GETCOUNT).then(function (res) {
                _this.retreat = res.retreat;
                _this.bet = res.bet
                console.log(_this.retreat, '....llll')
            })
        },
        backwaterHtml() {
            location.href = './autoBackWater.tpl'
        },
        goDetails() {
            location.href = './autoBackWaterInfo.tpl'
        }
    }

})