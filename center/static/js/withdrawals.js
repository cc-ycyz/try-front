new Vue({
    el: "#pk_withdrawals",
    data: {
        parmas: {
            page: 1, //当前页数
            pageSize: 100, // 每页数据量
            totalCount: 0, // 总数据量
        },
        searchObj: {
            sourceType: 0,
        },
        first: true,
        list: [],
        dropList: [],
    },
    create() {

    },
    mounted() {
        $('.form_datetime').datetimepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd hh:ii',
            initialDate: new Date(),
            autoclose: 1,
            todayHighlight: 1,
            todayBtn: 1,
            showMeridian: 1
        });
        this.getDrop();
        //分页
        this.perPage();
    },
    methods: {
        search() {

        },
        //分页
        perPage() {
            var data = [
                {
                    key: "100",
                    value: "100条/每页"
                },
                {
                    key: "500",
                    value: "500条/每页"
                },
                {
                    key: "1000",
                    value: "1000条/每页"
                }
            ];
            var options = [];
            data.forEach(function (item, index) {
                var option = '<option value="' + item.key + '">' + item.value + '</option>';
                options.push(option);
            })
            $('#pk_bet_page')[0].innerHTML = options.join('');
            $('#pk_bet_page').selectpicker('refresh');
        },
        getDrop() {
            var _this = this;
            ajax.post(ifcUrl.CASH_DROP).then(function (res) {
                _this.dropList = res.data;
                console.log(res, 'res')
                console.log(res)
                var data = res.data;
                var options = [];
                data.forEach(function (item, index) {
                    var option = '<option value="' + item.typeId + '">' + item.typeName + '</option>';
                    options.push(option);
                })
                $('#pk_chanceType')[0].innerHTML = options.join('');
                $('#pk_chanceType').selectpicker('refresh');
            }).catch(function (err) {
                toast("error", err);
            })
        },

        
    }


})