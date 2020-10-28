<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>排行榜</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/rankingList.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/promote.css">
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
                        <li  class="active"><a href="/member/rankingList.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>排行榜</a></li>
                        <li><a href="/member/myReturnCommission.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>我的返佣</a></li>
                    </ul>
                </nav>
            </section>
        </article>
    </div>
    <!-- 导航end -->
    <div class="pk-cent">
        <div id="rankingList">
            <div class="rankingList-content">
                <h1 class="rankingList-title">1.人气排行榜</h1>
                <article class="pk-article-content">
                    <form class="pk-contacts-form">
                        <table class="pk-contacts-table">
                            <thead>
                            <tr>
                                <th class="th text-center">
                                    <p>排行</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>账号</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>人数</p>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="tbody">
                            <tr class="pk-tbody-tr"  v-for="(item,index) in PopularityList">
                                <td class="text-center">
                                    <div v-if="index==0" class="one"> {{index+1}}</div>
                                    <div v-if="index==1" class="two"> {{index+1}}</div>
                                    <div v-if="index==2" class="three">{{index+1}}</div>
                                    <div v-if="index>2"> {{index+1}}</div>

                                </td>
                                <td class="text-center ">{{item.account}}</td>
                                <td class="text-center">{{item.spreadNum}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </article>
            </div>
            <div class="rankingList-content">
                <h1 class="rankingList-title">2.土豪排行榜</h1>
                <article class="pk-article-content">
                    <form class="pk-contacts-form">
                        <table class="pk-contacts-table">
                            <thead>
                            <tr>
                                <th class="th text-center">
                                    <p>排行</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>账号</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>推广获利</p>
                                </th>

                            </tr>
                            </thead>
                            <tbody class="tbody">
                            <tr class="pk-tbody-tr"  v-for="(item,index) in profitList">
                                <td class="text-center">
                                    <div v-if="index==0" class="one"> {{index+1}}</div>
                                    <div v-if="index==1" class="two"> {{index+1}}</div>
                                    <div v-if="index==2" class="three">{{index+1}}</div>
                                    <div v-if="index>2"> {{index+1}}</div>

                                </td>
                                <td class="text-center ">{{item.account}}</td>
                                <td class="text-center">{{item.spreadMoney}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </article>
            </div>

        </div>
    </div>
</div>
</body>
<script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
<script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
<script src="<{ .MemUrl }>/lib/vue.min.js"></script>
<script src="<{ .MemUrl }>/js/common.js"></script>
<script src="<{ .MemUrl }>/js/rankingList.js"></script>
</html>