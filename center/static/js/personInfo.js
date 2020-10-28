new Vue({
    el:"#pk_person_info",
    data: {
        personInfo: '',
        oldInfo:'',
    },
    created: function() {


    },
    mounted() {
        this.personAjax();
    },
    methods: {
        personAjax(){
            let _this = this;
            ajax.post(ifcUrl.INDEXINFO).then(function (res) {
                _this.personInfo = res.data;
                _this.oldInfo = res.data;
                _this.canrefresh = true;
                _this.timeInput();
                $('#pk_myDistpicker').distpicker({
                    province: res.data.province,
                    city: res.data.city,
                });
            }).catch(function (err) {
                toast("error", err);
                _this.canrefresh = true
            })
        },
        timeInput(){
            $('.birthdayDate').datetimepicker({
                language: 'zh-CN',
                format: 'yyyy-mm-dd',
                endDate:new Date(),
                minView: 3,
                autoclose:true,
                pickerPosition: 'bottom-left',
            });
        },
        personInfopost(){
            let data = {
                country: this.personInfo.country,
                idCard: this.personInfo.idCard,
                province: $("#province").val(),
                city: $("#city").val(),
                mobile: this.personInfo.mobile,
                qq: this.personInfo.qq,
                wechat: this.personInfo.wechat,
                email: this.personInfo.email,
                nickname: this.personInfo.nickname,
                birthday: $(".birthdayDate").find("input").val()
            },_this = this;
            ajax.post(ifcUrl.INFOEDIT,data).then(function (res) {
                _this.canrefresh = true;
                _this.timeInput();
                toast("success", '修改成功');
                $('#pk_personInfo').data("bootstrapValidator").resetForm();
            }).catch(function (err) {
                toast("error", err);
                _this.canrefresh = true
            })
        }
    }

})

$(document).ready(function() {
    $('#pk_personInfo')
        .bootstrapValidator({
            message: 'This value is not valid',
            //live: 'submitted',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                regUserName : {
                    validators : {
                        stringLength: {
                            min: 2,
                            max: 20,
                            message: '用户名长度必须大于2！'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z\u4e00-\u9fa5]+$/,
                            message: '用户名不能有数字和字符！'
                        }
                    }
                },
                username: {
                    message: 'The username is not valid',
                    validators: {
                        stringLength: {
                            min: 1,
                            max: 20,
                            message: '昵称长度在1-20位'
                        }
                    }
                },
                idcard : {
                    validators : {
                        regexp: {
                            regexp: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
                            message: '身份证号码格式不正确，为15位和18位身份证号码！'
                        },
                        callback: {/*自定义，可以在这里与其他输入项联动校验*/
                            message: '身份证号码无效！',
                            callback:function(value, validator,$field){
                                //15位和18位身份证号码的正则表达式
                                var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
                                //如果通过该验证，说明身份证格式正确，但准确性还需计算
                                var idCard = value;
                                if (regIdCard.test(idCard)) {
                                    if (idCard.length == 18) {
                                        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
                                        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
                                        var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
                                        for (var i = 0; i < 17; i++) {
                                            idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
                                        }
                                        var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
                                        var idCardLast = idCard.substring(17);//得到最后一位身份证号码
                                        //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                                        if (idCardMod == 2) {
                                            if (idCardLast == "X" || idCardLast == "x") {
                                                return true;
                                                //alert("恭喜通过验证啦！");
                                            } else {
                                                return false;
                                                //alert("身份证号码错误！");
                                            }
                                        } else {
                                            //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                                            if (idCardLast == idCardY[idCardMod]) {
                                                //alert("恭喜通过验证啦！");
                                                return true;
                                            } else {
                                                return false;
                                                //alert("身份证号码错误！");
                                            }
                                        }
                                    }
                                } else if(idCard == ''){
                                    return true;
                                }else{
                                    //alert("身份证格式不正确!");
                                    return false;
                                }
                            }
                        }
                    }
                },
                email: {
                    validators: {
                        emailAddress: {
                            message: '邮箱输入有误'
                        }
                    }
                },
                phone: {
                    validators: {
                        regexp: {
                            regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                            message: '请输入正确的11位手机号码'
                        }
                    }
                },
                birthday: {
                    validators: {
                        date: {
                            format: 'YYYY/MM/DD',
                            message: 'The birthday is not valid'
                        }
                    }
                },
                qq: {
                    validators: {
                        regexp: {
                            regexp: /^[1-9][0-9]{4,11}/,
                            message: '请输入正确的5-11位QQ号码'
                        }
                    }
                },
                wechat: {
                    validators: {
                        regexp: {
                            regexp: /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/,
                            message: '请输入正确的6-20位微信号码'
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