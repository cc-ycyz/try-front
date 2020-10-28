<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>公司存款</title>

    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.min.css">
    <link href="<{ .MemUrl }>/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrapValidator.min.css">
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

                <div id="pk_company_income" v-cloak>
                    <ul v-show="isShowIncomeTitle" class="tabs">
                        <li class="active"><a>公司存款</a></li>
                        <li><a href="/member/onlineIncome.tpl">线上存款</a></li>
                    </ul>
                    <ul v-show="isShowIncomeHelp" class="tabs">
                        <li class="active"><a>存款帮助</a></li>
                    </ul>
                    <!-- 存款表单 -->
                    <div v-show="isShowIncomeForm" class="pk-income-content">
                        <div>
                            <h2 class="pk-income-title">1.请选择账号并完成存款:</h2>
                            <ul class="pk-income-banklist clearfix">
                                <li @click="chooseBankItem(index,item)" class="pk-income-banklist-item" v-for="(item,index) in showBankList"
                                    :class="{'active':iNow === index}">
                                    <i class="iconfont icon-hy_cq_xuanz"></i>
                                    <a>
                                        <img :src="item.bankIcon" alt="">
                                    </a>
                                </li>
                                <div v-show="bankList.length>9" class="pk-bankList-more"><a @click="clickMore()">{{isShowMore?'更多...':'收起'}}</a></div>
                            </ul>
                            <div v-show="singleBankInfo.payType === 1" class="pk-bankItem-details clearfix">
                                <ul>
                                    <li>
                                        <span><i style="letter-spacing: 3em">银</i>行: </span>
                                        <p>{{singleBankInfo.bankName}}</p>
                                    </li>
                                    <li>
                                        <span>开户行网点: </span>
                                        <p>{{singleBankInfo.bankAdress}}</p>
                                    </li>
                                    <li>
                                        <span><i style="letter-spacing: 1em">收</i><i style="letter-spacing: 1em">款</i>人:
                                        </span>
                                        <p>{{singleBankInfo.bankUser}}</p>
                                    </li>
                                    <li>
                                        <span><i style="letter-spacing: 3em">账</i>号: </span>
                                        <p class="pk-copy-data">{{singleBankInfo.bankNum}}</p>
                                        <div @click="copy(singleBankInfo.bankNum)" class="pk-copy">复制</div>
                                    </li>
                                    <li>
                                        <span><i style="letter-spacing: 1em">附</i><i style="letter-spacing: 1em">言</i>码:
                                        </span>
                                        <p>{{orderCode}}</p>
                                    </li>
                                </ul>

                            </div>
                            <div v-show="singleBankInfo.payType === 2" class="pk-bankItem-details pk-bankItem-details-qrcode clearfix">
                                <div class="pk-qrcode">
                                    <img :src="singleBankInfo.payImg" alt="">
                                </div>
                                <ul>
                                    <li>
                                        <span><i style="letter-spacing: 1em">账</i>号: </span>
                                        <p>{{singleBankInfo.bankNum}}</p>
                                        <div @click="copy(singleBankInfo.bankNum)" class="pk-copy">复制</div>
                                    </li>
                                    <li>
                                        <span>收款人:
                                        </span>
                                        <p>{{singleBankInfo.bankUser}}</p>
                                    </li>
                                    <li>
                                        <span>备注码:
                                        </span>
                                        <p>{{orderCode}}</p>
                                    </li>
                                    <li>
                                        <div class="pk-hint">1.在您转账时，填写备注码，会提高您存款到帐速度</div>
                                        <div class="pk-hint">2.请勿私自保存二维码，以防过期</div>
                                    </li>
                                </ul>

                            </div>
                            <div class="pk-help">
                                <p><i class="iconfont icon-hy_cq_yw"></i><span>对存款不了解，查看</span><a @click="clickIncomeHelp()">存款帮助</a></p>
                            </div>

                        </div>
                        <div>
                            <h2 class="pk-income-title">2.填写存款信息：</h2>
                            <div class="pk-form">
                                <form class="form-horizontal" id="pk_company_income_form">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label must">存款金额:</label>
                                        <div class="col-sm-5">
                                            <!-- <div class="input-group"> -->
                                            <input type="number" v-model="depositMoney" autocomplete="off" class="form-control" name="pk_money">
                                            <input name="isChooseBank" type="hidden" :value="iNow">
                                            <input name="lineDepositMin" type="hidden" :value="singleBankInfo.lineDepositMin">
                                            <input name="lineDepositMax" type="hidden" :value="singleBankInfo.lineDepositMax">
                                            <!-- <div class="input-group-addon">.{{pointNum}}元</div> -->
                                            <!-- </div> -->
                                        </div>
                                        <div class="col-sm-5">
                                            <p class="form-control-static">请输入整数存款金额
                                                <span v-show="iNow != -1">范围：{{singleBankInfo.lineDepositMin}}~{{singleBankInfo.lineDepositMax}}；</span>
                                                <!-- 小数点后数字是系统自动生成，方便快速存款。 -->
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label must">存款人姓名:</label>
                                        <div class="col-sm-5">
                                            <input type="text" placeholder="转账账号对应的姓名" autocomplete="off" class="form-control"
                                                name="pk_depositAccount" v-model="depositAccount">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label must">存款时间:</label>
                                        <div class="col-sm-5">
                                            <div class="input-group date" id="pk_depositTime">
                                                <input type="text" class="form-control" name="pk_depositTime" placeholder="请选择存款时间"
                                                    readonly />
                                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar iconfont icon-hy_cq_riqi"></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">备注:</label>
                                        <div class="col-sm-5">
                                            <input placeholder="如订单号后四位" type="number" autocomplete="off" v-model="remark"
                                                class="form-control" name="pk_remark">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-5">
                                            <button @click="clickSubmit()" disabled type="submit" name="submit" class="pk-submit-btn btn btn-primary btn-lg btn-block">提交</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="pk-warm-prompt">
                                <h2>温馨提示：</h2>
                                <ul>
                                    <li>1、公司银行账号不定期更换。请每次存款前，务必先至[公司存款]查看账号。</li>
                                    <li>2、在金额转出之后请务必准确填写存款信息，以便财务能够及时确认并添加金额到您的会员帐户中。</li>
                                    <li>3、单笔存款金额为{{singleBankInfo.lineDepositMin}}~{{singleBankInfo.lineDepositMax}}元</li>
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
                        <div @click="goBack()" class="pk-back-btn">返回</div>
                    </div>

                    <!-- 存款成功 -->
                    <div v-show="isShowIncomeSuccess" class="pk-income-success">

                        <div class="pk-income-success-info">
                            <i class="iconfont icon-hy_cq_wanc"></i>
                            <h2>您的存款信息已提交成功</h2>
                            <p>我们将尽快为您审核入款，请注意查收系统消息</p>
                            <div class="pk-btn">
                                <div @click="incomeOk()" class="pk-btn-ok">确认</div>
                                <div class="pk-btn-record"><a href="myinfo/transAction.tpl">查看交易记录</a></div>
                            </div>
                        </div>

                        <div class="pk-income-success-details">
                            <ul>
                                <!-- <li>
                                    <p>收款机构：</p>
                                    <p>支付宝</p>
                                </li>
                                <li>
                                    <p>收款账号：</p>
                                    <p>支付宝</p>
                                </li>
                                <li>
                                    <p>存款金额：</p>
                                    <p>支付宝</p>
                                </li>
                                <li>
                                    <p>存款优惠：</p>
                                    <p>支付宝</p>
                                </li>
                                <li>
                                    <p>额外优惠：</p>
                                    <p>支付宝</p>
                                </li>
                                <li>
                                    <p>存款时间：</p>
                                    <p>支付宝</p>
                                </li>
                                <li>
                                    <p>提交时间：</p>
                                    <p>支付宝</p>
                                </li>
                                <li>
                                    <p>存款账号： </p>
                                    <p>支付宝</p>
                                </li> -->
                                <li>
                                    <p><b style="letter-spacing: .5em;">订单</b>号：</p>
                                    <p>{{orderId}}</p>
                                </li>
                            </ul>
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













    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap-datetimepicker.zh-CN.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrapValidator.min.js"></script>
    <script src="<{ .MemUrl }>/lib/clipboard.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/companyIncome.js"></script>

</body>

</html>