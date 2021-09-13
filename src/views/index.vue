<style lang="scss">
    html, body, body > div {
        height: 100%;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.4rem;
    }
</style>

<style scoped lang="scss">
    .index {
        width: 100%;
        margin: 0;
        padding: 0;
        min-height: 100%;
        transition: background-color .3s;
        .ivu-layout, .ivu-layout-header {
            background: none;
        }
        .ivu-layout-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
        }
        #th-main-logo {
            position: absolute;
            top: 20px;
            left: 25px;
            height: 35px;
            @media (min-width: 768px) {
                height: 50px;
            }
        }
        .th-main-content {
            color: #ffffff;
        }
        #th-main-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            section {
                width: 100%;
                padding: 25px;
                h2 {
                    font-size: 2.4rem;
                    line-height: 1.7;
                    text-align: justify;
                    max-height: 122.4px;
                    overflow: hidden;
                    position: relative;
                    &.th-main-unfold {
                        max-height: none;
                        overflow: visible;
                        #th-main-center-cover {
                            display: none;
                        }
                    }
                    #th-main-center-cover {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 4.4rem;
                        height: 4.08rem;
                        z-index: 100;
                        transition: background .3s;
                    }
                }
                p {
                    text-align: center;
                    margin-top: 1.7em;
                    font-weight: bold;
                    opacity: 0.7;
                    font-size: 1.5rem;
                }
            }
        }
        #th-main-menu-btn {
            font-size: 35px;
            position: absolute;
            right: 25px;
            top: 20px;
            color: #ffffff;
            padding: 0;
            border: none;
            line-height: 1;
            outline: none;
            @media (min-width: 768px) {
                font-size: 50px;
            }
        }
        #th-main-control {
            z-index: 500;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            border-top: 1px solid rgba(#fff, .3);
            transition: background-color .3s;
            #th-main-control-process {
                position: absolute;
                top: -1px;
                left: 0;
                height: 1px;
                background: #fff;
                transition: width .3s;
            }
            &.th-main-control-single {
                .ivu-col-span-12:first-child {
                    width: 0;
                    border-right: 0px solid rgba(#fff, .3);
                }
                .ivu-col-span-12:last-child {
                    width: 100%;
                }
            }
            a {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 65px;
                width: 100%;
                background: transparent;
                transition: background-color .3s;
                svg {
                    display: inline-block;
                    height: 3rem;
                    margin-right: 1rem;
                    transition: transform .3s;
                    &.reverse {
                        transform: scaleX(-1);
                    }
                }
                span {
                    color: #ffffff;
                    font-size: 2rem;
                    font-weight: bold;
                    font-style: italic;
                }
                &:active {
                    background: rgba(#000, .3);
                }
            }
            .ivu-col-span-12 {
                transition: width .3s, border .3s;
                overflow: hidden;
                &:first-child {
                    border-right: 1px solid rgba(#fff, .3);
                }
            }
        }
        #th-main-detail {
            padding-top: 75px;
            padding-bottom: 90px;
            p {
                padding: 0 25px;
                color: #262626;
            }
            section {
                color: #262626;
                text-align: center;
            }
            #th-main-avatar {
                display: block;
                width: 96px;
                height: 96px;
                overflow: hidden;
                margin: 0 auto;
                border-radius: 10px;
                margin-top: 25px;
                margin-bottom: 20px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            #th-main-name {
                h3 {
                    font-size: 2.4rem;
                }
                p {
                    opacity: 0.7;
                }
                margin: 15px 0;
            }
            #th-main-fulltext {
                margin: 25px 0 15px;
                line-height: 1.75;
                text-align: left;
            }
            #th-main-contact {
                $bdc: rgba(#000, .05);
                border-top: 1px solid $bdc;
                border-bottom: 1px solid $bdc;
                color: #262626;
                margin: 30px 0;
                .ivu-col-span-12:first-child {
                    border-right: 1px solid $bdc;
                }
                a {
                    display: block;
                    width: 100%;
                    padding: 20px 0;
                }
                h3 {
                    font-weight: bold;
                    font-size: 2rem;
                    padding: 0 25px;
                    color: #262626;
                    display: flex;
                    align-items: center;
                    .ivu-icon {
                        font-size: 3rem;
                        margin-left: 5px;
                    }
                }
                p {
                    opacity: 0.7;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        #th-main-menu {
            z-index: 800;
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            padding: 75px 0 80px;
            background: #ffffff;
            color: #262626;
            overflow: auto;
            #th-main-menu-links {
                border-bottom: 1px solid rgba(#000, .1);
                padding: 30px 25px 30px;
                margin-bottom: 30px;
                a {
                    display: block;
                    text-align: center;
                    font-size: 2rem;
                    font-weight: bold;
                    color: #262626;
                    line-height: 2;
                    opacity: .6;
                    transition: color .3s, opacity .3s;
                    &.active, &.router-link-exact-active {
                        opacity: 1;
                    }
                }
            }
            p.lead {
                margin-top: 15px;
                font-size: 1.6rem;
                font-weight: bold;
                padding: 0 25px;
                text-align: center;
            }
            #shixin-qrcode {
                width: 100%;
                max-width: 125px;
                margin: 30px 25px 0;
                display: block;
                margin: 0 auto;
                @media (min-width: 768px) {
                    max-width: 250px;
                }
            }
            #th-main-menu-team {
                margin: 30px 0;
                padding: 25px 25px;
                border-top: 1px solid rgba(#000, .1);
                border-bottom: 1px solid rgba(#000, .1);
                line-height: 1.9;
                .ivu-col-span-6 {
                    opacity: 0.7;
                }
                .ivu-col-span-18 {
                    font-weight: bold;
                }
                span {
                    display: inline-block;
                }
            }
            #th-main-version {
                text-align: center;
                font-size: 1.2rem;
                opacity: 0.4;
            }
        }
        #th-db-topbar {
            padding-top: 75px;
            #th-db-search {
                border-top: 1px solid rgba(#fff, .1);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                height: 50px;
                padding: 0 25px;
                .ivu-icon {
                    width: 30px;
                    font-size: 2rem;
                    text-align: center;
                    &.ivu-icon-close-circled {
                        width: 50px;
                    }
                }
                input {
                    height: 50px;
                    border: none;
                    font-size: 1.8rem;
                    position: relative;
                    z-index: 10;
                    background: none;
                    outline: none;
                    color: #ffffff;
                    flex-grow: 1;
                }
                .th-db-placeholder {
                    opacity: .5;
                    position: absolute;
                    z-index: 5;
                    left: 55px;
                    right: 75px;
                    top: 0;
                    bottom: 0;
                    line-height: 50px;
                }
            }
            .th-db-wrapper {
                border-top: 1px solid rgba(#fff, .1);
                border-bottom: 1px solid rgba(#fff, .1);
                display: flex;
                height: 52px;
                padding: 0 25px;
            }
            #th-db-topbar-filter {
                flex-grow: 1;
                height: 50px;
                display: flex;
                align-items: center;
                font-weight: bold;
                .ivu-icon {
                    float: right;
                    font-size: 2rem;
                    margin-right: 10px;
                }
                span {
                    opacity: .7;
                    margin-left: 1em;
                    flex-grow: 1;
                }
            }
            #th-db-topbar-size {
                border-left: 1px solid rgba(#fff, .1);
                flex-grow: 0;
                width: 50px;
                height: 50px;
                font-size: 35px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                    height: 35px;
                }
            }
        }
        #th-db-list {
            padding: 15px;
            margin-top: 15px;
            .th-db-list-tutor {
                padding: 0 10px;
                margin-bottom: 35px;
                transition: opacity .3s, transform .3s;
                width: 100%;
                img {
                    border-radius: 6px;
                    display: block;
                    width: 65px;
                    height: 65px;
                    float: left;
                }
                section {
                    margin-left: 80px;
                }
                h5 {
                    font-size: 1.8rem;
                    font-weight: bold;
                }
                p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 1.2rem;
                    opacity: .7;
                }
                &:active {
                    opacity: .8;
                    transform: scale(0.9);
                }
            }
            &.th-db-list-sm {
                .th-db-list-tutor {
                    float: left;
                    width: 33.333%;
                    border-radius: 6px;
                    display: block;
                    img {
                        width: 100%;
                        height: auto;
                        border-radius: 10px;
                        margin-bottom: 7px;
                        float: none;
                    }
                    section {
                        margin-left: 0;
                    }
                    h5 {
                        font-size: 1.5rem;
                    }
                }
            }
            &::after {
                clear: both;
                visibility: hidden;
                font-size: 0;
                height: 0;
            }
        }
        #th-db-black-cover {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1200;
            background: rgba(#000, .8);
        }
        #th-db-filter-float {
            position: fixed;
            top: 0;
            right: 0;
            left: 65px;
            bottom: 0;
            overflow: auto;
            background: #ffffff;
            z-index: 1500;
            color: #262626;
            padding: 20px 0;
            transform: translateX(0);
            h2 {
                padding: 15px 25px 15px;
                opacity: .6;
                .ivu-icon {
                    float: right;
                }
            }
            section {
                padding: 15px 25px;
                border-top: 1px solid rgba(#000, .1);
                h3 {
                    margin-bottom: 10px;
                }
                ul {
                    line-height: 2.4;
                    margin: 0;
                    padding: 0;
                    li {
                        list-style: none;
                        input {
                            display: none;
                        }
                        label {
                            color: rgba(#000, .5);
                            position: relative;
                            display: block;
                            font-weight: bold;
                            &::after {
                                display: inline-block;
                                font-family: Ionicons;
                                speak: none;
                                font-style: normal;
                                font-weight: 400;
                                font-variant: normal;
                                text-transform: none;
                                text-rendering: auto;
                                line-height: 1;
                                -webkit-font-smoothing: antialiased;
                                -moz-osx-font-smoothing: grayscale;
                                content: "";
                                position: absolute;
                                right: 0;
                                top: 4px;
                                font-size: 25px;
                            }
                        }
                        input:checked + label {
                            color: #262626;
                            &::after {
                                content: "\F3FE";
                                color: #2d8cf0;
                            }
                        }
                    }
                }
            }
            p {
                padding: 15px 25px 0;
                button {
                    margin-bottom: 10px;
                }
            }
            &.slide-move-enter-active {
                transition: transform .5s ease;
            }
            &.slide-move-leave-active {
                transition: transform .5s ease;
            }
            &.slide-move-enter, &.slide-move-leave-to {
                transform: translateX(100%);
            }
        }
        #th-db-detail-close {
            position: fixed;
            bottom: 20px;
            left: 50%;
            margin-left: -50px;
            width: 100px;
            height: 35px;
            border-radius: 17.5px;
            display: flex;
            border: 2px solid #fff;
            background: #ffffff;
            z-index: 600;
            justify-content: center;
            align-items: center;
            color: #262626;
            font-weight: bold;
            transition: background-color .3s, border .3s;
            .ivu-icon {
                flex-grow: 0;
                font-size: 31px;
                margin-left: 3px;
                color: #f44336;
            }
            span {
                display: inline-block;
                flex-grow: 1;
                text-align: center;
            }
            &.slide-move-enter-active {
                transition: bottom .3s ease;
            }
            &.slide-move-leave-active {
                transition: bottom .3s ease;
            }
            &.slide-move-enter, &.slide-move-leave-to {
                bottom: -35px;
            }
            &:active {
                border-color: #bbb;
                background: #bbb;
            }
        }
        .th-main-pick-tips {
            position: fixed;
            right: 5px;
            top: 60px;
            width: 240px;
        }
        .th-main-down {
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 100px;
        }
        #th-main-end-center {
            width: 100%;
            z-index: 500;
        }
        #th-main-pick-comment {
            display: block;
            text-align: left;
            padding-bottom: 10px;
            margin: 0 25px 5px;
            border-bottom: 1px solid rgba(#fff, .3);
            font-size: 1.2rem;
            opacity: .7;
        }
    }
</style>
<template>
    <div class="index" :style="{ background: pageColor}">
        <Layout>
            <Header>
                <div class="container">
                    <a id="th-main-logo" href="/"><THLogo :color="navColor"></THLogo></a>
                    <Button id="th-main-menu-btn" type="text" :style="{ color: navColor }" @click="handleMenu">
                        <Icon v-show="!openMenu" type="ios-more" key="more"></Icon>
                        <Icon v-show="openMenu" type="ios-close-outline" key="close"></Icon>
                    </Button>
                    <transition name="fade">
                        <img v-show="pickTipsShow" class="th-main-pick-tips" src="../img/pick-tips.svg" alt="tips" @click="handleCloseTips">
                    </transition>
                    <transition name="fade">
                        <img v-show="pickEnd && !closeEndTips" class="th-main-pick-tips" src="../img/end-tips.svg" alt="tips" @click="handleMenu">
                    </transition>
                </div>
            </Header>
            <Content class="th-main-content">
                <transition name="fade"> 
                    <div v-show="openMenu" id="th-main-menu">
                        <div id="th-main-menu-links" @click="handleMenu">
                            <router-link to="/" :style="{ color: this.$route.name == 'home' ? this.themeColor : ''}">士谔导师帽</router-link>
                            <router-link to="/database" :style="{ color: (this.$route.name == 'database' || this.$route.name == 'detail') ? this.themeColor : ''}">导师数据库</router-link>
                        </div>
                        <img src="../img/qrcode-cover.png" alt="士新二维码" id="shixin-qrcode" :style="{ background: this.themeColor }">
                        <p class="lead" :style="{ color: this.themeColor }">士谔导师帽由士新Studio 设计开发<br>士毅学业支持中心出品</p>
                        <div id="th-main-menu-team">
                            <Row>
                                <Col span="6">
                                    <p>初版设计</p>
                                </Col>
                                <Col span="18">
                                    <p>张光正</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="6">
                                    <p>初版开发</p>
                                </Col>
                                <Col span="18">
                                    <p>张光正</p>
                                </Col>
                            </Row>
                        </div>
                        <p id="th-main-version">{{ version }}</p>
                    </div>
                </transition>

                <template v-if="this.$route.name == 'home'">
                    <div v-show="mode == 'choose'" id="th-main-wrapper" key="choose">
                        <section>
                            <h2 :class="{ 'th-main-unfold': (isTutorial || pickEnd) }">
                                <img v-show="pickEnd" src="../img/end-center.jpg" alt="恭喜解锁全部导师" id="th-main-end-center">
                                {{ centerText }}
                                <div id="th-main-center-cover" :style="coverStyle"></div>
                            </h2>
                            <p :class="{ 'th-main-down': isTutorial }">
                                <span id="th-main-pick-comment" v-show="isTutorial">* PICK 表示对该导师感兴趣，想进一步了解详情；并不代表确定该导师为自己的学业导师</span>
                                {{ occupyText }}
                            </p>
                        </section>
                    </div>
                    <div v-show="mode == 'detail'" id="th-main-detail" key="detail">
                        <section>
                            <div id="th-main-avatar">
                                <img :src="avatarSrc" :alt="nameText">
                            </div>
                            <div id="th-main-name">
                                <h3>{{ nameText }}</h3>
                                <p>{{ occupyText }}</p>
                            </div>
                        </section>
                        <div id="th-main-contact" v-show="email">
                            <Row>
                                <Col :span="contactSpan">
                                    <a :href="'mailto:' + this.email">
                                        <h3>电子邮箱<Icon type="ios-arrow-thin-right"></Icon></h3>
                                        <p>{{ email }}</p>
                                    </a>
                                </Col>
                                <Col span="12" v-show="website">
                                    <a :href="this.website" target="_blank">
                                        <h3>个人主页<Icon type="ios-arrow-thin-right"></Icon></h3>
                                        <p>{{ website }}</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                        <p id="th-main-fulltext">{{ centerText }}</p>
                    </div>
                    <div id="th-main-control" :class="controlClass" :style="{ background: themeColor}">
                        <transition name="fade">
                            <div v-show="(this.mode == 'choose')" id="th-main-control-process" :style="{ width: currentProcess * 100 + '%' }"></div>
                        </transition>
                        <Row>
                            <Col span="12">
                                <a href="javascript:void(0);" @click="handlePick" ontouchstart="">
                                    <svg viewBox="0 0 45 45" id="1f44c"><g clip-path="url(#beba)" transform="matrix(1.25 0 0 -1.25 0 45)"><path d="M24.997 7.5a2.501 2.501 0 0 0-2.457 2.053l-4 22a2.499 2.499 0 0 0 2.013 2.906 2.496 2.496 0 0 0 2.907-2.012l4-22A2.5 2.5 0 0 0 24.997 7.5" fill="#ef9645"></path><path d="M28.375 11.235c.239.745.13 1.591-.375 2.265-.059.078-.439.585-1.017 1.34.005.051.017.112.017.16 0 .458-1.913 2.623-3.74 4.586-1.587 1.964-3.261 3.95-4.492 5.181l-1.274 1.275-1.612-.807c-5.718-2.858-8.647-3.855-8.673-3.864a2.5 2.5 0 1 1 1.582-4.743c.117.04 2.666.9 7.649 3.31 1.095-1.23 2.378-2.795 3.575-4.296l.704-1.174a.784.784 0 0 0-.061-.895l-3.513-4.392a.787.787 0 0 0-.365-.255l-2.531-.843a.786.786 0 0 0-.498 0L9.022 9.66c-.676 2.082-.533 4.102-.531 4.124a2.5 2.5 0 0 1-2.275 2.707 2.496 2.496 0 0 1-2.707-2.274c-.022-.26-.51-6.423 3.313-10.593C9.03 1.214 12.118-.007 16-.007c.66 0 1.283-.009 1.871-.018a102.68 102.68 0 0 1 1.537-.015c2.764 0 5.004.231 6.738 1.941 1.65 1.626 2.354 4.195 2.354 8.592 0 .261-.051.506-.125.742" fill="#ffdc5d"></path><path d="M27.001 15a1 1 0 0 0-.915.594l-4 9a1 1 0 0 0 1.828.812l4-9A1 1 0 0 0 27.001 15" fill="#ef9645"></path><path d="M24.766 1.62l-1.531 4.76s-.067-.01-.175-.067c.018.01 1.82.995 2.46 6.003.776 6.075-.774 9.6-.79 9.635l-.092.23-3.5 10.105a2.5 2.5 0 1 0 4.725 1.636l3.469-10.012c.376-.887 2.035-5.286 1.148-12.227-1.042-8.163-4.943-9.815-5.714-10.063" fill="#ffdc5d"></path></g></svg>
                                    <span>PICK</span>
                                </a>
                            </Col>
                            <Col span="12">
                                <a href="javascript:void(0);" @click="handleNext" ontouchstart="">
                                    <svg :class="{ 'reverse': (this.mode == 'detail') }" viewBox="0 0 45 45" id="1f449"><g clip-path="url(#bdja)" transform="matrix(1.25 0 0 -1.25 0 45)"><path d="M15.855 5s2.395.208 3.068 1.792c.699 1.639-.621 2.309-.621 2.309s1.914-.059 2.622 1.941c.668 1.885-.958 2.75-.958 2.75s1.87.307 2.417 2.292C22.841 17.755 21.215 19 21.215 19h12.208c.959 0 2.576.542 2.577 2.543 0 2-1.66 2.457-2.577 2.457h-20.5c-1 0-1 1 0 1h2.666c3.792 0 6.143 2.038 6.792 2.751.65.713.98 1.667.735 2.82-.415 1.956-1.92 1.53-3.198.975-3.079-1.337-7.464-2.254-9.539-2.533C4.523 28.222.005 23.204 0 17.129-.004 10.503 5.297 5.005 11.923 5h3.932z" fill="#ffdc5d"></path></g></svg>
                                    <span>{{ nextText }}</span>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </template>

                <template v-if="this.$route.name == 'database' || this.$route.name == 'detail'">
                    <div id="th-db-topbar">
                        <div id="th-db-search">
                            <Icon type="ios-search-strong"></Icon>
                            <input type="text" v-model="dbSearch">
                            <p v-show="!dbSearch" class="th-db-placeholder">支持汉字、拼音简称及拼音搜索</p>
                            <Icon type="close-circled" @click="() => this.dbSearch = ''"></Icon>
                        </div>
                        <div class="th-db-wrapper" :style="{ color: navColor }">
                            <div id="th-db-topbar-filter" @click="handleOpenFilterFloat">
                                筛选<span>{{ filterBarText }}</span>
                                <Icon type="ios-arrow-right"></Icon>
                            </div>
                            <div id="th-db-topbar-size" @click="handleChangeSize">
                                <Icon v-show="dbListSm" type="grid"></Icon>
                                <Icon v-show="!dbListSm" type="ios-list-outline"></Icon>
                            </div>
                        </div>
                    </div>
                    <div id="th-db-list" :class="{ 'th-db-list-sm': dbListSm }" :style="{ color: dataListColor }">
                        <div class="th-db-list-tutor" v-for="(tutor, index) in filteredData" :key="tutor.id" @click="handleOpenDetail(tutor.index)" ontouchstart="">
                            <img :src="getSrc(tutor.avatarName)" :alt="tutor.nameText">
                            <section>
                                <h5>{{ tutor.nameText }}</h5>
                                <p class="th-db-list-tutor-occupy">{{ schoolConfig[tutor.school].short + tutor.occupy }}</p>
                                <p v-if="!dbListSm" class="th-db-list-tutor-center-text">{{ tutor.centerText }}</p>
                            </section>
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-show="dbFilterFloat" id="th-db-black-cover" @click="handleCloseFilterFloat"></div>
                    </transition>
                    <transition name="slide-move">
                        <div v-show="dbFilterFloat" id="th-db-filter-float">
                            <h2>
                                筛选
                                <Icon type="ios-close-outline" @click="handleCloseFilterFloat"></Icon>
                            </h2>
                            <section>
                                <h3>学院</h3>
                                <ul>
                                    <li><input type="checkbox" id="db-filter-school-1" :value="2" v-model="dbFilter.school"><label for="db-filter-school-1">{{ schoolConfig[2].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-2" :value="3" v-model="dbFilter.school"><label for="db-filter-school-2">{{ schoolConfig[3].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-3" :value="6" v-model="dbFilter.school"><label for="db-filter-school-3">{{ schoolConfig[6].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-4" :value="17" v-model="dbFilter.school"><label for="db-filter-school-4">{{ schoolConfig[17].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-5" :value="21" v-model="dbFilter.school"><label for="db-filter-school-5">{{ schoolConfig[21].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-6" :value="38" v-model="dbFilter.school"><label for="db-filter-school-6">{{ schoolConfig[38].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-7" :value="40" v-model="dbFilter.school"><label for="db-filter-school-7">{{ schoolConfig[40].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-8" :value="42" v-model="dbFilter.school"><label for="db-filter-school-8">{{ schoolConfig[42].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-9" :value="49" v-model="dbFilter.school"><label for="db-filter-school-9">{{ schoolConfig[49].name }}</label></li>
                                    <li><input type="checkbox" id="db-filter-school-10" :value="100" v-model="dbFilter.school"><label for="db-filter-school-10">{{ schoolConfig[100].name }}</label></li>
                                </ul>
                            </section>
                            <section>
                                <h3>职称</h3>
                                <ul>
                                    <li><input type="checkbox" id="db-filter-occupy-1" :value="'教授'" v-model="dbFilter.occupy"><label for="db-filter-occupy-1">教授</label></li>
                                    <li><input type="checkbox" id="db-filter-occupy-2" :value="'讲师'" v-model="dbFilter.occupy"><label for="db-filter-occupy-2">讲师</label></li>
                                    <li><input type="checkbox" id="db-filter-occupy-3" :value="'副教授'" v-model="dbFilter.occupy"><label for="db-filter-occupy-3">副教授</label></li>
                                    <li><input type="checkbox" id="db-filter-occupy-4" :value="'Other'" v-model="dbFilter.occupy"><label for="db-filter-occupy-4">其他</label></li>
                                </ul>
                            </section>
                            <p>
                                <Button type="primary" long @click="handleCloseFilterFloat">应用</Button>
                                <Button long @click="handleClearFilter">清空</Button>
                            </p>
                        </div>
                    </transition>

                    <transition name="slide-move">
                        <dbDetail v-show="dbShowDetail" @close="handleCloseDetail" :avatarSrc="dbDetailInfo.avatarSrc" :nameText="dbDetailInfo.nameText" :occupyText="dbDetailInfo.occupyText" :email="dbDetailInfo.email" :website="dbDetailInfo.website" :centerText="dbDetailInfo.centerText"></dbDetail>
                    </transition>
                    <transition name="slide-move">
                        <div id="th-db-detail-close" v-show="dbShowDetail" @click="handleCloseDetail" ontouchstart="">
                            <Icon type="ios-close"></Icon>
                            <span>关闭</span>
                        </div>
                    </transition>


                </template>
                
            </Content>
        </Layout>
    </div>
</template>
<script>
    import Cookies from 'js-cookie';
    import schoolConfig from '../config/school.config.js';
    import tutorList from '../data/tutor.json';
    import THLogo from '../components/logo.vue';
    import dbDetail from '../components/db-detail.vue';

    function randomSort(a, b) {
        return Math.random() > .5 ? -1 : 1;
    }

    const th_v = '5.1.1 (Build 20210913)';

    var dbFilter = {
        school: [],
        occupy: []
    }

    export default {
        data () {
            return {
                mode: 'init', /* choose - 选择, detail - 详情 */
                /* themeColor: '#1976d2', 主题色，必须为 6 位 HEX 表示 */
                navColor: '#fff',
                centerText: '...',
                occupy: '',
                school: -1,
                nameText: '导师帽',
                id: '0', /* 工作证号 */
                email: '',
                website: '', /* 个人主页，没有时留空 */
                avatarName: 'default.png',
                isSpecial: false, /* 彩蛋时为真 */
                isTutorial: false, /* 教程时为真 */
                order: [],
                current: -1,
                openMenu: false,
                version: th_v,
                tutorList: tutorList.data,
                schoolConfig: schoolConfig,
                dbListSm: true,
                dbFilterFloat: false, /* 筛选浮窗 */
                dbFilter: dbFilter,
                dbShowDetail: false,
                dbSearch: '',
                dbDetailInfo: {
                    avatarSrc: '',
                    nameText: '',
                    occupyText: '',
                    email: '',
                    website: '',
                    centerText: ''
                },
                closeTips: false,
                pickEnd: false,
                closeEndTips: false
            }
        },
        methods: {
            handlePick (event) {
                if (this.isTutorial) {
                    this.isTutorial = false;
                    this.handleNext();                   
                } else {
                    if (this.current < this.order.length) {
                        this.mode = 'detail';
                        this.navColor = this.themeColor;
                    }
                }
            },
            handleNext (event) {
                if (this.isTutorial) {
                    this.isTutorial = false;
                }
                if (this.mode == 'choose') {
                    if (this.current < this.order.length - 1) {
                        this.navColor = '#fff';

                        this.current++;
                        let num = this.order[this.current];
                        this.centerText = tutorList.data[num].centerText;
                        this.occupy = tutorList.data[num].occupy;
                        this.school = tutorList.data[num].school;
                        this.nameText = tutorList.data[num].nameText;
                        this.id = tutorList.data[num].id;
                        this.email = tutorList.data[num].email;
                        this.website = tutorList.data[num].website;
                        this.avatarName = tutorList.data[num].avatarName;
                    } else {
                        this.centerText = '';
                        this.occupy = '';
                        this.school = -2;
                        this.nameText = '';
                        this.id = '0';
                        this.email = '';
                        this.website = '';
                        this.avatarName = 'default.png';
                        this.pickEnd = true;
                        this.current = this.order.length;
                    }
                } else if (this.mode == 'detail') {
                    this.mode = 'choose';
                    Cookies.set('mode','choose');
                    this.navColor = '#fff';
                }
            },
            handleMenu (event) {
                this.openMenu = !this.openMenu;
                if (!this.openMenu && this.mode == 'choose') {
                    this.navColor = '#fff';
                } else {
                    this.navColor = this.themeColor;
                }
                if (this.current >= 20 && this.current <= 25 && this.closeTips == false) {
                    this.closeTips = true;
                }
                if (this.pickEnd && this.closeEndTips == false) {
                    this.closeEndTips = true;
                }
            },
            getSrc (imgName) {
                return 'https://xzx-1305956931.file.myqcloud.com/img/' + imgName;
            },
            handleChangeSize (event) {
                this.dbListSm = !this.dbListSm;
                Cookies.set('db_list_size', this.dbListSm ? 'sm' : 'nm', { expires: 999 });
            },
            handleOpenFilterFloat (event) {
                this.dbFilterFloat = true;
            },
            handleCloseFilterFloat (event) {
                this.dbFilterFloat = false;
                window.scrollTo(0, 0);
            },
            handleOpenDetail (index) {
                this.dbShowDetail = true;
                this.dbDetailInfo = {
                    avatarSrc: this.getSrc(this.tutorList[index].avatarName),
                    nameText: this.tutorList[index].nameText,
                    occupyText: schoolConfig[this.tutorList[index].school].name + this.tutorList[index].occupy,
                    email: this.tutorList[index].email,
                    website: this.tutorList[index].website,
                    centerText: this.tutorList[index].centerText
                };
                this.$router.push({ path: `/database/index/${index}` });
            },
            handleCloseDetail (index) {
                this.dbShowDetail = false;
                this.$router.push({ path: '/database/' });
            },
            handleClearFilter () {
                this.dbFilter.school = [];
                this.dbFilter.occupy = [];
            },
            handleToDatabase () {
                this.mode = 'choose';
            },
            handleCloseTips () {
                this.closeTips = true;
            }
        },
        computed: {
            controlClass () {
                return {
                    'th-main-control-single': this.mode == 'detail',
                    'hide': this.mode == 'end'
                }
            },
            pageColor () {
                return this.mode == 'choose' ? this.themeColor : '#fff';
            },
            schoolText () {
                return schoolConfig[this.school].name;
            },
            occupyText () {
                return this.schoolText + this.occupy;
            },
            coverStyle () {
                var r = parseInt(this.themeColor.slice(1,3), 16),
                    g = parseInt(this.themeColor.slice(3,5), 16),
                    b = parseInt(this.themeColor.slice(5,7), 16);
                var gradient = 'linear-gradient(90deg, rgba(' + r + ', ' + g + ', ' + b + ', 0) 0%, rgba(' + r + ', ' + g + ', ' + b + ',1) 100%)';
                return {
                    'background': gradient
                }
            },
            avatarSrc () {
                return 'https://xzx-1305956931.file.myqcloud.com/img/' + this.avatarName;
            },
            contactSpan () {
                return this.website ? '12' : '24';
            },
            themeColor () {
                let c = schoolConfig[this.school].color;
                return c ? c : '#262626';
            },
            nextText () {
                return this.mode == 'choose' ? 'NEXT' : 'BACK';
            },
            currentProcess () {
                return this.current / this.order.length;
            },
            filteredData () {
                let filter = this.dbFilter;
                let data = this.tutorList;
                let s, o;
                if (filter.school.length) {
                    data = data.filter(function (tutor) {
                        let result = false;
                        filter.school.forEach(function (s) {
                            if (s != 'Other') {
                                if (tutor.school == s) {
                                    result = true;
                                }
                            } else {
                                if (tutor.school == 38) {
                                    result = true;
                                }
                            }
                        });
                        return result;
                    });
                }
                if (filter.occupy.length) {
                    data = data.filter(function (tutor) {
                        let result = false;
                        filter.occupy.forEach(function (o) {
                            if (o != 'Other') {
                                if (tutor.occupy == o) {
                                    result = true;
                                }
                            } else {
                                if (tutor.occupy != '教授' && tutor.occupy != '副教授' && tutor.occupy != '讲师') {
                                    result = true;
                                }
                            }
                        });
                        return result;
                    });
                }
                if (this.dbSearch) {
                    let sw = this.dbSearch.toLowerCase();
                    data = data.filter(function (tutor) {
                        let result = false;
                        if (
                            tutor.nameText.indexOf(sw) > -1 ||
                            tutor.pinyin.indexOf(sw) > -1 ||
                            tutor.pinyinShort.indexOf(sw) > -1
                        ) {
                            result = true;
                        }
                        return result;
                    });
                }
                return data;
            },
            dataListColor () {
                return this.navColor;
            },
            filterBarText () {
                let text = '';

                if (this.dbFilter.school.length)
                    text += '学院 ';

                if (this.dbFilter.occupy.length)
                    text += '职称';

                return text ? text : '无';
            },
            pickTipsShow () {
                if (this.current >= 20 && this.current <= 25 && !this.closeTips && this.mode == 'choose') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        created () {
            this.mode = 'choose';
            this.isTutorial = true;
            this.centerText = '欢迎 2021 级士谔 er 来到书院！这一次，学业导师由你来 PICK*';
            for (var i = 0; i < tutorList.data.length; i++) {
                this.order.push(i);
            }
            this.order.sort(randomSort);
            if (!Cookies.get('db_list_size')) {
                Cookies.set('db_list_size', 'sm', { expires: 999 });
            } else {
                if (Cookies.get('db_list_size') == 'sm') {
                    this.dbListSm = true;
                } else {
                    this.dbListSm = false;
                }
            }
            if (this.$route.name == 'detail') {
                this.handleOpenDetail(this.$route.params.index);
            }
        },
        components: { THLogo, dbDetail }
    };
</script>