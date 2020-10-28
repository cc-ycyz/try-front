<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>即时稽核查询</title>
    <script>
        window.memurl = "<{ .MemUrl }>";
    </script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
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

        <div id="pk_audit_query" class="pk-audit-query" v-cloak>
            <div class="pk-audit-head clearfix">
                <h1>即时稽核查询</h1>
                <div class="pk-audit-btn">
                    <a href="../index.tpl" class="btn btn-primary">
                        返回
                    </a>
                </div>
            </div>

            <div class="pk-person-info">
                <div class="pk-person-list">
                    <div class="pk-list-tit text-justify">稽核时间<span></span></div>
                    <div v-cloak  class="pk-list-data"><span>:</span>{{infoList.startTime|fiterTime}}-{{infoList.endTime|fiterTime}}</div>
                </div>
                <div class="pk-person-list">
                    <div class="pk-list-tit text-justify">存款金额<span></span></div>
                    <div class="pk-list-data"><span>:</span>{{infoList.totalMoney}}</div>
                </div>
                <div class="pk-person-list">
                    <div class="pk-list-tit text-justify">存款优惠<span></span></div>
                    <div class="pk-list-data"><span>:</span>{{infoList.totalDepositDiscount}}</div>
                </div>
                <div class="pk-person-list">
                    <div class="pk-list-tit text-justify">总有效投注<span></span></div>
                    <div class="pk-list-data"><span>:</span>{{infoList.totalBetMoney}}</div>
                </div>
                <div class="pk-person-list">
                    <div class="pk-audit-text"><span class="">已满足</span>常态稽核</div>
                </div>
                <div class="pk-person-list">
                        <div class="pk-audit-text">需投注<span class="pk-money">{{infoList.deductionMultipleMoney}}</span>元才能满足最后一笔综合稽核</div>
                </div>
            </div>
            
            <div class="pk-audit-center">
                <div class="pk-table-head">
                    <div class="pk-table-th col-md-3 col-xs-3">存款时间</div>
                    <div class="pk-table-th col-md-3 col-xs-3">存款金额</div>
                    <div class="pk-table-th col-md-3 col-xs-3">存款优惠</div>
                    <div class="pk-table-th col-md-3 col-xs-3">有效投注</div>
                </div>
                <div v-if="!arrData.length" class="pk-nodatas">暂无数据</div>
                <div v-if="arrData.length" class="pk-table-cent">
                    <div v-for="(item,index) in arrData" class="pk-table-tr">
                        <div class="pk-table-td col-md-3 col-xs-3">{{item.startTime|fiterTime}}</div>
                        <div class="pk-table-td col-md-3 col-xs-3">{{item.preSave}}</div>
                        <div class="pk-table-td col-md-3 col-xs-3">{{item.depositPreSave}}</div>
                        <div class="pk-popover-box pk-table-td col-md-3 col-xs-3">
                            {{item.betValid}}
                            <div class="pk-popover">
                                <div class="pk-popover-head clearfix">
                                    <div class="col-xs-6">视讯</div>
                                    <div class="col-xs-6">有效投注金额</div>
                                </div>
                                <div class="pk-popover-ul">
                                    <div class="pk-popover-list clearfix">
                                        <div class="col-xs-6">彩票游戏</div>
                                        <div class="col-xs-6">{{item.gameLottery}}</div>
                                    </div>
                                    <div class="pk-popover-list clearfix">
                                        <div class="col-xs-6">视讯直播</div>
                                        <div class="col-xs-6">{{item.gameVideo}}</div>
                                    </div>
                                    <div class="pk-popover-list clearfix">
                                        <div class="col-xs-6">棋牌游戏</div>
                                        <div class="col-xs-6">{{item.gameChess}}</div>
                                    </div>
                                    <div class="pk-popover-list clearfix">
                                        <div class="col-xs-6">电子游艺</div>
                                        <div class="col-xs-6">{{item.gameElectronics}}</div>
                                    </div>
                                    <div class="pk-popover-list clearfix">
                                        <div class="col-xs-6">体育赛事</div>
                                        <div class="col-xs-6">{{item.gameSports}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pk-person-info">
                <div class="pk-audit-bottom">
                    <div class="audit-tit">温馨提示：</div>
                    常态稽核=会员入款金额*常态稽核倍数<br>
                    综合稽核=（会员入款金额+入款优惠金额）*综合稽核倍数+优惠<br>
                    金额*相应综合稽核倍数<br>
                    出款出现以下情况将会扣除一定费用：<br>
                    1.未满足常态稽核将扣除入款金额{{infoList.adminMoneyRate}}%的行政费用。<br>
                    2.未满足综合稽核将会扣除优惠金额。
                </div>
            </div>

        </div>

    </div>
    

    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/auditQuery.js"></script>
</body>
</html>
