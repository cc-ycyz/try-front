<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我的返佣</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/myReturnCommission.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/promote.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/perpage.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/reset.css">
</head>
<body>
<!-- 头部导航 -->
<div id="pk_header">
    <!-- 第一个参数固定 member , 第二个相对路劲查找tpl文件 -->
    <{ include "member" "member/layout/topnav" }>
</div>
<div class="pk-cnetent">
    <!-- 左侧导航 -->
    <div id="pk_left_nav">
        <article class="pk-left-nav">
            <section class="pk-left-nav">
                <nav>
                    <ul>
                        <li ><a href="/member/promote.tpl"><i
                                class="iconfont icon-hy_wdzh_jbzx"></i>我要推广</a></li>
                        <li><a href="/member/rankingList.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>排行榜</a></li>
                        <li class="active"><a href="/member/myReturnCommission.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>我的返佣</a></li>
                    </ul>
                </nav>
            </section>
        </article>
    </div>
    <!-- 导航end -->
    <div class="pk-cent">
        <div id="myReturnCommission"  v-cloak>
            <div class="pk-commission-money">
                <span class="money">累计返佣金额:</span>
                <span class="sum">￥{{total}}</span>
            </div>
            <div class="pk-commission-list">
                <article class="pk-article-content">
                    <form class="pk-contacts-form">
                        <table class="pk-contacts-table">
                            <thead>
                            <tr>
                                <th class="th text-center">
                                    <p>有效投注</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>返佣金额</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>返佣时间</p>
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr class="pk-tbody-tr" v-for="(item,index) in commisionData">
                                <td class="text-center ">{{item.validBet}}</td>
                                <td class="text-center ">{{item.rebate}}</td>
                                <td class="text-center">{{item.time}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </article>

            </div>
        </div>
    </div>
</div>
<script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
<script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
<script src="<{ .MemUrl }>/lib/vue.min.js"></script>
<script src="<{ .MemUrl }>/js/common.js"></script>
<script src="<{ .MemUrl }>/js/myReturnCommission.js"></script>
</body>
</html>
