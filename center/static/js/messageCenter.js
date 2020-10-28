new Vue({
    el: '#pkMassagePersonal',
    data: {
        first: true,
        people: [],
        parmas: {
            page: 1, //当前页数
            pageSize: 10, // 每页数据量
            totalCount: 0, // 总数据量
        },
    },
    created() {

    },
    mounted() {
        var _this = this;
        _this.perPage();
        _this.cons();

    },
    methods: {
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


        cons(page) {
            console.log(111);
            var _this = this;
            _this.parmas.pageSize = $("#pk_bet_page").val()*1;
            var post = {
                page: page,
                pageSize: _this.parmas.pageSize
            }
            ajax.post(ifcUrl.MESSAGE_LIST,post).then(function (res) {
                _this.people = res.data;
                _this.people.map(v => {
                    v.expands = true
                    v.time = _this.timestampToTime(v.createTime);
                });
                _this.parmas.totalCount = res.meta.count
                if(_this.first){
                    _this.makeperPagepro();
                    _this.first=false;
                }
                console.log( _this.parmas.totalCount,'.....dddddd')
                console.log(_this.people, ',,,ssss')
            })
        },
        //分页
        makeperPagepro() {
            var _this = this;
            var posLeft = 0;
            var totalCount = _this.parmas.totalCount || 1;
            /*
            * 定义回掉函数
            * @param  number:跳转页
            * #fnext  下一页按钮 dom
            * posLeft ： 下一页图标位置
            * */
            var _this = this;
            function pageChange(i) {
                // _this.getformList()
                console.log(i+1,"页数");
                _this.cons(i+1);

                console.log(totalCount,i+1,_this.parmas,'parmas')
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
            console.log(totalCount,'totalCount')
            Pagination.Page($(".ht-page"), 0, totalCount, _this.parmas.pageSize);
            // posLeft = $(".page_jump").position().left + "px";
            // $("#fnext").css({ "left": posLeft })
            $("#fnext").css({ bottom: "0" })
        },

        expanded(item, index) {
            var _this = this;
            item.status = 2;
            ajax.post(ifcUrl.MESSAGE_INFO, {
                id: item.id
            }).then(function (res) {
                if (item.expands) {
                    item.expands = false
                    Vue.set(_this.people, index, item)
                } else {
                    item.expands = true
                    Vue.set(_this.people, index, item);
                }
                ;
            }).catch(function (err) {
                toast("error", err);
            })
        },
        del(item) {
            var _this = this;
            ajax.post(ifcUrl.MESSAGE_DEL, {
                id: item.id
            }).then(function (res) {
                toast("success", '删除成功！');
                _this.cons();
            }).catch(function (err) {
                toast("error", err);
            })
        }


    }

})