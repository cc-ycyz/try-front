new Vue({
    el: '#myReturnCommission',
    data: {
        commisionData: [],
        total: 0,

    },
    mounted() {
        console.log(123123);
        this.getCommision();
    },
    methods: {
        timestampToTime(timestamp) {
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y + M + D + h + m + s;
        },
        getCommision() {
            var _this = this;
            ajax.post(ifcUrl.LEADER_RECORD).then(function (res) {
                _this.commisionData = res.data.record;
                _this.commisionData.map(v=>{
                   v.time= _this.timestampToTime(v.createTime)
                })
                _this.total = res.data.total;
                console.log(_this.commisionData, 'llllsssss,,,')
            })
        }
    }
})