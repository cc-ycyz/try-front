<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>线上存款</title>

    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/companyIncome.css">
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
                            <li class="active"><a><i class="iconfont icon-hy_cq_ck"></i>存款</a></li>
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

                <div id="pk_online_income" v-cloak>
                    <ul v-show="isShowIncomeTitle" class="tabs">
                        <li><a href="/member/companyIncome.tpl">公司存款</a></li>
                        <li class="active"><a>线上存款</a></li>
                    </ul>
                    <ul v-show="isShowIncomeHelp" class="tabs">
                        <li class="active"><a>存款帮助</a></li>
                    </ul>
                    <div v-show="isShowIncomeForm" class="pk-income-content">

                        <!-- 选择支付方式 -->
                        <div>
                            <h2 class="pk-income-title">选择支付方式：</h2>
                            <ul class="pk-income-banklist pk-online-income-banklist clearfix">
                                <li @click="chooseBankItem(index,item)" class="pk-income-banklist-item" v-for="(item,index) in showBankList"
                                    :class="{'active':iNow === index}">
                                    <i class="iconfont icon-hy_cq_xuanz"></i>
                                    <a>
                                        <img :src="item.bankIcon" alt="">
                                        <p :title="item.payIdName">{{item.payIdName}}</p>
                                    </a>
                                </li>
                                <div v-show="bankList.length>9" class="pk-bankList-more"><a @click="clickMore()">{{isShowMore?'更多...':'收起'}}</a></div>
                            </ul>


                            <div class="pk-help">
                                <p><i class="iconfont icon-hy_cq_yw"></i><span>对存款不了解，查看</span><a @click="clickIncomeHelp()">存款帮助</a></p>
                            </div>

                        </div>


                        <div>
                            <!-- 存款表单 -->
                            <div class="pk-form">
                                <form class="form-horizontal" id="pk_online_income_form">
                                    <div class="form-group">
                                        <label for="pk_bank_select" class="col-sm-2 control-label must">选择银行:</label>
                                        <div class="col-sm-5">
                                            <select title="请选择银行" id="pk_bank_select" class="selectpicker form-control"
                                                data-live-search="true"></select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label must">存款金额:</label>
                                        <div class="col-sm-5">
                                            <div class="input-group">
                                                <input type="tel" onkeyup="this.value = this.value.replace(/[^\d]/,'')" v-model="depositMoney" autocomplete="off" class="form-control">
                                                <div class="input-group-addon">.{{pointNum}}元</div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5">
                                            <p class="pk-money-hint form-control-static">请输入整数存款金额
                                                <span v-show="iNow != -1">范围：{{singleBankInfo.singleMin}}~{{singleBankInfo.singleMax}}；</span>小数点后数字是系统自动生成，方便快速存款。</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <ul class="pk-fast-money-btn col-sm-offset-2 col-sm-6">
                                            <li @click="chooseFastMoney(index)" :class="{'active':iFastNow === index}"
                                                v-for="(item,index) in fastMoneyList">{{item}}</li>
                                        </ul>
                                    </div>


                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">备注:</label>
                                        <div class="col-sm-5">
                                            <input placeholder="请输入您的备注信息" type="text" v-model="remark" autocomplete="off"
                                                class="form-control">
                                        </div>
                                      
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-5">
                                            <div @click="clickSubmit()" class="pk-submit-btn btn btn-primary btn-lg btn-block">立即存款</div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <!-- 温馨提示 -->
                            <div class="pk-warm-prompt">
                                <h2>温馨提示：</h2>
                                <ul>
                                    <li>1、在金额转出之后请务必准确填写存款信息，以便财务能够及时确认并添加金额到您的会员帐户中。</li>
                                    <li>2、单笔存款金额为{{singleBankInfo.singleMin}}~{{singleBankInfo.singleMax}}元</li>
                                </ul>
                            </div>
                        </div>



                    </div>




                    <!-- 存款帮助 -->
                    <div v-show="isShowIncomeHelp" class="pk-income-help">
                        <div>
                            <p>入款流程：点击【方式A：公司入款 <span>（银行卡转账）支付宝 微信 </span>】→选择您使用的银行→选择要存入的银行账号→进行存款→完成存款后提交存款订单→财务查收到存款金额后将于0-3分钟为您添加额度！</p>
                            <p>推荐使用 <span>更快捷/3分钟到账 更划算/1.2%存款优惠</span> 不限额度 支付宝、微信、全程担保入款！</p>
                            <p>※1.什么是银行转账？通过网银转账、ATM/柜台存入、手机网银转账等方式汇款。</p>
                            <p>※2.汇款金额请添加零头，如 6006.00 或 600.60，便于财务查收，加快到账速度。</p>
                            <p>※3.推荐会员使用工商银行进行存取款，更加高效快捷。</p>
                            <p>收款帐户不定期更新，请在每次存款前，点击“银行转账”页面查询最新收款账号。</p>
                            <p>如存款至过期账户造成财务无法查收，会员自行承担损失</p>
                        </div>
                        <div @click="goBackHelp()" class="pk-back-btn">返回</div>
                    </div>




                    <!-- 存款成功 -->
                    <div v-show="isShowIncomeSuccess" class="pk-income-success">

                        <!-- 存款信息提交成功 -->
                        <div v-show="isShowIncomeSuccessInfo" class="pk-income-success-info">
                            <i class="iconfont icon-hy_cq_wanc"></i>
                            <h2>您的信息已成功提交，请在新开页面完成存款</h2>
                            <p>支付完成后点击已完成存款即可</p>
                            <div class="pk-btn">
                                <div @click="goCompplete()" class="pk-btn-ok">已完成存款</div>
                                <div @click="goBack()" class="pk-btn-record">寻找其他支付方式</div>
                            </div>
                            <div class="pk-income-success-problem">
                                <p>存款遇到问题，<a href="/kefu" target="_blank">联系客服</a></p>
                            </div>
                        </div>

                        <!-- 存款完成 -->
                        <div v-show="isShowIncomeCompleteInfo" class="pk-income-success-info">
                            <!-- <i class="iconfont icon-hy_cq_wanc1"></i> -->
                            <img src="<{ .MemUrl }>/img/hy_ck_wc.png" alt="">
                            <h2>您已完成存款</h2>
                            <p>我们将及时为您审核，注意查收系统消息。</p>
                            <div class="pk-btn">
                                <div @click="goBack()" class="pk-btn-ok">确认</div>
                                <div class="pk-btn-record"><a href="myinfo/transAction.tpl">查看交易记录</a></div>
                            </div>
                        </div>

                        <!-- 公司存款-广告轮播图 -->
                        <div class="pk-income-success-carousel">
                            <div class="carousel slide" data-interval="3000" data-ride="carousel">
                                <div id="pk_carousel" class="carousel-inner" role="listbox">
                                    <!-- <div class="item">
                                        <img src="http://placehold.it/764x168" alt="...">
                                        <div class="carousel-caption">
                                            ...
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    </div>

    <!-- 线上入款 确认订单 -->
    <div id="confirm" style="display:none;background-color:#F0F9FB;" class="con_menu">
        <form action="/api/pay/buy" method="post" name="confirm1" id="confirm1" target="_blank">
            <table class="Hyzx-table" style="width:600px;margin:0;text-align: left;">
                <tbody>
                    <tr class="de_title" style="background:#F0F9FB;">
                        <th colspan="3" height="27" class="table_bg" align="left">
                            <span id="de_title" style="color: #fff;font-weight: bold;">您的资料如下：</span></th>
                    </tr>
                    <tr class="m_title">
                        <td align="right" class="m_bc_ed" id="xpwd">会员帐号:</td>
                        <td class="hong account" width="150" align="left">nuw12345</td>
                        <td id="user_txt" class="hong" align="left">&nbsp;</td>
                    </tr>
                    <tr class="m_title">
                        <td align="right" class="m_bc_ed">额度：</td>
                        <td class="hong" width="150" align="left" id="edu"></td>
                        <td id="money_txt" class="hong" align="left">&nbsp;</td>
                    </tr>
                    <input type="hidden" name="ol_catm_min" value="" id="ol_catm_min_v">
                    <input type="hidden" name="ol_catm_max" value="" id="ol_catm_max_v">

                    <input type="hidden" name="order" value="" id="order">
                    <input type="hidden" name="amount" value="" id="s_amount">
                    <input type="hidden" name="bank" value="" id="bank_v">
                    <input type="hidden" name="payType" value="" id="payid">
                    <input type="hidden" name="payway" value="" id="paytype">
                    <input type="hidden" name="businessnum" value="" id="businessnum">
                    <input type="hidden" name="merId" value="" id="merId">
                    <tr>
                        <td colspan="3" align="center">
                            <p>
                                <input type="button" value="确定送出" class="Hyzx-btn active" style="border: none;float: left;margin-left: 220px;margin-right: 10px;cursor: pointer"
                                    onclick="doSubmit();">
                                <input type="reset" value="关闭" onclick="easyDialog.close();" class="Hyzx-btn active"
                                    style="cursor: pointer;border: none;float: left;"></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>













    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap-select.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/onlineIncome.js"></script>

</body>

</html>