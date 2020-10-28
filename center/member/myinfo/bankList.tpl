<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>银行卡管理</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.min.css">
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
                <div id="pk_preson_bank" class="pk-bank-container" v-cloak>
                    <!--有卡-->
                    <div v-if="bankList.length != 0" class="pk-bank-card">
                        <div class="pk-bank-title">
                            <button :disabled="bankList.length === 3" class="btn btn-primary" @click="goBankaddHtml">添加银行卡</button>
                            <span>最多只能添加三张银行卡</span>
                        </div>
                        <div class="pk-table">
                            <div class="pk-table-head" >
                                <div class="pk-table-th">银行</div>
                                <div class="pk-table-th">开户名</div>
                                <div class="pk-table-th">银行卡号</div>
                                <div class="pk-table-th">支行</div>
                                <div class="pk-table-th">操作</div>
                            </div>
                            <div class="pk-table-cent">
                                <div v-for="(item,index) in bankList" :class="item.isDefault == 1? 'default': 'undefault'" class="pk-table-tr">
                                    <div class="defaultPic" v-if="item.isDefault == 1">默</div>
                                    <div class="pk-table-td" data-toggle="tooltip" data-placement="bottom" :title="item.bankName">{{item.bankName}}</div>
                                    <div class="pk-table-td">{{item.username}}</div>
                                    <div class="pk-table-td">{{item.card}}</div>
                                    <div class="pk-table-td">{{item.province}}</div>
                                    <div class="pk-table-td">
                                        <button @click="setDefault(item.id)" :disabled="item.isDefault == 1" type="button" class="pk-setup">设置默认</button>
                                        <!-- <span @click="delBanklist" class="pk-delete">删除</span> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--无卡-->
                    <div v-if="bankList.length == 0" class="pk-bank-nocard">
                        <div>暂无银行卡，请添加银行卡</div>
                        <a class="btn btn-primary pk-btn pk-btn-blue" href="./bankAdd.tpl">添加银行卡</a>
                    </div>
                </div>
            </div>
    
        </div>
    
    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/bank.js"></script>
</body>
</html>
