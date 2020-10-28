<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>交易记录</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/statisticsReport.css">
</head>

<body>
    <!-- 头部导航 -->
    <div id="pk_header">
        <{ include "member" "member/layout/topnav" }>
    </div>
    <div class="pk-cnetent">
        <!-- 右侧内容 -->
        <div id="pk_statisticsreport" v-cloak>
            <nav class="pk-nav-title">
                <ul class="pk-nav-ul">
                    <li @click="getList(0,0)">
                        <a>本周</a>
                    </li>
                    <li @click="getList(-1,1)">
                        <a>上周</a>
                    </li>
                </ul>
            </nav>
            <article class="pk-article-content">
                <form class="pk-contacts-form">
                    <table class="pk-contacts-table">
                        <thead>
                            <tr>
                                <th class="th text-center">
                                    <p>日期</p>
                                    <div class="pk-lines"></div>
                                    <div class="pk-th-placeholder"></div>
                                </th>
                                <th class="th text-center">
                                    <p>项目</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>注单量</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>下注总额</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>有效下注总额</p>
                                    <div class="pk-lines"></div>
                                </th>
                                <th class="th text-center">
                                    <p>盈利总额</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <tbody class="pk-statisticsreport-tbody" v-for="(item ,i) in list" :key="i" v-if="i!=list.length-1">
                                    <tr class="pk-tbody-tr" :class="{'active':item.fshow}">
                                        <td class="text-center">
                                            {{item.subTotal.date + "("+ item.subTotal.week +")"}}
                                            <div class="pk-td-placeholder" @click="makeChange(item,i);" :class="{'active':item.fshow}">
                                                <i class="iconfont" :class="[item.fshow ? 'icon-ty_fh' : 'icon-ty_xl']"></i>
                                            </div>
                                        </td>
                                        <td class="text-center"></td>
                                        <td class="text-center">{{item.subTotal.num}}</td>
                                        <td class="text-center">{{item.subTotal.betAll | formatCurrency}}</td>
                                        <td class="text-center">{{item.subTotal.betValid| formatCurrency}}</td>
                                        <td class="text-center" :class="[item.subTotal.win>0 ? 'pk-cotacts-green':item.subTotal.win==0 ?'':'pk-cotacts-red']">{{item.subTotal.win| formatCurrency}}</td>
                                    </tr>
                                    <tr class="pk-tbody-tr" 
                                        v-show="item.fshow && item.data.length>0"
                                        v-for="(iteer,index) in item.data"
                                        >
                                        <td class="text-center">
                                             {{iteer.date + "("+ iteer.week +")"}}
                                            <div class="pk-td-placeholder pk-tdholder-child"></div>
                                        </td>
                                        <td class="text-center">{{fixmsg(iteer.platform,6)}}</td>
                                        <td class="text-center">{{iteer.num}}</td>
                                        <td class="text-center">{{iteer.betAll | formatCurrency}}</td>
                                        <td class="text-center">{{iteer.betAll | formatCurrency}}</td>
                                        <td class="text-center" :class="[item.win>0 ? 'pk-cotacts-green' :item.win==0?'':'pk-cotacts-red']">{{iteer.win | formatCurrency}}</td>
                                    </tr>
                                </tbody>
                            </tr>
                        </tbody>
                        <thead >
                            <tr>
                                <th class="th text-center">
                                    <p>总计</p>
                                    <div class="pk-th-placeholder"></div>
                                    <div class="pk-lines pk-visiable-none"></div>
                                </th>
                                <th class="th text-center">
                                    <p></p>
                                    <div class="pk-lines pk-visiable-none"></div>
                                </th>
                                <th class="th text-center">
                                    <p>{{totlaList.subTotal.num}}</p>
                                    <div class="pk-lines pk-visiable-none"></div>
                                </th>
                                <th class="th text-center">
                                    <p>{{totlaList.subTotal.betAll | formatCurrency}}</p>
                                    <div class="pk-lines pk-visiable-none"></div>
                                </th>
                                <th class="th text-center">
                                    <p>{{totlaList.subTotal.betValid | formatCurrency}}</p>
                                    <div class="pk-lines pk-visiable-none"></div>
                                </th>
                                <th class="th text-center">
                                    <p>{{totlaList.subTotal.win | formatCurrency}}</p>
                                    <div class="pk-lines pk-visiable-none"></div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                    <div class="pk-nodata" v-if="!list.length">
                        <div class="pk-nodata-box">
                            <img src="<{ .MemUrl }>/img/hy_ty_wsj.png">
                        </div>
                    </div>
                </form>
            </article>
        </div>
    </div>
    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/statisticsReport.js"></script>
</body>
</html>