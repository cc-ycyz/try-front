<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>今日交易</title>
    <script>
        window.memurl = "<{ .MemUrl }>";
    </script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/transAction.css">
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
            <div id="pk_person_trans" class="pk-person-trans" v-cloak>
                <div class="pk-table">
                    <div class="pk-table-head">
                        <div class="col-md-2 col-xs-2">交易时间</div>
                        <div class="col-md-2 col-xs-2">金额</div>
                        <div class="col-md-2 col-xs-2">类型</div>
                        <div class="col-md-2 col-xs-2">交易类型</div>
                        <div class="col-md-2 col-xs-2">余额</div>
                        <div class="col-md-2 col-xs-2">备注</div>
                    </div>
                    <div v-if="infoList.length" class="pk-table-cent">
                        <div v-for="(item,index) in infoList" class="pk-table-tr">
                            <div class="col-md-2 col-xs-2" data-toggle="tooltip" data-placement="bottom" :title="item.createTime | fiterTime">{{item.createTime |fiterTime}}</div>
                            <div class="col-md-2 col-xs-2">{{item.doMoney}}</div>
                            <div class="col-md-2 col-xs-2">{{item.doTypeName}}</div>
                            <div class="col-md-2 col-xs-2">{{item.sourceTypeName}}</div>
                            <div class="col-md-2 col-xs-2">{{item.balance}}</div>
                            <div class="col-md-2 col-xs-2" data-toggle="tooltip" data-placement="bottom" :title="item.remark">{{item.remark}}</div>
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
    <script src="<{ .MemUrl }>/js/transAction.js"></script>
</body>
</html>
