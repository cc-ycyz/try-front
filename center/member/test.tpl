<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>会员中心</title>
    <script>
        window.memurl = "<{ .MemUrl }>";
    </script>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-index.css">
</head>

<body>
    <!-- 头部导航 -->
    <div id="pk_header"></div>
    <div class="pk-cnetent">
        <!-- 左侧导航 -->
        <div id="pk_left_nav">
            <article class="pk-left-nav">
                <section class="pk-left-nav">
                    <nav>
                        <ul>
                            <li><a href="/member/index.tpl"><i class="glyphicon glyphicon-th-list"></i>基本资料</a></li>
                            <li class="active"><a href="#"><i class="glyphicon glyphicon-th-list"></i>个人资料</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-th-list"></i>密码管理</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-th-list"></i>今日交易</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-th-list"></i>自助返水</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-th-list"></i>投注资讯</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-th-list"></i>银行卡管理</a></li>
                        </ul>
                    </nav>
                </section>
            </article>
        </div>
        <!-- 导航end -->
        <!-- 右侧内容 -->
        <div class="pk-cent"></div>

    </div>
    <script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
    <script src="<{ .MemUrl }>/js/common.js"></script>
    <script>
        $('.pk-left-nav ul li').click(function () {
            $('.pk-left-nav ul li').removeClass('active');
            $(this).addClass('active');
        });
    </script>
</body>

</html>