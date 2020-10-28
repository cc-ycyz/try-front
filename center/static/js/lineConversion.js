new Vue({
    el: "#pk_lineconversion",
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
        }

        
    }


})