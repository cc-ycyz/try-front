<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>密码管理</title>
    <script>
        window.memurl = "<{ .MemUrl }>";
    </script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrapValidator.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/passwordManager.css">
</head>

<body>
     <!-- 头部导航 -->
     <div id="pk_header">
        <!-- 第一个参数固定 member , 第二个相对路劲查找tpl文件 -->
        <{ include "member" "member/layout/topnav" }>
    </div>
    <div class="pk-cnetent">
        <!-- 左侧导航 -->
        <{ include "member" "member/layout/member-left" }>
        <!-- 导航end -->
        <!-- 右侧内容 -->
        <div class="pk-cent">
            
            <div id="pk_passtable" class="pk_passtable">
                <ul id="myTab" class="nav nav-tabs">
                    <li class="active"><a href="#loginpass" data-toggle="tab">修改登录密码</a></li>
                    <li><a href="#withdrawpass" data-toggle="tab">修改取款密码</a></li>
                    <li><a href="#videopass" data-toggle="tab">修改视讯密码</a></li>
                </ul>
                <div id="myTabContent" class="pk-pass-tab tab-content">
                    <div class="tab-pane fade in active" id="loginpass">
                        <form id="pk_login_form" class="form-inline" role="form">
                            <!-- <div class="pk-input-list">
                                <label><span>会员账号:</span></label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="" disabled>
                                </div>
                            </div> -->
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>原密码:</span></label>
                                <div class="form-group">
                                    <input id="old_pwd" name="old_pwd" class="form-control" type="password" placeholder="" >
                                </div>
                                <div class="errText">请输入您的原登录密码</div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>新密码:</span></label>
                                <div class="form-group">
                                    <input id="new_pwd" name="new_pwd" class="form-control" type="password" placeholder="" >
                                </div>
                                <div class="errText">密码长度6-20位，可以使用字母、数字、特殊字符、区分大小写</div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>确认密码:</span></label>
                                <div class="form-group">
                                    <input id="confirm_pwd" name="confirm_pwd" class="form-control" type="password" placeholder="" >
                                </div>
                                <div class="errText">再次输入您的新密码</div>
                            </div>
                            <div class="pk-info-subm">
                                <button id="modifyLoginpass"  type="submit" class="btn btn-lg btn-block btn-primary" disabled>确认</button>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="withdrawpass">
                        <form id="pk_draw_form" class="form-inline" role="form">
                            <!-- <div class="pk-input-list clearfix">
                                <label><span>会员账号:</span></label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="" disabled>
                                </div>
                            </div> -->
                            <div id="pk_oldrawPass" class="pk-input-list clearfix">
                                <label class="pk-must"><span>原密码:</span></label>
                                <div class="form-group">
                                    <input id="oldrawPass" name="drawPass" class="form-control" type="password" placeholder="" >
                                </div>
                                <div class="errText">请输入您的原取款密码</div>
                            </div>
                            <div id="pk_loginPass" class="pk-input-list clearfix">
                                <label class="pk-must"><span>登录密码:</span></label>
                                <div class="form-group">
                                    <input id="drawloginPass" name="old_pwd" class="form-control" type="password" placeholder="" >
                                </div>
                                <div class="errText">请输入您的登录密码</div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>新密码:</span></label>
                                <div class="form-group">
                                    <input id="newdrawPass" name="newdrawPass" class="form-control" type="password" placeholder="" >
                                </div>
                                <div class="errText">密码为6位纯数字</div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>确认密码:</span></label>
                                <div class="form-group">
                                    <input id="confirm_drawPass" name="confirmdrawPass" class="form-control" type="password" placeholder="" >
                                </div>
                                <div class="errText">再次输入您的新密码</div>
                            </div>
                            <div class="pk-info-subm">
                                <button id="modifyWdrawpass"  type="submit" class="btn btn-lg btn-block btn-primary" disabled>确认</button>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="videopass">
                        <form class="form-inline" role="form">
                            <div class="pk-input-list clearfix">
                                <label><span>会员账号:</span></label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="" disabled>
                                </div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>选择视讯:</span></label>
                                <select class="selectpicker form-control" id="videoCheck" data-live-search="true"></select>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label><span>视讯账号:</span></label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="" disabled>
                                </div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>登录密码:</span></label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="" >
                                </div>
                                <div class="errText">请输入您的登录密码</div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>视讯密码:</span></label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="" >
                                </div>
                                <div class="errText">密码长度6-20位，可以使用字母、数字、特殊字符、区分大小写</div>
                            </div>
                            <div class="pk-input-list clearfix">
                                <label class="pk-must"><span>确认密码:</span></label>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="" >
                                </div>
                                <div class="errText">再次输入您的新密码</div>
                            </div>
                            <div class="pk-info-subm">
                                <button disabled id="modifyVidepass" type="submit" class="btn btn-lg btn-block btn-primary" data-loading-text="Loading..." autocomplete="off">确认</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap-select.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrapValidator.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/passwordManager.js"></script>
</body>

</html>