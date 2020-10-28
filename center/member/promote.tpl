<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我要推广</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/announcement.css">
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
                        <li class="active"><a href="/member/promote.tpl"><i
                                class="iconfont icon-hy_wdzh_jbzx"></i>我要推广</a></li>
                        <li><a href="/member/rankingList.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>排行榜</a></li>
                        <li ><a href="/member/myReturnCommission.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>我的返佣</a></li>
                    </ul>
                </nav>
            </section>
        </article>
    </div>
    <!-- 导航end -->
    <div class="pk-cent">
        <div id="promote"  v-cloak>
            <h1 class="promote-title">1.我要推广</h1>
            <div class="promote-info">
                <div class="pk-promote-list">
                    <div class="pk-promote-tit text-justify">用户名称<span></span></div>
                    <div class="pk-promote-data"><span>:</span>{{prData.account}}</div>
                </div>
                <div class="pk-promote-list">
                    <div class="pk-promote-tit text-justify">推广人数<span></span></div>
                    <div class="pk-promote-data"><span>:</span>{{prData.spreadNum}}</div>
                </div>
                <div class="pk-promote-list">
                    <div class="pk-promote-tit text-justify">收益<span></span></div>
                    <div class="pk-promote-data"><span>:</span>{{prData.spreadMoney}}</div>
                </div>
                <div class="pk-promote-list">
                    <div class="pk-promote-tit text-justify">推广地址<span></span></div>
                    <div class="pk-promote-data" ><span>:</span><b id="text">{{prData.memberUrl}}</b></div>
                    <div class="pk-promote-copy btn-copy"  @click="copy(prData.memberUrl)" data-clipboard-action="copy" data-clipboard-target=".pk-promote-data">
                        复制
                    </div>
                   <span style="display: none" id="input"></span>
                </div>
            </div>
            <h1 class="promote-title">2.推广返佣比例:</h1>
            <div class="promote-introduce">
                有效打码至xx、xx、xx为各个模板的梯度。如莱利彩票打码100元，返佣10%；打码1000元，返佣20%，以此类推。
            </div>
            <article class="pk-article-content">
                <form class="pk-contacts-form">
                    <table class="pk-contacts-table">
                        <thead>
                        <tr>
                            <th class="th text-center">
                                <p>{{prListTitle.name}}</p>
                            </th>
                            <th v-for="(item,index) in prListTitle.child" class="th text-center">
                                <p>{{item.rate}}</p>
                            </th>

                        </tr>
                        </thead>
                        <tbody id="rebate_rate">
                        <!--<tr class="pk-tbody-tr">-->
                            <!--<td class="text-center ">时间</td>-->
                            <!--<td class="text-center ">时间</td>-->
                            <!--<td class="text-center">时间</td>-->
                            <!--<td class="text-center">时间</td>-->

                        <!--</tr>-->
                        <!--<tr class="pk-tbody-tr">-->
                            <!--<td class="text-center ">时间</td>-->
                            <!--<td class="text-center ">时间</td>-->
                            <!--<td class="text-center">时间</td>-->
                            <!--<td class="text-center">时间</td>-->
                        <!--</tr>-->
                        </tbody>
                    </table>
                </form>
            </article>
        </div>
    </div>
</div>
<script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
<script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
<script src="<{ .MemUrl }>/lib/vue.min.js"></script>
<script src="<{ .MemUrl }>/lib/clipboard.min.js"></script>
<script src="<{ .MemUrl }>/js/common.js"></script>
<script src="<{ .MemUrl }>/js/promote.js"></script>
<script>
    $('')
</script>
</body>
</html>