<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>取款</title>

    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrapValidator.min.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/withdraw.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/personInfo.css">
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
                            <li class="active"><a href="/member/trans.tpl"><i class="iconfont icon-hy_cq_eduzh"></i>额度转换</a></li>
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
                <div id="pk_withdraw" v-cloak>
                    <div class="pk-withdraw-box" v-if="type == 1" :class='{show:type == 1}'>
                        <div class="pk-add-bank">新增银行卡</div>
                    </div>
                    <div class="pk-withdraw-box pk-person-info" v-if="type != 1" :class='{show:type != 1}'>
                        <form id="pk_withdraw_form" class="form-inline" role="form">
                            <div class="pk-info-modify">
                                <div class="pk-input-list">
                                    <label>会员账号:</label>
                                    <div class="form-group">
                                        <input class="form-control" type="text" v-model="info.account" placeholder="--"
                                            disabled>
                                    </div>
                                </div>
                                <div class="pk-input-list">
                                    <label>系统余额:</label>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="0.00" v-model="info.balance"
                                            disabled>
                                    </div>
                                </div>
                                <div class="pk-input-list">
                                    <label class="must">收款银行:</label>
                                    <div class="form-group">
                                        <select id="pk_select_bank" class="form-control selectpicker" placeholder="--"
                                            data-live-search="true"></select>
                                    </div>
                                </div>
                                <div class="pk-input-list">
                                    <label>收款账号:</label>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="--" v-model="bankInfo.card"
                                            disabled>
                                    </div>
                                </div>
                                <div class="pk-input-list">
                                    <label>支行:</label>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="--" v-model="bankInfo.subBranch"
                                            disabled>
                                    </div>
                                </div>
                                <div class="pk-input-list ">
                                    <label class="pk-must"><span>取款金额:</span></label>
                                    <div class="form-group pk-money-style">
                                        <input class="form-control" id="pk_between" name="pk_between" type="number"
                                            placeholder="请输入您的取款金额" v-model="outMoney">
                                        <input name="lineDepositMin" type="hidden" :value="info.minOut">
                                        <input name="lineDepositMax" type="hidden" :value="info.maxOut">
                                        <span class="pk-money-style-span">元</span>
                                    </div>
                                    <span class="pk-money-style-pop">取款金额为{{info.minOut}}-{{info.maxOut}}的整数</span>

                                </div>
                                <div class="pk-input-list">
                                    <label class="pk-must"><span>取款密码:</span></label>
                                    <div class="form-group">
                                        <input id="pk_pwd" name="pk_pwd" class="form-control" type="password"
                                            placeholder="请输入您的取款密码" maxlength="6" v-model="outMoneyPwd">
                                    </div>
                                </div>
                            </div>
                            <div class="pk-info-subm">
                                <button type="submit" class="btn btn-lg btn-block btn-primary" @click="withdraw">确定</button>
                                <div class="pk-add-bank">新增银行卡</div>
                            </div>
                        </form>
                        <div class="pk-warm-prompt">

                            <ul>
                                <li>尊敬的会员，您好！</li>
                                <li>出款出现以下情况将会扣除一定费用：</li>
                                <li>1、未满足常态稽核将扣除入款金额{{info.lineAuditAdminRate}}%行政费用与优惠。</li>
                                <li>2、未满足综合稽核将会扣除优惠金额。</li>
                                <li>*常态稽核=会员入款金额*常态稽核倍数</li>
                                <li>*综合(优惠)稽核=（会员入款金额+优惠）*综合稽核倍数</li>
                                <li>*优惠即存款优惠，人工优惠等</li>
                                <li class="pk-text-red">1.提交订单后注意查看稽核状态，请注意是否需要扣除费用。</li>
                                <li class="pk-text-red">2.有出款订单未处理时无法提交第二笔订单。</li>
                        </div>
                    </div>



                    <div class="pk-modal" id="pk_withdraw_pop">
                        <!-- pk-close-modal 关闭模态框的class -->
                        <div class="pk-modal-mask pk-close-modal"></div>
                        <div class="pk-modal-cent">
                            <h5 class="pk-modal-title">
                                <span>提示</span>
                                <i class="iconfont icon-ty_tk_gb pk-close-modal"></i>
                            </h5>
                            <div class="pk-modal-body">
                                <div class="pk-withdraw-pop">
                                    <i class="iconfont icon-hy_qc_wwc"></i>
                                    <div v-if="type == 5">
                                        <h5>个人信息未完善</h5>
                                        <p>
                                            抱歉！您尚未填写{{memberHas}}{{memberHasArr.length > 1?'等个人资料':''}}，需完善资料才能进行取款
                                        </p>
                                    </div>
                                    <div v-if="type == 3">
                                        <h5>未完成取款订单</h5>
                                        <p>
                                            抱歉！您有尚未完成的取款订单，订单完成后才能再次取款。
                                        </p>
                                    </div>
                                    <div v-if="type == 4">
                                        <h5>未设置取款密码</h5>
                                        <p>
                                            抱歉！您尚未设置取款密码，取款密码设置后才能取款。
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <footer class="pk-modal-btns" v-if="type == 5">
                                <div class="pk-btn-close pk-close-modal">取消</div>
                                <div class="pk-btn-sure pk-close-modal">去设置</div>
                            </footer>
                            <footer class="pk-modal-btns" v-if="type == 4">
                                <div class="pk-btn-close pk-close-modal">取消</div>
                                <div class="pk-btn-sure pk-close-modal">去设置</div>
                            </footer>
                            <footer class="pk-modal-btns" v-if="type == 3">
                                <div class="pk-btn-close pk-close-modal">取消</div>
                                <div class="pk-btn-sure pk-close-modal">确定</div>
                            </footer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>














    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrap-select.min.js"></script>
    <script src="<{ .MemUrl }>/lib/bootstrapValidator.min.js"></script>
    <script src="<{ .MemUrl }>/lib/vue.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script src="<{ .MemUrl }>/js/withdraw.js"></script>

</body>

</html>