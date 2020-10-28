<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>自助返水</title>
    <script>
        window.memurl = "<{ .MemUrl }>";
    </script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/autoBackWater.css">
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

        <div id="pk_autoback_water" class="pk-autoback-water" v-cloak>
            <div class="pk-autoback-head clearfix">
                <h1>个人资料：</h1>
                <div class="pk-autoback-btn">
                    <button :disabled="retreat === 0" type="button" id="getbackwater" @click="getwater" data-loading-text="Loading..." class="btn btn-primary" autocomplete="off">
                        领取返水
                    </button>
                    <button type="button" id="backdetails" @click="goDetails" class="btn btn-primary" >返水详情</button>
                </div>
            </div>
            <div class="pk-autoback-center">
                <div class="pk-table-head">
                    <div class="pk-table-th col-md-6 col-xs-6">有效打码</div>
                    <div class="pk-table-th col-md-6 col-xs-6">返水金额</div>
                </div>
                <div class="pk-table-cent">
                    <div class="pk-table-tr">
                        <div class="pk-table-td col-md-6 col-xs-6">{{bet}}</div>
                        <div class="pk-table-td col-md-6 col-xs-6">{{retreat}}</div>
                    </div>
                </div>
            </div>
            <div class="pk-center-tit">
                <h1>自助返水历史</h1>
                <div class="pk-center-titright">
                    <div class="pk-backwater">
                        当日已返水: <span class="pk-money">￥<span>{{todayMoney}}</span></span>
                    </div>
                    <div class="pk-backwater">
                        本周返水额: <span class="pk-money">￥<span>{{weekMoney}}</span></span>
                    </div>
                </div>
            </div>
            <div class="pk-autoback-center">
                <div class="pk-table-head">
                    <div class="pk-table-th col-md-4 col-xs-4">有效投注</div>
                    <div class="pk-table-th col-md-4 col-xs-4">返水金额</div>
                    <div class="pk-table-th col-md-4 col-xs-4">领取时间</div>
                </div>
                <div v-if="infoList.length" class="pk-table-cent">
                    <div v-for="(item,index) in infoList" class="pk-table-tr">
                        <div class="pk-table-td col-md-4 col-xs-4">{{item.betall}}</div>
                        <div class="pk-table-td col-md-4 col-xs-4">{{item.rebateWater}}</div>
                        <div class="pk-table-td col-md-4 col-xs-4">{{item.createTime|fiterTime}}</div>
                    </div>
                </div>
            </div>
            <div class="pk-nodata" v-if="!infoList.length">
                <div class="pk-nodata-box">
                    <img src="<{ .MemUrl }>/img/hy_ty_wsj.png">
                </div>
            </div>
        </div>

    </div>
    

    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/autoBackWater.js"></script>
</body>
</html>
