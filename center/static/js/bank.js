new Vue({
    el:"#pk_preson_bank",
    data: {
        bankList: [],
    },
    created: function() {

    },
    mounted() {
        this.getBanklist();
    },
    methods: {
        goBankaddHtml(){
            location.href = './bankAdd.tpl'
        },
        getBanklist(){
            var _this = this;
            this.canrefresh = false;
            ajax.post(ifcUrl.BANKLIST).then(function (res) {
                _this.bankList = res.data;
                _this.canrefresh = true;
                setTimeout( () =>{
                    $('[data-toggle="tooltip"]').tooltip();
                },100)
            }).catch(function (err) {
                toast("error", err);
                _this.canrefresh = true
            })
        },
        setDefault(val){
            var _this = this;
            this.canrefresh = false;
            ajax.post(ifcUrl.SETBANKDEFAULT,{id:val}).then(function (res) {
                toast("success", '设置成功');
                _this.getBanklist();
                _this.canrefresh = true
            }).catch(function (err) {
                toast("error", err);
                _this.canrefresh = true
            })
        },
    }

})