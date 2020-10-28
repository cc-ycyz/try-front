<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>投注资讯</title>
    <script>
        window.memurl = "<{ .MemUrl }>";
    </script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/betinFormation.css">
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

        <div id="pk_information" class="pk-information" v-cloak>
            <ul id="myTab" class="nav nav-tabs">
                <li class="active"><a href="#loginpass" data-toggle="tab">体育</a></li>
                <li><a href="#withdrawpass" data-toggle="tab">彩票</a></li>
            </ul>
            <div id="myTabContent" class="pk-pass-tab tab-content">
                <div class="tab-pane fade in active" id="loginpass">
                    <div class="pk-table">
                        <div class="pk-table-head" >
                            <div class="pk-table-th">足球</div>
                            <div class="pk-table-th">退水设定</div>
                            <div class="pk-table-th">单场限额</div>
                            <div class="pk-table-th">单注限额</div>
                            <div class="pk-table-th">最低限额</div>
                        </div>
                        <div class="pk-table-cent panel-collapse collapse" id="collapseOne">
                            <div v-for="(item,index) in infoList" class="pk-table-tr">
                                <div class="pk-table-td">{{item.time}}</div>
                                <div class="pk-table-td">{{item.money}}</div>
                                <div class="pk-table-td">{{item.type}}</div>
                                <div class="pk-table-td">{{item.ctype}}</div>
                                <div class="pk-table-td">{{item.balance}}</div>
                            </div>
                        </div>
                        <div class="pk-table-more">
                            <a class="iconfont icon-ty_xl" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a>
                        </div>
                    </div>

                    <div class="pk-table">
                        <div class="pk-table-head" >
                            <div class="pk-table-th">足球</div>
                            <div class="pk-table-th">退水设定</div>
                            <div class="pk-table-th">单场限额</div>
                            <div class="pk-table-th">单注限额</div>
                            <div class="pk-table-th">最低限额</div>
                        </div>
                        <div class="pk-table-cent panel-collapse collapse" id="collapseTwo">
                            <div v-for="(item,index) in infoList" class="pk-table-tr">
                                <div class="pk-table-td">{{item.time}}</div>
                                <div class="pk-table-td">{{item.money}}</div>
                                <div class="pk-table-td">{{item.type}}</div>
                                <div class="pk-table-td">{{item.ctype}}</div>
                                <div class="pk-table-td">{{item.balance}}</div>
                            </div>
                        </div>
                        <div class="pk-table-more">
                            <a class="iconfont icon-ty_xl" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"></a>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="withdrawpass">
                    <div class="pk-table">
                        <div class="pk-table-head" >
                            <div class="pk-table-th">足球</div>
                            <div class="pk-table-th">退水设定</div>
                            <div class="pk-table-th">单场限额</div>
                            <div class="pk-table-th">单注限额</div>
                            <div class="pk-table-th">最低限额</div>
                        </div>
                        <div class="pk-table-cent panel-collapse collapse" id="collapset">
                            <div v-for="(item,index) in infoList" class="pk-table-tr">
                                <div class="pk-table-td">{{item.time}}</div>
                                <div class="pk-table-td">{{item.money}}</div>
                                <div class="pk-table-td">{{item.type}}</div>
                                <div class="pk-table-td">{{item.ctype}}</div>
                                <div class="pk-table-td">{{item.balance}}</div>
                            </div>
                        </div>
                        <div class="pk-table-more">
                            <a class="iconfont icon-ty_xl" data-toggle="collapse" data-parent="#accordion" href="#collapset"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    

    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/betinFormation.js"></script>
</body>
</html>
