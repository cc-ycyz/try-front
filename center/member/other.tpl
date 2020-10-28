<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>公告</title>
    <script src="<{ .MemUrl }>/lib/pagination.js"></script>
    <link rel="stylesheet" href="<{ .MemUrl }>/css/announcement.css">
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
                        <li><a href="/member/messageCenter.tpl"><i
                                class="iconfont icon-hy_wdzh_jbzx"></i>个人消息</a></li>
                        <li class="active"><a href="/member/announcement.tpl"><i class="iconfont icon-hy_wdzh_grzl"></i>公告</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </article>
    </div>
    <div class="pk-cent">
        <div id="other">
            <div class="pk-announcement">
                <div class="pk-announcement-title">
                    <div class="pk-announcement-title-btn " :class="activeNumber=== 1 ? 'activeed' : ''"
                         @click="btnsystem()">系统公告
                    </div>
                    <div class="pk-announcement-title-btn"
                         @click="btnmaintain()">维护公告
                    </div>
                    <div class="pk-announcement-title-btn "
                         @click="btnnewest()">上新公告
                    </div>
                    <div class="pk-announcement-title-btn "
                         @click="btnactivity()">活动公告
                    </div>
                    <div class="pk-announcement-title-btn"
                         @click="btnganme()">游戏公告
                    </div>
                    <div class="pk-announcement-title-btn activeed"
                         @click="btnother()">其他
                    </div>
                </div>
                <div class="pk-announcement-content"  v-for="(person,index) in people">
                    <div class="pk-announcement-content-title">
                        <div class="announcement-title">
                            <i></i>
                            <span>{{person.title}}</span>
                        </div>
                        <div class="announcement-del">
                            <i class="iconfont icon-hy_xxzx_sc"></i>
                        </div>
                    </div>
                    <div class="announcement-contents announcement-hidden" v-show="person.expands">
                        {{person.content}}
                    </div>
                    <div class="announcement-contents " v-show="!person.expands">
                        {{person.content}}
                    </div>
                    <div class="announcement-time">
                        <div class="time">
                            {{person.time}}
                        </div>
                        <div class="expand">
                            <a v-show="person.expands" @click="expand(person,index)">[展开]</a>
                            <a v-show="!person.expands" @click="expand(person,index)">[收起]</a>
                        </div>
                    </div>
                </div>
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
</div>


<script src="<{ .MemUrl }>/lib/jq.3.3.1.min.js"></script>
<script src="<{ .MemUrl }>/lib/bootstrap.min.js"></script>
<script src="<{ .MemUrl }>/lib/bootstrap-select.min.js"></script>
<script src="<{ .MemUrl }>/lib/vue.min.js"></script>
<script src="<{ .MemUrl }>/js/common.js"></script>
<!--<script src="<{ .MemUrl }>/js/announcement.js"></script>-->
<script src="<{ .MemUrl }>/js/other.js"></script>

</body>
</html>