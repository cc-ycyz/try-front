<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>会员中心</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link href="<{ .MemUrl }>/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/person-center.css">
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
                <div id="pk_person" class="pk-person" v-cloak>
                    <div class="pk-person-head clearfix">
                        <h1 class="pk-person-tit">1.基本信息</h1>
                        <div class="pk-person-btn">
                            <button type="button" @click="backwaterHtml" class="btn btn-primary">
                                即时稽核查询
                            </button>
                        </div>
                    </div>
                    <div class="pk-person-info clearfix">
                        <div class="pk-info-deadpic iconfont icon-wode"></div>
                        <div class="pk-info-box">
                            <div class="pk-person-list">
                                <div class="pk-list-tit text-justify">用户名称<span></span></div>
                                <div class="pk-list-data"><span>:</span>{{indexInfo.account}}</div>
                            </div>
                            <div class="pk-person-list">
                                <div class="pk-list-tit text-justify">APP用户名称<span></span></div>
                                <div class="pk-list-data"><span>:</span>{{indexInfo.appName}}</div>
                            </div>
                            <div class="pk-person-list">
                                <div class="pk-list-tit text-justify">注册时间<span></span></div>
                                <div class="pk-list-data"><span>:</span>{{indexInfo.createTime|fiterTime}}</div>
                            </div>
                            <div class="pk-person-list">
                                <div class="pk-list-tit text-justify">真实姓名<span></span></div>
                                <div class="pk-list-data"><span>:</span>{{indexInfo.realName}}</div>
                            </div>
                            <div class="pk-person-list">
                                <div class="pk-list-tit text-justify">最后登录时间<span></span></div>
                                <div class="pk-list-data"><span>:</span>{{indexInfo.lastLoginTime |fiterTime}}</div>
                            </div>
                        </div>
                    </div>
                    <h1 class="pk-person-tit">2.资产信息</h1>
                    <div class="pk-balance">
                        账户总余额: <span class="pk-money">￥<span>{{indexInfo.totalBalance}}</span></span>
                        <span @click="refresh" class="glyphicon iconfont icon-hy_cq_sx" aria-hidden="true"> </span>
                    </div>
                    <div class="pk-balance-ul">
                        <div class="pk-balance-list pk-wallet">
                            <div class="pk-balance-box">
                                <div class="pk-money">{{indexInfo.balance}}</div>
                                <div class="pk-name">钱包余额</div>
                            </div>
                        </div>
                        <div v-for="(item,index) in indexInfo.gameBalanceDetail" class="pk-balance-list">
                            <div class="pk-balance-box">
                                <div class="pk-money">{{item.balance}}</div>
                                <div class="pk-name">{{item.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

    </div>
    <!-- 多按钮 -->
    <div class="pk-modal" id="testId">
        <!-- pk-close-modal 关闭模态框的class -->
        <div class="pk-modal-mask pk-close-modal"></div>
        <div class="pk-modal-cent">
            <h5 class="pk-modal-title">
                <span>提示</span>
                <i class="iconfont icon-ty_tk_gb pk-close-modal"></i>
            </h5>
            <div class="pk-modal-body">

            </div>
            <footer class="pk-modal-btns">
                <div class="pk-btn-close pk-close-modal">取消</div>
                <div class="pk-btn-sure pk-close-modal">确定</div>
            </footer>
        </div>
    </div>
    <!-- 单按钮 -->
    <div class="pk-modal" id="testId2">
        <!-- pk-close-modal 关闭模态框的class -->
        <div class="pk-modal-mask pk-close-modal"></div>
        <div class="pk-modal-cent">
            <h5 class="pk-modal-title">
                <span>提示</span>
                <i class="iconfont icon-ty_tk_gb pk-close-modal"></i>
            </h5>
            <div class="pk-modal-body">
                <div>
                    q2we232
                    <div style="margin-top: 1005px;">
                        asdasd
                    </div>
                </div>
            </div>
            <footer class="pk-modal-btn">
                <div class="pk-btn-sure pk-close-modal">确定</div>
            </footer>
        </div>
    </div>
    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script type="text/javascript" src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/person-center.js"></script>
    <script>
        // ajax demo  自己封装. 

        $(function () {
            $('.pk-left-nav ul li').click(function () {
                $('.pk-left-nav ul li').removeClass('active');
                $(this).addClass('active');
            });
        })
    </script>
</body>

</html>