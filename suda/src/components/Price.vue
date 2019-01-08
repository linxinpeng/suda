<template>
    <div class="lt-price">
        <div class="header">
            <div class="header-title">蓝途，让价值无所不在</div>
            <div class="header-desc">选择适用网站套餐，发现更多可能性</div>
            <Button class="header-button">免费注册</Button>
        </div>
        <div class="center">
            <div class="center-content">
                <div class="center-header">
                    <ul>
                        <li v-for="(item,index) in prices" :key="index">
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                            <span class="c-price"><b>{{item.price}}</b>/年</span>
                            <span class="c-buy">{{item.buy}}</span>
                            <Button type="success">购买</Button>
                            <span class="c-use">{{item.use}}</span>
                        </li>
                    </ul>
                </div>
                <div class="center-body">
                    <Row class="c-header">
                        <Col span="4">&nbsp;</Col>
                        <Col span="4">
                            <div>
                                <span class="price">￥0</span>/年
                                <span class="btn">免费版</span>
                            </div>
                        </Col>
                        <Col span="4">
                            <div>
                                <span class="price">￥998</span>/年
                                <span class="btn">基础版</span>
                            </div>
                        </Col>
                        <Col span="4">
                            <div>
                                <span class="price">￥3188</span>/年
                                <span class="btn">专业版</span>
                            </div>
                        </Col>
                        <Col span="4">
                            <div>
                                <span class="price">￥7188</span>/年
                                <span class="btn">企业版</span>
                            </div>
                        </Col>
                        <Col span="4">
                            <div>
                                <span class="price">￥12988</span>/年
                                <span class="btn">旗舰版</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24" class="c-title">功能</Col>
                    </Row>
                    <transition-group name="fade">
                        <Row class="c-detail" v-for="(item,index) in detail" :key="index + ''" v-if="index<show">
                            <Col span="4" style="font-weight:700">{{item[0]}}</Col>
                            <Col span="4">{{item[1]}}</Col>
                            <Col span="4">{{item[2]}}</Col>
                            <Col span="4">{{item[3]}}</Col>
                            <Col span="4">{{item[4]}}</Col>
                            <Col span="4">{{item[5]}}</Col>
                        </Row>
                    </transition-group>
                    <Row class="c-more" >
                        <Col span="24"><Button @click="expend">{{showTitle}}</Button></Col>
                    </Row>
                </div>
            </div>
        </div>
        <div class="center-footer">
            <h3>专属定制</h3>
            <p>有特别的需求？联系我们</p>
            <Button type="success">提交需求</Button>
        </div>
        <div class="footer">
            <h2>其他资源</h2>
            <p class="p1">以下资源在不同版本内均有赠送</p>
            <ul>
                <li>
                    <Icon style="margin-top: 70px" size="90" color="#3b5671" type="md-chatboxes" />
                    <h3>短信</h3>
                    <p>用途：网站短信通知</p>
                    <p>计费方式：按量付费</p>
                    <p style="height:21px"></p>
                    <p class="f-price"><b>￥0.09</b> /条</p>
                </li>
                <li>
                    <Icon style="margin-top: 70px" size="90" color="#3b5671" type="ios-mail-open" />
                    <h3>邮件</h3>
                    <p>用途：网站邮件通知</p>
                    <p>计费方式：按量付费</p>
                    <p style="height:21px"></p>
                    <p class="f-price"><b>￥0.01 </b>/条</p>
                </li>
                <li>
                    <Icon style="margin-top: 70px" size="90" color="#3b5671" type="ios-folder-open" />
                    <h3>存储</h3>
                    <p>用途：网站图片和文件存储</p>
                    <p>计费方式：按量付费，免流量费</p>
                    <p>（一次付费，永久使用）</p>
                    <p class="f-price"><b>￥39.0 </b>/GB</p>
                </li>
                <li class="li4">
                    <Icon style="margin-top: 60px" size="90" color="#3b5671" type="md-appstore" />
                    <h3>多媒体</h3>
                    <p>用途：网站音频、视频存储</p>
                    <p>计费方式：存储费用 + 流量费用</p>
                    <div class="li4-div">
                        <span class="li4-s1">
                            <h4>存储</h4>
                            <p>
                                <strong style="color:#82a15b;">￥0.3</strong>
                                <span>/GB/月</span>
                            </p>
                        </span>
                        <span class="li4-s2">
                            <h4>流量</h4>
                            <p>
                                <strong style="color:#82a15b;">￥0.9</strong>
                                <span>/GB</span>
                            </p>
                        </span>
                    </div>
                </li>
                <li>
                    <Icon style="margin-top: 60px" size="90" color="#3b5671" type="logo-bitcoin" />
                    <h3>域名价格</h3>
                    <Button>查看详情</Button>
                </li>
                <li>
                    <Icon style="margin-top: 60px" size="90" color="#3b5671" type="md-happy" />
                    <h3>企业服务</h3>
                    <Button>查看详情</Button>
                </li>
                <li>
                    <Icon style="margin-top: 60px" size="90" color="#3b5671" type="md-locate" />
                    <h3>营销推广</h3>
                    <Button>查看详情</Button>
                </li>
            </ul>
        </div>
        <div class="question">
            <h2>常见问题</h2>
            <ul>
                <li v-for="(item,index) in questions" :key="index">
                    <span class="q-imgs">
                        <Icon color="#82a15b" size="30" type="md-help" />
                    </span>
                    <span class="q-right">
                        <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                    </span>
                </li>
            </ul>
        </div>
        <!--<div class="foot">-->
        <!--<h3>蓝途速搭，让商业更简单</h3>-->
        <!--<Button type="warning"><span>0元开始 &nbsp;&nbsp;|&nbsp;&nbsp;<Icon type="ios-arrow-dropright" /></span></Button>-->
        <!--</div>-->
        <div class="trail-pc">
            <div class="index-trail-cont">
                <div class="index-trail-title">蓝途速搭，让商业更简单</div>
                <Button type="warning"><span>0元开始 &nbsp;&nbsp;|&nbsp;&nbsp;<Icon type="ios-arrow-dropright" /></span></Button>
            </div>
        </div>
    </div>
</template>
<script>
    import data from '../data/data.js'
    export default {
        data(){
            return{
                prices:data.prices.content || [],
                detail:data.prices.detail || [],
                questions:data.prices.questions || [],
                show:15,
                showTitle:'显示更多'
            }
        },
        methods:{
            expend(){
                this.show = this.show == 15?33:15;
                this.showTitle = this.showTitle== '显示更多'?'收起':'显示更多'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to{
        transform: translateX(-30px)
    }
    .lt-price{
        .ivu-btn-success{
            color: #f2f2f2;
            background-color: #3b5671 !important;
            border-color: #3b5671 !important;
        }
        .ivu-btn-warning{
            background-color: #83a25c !important;
            border-color: #83a25c !important;
        }
        .header{
            height: 596px;
            background: url('../assets/images/banner3.jpg');
            background-size: cover;
            position: relative;
            .header-title{
                position: absolute;
                left: 200px;
                top: 85px;
                z-index: 11;
                font-size: 48px;
                color: #2ba885;
                animation: ht .8s ease;
            }
            .header-desc{
                position: absolute;
                left: 200px;
                top: 160px;
                font-size: 27px;
                color: #fff;
                animation: hd 1s ease;
            }
            .header-button{
                position: absolute;
                top: 230px;
                left: 200px;
                width: 164px;
                height: 47px;
                font-size: 18px;
                background: transparent;
                color: #fff;
                animation: hb 1s ease;
                &:hover{
                    background: #2ba885;
                    border: none;
                }
            }
        }
        .center{
            width: 1170px;
            margin: 80px auto;
            .center-content{
                .center-header{
                    ul{
                        li{
                            border-right: 1px solid #eee;
                            font-size: 14px;
                            display: inline-block;
                            width: 25%;
                            vertical-align: top;
                            text-align: center;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            list-style: none;
                            h3{
                                margin: 0 auto 12px;
                                color: #404040;
                                font-size: 30px;
                            }
                            p{
                                width: 157px;
                                margin: 0 auto;
                                font-size: 14px;
                                color: #a6a6a6;
                                line-height: 25px;
                            }
                            .c-price{
                                margin-top: 38px;
                                display: block;
                                b{
                                    font-size: 30px;
                                    color: #82a15b;
                                    font-weight: 400;
                                }
                            }
                            .c-buy{
                                display: inline-block;
                                height: 24px;
                                text-align: center;
                                margin: 8px auto 0;
                                border: 1px solid #fd9d63;
                                border-radius: 4px;
                                line-height: 24px;
                                font-size: 14px;
                                color: #fd9d63;
                                background: #fff9e6;
                                padding: 0 10px;
                            }
                            button{
                                display: block;
                                width: 122px;
                                height: 42px;
                                font-size: 17px;
                                margin: 0 auto;
                                margin-top: 35px;

                            }
                            .c-use{
                                display: block;
                                margin-top: 15px;
                                color: #afafaf;
                                font-size: 12px;
                            }
                        }
                        li:last-child{
                            border-right: none;
                        }
                    }
                }
                .center-body{
                    margin-top: 60px;
                    box-shadow: 0 10px 25px 3px #eee;
                    .c-header{
                        height: 148px;
                        font-size: 18px;
                        border: 1px solid #eee;
                        border-right: none;
                        text-align: center;
                        .ivu-col-span-4{
                            height: 100%;
                            border-right: 1px solid #eee;
                            div{
                                width: 100%;
                                margin-top: 32px;
                                .price{
                                    font-size: 26px;
                                    color: #404040;
                                }
                                .btn{
                                    display: block;
                                    margin: 0 auto;
                                    width: 80px;
                                    height: 26px;
                                    line-height: 26px;
                                    padding: 0 19px;
                                    border-radius: 26px;
                                    background-color: #3b5671;
                                    color: #fff;
                                    font-size: 14px;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                    .c-title{
                        height: 54px;
                        line-height: 54px;
                        text-align: center;
                        font-size: 18px;
                        border: 1px solid #eee;
                        border-top: none;
                    }
                    .c-detail{
                        height: 54px;
                        text-align: center;
                        line-height: 54px;
                        border: 1px solid #eee;
                        border-right: none;
                        border-top: none;
                        .ivu-col-span-4{
                            border-right: 1px solid #eee;
                        }
                    }
                    .c-more{
                        text-align: center;
                        height: 54px;
                        line-height: 54px;
                        border: 1px solid #eee;
                        border-top: none;
                        cursor: pointer;
                    }
                }
            }
        }
        .center-footer{
            padding-top: 70px;
            text-align: center;
            padding-bottom: 88px;
            margin: 0 auto;
            min-width: 1200px;
            border-top: 1px solid #ebebeb;
            h3{
                font-size: 36px;
                color: #404040;
                margin: 0 auto;
                width: 1200px;
            }
            p{
                font-size: 24px;
                color: #a6a6a6;
                margin: 20px auto 30px;
            }
            button{
                width: 214px;
                height: 48px;
            }
        }
        .footer{
            background-color: #f5f5f5;
            padding-top: 105px;
            text-align: center;
            padding-bottom: 115px;
            h2{
                font-size: 36px;
                color: #404040;
            }
            .p1{
                font-size: 18px;
                color: #a6a6a6;
                margin: 10px auto 40px;
            }
            ul{
                width: 1170px;
                margin: 0 auto;
                li{
                    display: inline-block;
                    width: 363px;
                    height: 398px;
                    vertical-align: top;
                    margin-right: 24px;
                    position: relative;
                    font-size: 16px;
                    font-size: initial;
                    background-color: #fff;
                    border-radius: 5px;
                    -webkit-transition: all .5s;
                    -o-transition: all .5s;
                    transition: all .5s;
                    &:hover{
                        box-shadow: 0 7px 26px 1px rgba(0,0,0,.12);
                    }
                    img{
                        margin-top: 50px;
                    }
                    h3{
                        font-size: 22px;
                        color: #404040;
                        font-weight: 400;
                        margin: 10px;
                    }
                    p{
                        margin: 0;
                        font-size: 14px;
                        color: #b2b2b2;
                    }
                    .f-price{
                        margin-top: 50px;
                        b{
                            font-size: 28px;
                            font-weight: 400;
                            color: #82a15b;
                        }
                    }
                    button{
                        width: 122px;
                        height: 34px;
                        margin-top: 43px;
                    }
                }
                .li4{
                    width: calc(100% - 24px);
                    margin-top: 24px;
                    margin-bottom: 24px;
                    .li4-div{
                        margin-top: 35px;
                        position: relative;
                        .li4-s1{
                            text-align: left;
                            display: inline-block;
                            border-right: 1px solid #e0e0e0;
                            width: 175px;
                            left: -30px;
                            border-radius: 0;
                            p{
                                strong{
                                    font-size: 28px;
                                    font-weight: 400;
                                    // color: #404040;
                                    color: #14b390;
                                }
                            }
                            h4{
                                padding-left: 5px;
                            }
                        }
                        .li4-s2{
                            text-align: left;
                            display: inline-block;
                            width: 175px;
                            left: -30px;
                            padding-left: 40px;
                            border-radius: 0;
                            p{
                                strong{
                                    font-size: 28px;
                                    font-weight: 400;
                                    // color: #404040;
                                    color: #14b390;

                                }
                            }
                            h4{
                                padding-left: 5px;
                            }
                        }
                    }
                }
            }
        }
        .question{
            h2{
                text-align: center;
                margin-top: 115px;
                font-size: 36px;
                color: #404040;
                font-weight: 400;
            }
            ul{
                width: 1170px;
                margin: 70px auto;
                text-align: center;
                li{
                    display: inline-block;
                    width: 50%;
                    margin-bottom: 78px;
                    vertical-align: top;
                    padding-left: 60px;
                    display: inline-block;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    .q-imgs{
                        display: inline-block;
                        width: 100px;
                    }
                    .q-right{
                        float: right;
                        width: calc(100% - 100px);
                        text-align: left;
                        h3{
                            color: #333;
                            font-size: 18px;
                            margin-bottom: 11px;
                            font-weight: 400;
                        }
                        p{
                            font-size: 13px;
                            color: #a6a6a6;
                            line-height: 27px;
                            font-family: 'Microsoft Yahei Light',Lantinghei,verdana,sans-serif;
                        }
                    }
                }
            }
        }
        /*.foot{*/
        /*height: 238px;*/
        /*background: linear-gradient(#22a28d,#43b998);*/
        /*text-align: center;*/
        /*padding-top: 54px;*/
        /*h3{*/
        /*margin-bottom: 22px;*/
        /*font-size: 35px;*/
        /*color: #fff;*/
        /*}*/
        /*button{*/
        /*width: 185px;*/
        /*height: 52px;*/
        /*font-size: 18px;*/
        /*}*/
        /*}*/
        .trail-pc{
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 238px;
            background: -webkit-gradient(linear,left top,left bottom,from(#3b5671),to(#44678a));
            .index-trail-cont{
                position: relative;
                z-index: 2;
                width: 100%;
                text-align: center;
                padding-top: 54px;
                .index-trail-title{
                    margin-bottom: 22px;
                    font-size: 35px;
                    color: #fff;
                }
                .ivu-btn-warning{
                    width: 185px;
                    height: 52px;
                    font-size: 18px;
                    vertical-align: middle;
                }
            }
        }
    }
    @keyframes ht{
        0% { transform: translateY(-200%);opacity: 0; };
    100% {transform: translateY(0);opacity: 1;}
    }
    @keyframes hd{
        0% { transform: translateX(100%);opacity: 0; };
    100% {transform: translateX(0);opacity: 1;}
    }
    @keyframes hb{
        0% { transform: translateX(100%);opacity: 0; };
    100% {transform: translateX(0);opacity: 1;}
    }
</style>
