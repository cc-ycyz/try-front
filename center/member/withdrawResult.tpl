<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>取款</title>

    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/withdrawResult.css">
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
        <div id="pk_left_nav">
            <article class="pk-left-nav">
                <section class="pk-left-nav">
                    <nav>
                        <ul>
                            <li><a href="/member/trans.tpl"><i class="iconfont icon-hy_cq_eduzh"></i>额度转换</a></li>
                            <li><a href="/member/companyIncome.tpl"><i class="iconfont icon-hy_cq_ck"></i>存款</a></li>
                            <li class="active"><a><i class="iconfont icon-hy_cq_qc"></i>取款</a></li>
                        </ul>
                    </nav>
                </section>
            </article>
        </div>
        <!-- 导航end -->
        <!-- 右侧内容 -->
        <div class="pk-cent">
            <div class="pk-money-box">
                <div id="pk_withdrawResult" v-cloak>


                    <div class="pk-withdraw-result" v-if="type == 2">
                        <div class="pk-withdraw-result-box">
                            <i class="iconfont icon-hy_cq_wanc"></i>
                            <h5>恭喜！出款已提交</h5>
                            <p>我们将尽快审核您的订单，请注意查收消息</p>
                            <div class="pk-withdrawResult-satisfy">
                                <button class="pk-withdrawResult-btn-blue" @click="back">返回取款页</button>
                                <button class="pk-withdrawResult-btn-wihte">查看交易记录</button>
                            </div>
                        </div>
                        <div class="pk-withdrawResult-box pk-order-box">
                            <div class="pk-withdrawResult-cent">
                                <div class="pk-withdrawResult-list">
                                    <label>订单号: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-big" v-html="withdrawInfo.orderId">--</div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label>取款金额: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-big" v-html="withdrawInfo.actualMoney">0.00</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div class="pk-withdrawResult-box">
                            <h3>1.取款信息</h3>
                            <div class="pk-withdrawResult-cent">
                                <div class="pk-withdrawResult-list">
                                    <label>取款金额: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-blue" v-html="withdrawInfo.money"></div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label><span class="pk-text-red" v-if="adminMoney">未满足</span><span class="pk-text-green"
                                            v-if="!adminMoney">满足</span>常态稽核: </label>
                                    <div class="pk-withdrawResult-list-cent" v-if="adminMoney"><span class="pk-text-big">扣除行政费</span><span
                                            class="pk-text-red" v-html="adminMoney"></span></div>
                                    <div class="pk-withdrawResult-list-cent" v-if="!adminMoney"><span class="pk-text-big">无需扣除行政费</span></div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label><span class="pk-text-red" v-if="depositMoney">未满足</span><span class="pk-text-green"
                                            v-if="!depositMoney">满足</span>综合稽核: </label>
                                    <div class="pk-withdrawResult-list-cent" v-if="depositMoney"><span class="pk-text-big">扣除优惠</span><span
                                            class="pk-text-red" v-html="depositMoney"></span></div>
                                    <div class="pk-withdrawResult-list-cent" v-if="!depositMoney"><span class="pk-text-big">无需扣除优惠</span></div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label>手续费: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-big" v-html="withdrawInfo.outCharge"></div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label>最终取款: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-red" v-html="withdrawInfo.actualMoney"></div>
                                </div>
                            </div>
                        </div>
                        <div class="pk-withdrawResult-todo" v-if="type == 1">
                            <div class="pk-withdrawResult-dissatisfy" v-if="withdrawInfo.actualMoney <= 0 ">
                                <p>取款金额小于扣除费用，无法出款</p>
                                <button class="pk-withdrawResult-btn-blue" @click="back">返回取款页</button>
                            </div>
                            <div class="pk-withdrawResult-satisfy" v-if="withdrawInfo.actualMoney > 0 ">
                                <button class="pk-withdrawResult-btn-blue" @click="carryOn">继续取款</button>
                                <button class="pk-withdrawResult-btn-wihte" @click="back">返回取款页</button>
                            </div>
                        </div>
                        <div class="pk-withdrawResult-box">
                            <h3>2.稽核明细</h3>
                            <div class="pk-withdrawResult-cent">
                                <div class="pk-withdrawResult-list">
                                    <label>稽核时间: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-big" v-show="withdrawInfo.startTime">{{withdrawInfo.endTime
                                        | fiterTime}}</div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label>总存款金额: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-big" v-html="withdrawInfo.totalMoney"></div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label>总存款优惠: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-big" v-html="withdrawInfo.totalDepositDiscount"></div>
                                </div>
                                <div class="pk-withdrawResult-list">
                                    <label>总有效投注: </label>
                                    <div class="pk-withdrawResult-list-cent pk-text-big" v-html="withdrawInfo.totalBetMoney"></div>
                                </div>

                            </div>
                            <div class="pk-audit-center">
                                <div class="pk-table-head">
                                    <div class="pk-table-th col-md-2 col-xs-2">存款时间</div>
                                    <div class="pk-table-th col-md-2 col-xs-2">存款金额</div>
                                    <div class="pk-table-th col-md-2 col-xs-2">存款优惠</div>
                                    <div class="pk-table-th col-md-2 col-xs-2">有效投注额</div>
                                    <div class="pk-table-th col-md-2 col-xs-2">常态稽核</div>
                                    <div class="pk-table-th col-md-2 col-xs-2">综合稽核</div>
                                </div>
                                <div v-if="withdrawInfo.allData.length > 0" class="pk-table-cent">
                                    <div v-for="(item,index) in withdrawInfo.allData" class="pk-table-tr">
                                        <div class="pk-table-td col-md-2 col-xs-2">{{item.startTime | fiterDate}}</div>
                                        <div class="pk-table-td col-md-2 col-xs-2">{{item.preSave}}</div>
                                        <div class="pk-table-td col-md-2 col-xs-2">
                                            {{item.depositMoney}}
                                        </div>

                                        <div class="pk-table-td col-md-2 col-xs-2 pk-hover-box pk-deposit-money">
                                            <span class="pk-hover-box-span">{{item.betValid}}</span>
                                            <ul>
                                                <li class="pk-pop-title">
                                                    <div>视讯</div>
                                                    <div>有效投注额</div>
                                                </li>
                                                <li>
                                                    <div>彩票游戏</div>
                                                    <div>{{item.gameLottery}}</div>
                                                </li>
                                                <li>
                                                    <div>棋牌游戏</div>
                                                    <div>{{item.gameChess}}</div>
                                                </li>
                                                <li>
                                                    <div>视讯直播</div>
                                                    <div>{{item.gameVideo}}</div>
                                                </li>
                                                <li>
                                                    <div>电子游艺</div>
                                                    <div>{{item.gameElectronics}}</div>
                                                </li>
                                                <li>
                                                    <div>体育赛事</div>
                                                    <div>{{item.gameSports}}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pk-table-td col-md-2 col-xs-2"><span v-if="item.adminMoney <= 0"
                                                class="pk-text-green">{{item.adminMoney}}</span><span v-if="item.adminMoney > 0"
                                                class="pk-text-red">{{item.adminMoney}}</span></div>
                                        <div class="pk-table-td col-md-2 col-xs-2"><span v-if="item.depositMoney <= 0"
                                                class="pk-text-green">{{item.depositMoney}}</span><span v-if="item.depositMoney > 0"
                                                class="pk-text-red">{{item.depositMoney}}</span></div>
                                    </div>
                                </div>
                                <div class="pk-nodata" v-if="withdrawInfo.allData.length <=0 ">
                                    <div class="pk-nodata-box">
                                        <img src="<{ .MemUrl }>/img/hy_ty_wsj.png">
                                    </div>
                                </div>
                            </div>
                            <div v-if="type == 2">
                                <!-- 公司存款-广告轮播图 -->
                                <div class="pk-income-success-carousel">
                                    <div id="carousel-example-generic" class="carousel slide" data-interval="3000"
                                        data-ride="carousel">
                                        <div id="pk_carousel" class="carousel-inner" role="listbox"></div>
                                    </div>
                                </div>
                            </div>
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
    <script src="<{ .MemUrl }>/js/withdrawResult.js"></script>

</body>

</html>