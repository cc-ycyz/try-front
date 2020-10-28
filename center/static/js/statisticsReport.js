new Vue({
    el: "#pk_statisticsreport",
    data: {
        list:[],
        ite_index:0,
        totlaList:[],

    },
    created: function () {
        $(".pk-nav-ul li").eq(0).addClass("active").siblings("li").removeClass("active");
    },
    mounted() {
        this.getList(0,0);
    },
    methods: {
        getList(status,index) {
            // -1 beforWeek 0 thisWeek         
            var _this = this;
            $(".pk-nav-ul li").eq(index).addClass("active").siblings("li").removeClass("active")
            ajax.post(ifcUrl.MEMBER_REPORT, { weekOffset:status}).then(function (res) {
                _this.list = res.data;
                // _this.list.map(v => {
                //     v.fshow = false
                //     return 
                // })
                _this.totlaList = _this.list[_this.list.length-1]
            }).catch(function (err) {
                toast("error", err);
            })
        },
        makeChange(item,index){
            item.fshow = !item.fshow;
            this.ite_index = index;
            Vue.set(this.list, index, item);
        },
        fixmsg(msg, len) {
            if (msg.length > len) {
                return msg.slice(0, len) + "...";
            } else {
                return msg;
            }
        }
    }
})

Vue.filter('formatCurrency', formatCurrency)