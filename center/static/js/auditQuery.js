new Vue({
    el: "#pk_audit_query",
    data: {
        infoList: {
            startTime: '',
            endTime: ''
        },
        arrData: []
    },
    created: function () {


    },
    mounted() {
        this.getInfo();
    },
    methods: {
        //获取数据
        getInfo() {
            var _this = this;
            ajax.post(ifcUrl.AUDIT_INFO).then(function (res) {
                _this.infoList = res.data;
                _this.arrData = res.data.allData;
            })
            console.log(_this.infoList, '...///')
        }

    }

})