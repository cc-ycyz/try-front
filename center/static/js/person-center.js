new Vue({
    el: "#pk_person",
    data: {
        canrefresh: true,
        indexInfo: '',
        createTime: 1547693988
    },
    created: function () {


    },
    mounted() {
        this.indexData();
    },
    methods: {
        indexData(){
            var _this = this;
            this.canrefresh = false;
            ajax.post(ifcUrl.INDEXINFO).then(function (res) {
                _this.indexInfo = res.data;
                _this.canrefresh = true
            }).catch(function (err) {
                toast("error", err);
                _this.canrefresh = true
            })
        },
        refresh() {
            var _this = this;
            if (this.canrefresh) {
                this.canrefresh = false;

                ajax.post(ifcUrl.TEST_LIST).then(function (res) {
                    toast("success", '刷新成功！');
                    _this.canrefresh = true
                }).catch(function (err) {
                    toast("error", err);
                    _this.canrefresh = true
                })

            }
        },
        backwaterHtml(){
            location.href = './myinfo/auditQuery.tpl'
        },
        backindexHtml(){
            location.href = '../../index.tpl'
        }
    }

})
$(document).ready(function () {
    $(".pk-balance-ul .pk-balance-list:nth-child(5n)").css("margin-right", "0");
})