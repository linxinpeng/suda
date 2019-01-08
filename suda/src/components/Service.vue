<template>
    <div class="lt-service">
        <div class="lt-banner">
            <div class="swiper-container swiper-container-horizontal">
                <div class="swiper-wrapper">
                    <div class="swiper-slide com" style="width:100%" v-for="(item,index) in banners" :key="index">
                        <img :src="item.src" width="100%" />
                        <div class="content">
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                            <Button type="warning">查看详情</Button>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev">
                    <Icon type="ios-arrow-dropleft" />
                </div>
                <div class="swiper-button-next">
                    <Icon type="ios-arrow-dropright" />
                </div>
            </div>
        </div>
        <div class="lt-tool">
            <h2>常用服务</h2>
            <div class="lt-tool-content" v-for="(item,index) in tools" :key="index">
                <div class="lt-tool-header" :style="{background:item.color}">
                    <Icon :type="item.logo" />
                    <h4>{{item.title}}</h4>
                </div>
                <div class="lt-tool-main">
                    <ul>
                        <li v-for="(val,key) in item.sub" :key="key">
                            <span><Icon size="50" :color="val.color" :type="val.logo" /></span>
                            <span class="main-right">
                                <h5>{{val.title}}</h5>
                                <p>{{val.desc}}</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lt-official">
            <div class="lt-inner">
                <h2 class="app-official">官方主推</h2>
                <Divider style="font-size:28px">企业创办</Divider>
                <div class="off-content">
                    <div class="off-box" v-for="(item,index) in office" :key="index">
                        <div class="recom" v-if="index==0">
                            <img :src="require('../assets/images/app_hot.png')" />
                        </div>
                        <div class="imgs">
                            <Icon size="50" color="#16c0e1" :type="item.logo" />
                        </div>
                        <h4>{{item.title}}</h4>
                        <p>{{item.desc}}</p>
                        <span>{{item.price}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="lt-sell">
            <Divider style="font-size:28px;">销售推动</Divider>
            <ul>
                <li v-for="(item,index) in sell" :key="index">
                    <img :src="item.logo" width="100%"/>
                    <div class="sell-content">
                        <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                    </div>
                    <Button>了解更多</Button>
                </li>
            </ul>
        </div>
        <div class="lt-project">
            <Divider style="font-size:28px">行业方案</Divider>
            <div class="project-top">
                <h3>分销商城</h3>
                <p>极易用的三级分销与代理商模式，联合多渠道推广与社交登录，快速获取社群购买力</p>
            </div>
            <div class="project-footer">
                <div>
                    <i><Icon  size="50" type="ios-globe" color="#3b5671"/></i>
                    <span>
                        <h3>跨境电商</h3>
                        <p>对接海关、物流、仓配系统，支持直邮、海外仓、保税仓等模式，通过已接入的 Paypal、Paydollar、支付宝跨境和货币结算服务，让跨境更灵活高效</p>
                    </span>
                </div>
                <div>
                    <i><Icon  size="50" color="#3b5671" type="ios-git-pull-request" /></i>
                    <span>
                        <h3>商业连锁</h3>
                        <p>建立品牌主体与连锁门店多级商城体系，快速接入线下 POS、ERP、CRM 等系统，线上线下活动、营销、数据同步管理，打通连锁各环节</p>
                    </span>
                </div>
                <div>
                    <i><Icon size="50" color="#3b5671" type="ios-keypad" /></i>
                    <span>
                        <h3>城市综合体</h3>
                        <p>通过商城、H5、公众号、Beacon 等应用，建立统一的消费、会员、营销体系，灵活打造综合体全域运营方案</p>
                    </span>
                </div>
            </div>
        </div>
        <div class="lt-footer">
            <h2>蓝途速搭，让商业更简单</h2>
            <Button>免费注册</Button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                banners:[
                    {
                        src:require('../assets/images/app_banner_1.jpg'),
                        title:'客服工具',
                        desc:'客服机器人、知识库、来源追踪等功能，联合实时数据分析，快速掌握并挖掘客户价值'
                    },
                    {
                        src:require('../assets/images/app_banner_2.jpg'),
                        title:'全渠道ERP',
                        desc:'同步管理蓝途速搭、淘宝、天猫、京东等50类销售渠道'
                    },
                    {
                        src:require('../assets/images/app_banner_3.jpg'),
                        title:'分销应用',
                        desc:'极易用的三级分销与代理商模式，联合多渠道推广与社交登录，快速获取社群购买力'
                    },
                    {
                        src:require('../assets/images/app_banner_4.jpg'),
                        title:'营销推广',
                        desc:'口碑营销、精准营销、百科营销、社交推广、SEO优化，5大服务助力品牌成长'
                    },
                    {
                        src:require('../assets/images/app_banner_5.jpg'),
                        title:'蓝途砍价',
                        desc:'免费吸粉引流，免费提高转化'
                    }
                ],
                tools:[
                    {
                        logo:'ios-paper-plane-outline',
                        title:'新手启航',
                        color:'#439fe6',
                        sub:[
                            {
                                logo:'md-globe',
                                title:'域名服务',
                                desc:'域名相关服务行业标准',
                                color:'#439fe6'
                            },
                            {
                                logo:'ios-chatbubbles',
                                title:'微信生态配置',
                                desc:'微信支付、订阅号、服务号、登录授权等全套接入',
                                color:'#439fe6'
                            },
                            {
                                logo:'ios-card',
                                title:'全套支付接入',
                                desc:'快速接入支付宝、百度钱包、Paypal等主流支付方式',
                                color:'#439fe6'
                            },
                            {
                                logo:'ios-build',
                                title:'网站配置指导',
                                desc:'免费协助9类必要功能配置',
                                color:'#439fe6'
                            }
                        ]
                    },
                    {
                        logo:"logo-wordpress",
                        title:'网站拓展',
                        color:'#1de5ac',
                        sub:[
                            {
                                logo:'ios-git-branch',
                                title:'分销应用',
                                desc:'多种角色与利益分配，引爆品牌销量',
                                color:'#1de5ac',
                            },
                            {
                                logo:'md-text',
                                title:'评价插件',
                                desc:'全方位管理商品评价及回复',
                                color:'#1de5ac',
                            },
                            {
                                logo:'md-keypad',
                                title:'商品搭售',
                                desc:'自定义商品推荐和搭配，多规则多组合灵活销售',
                                color:'#1de5ac',
                            },
                            {
                                logo:'ios-headset',
                                title:'客服工具',
                                desc:'小能客服电商行业即时通讯解决方案',
                                color:'#1de5ac',
                            }
                        ]
                    },
                    {
                        logo:"ios-trending-up",
                        title:'高效运营',
                        color:'#1de5ac',
                        sub:[
                            {
                                logo:'ios-aperture',
                                title:'全渠道ERP',
                                desc:'同步管理蓝途速搭、淘宝、天猫、京东等50余类销售渠道',
                                color:'#1de5ac',
                            },
                            {
                                logo:'md-analytics',
                                title:'大数据分析',
                                desc:'广告、活动、用户行为等经营数据实时分析',
                                color:'#1de5ac',
                            },
                            {
                                logo:'md-print',
                                title:'快递打印',
                                desc:'简单高效打印快递面单、电子面单，多平台、多店铺统一管理',
                                color:'#1de5ac',
                            },
                            {
                                logo:'md-bonfire',
                                title:'生意精灵',
                                desc:'订单批量管理和商品批量管理',
                                color:'#1de5ac',
                            }
                        ]
                    },
                    {
                        logo:"ios-people-outline",
                        title:'营销推广',
                        color:'#f6a542',
                        sub:[
                            {
                                logo:'ios-cut',
                                title:'引流砍价',
                                desc:'吸粉、引流、转化营销必备',
                                color:'#f6a542',
                            },
                            {
                                logo:'md-thumbs-up',
                                title:'口碑营销',
                                desc:'增加网络曝光与知名度，建立品牌信任度，促进消费转化',
                                color:'#f6a542',
                            },
                            {
                                logo:'ios-locate',
                                title:'精准营销',
                                desc:'百度推广、腾讯广点通、微博粉丝通，锁定目标人群，实现精准营销',
                                color:'#f6a542',
                            },
                            {
                                logo:'ios-people',
                                title:'社交推广',
                                desc:'朋友圈、微博、QQ空间，真人分享，有效触达25W+传播个体',
                                color:'#f6a542',
                            }
                        ]
                    }
                ],
                office:[
                    {
                        logo:'md-paw',
                        title:'工商注册',
                        desc:'全程线上操作，无捆绑收费',
                        price:'￥699/次'
                    },
                    {
                        logo:'logo-usd',
                        title:'记账报税',
                        desc:'全程透明，可线上实时查看',
                        price:'￥2016/年'
                    },
                    {
                        logo:'md-aperture',
                        title:'法律服务',
                        desc:'极速响应，专业律师服务',
                        price:'￥39/次'
                    },
                    {
                        logo:'ios-list-box',
                        title:'知识产权',
                        desc:'极速申报，明码标价，高通过率',
                        price:'￥318/件'
                    }
                ],
                sell:[
                    {
                        logo:require('../assets/images/app_sell_1.png'),
                        title:'精准营销',
                        desc:'百度推广，腾讯广点通，微博粉丝通锁定目标人群，实现精准营销'
                    },
                    {
                        logo:require('../assets/images/app_sell_2.png'),
                        title:'社交推广',
                        desc:'朋友圈、微博、QQ空间，真人分享有效触达25W+传播个体'
                    },
                    {
                        logo:require('../assets/images/app_sell_3.png'),
                        title:'口碑营销',
                        desc:'增加网络曝光与知名度，提升企业形象，建立品牌信任度，促进消费转化'
                    },
                    {
                        logo:require('../assets/images/app_sell_4.png'),
                        title:'百科营销',
                        desc:'权威平台展示，建立品牌公信力，增强用户对品牌信任'
                    },
                    {
                        logo:require('../assets/images/app_sell_5.png'),
                        title:'SEO优化',
                        desc:'布局关键内容，捕获精准流量，用户更容易发现你的品牌'
                    }
                ]
            }
        },
        methods:{
            initSwiper(){
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 'auto',
                    loop:true,
                    spaceBetween: 30,
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        },
        mounted(){
            this.initSwiper();
        }
    }
</script>
<style lang="scss" scoped>
    .lt-service{
        .ivu-btn-success{
            color: #f2f2f2;
            background-color: #3b5671 !important;
            border-color: #3b5671 !important;
        }
        .ivu-btn-warning{
            background-color: #83a25c !important;
            border-color: #83a25c !important;
        }
        .ivu-btn-success{
            color: #f2f2f2;
            background-color: #3b5671 !important;
            border-color: #3b5671 !important;
        }
        .ivu-btn-warning{
            background-color: #83a25c !important;
            border-color: #83a25c !important;
        }
        .lt-banner{
            text-align: center;
            h2{
                padding-top: 62px;
                margin-bottom: 5px;
                font-size: 42px;
            }
            p{
                font-size: 20px;
                color: #999;
                margin-bottom: 80px;
            }
            .com{
                position: relative;
                .content{
                    position: absolute;
                    width: 50%;
                    top: 48%;
                    left: 94px;
                    color: #fff;
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    text-align: left;
                    h3{
                        font-size: 50px;
                        margin-bottom: 6px;
                    }
                    p{
                        width: 94%;
                        font-size: 18px;
                        color: #fff;
                        margin-bottom: 35px;
                    }
                    button{
                        width: 184px;
                        height: 50px;
                        background: #22a28d;
                        border-color: #22a28d;
                        font-size: 17px;
                        transition: all .3s ease;
                        &:hover{
                            background: #22a28d;
                            color: #fff;
                        }
                    }

                }
            }
            .swiper-button-prev,.swiper-button-next{
                background-image: none;
                i{
                    font-size: 46px;
                    color: #ccc;
                    transition: all .3s ease;
                    &:hover{
                        color: rgb(43, 168, 133);
                    }
                }
            }
            .swiper-button-next{
                right: 20px;
            }
        }
        .lt-tool{
            width: 1170px;
            margin: 0 auto;
            h2{
                margin-bottom: 52px;
                font-size: 36px;
                text-align: center;
                margin-top: 50px;
            }
            .lt-tool-content{
                display: inline-block;
                width: 23%;
                margin: 1%;
                height: 626px;
                // border: 1px solid #ccc;
                transition: all .3s ease;
                cursor: pointer;
                &:hover{
                    transform: translateY(-10px);
                    p{
                        color: #4a4a4a !important;
                    }
                }
                .lt-tool-header{
                    position: relative;
                    width: 100%;
                    height: 168px;
                    padding-top: 36px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    text-align: center;
                    // background-color: #f7f7f7;
                    color: #fff;
                    border-top: 1px solid #d9d9d9;
                    border-left: 1px solid #d9d9d9;
                    border-right: 1px solid #d9d9d9;
                    i{
                        font-size: 66px;
                    }
                    h4{
                        font-size: 22px;
                        // color: #404040;
                        margin-bottom: 5px;
                    }
                }
                .lt-tool-main{
                    padding: 34px 10px;
                    background-color: #fff;
                    border-bottom: 1px solid #d9d9d9;
                    border-left: 1px solid #d9d9d9;
                    border-right: 1px solid #d9d9d9;
                    ul{
                        li{
                            list-style: none;
                            height: 70px;
                            margin-bottom: 27px;
                            position: relative;
                            span{
                                img{
                                    position: absolute;
                                    display: block;
                                    width: 52px;
                                    height: 52px;
                                    background-size: 100%;
                                    border-radius: 4px;
                                }
                            }
                            .main-right{
                                position: absolute;
                                top: 0%;
                                left: 66px;
                                p{
                                    color: #ccc;
                                }
                            }
                        }
                    }
                }
            }
        }
        .lt-official{
            background: #f7f7f5;
            .lt-inner{
                width: 1170px;
                margin: 0 auto;
                .app-official{
                    width: 1170px;
                    padding-top: 124px;
                    margin: 0 auto 40px;
                    font-size: 42px;
                    text-align: center;
                }
                .off-content{
                    .off-box{
                        position: relative;
                        display: inline-block;
                        width: 260px;
                        height: 260px;
                        margin: 16.25px;
                        // border: 1px solid #ccc;
                        background: #fff;
                        text-align: center;
                        transition: all .3s ease;
                        cursor: pointer;
                        margin-bottom: 62px;
                        &:hover{
                            box-shadow: 0 0 10px #ccc;
                        }
                        .recom{
                            position: absolute;
                            top: 0;
                            right: 0;
                        }
                        .imgs{
                            display: inline-block;
                            width: 72px;
                            height: 72px;
                            margin: 46px auto 15px;
                        }
                        h4{
                            font-size: 18px;
                            color: #404040;
                            margin: 0;
                        }
                        p{
                            font-size: 14px;
                            color: #8c8c8c;
                            margin-bottom: 10px;
                        }
                        span{
                            display: inline-block;
                            width: 116px;
                            height: 34px;
                            line-height: 34px;
                            font-size: 16px;
                            border: none;
                            color: #fc7829;
                        }
                    }
                }
            }
        }
        .lt-sell{
            width: 1170px;
            margin: 50px auto;
            ul{
                li{
                    display: inline-block;
                    width: 220px;
                    height: 447px;
                    margin: 7px;
                    position: relative;
                    .sell-content{
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        color: #fff;
                        h3{
                            padding: 50px 0 40px;
                            font-size: 24px;
                            font-weight: 700;
                            margin: 0;
                            text-align: center;
                        }
                        p{
                            padding: 0 40px 0 47px;
                            font-size: 16px;
                            text-align: left;
                        }
                    }
                    button{
                        width: 116px;
                        height: 34px;
                        position: absolute;
                        bottom: 30px;
                        left: 50%;
                        margin-left: -58px;
                        box-shadow: 0 3px 6px #e48e3a;
                        color: #e99425;
                        transition: all .3s ease;
                        &:hover{
                            transform: translateY(-10px);
                            border-color: #e99425;
                        }
                    }
                }
            }
        }
        .lt-project{
            width: 1170px;
            margin: 30px auto;
            .project-top{
                width: 100%;
                height: 200px;
                padding: 36px;
                background: -webkit-gradient(linear,left top,left bottom,from(#3b5671),to(#44678a));
                border-radius: 5px;
                position: relative;
                text-align: center;
                color: #fff;
                h3{
                    font-size: 36px;
                    margin-bottom: 5px;
                }
                p{
                    width: 39%;
                    margin: auto;
                    line-height: 29px;
                    font-size: 18px;
                }
            }
            .project-footer{
                width: 100%;
                height: 160px;
                margin-top: 20px;
                div{
                    display: inline-block;
                    position: relative;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 384px;
                    height: 160px;
                    padding-left: 110px;
                    border-radius: 4px;
                    border: 1px solid #dedede;
                    background-color: #fff;
                    vertical-align: middle;
                    transition: all .3s ease;
                    // transform: translateX(0);
                    &:hover{
                        box-shadow: 0 0 25px #ccc;
                        // align-self: auto;
                    }
                    cursor: pointer;
                    margin: 1px;
                    i{
                        position: absolute;
                        display: block;
                        height: 50px;
                        left: 18px;
                        margin-top: -25px;
                        top: 50%;
                        display: inline-block;
                        width: 60px;
                        // height: 100%;
                    }
                    span{
                        width: calc( 100% -60px);
                        display: inline-block;
                        margin-top: 20px;
                        padding: 0 10px;
                        h3{
                            font-size: 20px;
                            color: #333;
                            margin: 0;
                            text-align: left;
                        }
                        p{
                            font-size: 14px;
                            color: #8c8c8c;
                        }
                    }
                }
            }
        }
        .lt-footer{
            width: 100%;
            margin-top: 100px;
            height: 238px;
            background: linear-gradient(#3b5671,#44678a);
            text-align: center;
            padding-top: 60px;
            h2{
                margin-bottom: 22px;
                // margin-top: 22px;
                font-size: 35px;
                color: #fff;
            }
            button{
                width: 185px;
                height: 52px;
                font-size: 18px;
            }
        }
    }
</style>
