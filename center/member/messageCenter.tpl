<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>个人消息</title>
    <script src="<{ .MemUrl }>/lib/pagination.js"></script>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/messageCenterPersonal.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/pk-common.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/fonts/iconfont.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/perpage.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap.css">
    <link rel="stylesheet" href="<{ .MemUrl }>/css/bootstrap-select.min.css">
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
                        <li class="active"><a href="/member/messageCenter.tpl"><i
                                class="iconfont icon-hy_wdzh_jbzx"></i>个人消息</a></li>
                        <li><a href="/member/announcement.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>公告</a></li>
                    </ul>
                </nav>
            </section>
        </article>
    </div>
    <!-- 导航end -->
    <div class="pk-cent">
        <div id="pkMassagePersonal" v-cloak>

            <div class="pk-message-personal" v-for="(person,index) in people">
                <div class="unread" v-show="person.status==1">
                    <div class="unread-message">
                        <i></i>
                        <span>未读</span>
                    </div>
                    <div class="unread-message-del" @click="del(person)">
                        <i class="iconfont icon-hy_xxzx_sc"></i>
                    </div>
                </div>
                <div class="unread" v-show="person.status==2">
                    <div class="haveRead-message">
                        <i></i>
                        <span>已读</span>
                    </div>
                    <div class="unread-message-del"@click="del(person)">
                        <i class="iconfont icon-hy_xxzx_sc"></i>
                    </div>
                </div>

                <div class="message-content " v-show="person.status==1">
                <span class="pk-hidden" v-show="person.expands">
                    <span v-html="person.content">{{person.content}}</span>
                </span>
                    <span v-show="!person.expands">
                        <span v-html="person.content">{{person.content}}</span>
                    </span>
                </div>
                <div class="message-content haveRead" v-show="person.status==2">
                    <span class="pk-hidden" v-show="person.expands"><span
                            v-html="person.content">{{person.content}}</span> </span>
                    <span v-show="!person.expands"><span v-html="person.content">{{person.content}}</span> </span>
                </div>
                <div class="message-time">
                    <div class="time">
                      {{person.time}}
                    </div>
                    <div class="expand">
                        <a v-show="person.expands" @click="expanded(person,index)">[展开]</a>
                        <a v-show="!person.expands" @click="expanded(person,index)">[收起]</a>
                    </div>
                </div>
            </div>
            <!--<div class="pk-message-personal">-->
            <!--<div class="unread">-->
            <!--<div class="haveRead-message">-->
            <!--<i></i>-->
            <!--<span>已读</span>-->
            <!--</div>-->
            <!--<div class="unread-message-del">-->
            <!--占位-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="message-content haveRead">-->
            <!--<span class="pk-hidden">-->
            <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容-->
            <!--内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容-->
            <!--</span>-->
            <!--</div>-->
            <!--<div class="message-time">-->
            <!--<div class="time">-->
            <!--2018-09-10 12:13:14-->
            <!--</div>-->
            <!--<div class="expand">-->
            <!--<a>展开</a>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
        </div>
        <div class="holder page" v-show="people.length>0">
            <div class="ht-page"></div>
            <div class="pk-bet-select" >
                <select id="pk_bet_page" class="form-control selectpicker" placeholder="--"
                        data-live-search="true"></select>
            </div>
        </div>
    </div>
</div>

<script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
<script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
<script src="<{ .MemUrl }>/lib/bootstrap-select.min.js"></script>
<script src="<{ .MemUrl }>/lib/vue.min.js"></script>
<script src="<{ .MemUrl }>/js/common.js"></script>
<script src="<{ .MemUrl }>/js/messageCenter.js"></script>

</body>

</html>