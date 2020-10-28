<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>个人资料</title>
    <script>
        window.memurl = "<{ .MemUrl }>";
    </script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link href="<{ .MemUrl }>/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    <link href="<{ .MemUrl }>/css/bootstrapValidator.min.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/personInfo.css">
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

            <div id="pk_person_info" class="pk-person-info" v-cloak>
                <h1 class="pk-person-tit">个人资料：</h1>
                <form id="pk_personInfo" class="form-inline" role="form">
                    <div class="pk-info-modify">
                        <div class="pk-input-list clearfix">
                            <label>账号:</label>
                            <div class="form-group">
                                <input v-model="personInfo.account" class="form-control" type="text" placeholder="" readonly>
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>姓名:</label>
                            <div class="form-group">
                                <input maxlength="20" name="regUserName" v-model="personInfo.realName" class="form-control" type="text" placeholder="" readonly>
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>昵称:</label>
                            <div class="form-group">
                                <input v-model="personInfo.nickname" name="username" class="form-control" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>身份证:</label>
                            <div class="form-group">
                                <input name="idcard" v-model="personInfo.idCard" class="form-control" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>手机:</label>
                            <div class="form-group">
                                <input name="phone" v-model="personInfo.mobile" class="form-control" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>邮箱:</label>
                            <div class="form-group">
                                <input name="email" v-model="personInfo.email" class="form-control" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>QQ:</label>
                            <div class="form-group">
                                <input name="qq" v-model="personInfo.qq" class="form-control" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>微信:</label>
                            <div class="form-group">
                                <input name="wechat" v-model="personInfo.wechat" class="form-control" type="text" placeholder="">
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>出生日期:</label>
                            <div class="form-group">
                                <div class="input-group date birthdayDate col-md-5" data-date="" data-date-format="dd MM yyyy"
                                    data-link-field="dtp_input1">
                                    <input v-model="personInfo.birthday" class="form-control" size="16" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th iconfont icon-hy_cq_riqi"></span></span>
                                </div>
                                <input type="hidden" id="dtp_input1" value="" /><br />
                            </div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label>所在地:</label>
                            <div class="form-group">
                                <div id="pk_myDistpicker">
                                    <select id="province"></select>
                                    <select id="city"></select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pk-info-subm">
                        <button @click="personInfopost" id="personInfo" type="submit" class="btn btn-lg btn-block btn-primary" data-loading-text="Loading..." autocomplete="off">保存</button>
                    </div>
                </form>
            </div>

    </div>
    

    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script type="text/javascript" src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
    <script type="text/javascript" src="<{ .MemUrl }>/lib/bootstrapValidator.min.js" charset="UTF-8"></script>
    <script src="<{ .MemUrl }>/lib/distpicker.data.js"></script>
	<script src="<{ .MemUrl }>/lib/distpicker.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/personInfo.js"></script>
</body>
</html>
