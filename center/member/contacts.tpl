<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>交易记录</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/reset.css">
    <script src="<{ .MemUrl }>/lib/pagination.js"></script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link href="<{ .MemUrl }>/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/perpage.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/contacts.css">


</head>

<body>
    <!-- 头部导航 -->
    <div id="pk_header">
        <article class="pk-header">
            <{ include "member" "member/layout/topnav" }>
        </article>
    </div>
    <div class="pk-cnetent">
        <!-- 左侧导航 -->
        <div id="pk_left_nav">
            <{ include "member" "member/layout/contacts-left" }>
        </div>
        <!-- 导航end -->
        <!-- 右侧内容  getformList(true,item,null)-->
        <div class="pk-cent">
            <div id="pk_trans">
                <nav class="pk-nav-title">
                    <ul class="pk-nav-ul">
                        <li class="pk-lis" v-for="(item,index) in gameTypelist" :key="index" @click="toggleClass(index,1);getPlatFormname(item,index)">
                            <a v-html="item.title"></a>
                        </li>
                    </ul>
                </nav>
                <nav class="pk-nav-titleline">
                    <ul class="pk-nav-titleline-ul">
                        <li class="pk-liers" v-for="(item,index) in productNamelister" :key="index" @click="toggleClass(index,2);getformList(true,item,null)">
                            <a v-html="item.productName"></a>
                        </li>
                    </ul>
                </nav>
                <div class="pk-person-info clearfix">
                    <div class="pk-person-list pk-constacts-list clearfix">
                        <label class="title-label">注单号:</label>
                        <div class="form-group">
                            <input class="form-control orderId" type="text" value="" placeholder="请输入关键字查询">
                        </div>
                    </div>
                    <div class="pk-person-list clearfix" style="width: 560px;">
                        <label class="pk-title-time">投注时间: </label>
                        <div class="pk-contacts-time">
                            <div class="input-group date form_datetime col-md-5" data-date="" data-date-format="dd MM yyyy - HH:ii p"
                                data-link-field="dtp_input1" style="width: 185px;">
                                <input class="form-control endTime" placeholder="结束时间" size="16" type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-th iconfont icon-hy_cq_riqi"></span></span>
                            </div>
                            <input type="hidden" id="dtp_input1" value="" /><br />
                        </div>
                        <div class="pk-middleline">至</div>
                        <div class="pk-contacts-time">
                            <div class="input-group date form_datetime col-md-5" data-date="" data-date-format="dd MM yyyy - HH:ii p"
                                data-link-field="dtp_input2" style="width: 185px;">
                                <input class="form-control beginTime" placeholder="开始时间" size="16" type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-th iconfont icon-hy_cq_riqi"></span></span>
                            </div>
                            <input type="hidden" id="dtp_input2" value="" /><br />
                        </div>
                    </div>
                    <div class="pk-person-list clearfix pk-contacts-buttongroup">
                        <button type="button" class="pk-contacts-button" @click="search">查询</button>
                    </div>
                </div>
                <article class="pk-article-content" v-cloak>
                    <form class="pk-contacts-form">
                        <table class="pk-contacts-table">
                            <thead>
                                <tr>
                                    <th class="th text-center">
                                        <p>时间</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>注单号</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>桌号</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>彩票类别</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>下注内容</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>总投注</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>有效投注</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>盈利</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="pk-contacts-tbody">
                                <tr class="pk-tbody-tr" v-for="(item,i) in list">
                                    <td class="text-center clearfix pk-times">
                                        <div class="pk-tabTime"><span class="pk-spans">{{item.betTime | strToDate }}</span></div>
                                    </td>
                                    <td class="text-center" data-toggle="tooltip" data-placement="bottom" :title="item.orderId">{{ fixmsg(item.orderId,6)}}</td>
                                    <td class="text-center" data-toggle="tooltip" data-placement="bottom" :title="item.periodsOrTable">{{ fixmsg(item.periodsOrTable,6)}}</td>
                                    <td class="text-center" data-toggle="tooltip" data-placement="bottom" :title="item.gameTranslatedName">{{ fixmsg(item.gameTranslatedName,6)}}</td>
                                    <td class="text-center" data-toggle="tooltip" data-placement="bottom" :title="item.betDetail">{{fixmsg(item.betDetail,6)}}</td>
                                    <td class="text-center">{{item.betAll | formatCurrency}}</td>
                                    <td class="text-center">{{item.betYx | formatCurrency}}</td>
                                    <!-- <td class="text-center" :class="[item.win>0 ? 'pk-cotacts-green' : 'pk-cotacts-red']">{{item.win>0 ?"+"+(item.win): (item.win) }} </td>  -->
                                    <td class="text-center"  :class="[item.win>0 ? 'pk-cotacts-green':item.win==0 ?'':'pk-cotacts-red']">{{item.win | formatCurrency }} </td> 
                                </tr>
                            </tbody>
                        </table>
                        <div class="pk-nodata" v-if="!list.length">
                            <div class="pk-nodata-box">
                                <img src="<{ .MemUrl }>/img/hy_ty_wsj.png">
                            </div>
                        </div>
                    </form>
                    <div class="holder" v-show="list.length>0">
                        <div class="ht-page"></div>
                        <div class="pk-bet-select">
                            <select id="pk_bet_page" class="form-control selectpicker" placeholder="--"
                                data-live-search="true"></select>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/contacts.js"></script>
</body>
</html>