<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>银行卡管理</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrapValidator.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bank.css">
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
                <div id="pk_bankAdd" class="pk-bank-container" v-cloak>
                    <h1 class="pk-bank-tit">添加银行卡信息</h1>
                    <div class="pk-tips">请填写银行卡信息！</div>
                    <form id="pk_bankAdd_form" class="form-inline pk-bankAdd-form" role="form">
                        <div class="pk-input-list clearfix">
                            <label class="pk-must"><span>开户名:</span></label>
                            <div class="form-group">
                                <div v-if="!hasName" class="pk-realname">{{realName}}</div>
                                <input id="pk_realName" v-if="hasName" v-model="realName" name="realname" class="form-control" type="text" placeholder="" >
                            </div>
                            <div v-if="hasName" class="errText">请输入您的银行卡开户名</div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label class="pk-must"><span>开户银行:</span></label>
                            <select class="selectpicker form-control" id="pk_videoCheck" data-live-search="true"></select>
                            <div class="errText">请选择您的开户银行</div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label class="pk-must"><span>省份/城市:</span></label>
                            <div class="form-group">
                                <div id="pk_myDistpicker">
                                    <select id="province"></select>
                                    <select id="city"></select>
                                </div>
                            </div>
                            <div class="errText">请选择您的开户行所在省份/城市！</div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label class="pk-must"><span>支行:</span></label>
                            <div class="form-group">
                                <input v-model="bankbranch" name="bankbranch" class="form-control" type="text" placeholder="" >
                            </div>
                            <div class="errText">请输入您的银行卡支行</div>
                        </div>
                        <div class="pk-input-list clearfix">
                            <label class="pk-must"><span>银行卡号:</span></label>
                            <div class="form-group">
                                <input v-model="bankcard" name="bankcard" class="form-control" type="text" placeholder="" >
                            </div>
                            <div class="errText">请输入您的银行卡号</div>
                        </div>
                        <div class="pk-info-subm">
                            <button @click="modifyVidepass" id="pk_modifyVidepass" type="submit" class="btn btn-lg btn-block btn-primary" data-loading-text="Loading..." autocomplete="off">确认</button>
                        </div>
                    </form>
                </div>
            </div>
    
        </div>
    
    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap-select.min.js"></script>
    <script src="<{ .MemUrl }>/lib/distpicker.data.js"></script>
	<script src="<{ .MemUrl }>/lib/distpicker.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrapValidator.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/bankadd.js"></script>
</body>
</html>
