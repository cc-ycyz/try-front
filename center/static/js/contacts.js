$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

new Vue({
    el:"#pk_trans",
    data: {
        parmas: {
            page: 1, //当前页数
            pageSize: 100, // 每页数据量
            totalCount: 0, // 总数据量
        },
        first: true,
        second: true,
        gameTypelist: [],
        productNamelister: [],
        list: [],
        searchObj: {
            type: 0,
            platformName: ""
        },
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
        this.getPlatformType();
        this.perPage();
    },
    methods: {
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
        search() {
            this.parmas.page = 1;
            this.parmas.pageSize = $('#pk_bet_page').val()*1;
            this.getformList(false, null, 1);
            this.makeperPagepro();
        },
        //头部菜单
        getPlatformType() {
            var _this = this;
            ajax.post(ifcUrl.PLATFORM_TYPE).then(function (res) {
                _this.gameTypelist = res.data;
                _this.getPlatFormname(_this.gameTypelist[0],0)
                setTimeout(function () {
                    $(".pk-lis").eq(0).addClass("active")
                    console.log(_this.searchObj.platformName, _this.searchObj.type)

                }, 1)
            }).catch(function (err) {
                toast("error", err);
            })
        },
        toggleClass(index,i){
            //切换class active名
            if(i==1){
                $(".pk-lis").eq(index).addClass("active").siblings("li").removeClass("active")
                $(".pk-liers").eq(0).addClass("active").siblings("li").removeClass("active")
                this.second = true
            }
            if(i==2){
                $(".pk-liers").eq(index).addClass("active").siblings("li").removeClass("active")
            }
        },
        //
        getPlatFormname(item,index){
            var _this = this;
            console.log(item.id,'item.id')
            var post = {
                typeId: item.id*1
            }
            ajax.post(ifcUrl.PLATFORM_NAME, post).then(function (res) {
                _this.productNamelister = res.data;
                console.log(_this.productNamelister,'productNamelister')
                setTimeout(function () {
                    // $(".pk-liers").eq(0).addClass("active")
                    _this.searchObj.platformName = _this.productNamelister[index].platformName;
                    _this.searchObj.type = _this.productNamelister[index].typeId;
                    console.log(_this.searchObj.platformName, _this.searchObj.type,'1234567')
                    
                    if(_this.first) {
                        _this.getformList()
                        $(".pk-liers").eq(0).addClass("active").siblings("li").removeClass("active");
                    }else if(_this.second){
                        //执行父级选中的时候，子级默认选中第一项并请求
                        _this.searchObj.platformName = _this.productNamelister[0].platformName;
                        _this.searchObj.type = _this.productNamelister[0].typeId;
                        // _this.getformList();
                        console.log("second")
                        _this.second = false;
                    }

                }, 1)

            }).catch(function (err) {
                toast("error", err);
            })
        },
        //子级菜单  
        getformList(flag,item,page) {
            var _this = this;
            //为treu判断item，为false判断page
            if (flag){
                if (item) {
                    _this.searchObj.platformName = item.platformName;
                    _this.searchObj.type = item.typeId;
                    return
                }
            }else{
                _this.parmas.page = page || 1;
            }
            // var beginTime = makeTimes($(".beginTime").val())
            // var endTime = makeTimes($(".endTime").val())
            var beginTime = 0
            var endTime = 0
            console.log(page, _this.parmas.page)
            var post = {
                page: this.parmas.page,
                pageSize: this.parmas.pageSize,
                beginTime: beginTime,
                endTime: endTime,
                orderId: $(".orderId").val()
            }
            $.extend(post, this.searchObj)
            console.log(post, 'postData')
            ajax.post(ifcUrl.MEMBER_RECORD, post).then(function (res) {
                console.log(res, 'res')
                _this.list = res.data;
                _this.parmas.totalCount = res.meta.count;
                console.log(_this.list, '_this.list', _this.parmas.totalCount)

                //是否是第一次渲染，给分页插件一个初始化的数据
                if (_this.first) {
                    _this.makeperPagepro();
                    _this.first = false
                }

            }).catch(function (err) {
                toast("error", err);
            })

            console.log(beginTime, endTime)
        },
        makeperPagepro() {
            var posLeft = 0;
            var totalCount = this.parmas.totalCount || 1;
            /*
            * 定义回掉函数
            * @param  number:跳转页
            * #fnext  下一页按钮 dom
            * posLeft ： 下一页图标位置
            * */
            var _this = this;
            function pageChange(i) {
               
                _this.getformList(false,null,i+1);
                console.log(totalCount,i+1)
                
                Pagination.Page($(".ht-page"), i, totalCount, _this.parmas.pageSize);
                // posLeft = $(".page_jump").position().left + "px";
                // $("#fnext").css({ left: posLeft })
                // $("#fnext").css({ bottom: "0"})
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
            console.log(totalCount,'totalCount',"初始化数据")
            Pagination.Page($(".ht-page"), 0, totalCount, _this.parmas.pageSize);
            // posLeft = $(".page_jump").position().left + "px";
            // $("#fnext").css({ "left": posLeft })
            // $("#fnext").css({ bottom: "0" })

        },
        fixmsg(msg, len) {
            var len = len || 6;
            if (msg.length > len) {
                return msg.slice(0, len) + "...";
            } else {
                return msg;
            }
        },
    }
})
Vue.filter('strToDate', strToDate)
Vue.filter('formatCurrency', formatCurrency)





