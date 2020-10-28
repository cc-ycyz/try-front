new Vue({
    el: '#pk_withdrawResult',
    data: {
        type: 1,
        withdrawInfo: {},
        adminMoney: 0,
        depositMoney: 0

    },
    created() {
        var withdrawData = sessionStorage.getItem('withdrawData');
        if (withdrawData) {
            this.withdrawInfo = JSON.parse(decodeURIComponent(withdrawData));
            console.log(this.withdrawInfo);
            if (this.withdrawInfo.orderId) {
                this.type = 2;
                this.getAdvs();
            } else {
                // if (this.withdrawInfo.allData.length) {
                this.adminMoney = this.withdrawInfo.deductionNormalMoney;
                // deductionMultipleMoney
                this.depositMoney = this.withdrawInfo.deductionMultipleMoney;
                // }
            }
        } else {
            window.history.back();
        }
    },
    mounted() {},
    methods: {
        back() {
            window.history.back();
        },
        carryOn() {
            var _this = this;
            if (this.withdrawInfo.key) {
                var data = {
                    key: this.withdrawInfo.key
                }
                ajax.post(ifcUrl.MEMBER_ON, data).then(function (res) {
                    console.log(res);
                    _this.withdrawInfo = res.data;
                    _this.type = 2;
                    window.sessionStorage.setItem('withdrawData', encodeURIComponent(JSON.stringify(res.data)));
                    _this.getAdvs();
                }).catch(function (err) {
                    console.log(1111);
                    setTimeout(function () {
                        toast('error', err);
                    }, 10);
                })
            } else {
                setTimeout(function () {
                    toast('error', '该笔出款已失效，请重新出款！');
                }, 10);
            }

        },
        getAdvs() {
            var postData = {
                itype: 2, //广告类型  1 游戏广告 2 其他公告
                typeId: 2, // 游戏类型ID 1 彩票 2 电子 3 视讯 4 棋牌 5 体育  1存款成功 2取款成功
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

