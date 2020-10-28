
new Vue({
    el: "#pk_bet",
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
        //分页
        perPage(){
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
        search(){
            this.parmas.pageSize = $('#pk_bet_page').val()*1
            this.searchObj.sourceType = $("#pk_chanceType").val() * 1 || _this.dropList[0].typeId;
            this.getList()
        },
        getDrop(){
            var _this = this;
            ajax.post(ifcUrl.CASH_DROP).then(function (res) {
                _this.dropList = res.data;
                console.log(res,'res')
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
        getList(page) {
            var _this = this;
            var page = page || 1;
            this.parmas.page = page
            var sourceType = this.searchObj.sourceType || _this.dropList[0].typeId;
            var beginTime = makeTimes($(".beginTime").val())
            var endTime = makeTimes($(".endTime").val())
            // var beginTime = 1547511900
            // var endTime = 1547777100

            console.log(page,'page')
            var post = {
                page: this.parmas.page,
                pageSize: this.parmas.pageSize,
                sourceType: sourceType,
                beginTime: beginTime,
                endTime: endTime
            }
            $.extend(post, this.searchObj)
            console.log(post,'post')
            ajax.post(ifcUrl.MEMBER_CASH,post).then(function (res) {
                _this.list = res.data;
                _this.parmas.totalCount = res.meta.count;
                //初始化分页
                if(_this.first){
                    _this.makeperPagepro()
                    _this.first=false
                }
                console.log(res, 'res')
            }).catch(function (err) {
                toast("error", err);
            })

        },
        makeperPagepro() {
            var posLeft = 0;
            var _this = this;
            var totalCount = this.parmas.totalCount || 1;
            /*
            * 定义回掉函数
            * @param  number:跳转页
            * #fnext  下一页按钮 dom
            * posLeft ： 下一页图标位置
            * */
            function pageChange(i) {
                _this.getList(i+1);
                Pagination.Page($(".ht-page"), i, totalCount, _this.parmas.pageSize);
                posLeft = $(".page_jump").position().left + "px";
                $("#fnext").css({ left: posLeft })
                $("#fnext").css({ bottom: "0" })
            }

            /*
            * 初始化插件
            * @param  object:翻页容器对象
            * @param  function:回调函数
            * */
            Pagination.init($(".ht-page"), pageChange);

            /*
            * 首次调用
            * @param  object:翻页容器对象
            * @param  number:当前页
            * @param  number:总页数
            * @param  number:每页数据条数
            * */
            Pagination.Page($(".ht-page"), 0, totalCount, _this.parmas.pageSize);
            // posLeft = $(".page_jump").position().left + "px";
            // $("#fnext").css({ "left": posLeft })
            $("#fnext").css({ bottom: "0" })
        }

    }

})



Vue.filter('filter_doType', filter_doType)
Vue.filter('strToDate', strToDate)
Vue.filter('formatCurrency', formatCurrency)