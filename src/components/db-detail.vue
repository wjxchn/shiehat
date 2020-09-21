<template>
    <div id="th-db-detail" key="detail">
        <section>
            <div id="th-db-avatar">
                <img :src="avatarSrc" :alt="nameText">
            </div>
            <div id="th-db-name">
                <h3>{{ nameText }}</h3>
                <p>{{ occupyText }}</p>
            </div>
        </section>
        <div id="th-db-contact" v-show="email">
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
        <p id="th-db-fulltext">{{ centerText }}</p>
    </div>
</template>
<script>
    export default {
        props: [
            'avatarSrc', 'nameText', 'occupyText', 'email', 'website', 'centerText'
        ],
        computed: {
            contactSpan () {
                return this.website ? '12' : '24';
            }
        },
        methods: {
            handleClose () {
                this.$emit('close');
            }
        }
    };
</script>
<style scoped lang="scss">
    #th-db-detail {
        padding-top: 75px;
        padding-bottom: 75px;
        position: fixed;
        z-index: 500;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #212121;
        overflow: auto;
        p {
            padding: 0 25px;
            color: #fff;
        }
        section {
            color: #fff;
            text-align: center;
        }
        #th-db-avatar {
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
        #th-db-name {
            h3 {
                font-size: 2.4rem;
            }
            p {
                opacity: 0.7;
            }
            margin: 15px 0;
        }
        #th-db-fulltext {
            margin: 25px 0 15px;
            line-height: 1.75;
            text-align: left;
        }
        #th-db-contact {
            $bdc: rgba(#fff, .1);
            border-top: 1px solid $bdc;
            border-bottom: 1px solid $bdc;
            color: #fff;
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
                color: #fff;
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
        &.slide-move-enter-active {
            transition: transform .5s ease;
        }
        &.slide-move-leave-active {
            transition: transform .5s ease;
        }
        &.slide-move-enter, &.slide-move-leave-to {
            transform: translateY(100%);
        }
    }
</style>