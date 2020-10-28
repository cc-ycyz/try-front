<link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
<script>
    var memUrl = "<{ .MemUrl }>";
    var cdnUrl = "<{ .PublicUrl }>";
</script>
<article class="pk-header">
    <section class="pk-header-cent">
        <div class="pk-logo">
            <img src="<{ .MemUrl }>/img/huiyuanzhongxin.png" alt="">
            <div>会员中心</div>
        </div>
        <nav class="pk-nav">
            <ul>
                <li class="active"><a href="/member/index.tpl">我的账户</a></li>
                <li><a href="/member/withdraw.tpl">存/取款</a></li>
                <li><a href="/member/bet.tpl">交易记录</a></li>
                <li><a href="/member/statisticsReport.tpl">报表统计</a></li>
                <li><a href="/member/promote.tpl">我要推广</a></li>
                <li><a href="/member/messageCenter.tpl">消息中心</a></li>
            </ul>
        </nav>
    </section>
</article>
<!-- 成功提示/失败提示 -->
<div class="pk-alert">
    <div class="pk-alert-success">
        <i class="iconfont icon-hy_cq_wanc"></i>
        <p class="desc"></p>
    </div>
    <div class="pk-alert-error">
        <div class="iconfont icon-ty_sb"></div>
        <p class="desc"></p>
    </div>
</div>
<div class="pk-loading">
    <div class="pk-loading-mask"></div>
    <div class="pk-loading-cent">
        <img src="<{ .MemUrl }>/img/jiaz.svg" alt="">
        <p>加载中......</p>
    </div>
</div>