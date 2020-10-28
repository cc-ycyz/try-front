new Vue({
    el:"#pk_bankAdd",
    data: {
        realName: '',
        hasName: true,
        bankbranch:'',
        bankcard: '',
    },
    mounted() {
        this.getbankInfo();
    },
    methods: {
        getbankInfo(){
            ajax.post(ifcUrl.BANK_HASNAME).then(function (res) {
                if(res.data.realName){
                    this.realName = res.data.realName;
                }else{
                    this.hasName = false
                }
            }).catch(function (err) {
                toast("error", err);
            })
            //银行卡列表
            ajax.post(ifcUrl.BANK_INFO).then(function (res) {
                let html,list = res.data;
                if(list){
                    $.each(list,function(i,v){
                        html += '<option value="' + v.id + '" data-tokens="'+ v.title+'">' + v.title+ '</option>';
                    })
                    $("#pk_videoCheck").append(html);
                    $("#pk_videoCheck").selectpicker('refresh');
                }
            }).catch(function (err) {
                toast("error", err);
            })
        },
        modifyVidepass(){
            let _this = this;
            this.canrefresh = false;
            let data = {
                username:this.realName,
                bankId:$("#pk_videoCheck option:selected").val()*1,
                subbranch:this.bankbranch,
                card:this.bankcard,
                province:$("#province").val(),
                city:$("#city").val()
            };
            var validate = $('#pk_bankAdd_form').data('bootstrapValidator').validate();
            if (!validate.isValid()) {
                return;
            }else if($("#province").val()== '' || $("#city").val() == ''){
                setTimeout(()=>{
                    toast("error", '请选择您的开户行所在省份/城市！');
                },100)
                $('#pk_bankAdd_form').data("bootstrapValidator").resetForm();
                return;
            }
            ajax.post(ifcUrl.BANK_ADD,data).then(function (res) {
                location.href = './bankList.tpl'
                _this.canrefresh = true;
                _this.timeInput();
                $('#pk_bankAdd_form').data("bootstrapValidator").resetForm();
            }).catch(function (err) {
                toast("error", err);
                _this.canrefresh = true;
                $('#pk_bankAdd_form').data("bootstrapValidator").resetForm();
            })
        }
    }

})
$('#pk_myDistpicker').distpicker({
    province: '北京市',
    city: '',
});
$('[data-toggle="tooltip"]').tooltip();
$(document).ready(function () {
    $('#pk_bankAdd_form')
    .bootstrapValidator({
        message: '输入值不满足不满足系统要求',
        excluded: [':disabled'],
        live: 'enabled',
        fields: {
            realname: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    regexp: {
                        regexp: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
                        message: '用户名输入不正确'
                    }
                }

            },
            bankname: {
                validators: {
                    notEmpty: {
                        message: '开户银行不能为空'
                    }
                }

            },
            bankbranch: {
                validators: {
                    notEmpty: {
                        message: '银行卡支行不能为空'
                    },
                    regexp: {
                        regexp: /[\u4E00-\u9FA5\uF900-\uFA2D]/,
                        message: '银行卡支行输入有误'
                    }
                }

            },
            bankcard: {
                validators: {
                    notEmpty: {
                        message: '银行卡号不能为空'
                    },
                    regexp: {
                        regexp:  /^([1-9]{1})(\d{14}|\d{18})$/,
                        message: '银行卡号输入不正确'
                    }
                }
            },
            drawPass:{
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    regexp: {
                        regexp: /^\d{6}$/,
                        message: '密码为6位纯数字'
                    }
                }
            },
        }
    })
    .on('success.form.bv', function(e) {
        // Prevent submit form
        e.preventDefault();
    });
});