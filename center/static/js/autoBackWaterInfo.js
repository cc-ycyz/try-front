new Vue({
    el: "#pk_autoback_waterinfo",
    data: {
        infoList: [],
        canrefresh: true,
        todayMoney: 0,
        weekMoney: 0
    },
    created: function () {


    },
    mounted() {
         this.getListinfo();
        console.log(123123)

    },
    methods: {
        getListinfo(){
            var _this = this;
            ajax.post(ifcUrl.MEMBERSELF_GETCOUNT).then(function (res) {
                _this.infoList = res.data;
                console.log(_this.infoList,'....llll')
            })
        },

        backwaterHtml(){
            location.href = './autoBackWater.tpl'
        },
        goDetails(){
            location.href = './autoBackWaterInfo.tpl'
        }
    }
})