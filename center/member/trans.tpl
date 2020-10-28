<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>额度转换</title>

    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/trans.css">
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
                            <li class="active"><a><i class="iconfont icon-hy_cq_eduzh"></i>额度转换</a></li>
                            <li><a href="/member/companyIncome.tpl"><i class="iconfont icon-hy_cq_ck"></i>存款</a></li>
                            <li><a href="/member/withdraw.tpl"><i class="iconfont icon-hy_cq_qc"></i>取款</a></li>
                        </ul>
                    </nav>
                </section>
            </article>
        </div>
        <!-- 导航end -->
        <!-- 右侧内容 -->
        <div class="pk-cent">

            <div class="pk-money-box">

                <div id="pk_trans" v-cloak>

                    <!-- 转入/转出弹框 -->
                    <div class="pk-modal" id="pk_trans_in">
                        <!-- pk-close-modal 关闭模态框的class -->
                        <div class="pk-modal-mask pk-close-modal"></div>
                        <div class="pk-modal-cent">
                            <h5 class="pk-modal-title">
                                <span>额度转换</span>
                                <i class="iconfont icon-ty_tk_gb pk-close-modal"></i>
                            </h5>
                            <div class="pk-modal-body">
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <div v-show="doType === 2" class="pk-in-out">系统余额&nbsp;&nbsp;&nbsp;&nbsp;<span>转入</span>&nbsp;&nbsp;&nbsp;&nbsp;{{transSingleInfo.platformShow}}</div>
                                        <div v-show="doType === 1" class="pk-in-out">{{transSingleInfo.platformShow}}&nbsp;&nbsp;&nbsp;&nbsp;<span>转出</span>&nbsp;&nbsp;&nbsp;&nbsp;系统余额</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">{{doType === 2?'转入':'转出'}}金额:</label>
                                        <div class="col-sm-8">
                                            <div class="input-group">
                                                <input type="number" onkeyup="this.value = this.value.replace(/[^\d]/,'')"
                                                    v-model="money" autocomplete="off" class="form-control">
                                                <div class="input-group-addon">元</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <ul class="pk-fast-money-btn col-sm-11">
                                            <li @click="chooseFastMoney(index)" :class="{'active':iFastNow === index}"
                                                v-for="(item,index) in fastMoneyList">{{item}}</li>
                                        </ul>
                                    </div>

                                </form>
                            </div>
                            <footer class="pk-modal-btns">
                                <div class="pk-btn-close pk-close-modal">取消</div>
                                <div @click="transSubmit()" class="pk-btn-sure">确认转款</div>
                            </footer>
                        </div>
                    </div>


                    <!-- 快捷转入弹框 -->
                    <div class="pk-modal" id="pk_fast_pay">
                        <!-- pk-close-modal 关闭模态框的class -->
                        <div class="pk-modal-mask pk-close-modal"></div>
                        <div class="pk-modal-cent">
                            <h5 class="pk-modal-title">
                                <span>设置快捷转入</span>
                                <i class="iconfont icon-ty_tk_gb pk-close-modal"></i>
                            </h5>
                            <div class="pk-modal-body">
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">快捷转入比例:</label>
                                        <div class="col-sm-8">
                                            <div class="input-group">
                                                <input type="number" maxlength="3" onkeyup="this.value = this.value.replace(/[^\d]/,'')"
                                                    v-model="balanceRatio" autocomplete="off" class="form-control">
                                                <div class="input-group-addon">%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">当天首次:</label>
                                        <div class="col-sm-8">
                                            <div class="input-group">
                                                <i v-show="dayFirst" @click="dayFirst=!dayFirst" class="iconfont icon-hy_ed_gx1"></i>
                                                <i v-show="!dayFirst" @click="dayFirst=!dayFirst" class="iconfont icon-hy_ed_gx"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <div class="input-group">
                                                <p>*设置比例后，每次进入游戏直接按照所设置余额比例自动转入游戏中； </p>
                                                <p>*勾选“当天首次”，为当天首次进入游戏时按余额比例转入，随后进入</p>
                                                <p>不再自动转入。</p>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <footer class="pk-modal-btns">
                                <div class="pk-btn-close pk-close-modal">取消</div>
                                <div @click="setFastPaySubmit()" class="pk-btn-sure">保存设置</div>
                            </footer>
                        </div>
                    </div>


                    <!-- 一键归户弹框 -->
                    <div class="pk-modal" id="pk_fast_back">
                        <!-- pk-close-modal 关闭模态框的class -->
                        <div class="pk-modal-mask pk-close-modal"></div>
                        <div class="pk-modal-cent">
                            <h5 class="pk-modal-title">
                                <span>信息提示</span>
                                <i class="iconfont icon-ty_tk_gb pk-close-modal"></i>
                            </h5>
                            <div class="pk-modal-body">
                                <h2 class="fast-pay-hint">您确定将所有视讯余额转出到系统吗？</h2>
                            </div>
                            <footer class="pk-modal-btns">
                                <div class="pk-btn-close pk-close-modal">取消</div>
                                <div @click="setFastBackSubmit()" class="pk-btn-sure">确定</div>
                            </footer>
                        </div>
                    </div>





                    <div class="pk-trans-title">
                        <h2>账户总余额: <b><span>￥</span>{{transInfo.totalBalance}}</b><i @click="refresh()" class="iconfont icon-hy_cq_sx"></i></h2>
                    </div>

                    <!-- 额度转换列表 -->
                    <div class="pk-trans-platform-list">
                        <ul class="clearfix">
                            <div class="pk-purse-money">
                                <p class="text-dots">{{transInfo.balance}}</p>
                                <span>钱包余额</span>
                            </div>
                            <li v-for="(item,index) in transInfo.platforms">
                                <p class="text-dots">{{item.balance}}</p>
                                <span>{{item.platformShow}}</span>
                                <div class="pk-trans-in-out">
                                    <div class="pk-open-modal" @click="clickInOrOut(2,item)">转入</div>
                                    <div class="pk-open-modal" @click="clickInOrOut(1,item)">转出</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="pk-trans-fast-back-btn">
                        <div class="pk-open-modal" @click="getFastPay()">设置快捷转入</div>
                        <div class="pk-open-modal" onclick="$('#pk_fast_back').fadeIn(300)">一键归户</div>
                    </div>


                    <div class="pk-warm-prompt">
                        <h2>户内转账说明：</h2>
                        <ul>
                            <li>1.户内最低转账金额1人民币，最高转账金额不限。</li>
                            <li>2.户内转账不收任何手续费。</li>
                            <li>3.如果有任何疑问请咨询24小时在线客服。</li>
                            <li>提示：系统额度可以下注EG电子、皇冠体育、彩票游戏、莱利彩票。真人娱乐场需转入额度!</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>















    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/trans.js"></script>

</body>

</html>