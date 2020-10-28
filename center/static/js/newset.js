var vm = new Vue({
    el: '#newset',
    data: {
        first: true,
        second: true,
        third: true,
        fouth: true,
        fith: true,
        six: true,
        seven: true,
        flag: false,
        activeNumber: 1,
        people: [],
        parmas: {
            page: 1, //当前页数
            pageSize: 100, // 每页数据量
            totalCount: 0, // 总数据量
        }
    },
    mounted() {
        console.log(this.activeNumber);
        this.perPage();
        this.btnnewest();

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
        //接口请求
        notice(data, page) {
            var _this = this;
            _this.parmas.pageSize = $("#pk_bet_page").val()*1;
            var post = {
                page: page,
                pageSize: _this.parmas.pageSize,
                cate: data,
            };
            _this.parmas.totalCount = 0;
            ajax.post(ifcUrl.NOTICE_LIST, post).then(function (res) {
                _this.people = res.data.data;
                _this.people.map(v => {
                    v.expands = true
                    v.time = _this.timestampToTime(v.createTime);
                });
                _this.parmas.totalCount = res.data.meta.count;
                console.log(_this.parmas.totalCount, '....///')
                if (_this.first) {
                    console.log(1)
                    _this.makeperPagepro1();
                    _this.first = false;

                }

            })

        },
        btnsystem() {
            window.location.href='/member/announcement.tpl';
        },
        btnmaintain() {
             window.location.href='/member/maintain.tpl';
            // var _this = this;
            // this.activeNumber = 2;
            // _this.parmas.page = 1
            // _this.notice(-2, _this.parmas.page);
        },
        btnnewest() {
            var _this = this;
            this.activeNumber = 3;
            _this.parmas.page = 1;
            _this.parmas.pageSize = $("#pk_bet_page").val()*1;
            _this.notice(-3, _this.parmas.page);
        },
        btnactivity() {
            window.location.href='/member/activity.tpl';
            // var _this = this;
            // this.activeNumber = 4;
            // _this.parmas.page = 1
            // _this.notice(-4, _this.parmas.page);
        },
        btnganme() {
            window.location.href='/member/game.tpl';
            // var _this = this;
            // this.activeNumber = 5;
            // _this.parmas.page = 1;
            // _this.notice(0, _this.parmas.page);
        },
        btnother() {
            window.location.href='/member/other.tpl';
            // var _this = this;
            // this.activeNumber = 6;
            // _this.parmas.page = 1;
            // _this.notice(-5, _this.parmas.page);
        },


        makeperPagepro1() {
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
                console.log(i + 1, "页数---------------");
                if (_this.activeNumber == 1) {
                    _this.notice(-1, i + 1);
                } else if (_this.activeNumber == 2) {
                    _this.notice(-2, i + 1);
                } else if (_this.activeNumber == 3) {
                    _this.notice(-3, i + 1);
                } else if (_this.activeNumber == 4) {
                    _this.notice(-4, i + 1);
                } else if (_this.activeNumber == 5) {
                    _this.notice(0, i + 1);
                } else if (_this.activeNumber == 6) {
                    _this.notice(-5, i + 1);
                }
                console.log(totalCount, i + 1, _this.parmas.pageSize, 'parmas')
                Pagination.Page($(".ht-page"), i, totalCount, _this.parmas.pageSize);
                posLeft = $(".page_jump").position().left + "px";
                $("#fnext").css({left: posLeft})
                $("#fnext").css({bottom: "0"})
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

            //同一个页面能把page设置为变量，不同页面切换时把page设置为0

            console.log(totalCount, 'totalCount')
            console.log("初始化初始化初始化初始化初始化初始化初始化初始化初始化初始化初始化初始化")
            Pagination.Page($(".ht-page"), 0, totalCount, _this.parmas.pageSize);
            // posLeft = $(".page_jump").position().left + "px";
            // $("#fnext").css({"left": posLeft})
            $("#fnext").css({bottom: "0"})
            _this.seven = false

        },


        expand(item, index) {
            var _this = this;
            if (item.expands == true) {
                item.expands = false;
                Vue.set(_this.people, index, item)

            } else {
                item.expands = true;
                Vue.set(_this.people, index, item)
            }
            console.log(item.expands)
        }

    }
})