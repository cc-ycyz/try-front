//是否有存款密码
ajax.post(ifcUrl.GETPASSWORD).then(function (res) {
    if(res.data){
        $("#pk_loginPass").hide();
        $("#pk_oldrawPass").show();
    }else{
        $("#pk_loginPass").show();
        $("#pk_oldrawPass").hide();
    }
}).catch(function (err) {
    toast("error", err);
})

$('#modifyLoginpass').on('click', function () {
    var validate = $('#pk_login_form').data('bootstrapValidator').validate();
    if (!validate.isValid()) {
        return;
    }
    var data ={
        passType: "1",
        password: $("#old_pwd").val(),
        newPassword: $("#new_pwd").val(),
        confirmPassword: $("#confirm_pwd").val(),
    };
    ajax.post(ifcUrl.MOD_PASSWORD,data).then(function (res) {
        toast("success", '修改成功');
        $('#pk_login_form').data("bootstrapValidator").resetForm();
    }).catch(function (err) {
        toast("error", err);
        $('#pk_login_form').data("bootstrapValidator").resetForm();
    })
})
$('#modifyWdrawpass').on('click', function () {
    var validate = $('#pk_draw_form').data('bootstrapValidator').validate();
    if (!validate.isValid()) {
        return;
    }
    var passNumb;
    if($("#pk_oldrawPass").is(":visible")){
        passNumb = $("#oldrawPass").val()
    }else{
        passNumb = $("#drawloginPass").val()
    }
    var data ={
        passType: "2",
        password: passNumb,
        newPassword: $("#newdrawPass").val(),
        confirmPassword: $("#confirm_drawPass").val(),
    };
    ajax.post(ifcUrl.MOD_PASSWORD,data).then(function (res) {
        toast("success", '修改成功');
        $('#pk_draw_form').data("bootstrapValidator").resetForm();
    }).catch(function (err) {
        toast("error", err);
        $('#pk_draw_form').data("bootstrapValidator").resetForm();
    })
})
$('#modifyVidepass').on('click', function () {
    var $btn = $(this).button('loading')
    setTimeout(() => {
        $btn.button('reset')
    }, 1000);
})

$(document).ready(function () {
    $('#myTab li').on('hidden.bs.modal', function() {
        $("#saveadmin_form").data('bootstrapValidator').destroy();
        $('#saveadmin_form').data('bootstrapValidator', null);
        formValidator();
    });
    $('#pk_login_form,#pk_draw_form')
        .bootstrapValidator({
            message: '输入值不满足不满足系统要求',
            excluded: [':disabled'],
            live: 'enabled',
            fields: {
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
                newdrawPass:{
                    message: '新密码不满足系统要求',
                    validators: {
                        notEmpty: {
                            message: '用户新密码不能为空'
                        },
                        regexp: {
                            regexp: /^\d{6}$/,
                            message: '密码为6位纯数字'
                        },
                        identical: {
                            field: 'confirmdrawPass',
                            message: '用户新密码与确认密码不一致！'
                        }
                    }
                },
                confirmdrawPass:{
                    validators: {
                        notEmpty: {
                            message: '确认密码不能为空'
                        },
                        identical: {
                            field: 'newdrawPass',
                            message: '用户新密码与确认密码不一致！'
                        }
                    }
                },
                old_pwd: {
                    message: '用户旧密码不满足系统要求',
                    validators: {
                        notEmpty: {
                            message: '用户旧密码不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 20,
                            message: '用户旧密码长度不能少于6位'
                        },
                        regexp: {
                            regexp: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
                            message: '密码不能含有非法字符，数字字母组合，长度在6-20之间'
                        }
                    }

                },

                new_pwd: {
                    validators: {
                        notEmpty: {
                            message: '用户新密码不能为空'
                        },
                        regexp: {
                            regexp: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
                            message: '密码不能含有非法字符，数字字母组合，长度在6-20之间'
                        },
                        identical: {
                            field: 'confirm_pwd',
                            message: '用户新密码与确认密码不一致！'
                        },
                        stringLength: {
                            min: 6,
                            max: 20,
                            message: '用户新密码长度不能少于6位'
                        }
                    }

                },
                confirm_pwd: {
                    validators: {
                        notEmpty: {
                            message: '确认密码不能为空'
                        },
                        identical: {
                            field: 'new_pwd',
                            message: '用户新密码与确认密码不一致！'
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
