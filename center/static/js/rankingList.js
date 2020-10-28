new Vue({
    el: '#rankingList',
    data: {
        PopularityList: [],
        profitList: []
    },
    mounted() {
        console.log(1231231111);
        this.getRankingList();
    },
    methods: {
        //获取排行榜
        getRankingList() {
            var _this = this;
            ajax.post(ifcUrl.LEADER_BOARD).then(function (res) {
                _this.PopularityList = res.data.people;
                _this.profitList = res.data.profit
                console.log(_this.list, '   _this.list   _this.list');

            })
        }
    }
})