<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>取款记录</title>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/reset.css">
    <script src="<{ .MemUrl }>/lib/pagination.js"></script>
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link href="<{ .MemUrl }>/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/perpage.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/withdrawals.css">
</head>

<body>
    <!-- 头部导航 -->
    <div id="pk_header">
        <{ include "member" "member/layout/topnav" }>
    </div>
    <div class="pk-cnetent">
        <!-- 左侧导航 -->
        <div id="pk_left_nav">
            <{ include "member" "member/layout/contacts-left" }>
        </div>
        <!-- 导航end -->
        <!-- 右侧内容 -->
        <div class="pk-cent">
            <div id="pk_withdrawals" v-cloak>
                <div class="pk-person-info clearfix">
                    <div class="pk-person-list pk-constacts-list clearfix">
                        <label class="must">交易类型:</label>
                        <div class="form-group pk-bet-select">
                            <select id="pk_chanceType" class="form-control selectpicker" placeholder="--"
                                data-live-search="true"></select>
                        </div>
                    </div>
                    <div class="pk-person-list clearfix" style="width: 560px;">
                        <label class="pk-title-time">时间: </label>
                        <div class="pk-contacts-time">
                            <div class="input-group date form_datetime col-md-5" data-date="" data-date-format="dd MM yyyy - HH:ii p"
                                data-link-field="dtp_input1">
                                <input class="form-control endTime inputs" placeholder="结束时间" size="16" type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-th iconfont icon-hy_cq_riqi"></span></span>
                            </div>
                            <input type="hidden" id="dtp_input1" value="" /><br />
                        </div>
                        <div class="pk-middleline">至</div>
                        <div class="pk-contacts-time">
                            <div class="input-group date form_datetime col-md-5" data-date="" data-date-format="dd MM yyyy - HH:ii p"
                                data-link-field="dtp_input2">
                                <input class="form-control beginTime inputs" placeholder="开始时间" size="16" type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-th iconfont icon-hy_cq_riqi"></span></span>
                            </div>
                            <input type="hidden" id="dtp_input2" value="" /><br />
                        </div>
                    </div>
                    <div class="pk-person-list clearfix pk-contacts-buttongroup">
                        <button type="button" class="pk-contacts-button" @click="search">查询</button>
                    </div>
                </div>
                <div class="pk-bet-title">
                    <p class="pk-ps">查询区间为最近三个月</p>
                </div>
                <article class="pk-article-content">
                    <form class="pk-contacts-form">
                        <table class="pk-contacts-table">
                            <thead>
                                <tr>
                                    <th class="th text-center">
                                        <p>日期</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>订单号</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>支付方式</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>存款金额</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>存款进度</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                    <th class="th text-center">
                                        <p>查看详细</p>
                                        <div class="pk-lines"></div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="pk-contacts-tbody">
                                <tr class="pk-tbody-tr" v-for="(item,i) in list">
                                    
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
    <script src="<{ .MemUrl }>/js/withdrawals.js"></script>
</body>

</html>
