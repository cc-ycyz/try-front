new Vue({
    el: '#pk_withdraw',
    data: {
        type: 4,
        info: {},
        bankInfo: {},
        outMoney: '',
        outMoneyPwd: '',
        memberHas: '',
        memberHasArr: []

    },
    created() {

    },
    mounted() {
        var _this = this;
        this.getInfo();
        this.val();
        $('#pk_select_bank').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
            _this.bankInfo = _this.info.bank[clickedIndex];
        });
    },
    methods: {
        val() {
            $(document).ready(function () {
                $('#pk_withdraw_form')
                    .bootstrapValidator({
                        message: '输入值不满足不满足系统要求',
                        excluded: [':disabled'],
                        // feedbackIcons: {
                        //     valid: 'glyphicon glyphicon-ok',
                        //     invalid: 'glyphicon glyphicon-remove',
                        //     validating: 'glyphicon glyphicon-refresh'
                        // },
                        live: 'enabled',
                        fields: {
                            pk_pwd: {
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
                            // 
                            pk_between:{
                                validators: {
                                    notEmpty: {
                                        message: '取款金额不能为空'
                                    },
                                    between: {
                                        min: 'lineDepositMin',
                                        max: 'lineDepositMax',
                                        message: '存款金额范围%s-%s'
                                    },
                                    integer: {
                                        message: '存款金额只能输入正整数'
                                    }
                                }
                               
                            }
                           
                        }
                    })
                    .on('success.form.bv', function (e) {
                        // Prevent submit form
                        e.preventDefault();
                    });
            });

        },
        getInfo() {
            var _this = this;
            ajax.post(ifcUrl.MEMBER_OUT_INFO).then(function (res) {
                _this.type = res.data.status;
                console.log(res.data)
                if (_this.type != 1) {
                    _this.info = res.data;
                    _this.info.bank.map(function (v) {
                        console.log(v);
                        $("#pk_select_bank").append(" <option data-token=\"" + v.bankId + "\">" + v.bankName + "</option>");
                        $("#pk_select_bank").selectpicker('refresh');
                        _this.bankInfo = _this.info.bank[0];
                    })
                }
                if (_this.type == 4) {
                    $('body').addClass('pk-modal-open');
                    $('#pk_withdraw_pop').fadeIn(200);
                }
                if (_this.type == 3) {
                    $('body').addClass('pk-modal-open');
                    $('#pk_withdraw_pop').fadeIn(200);
                }

            }).catch(function (err) {
                toast('error', err);

            });
        },
        withdraw() {
            var _this = this;
            if (_this.type == 4) {
                $('body').addClass('pk-modal-open');
                $('#pk_withdraw_pop').fadeIn(200);
                return;
            }

            var bootstrapValidator = $('#pk_withdraw_form').data('bootstrapValidator');
            //手动触发验证
            bootstrapValidator.validate();
            if (!bootstrapValidator.isValid()) {
                return;
            }

            var data = {
                outMoney: this.outMoney * 1,
                drawPassword: this.outMoneyPwd,
                bankId: this.bankInfo.bankId * 1
            }
            ajax.post(ifcUrl.MEMBER_OUT, data).then(function (res) {
                if (res.data.isMemberHas == 1) {
                    _this.memberHasArr = [];
                    // _this.memberHas = res.data.isMemberInfo;
                    if (res.data.isMemberInfo.isEmail == 1) {
                        _this.memberHasArr.push('邮箱');
                    }
                    if (res.data.isMemberInfo.isIdCard == 1) {
                        _this.memberHasArr.push('身份证');
                    }
                    if (res.data.isMemberInfo.isPhone == 1) {
                        _this.memberHasArr.push('手机号');
                    }
                    if (res.data.isMemberInfo.isQq == 1) {
                        _this.memberHasArr.push('QQ');
                    }
                    if (res.data.isMemberInfo.isWechat == 1) {
                        _this.memberHasArr.push('微信');
                    }

                    _this.memberHas = _this.memberHasArr.join('、');
                    _this.type = 5;
                    $('body').addClass('pk-modal-open');
                    $('#pk_withdraw_pop').fadeIn(200);
                } else {
                    window.sessionStorage.setItem('withdrawData', encodeURIComponent(JSON.stringify(res.data)));
                    window.location.href = "/member/withdrawResult.tpl";
                }
                $('#pk_withdraw_form').data("bootstrapValidator").resetForm();
            }).catch(function (err) {
                toast('error', err);
                $('#pk_withdraw_form').data("bootstrapValidator").resetForm();
            })
        },
        changeType() {
            var _this = this;
            setTimeout(() => {
                _this.type = 1;
            }, 300);
        }

    }
})