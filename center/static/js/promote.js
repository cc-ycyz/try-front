new Vue({
    el: '#promote',
    data: {
        prData: {
            memberUrl: ''
        },
        prListData: [],
        prListTitle: [],
        prListContent: []

    },
    mounted() {
        console.log(123123, ';;;;;;;');
        this.prInfo();
        this.prList();
    },
    methods: {
        //获取推广信息
        prInfo() {
            var _this = this;
            ajax.post(ifcUrl.SPERAD_INFO).then(function (res) {
                console.log(res, '看看获取什么');
                _this.prData = res.data;
                console.log(_this.prData);
            })
        },
        //获取推广返利
        prList() {
            var _this = this;
            ajax.post(ifcUrl.SPERAD_PROPORTION).then(function (res) {
                _this.prListData = res.data.slice(1,res.data.length-1);
                _this.prListTitle = res.data[0];
                var str;

                $.each( _this.prListData,function (key,val) {
                    str+= '<tr class="pk-tbody-tr text-center"><td>'+val.name+'</td>';
                    $.each(val.child, function(k, v){
                        str += '<td> '+ val.child[k].rate +' </td>';
                    })
                    str += '</tr>';
                } )
                $('#rebate_rate').html(str);


            })
        },
        copy(value) {
            var clipboard3 = new Clipboard('.btn-copy', {
                text: function () {
                    return value;
                }
            });
            // toast("success", '刷新成功！');
            clipboard3.on('success',
                function (e) {
                    toast("success", '复制成功！');
                });
            clipboard3.on('error',
                function (e) {
                    toast("fail", '复制失败！');
                });
            this.prInfo()
        }
    }
})