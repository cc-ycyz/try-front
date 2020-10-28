new Vue({
    el: "#pk_person_trans",
    data: {
        infoList: [],
        canrefresh: true,
    },
    created: function () {


    },
    mounted() {
        this.getMember();
    },
    methods: {
        getMember() {
            var _this = this;
            ajax.post(ifcUrl.MEMBER_TODAY).then(function (res) {
                _this.infoList = res.data;
                setTimeout( () =>{
                    $('[data-toggle="tooltip"]').tooltip();
                },100)
            })
        }
    }

})