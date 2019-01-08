<template>
    <div class="lt-home">
        <div class="lt-carousel">
            <Carousel v-model="active" loop>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/images/banner4.jpg" width="100%"/></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/images/banner2.jpg" width="100%"/></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/images/banner1.jpg" width="100%"/></div>
                </CarouselItem>
            </Carousel>
        </div>
        <div class="lt-center">
            <!--<h2>超过 75,000 优秀品牌选择蓝途速搭</h2>-->
            <!--<img src="../assets/images/use.png" />-->
            <!--<div class="lt-btn"><Button type="success">查看行业案例</Button></div>-->
            <div class="lt-client">
                <h2>客户端下载</h2>
                <p>支持windows, mac, linux电脑版本</p>
                <div class="client-conter">
                    <ul style="list-style: none">
                        <li><a href="javacript:void(0);"><img src="../assets/images/laptop.png" width="60%" height="60%"/></a></li>
                        <li><a href="javacript:void(0);"><img src="../assets/images/laptop2.png" width="60%" height="60%"/></a></li>
                        <li><a href="javacript:void(0);"><img src="../assets/images/laptop3.png" width="60%" height="60%"/></a></li>
                    </ul>
                </div>
            </div>
            <div class="lt-desc">
                <h2>丰富的主题，不止好看</h2>
                <p>多类行业主题，跨屏适配 PC、小程序、平板、手机和微站</p>
                <p>可视化编辑与在线源码编译，随心所欲调整布局，无处不在的流畅体验</p>
                <Button type="success">前往主题市场</Button>
            </div>
            <div class="lt-bottom-carousel">
                <div class="swiper-container swiper-container-horizontal swiper-container-multirow">
                    <div class="swiper-wrapper" style="width: 1850px;">
                        <div class="swiper-slide" v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item"><img :src="require(`../assets/images/${item}.png`)" width="100%"/></div>
                    </div>
                </div>
            </div>
            <div class="lt-major">
                <h2>专业的服务市场+专家讲座</h2>
                <Divider class="lt-divider">为您省心</Divider>
                <div class="lt-major-box">
                    <div class="lt-major-box-left">
                        <div :class="change == 0?'lt-major-left-top active':'lt-major-left-top '" @mouseover="onChange(0)"><Icon type="ios-create" />帮您设计</div>
                        <div :class="change == 1?'lt-major-left-center active':'lt-major-left-center'" @mouseover="onChange(1)"><Icon type="ios-link" />帮您对接</div>
                        <div :class="change == 2?'lt-major-left-bottom active':'lt-major-left-bottom'" @mouseover="onChange(2)"><Icon type="ios-pricetag-outline" />帮您上架</div>
                    </div>
                    <div class="lt-major-box-center">
                        <div class="lt-major-center-content" v-for="(item,index) in imgs" :key="index" v-if="index == change">
                            <img :src="item.src" width="100%"/>
                            <div class="content">
                                <h2><Icon :type="item.logo" />{{item.title}}</h2>
                                <div class="sub-content">{{item.desc}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="lt-major-box-right">
                        <div :class="change == 3?'lt-major-right-top active':'lt-major-right-top'" @mouseover="onChange(3)"><Icon type="ios-desktop" />帮您建站</div>
                        <div :class="change == 4?'lt-major-right-center active':'lt-major-right-center'" @mouseover="onChange(4)"><Icon type="ios-construct" />帮您维护</div>
                        <div :class="change == 5?'lt-major-right-bottom active':'lt-major-right-bottom'" @mouseover="onChange(5)"><Icon type="md-contacts" />帮您培训</div>
                    </div>
                </div>
                <div class="lt-btn"><Button @click="openRegister()" type="success">免费注册</Button></div>
                <div class="clear"></div>
            </div>
            <div class="lt-info">
                <ul>
                    <li class="li-1"><b><span id="productNumber_1" data-sum="1670262">1670262</span><sup>+</sup></b><p>公司优选</p></li>
                    <li class="li-2"><b><span id="productNumber_2" data-sum="3498">3498天</span></b><p>安全运行</p></li>
                    <li class="li-3"><b><span id="productNumber_3" data-sum="150">150</span><sup>+</sup></b><p>覆盖行业和类目</p></li>
                    <li class="li-4"><b><span id="productNumber_4" data-sum="1165">1165万</span></b><p>件商品销售中</p></li>
                    <li class="li-5"><b><span id="productNumber_5" data-sum="2784765">2784765</span><sup>+</sup></b><p>个订单为企业带来</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                active: 0,
                change:0,
                imgs:[
                    {
                        src:require("../assets/images/major_pic1.jpg"),
                        desc:'无需您自己操作，专业设计帮您量身定做，打造您的专属网站，让您的网站不再和人“撞衫”',
                        title:'帮您设计' ,
                        logo:'ios-create'
                    },
                    {
                        src:require("../assets/images/major_pic2.jpg"),
                        desc:'第三方支付、登录等对接帮您搞定，再也不用烦恼第三方对接的问题啦！专人为您调试接口，VIP待遇任您享受。',
                        title:'帮您对接',
                        logo:'ios-link'
                    },
                    {
                        src:require("../assets/images/major_pic3.jpg"),
                        desc:'从一键生成APP到上架，一条龙服务，告别繁杂的操作和长时间的等待流程。来建站ABC，我们帮您上架。',
                        title:'帮您上架',
                        logo:'ios-pricetag-outline'
                    },
                    {
                        src:require("../assets/images/major_pic4.jpg"),
                        desc:'不会技术也无妨，专业建站帮您一键搭建网站，不再为技术担忧，来建站ABC，享受专业的建站服务。',
                        title:'帮您建站',
                        logo:'ios-desktop'
                    },
                    {
                        src:require("../assets/images/major_pic5.jpg"),
                        desc:'帮你上传维护内容，无需复杂操作，一切内容我们来帮您解决，省去无数烦恼。',
                        title:'帮您维护',
                        logo:'ios-construct'
                    },
                    {
                        src:require("../assets/images/major_pic6.jpg"),
                        desc:'专家培训，为您量身定做培训方案，随时随地帮您排忧解难，答疑解惑。',
                        title:'帮您培训',
                        logo:'md-contacts'
                    }
                ]
            }
        },
        methods:{
            openRegister() {
                this.$router.push('/register');
                // window.open('http://account.lantusuda.com/#user/register');
            },
            initSwiper(){
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    observer:true,
                    // loop:true,
                    observeParents:true,
                    spaceBetween: 10,
                });
            },
            onChange(index){
                this.change = index;
            }
        },
        mounted(){
            this.initSwiper()
        }
    }
</script>
<style lang="scss" scoped>
    .clear{
        clear: both;
    }
    .lt-home{
        .lt-center{
            box-sizing: border-box;
            margin: 0 auto;
            /*padding: 96px 0;*/
            padding-bottom: 0px;
            width: auto;
            text-align: center;
            .ivu-btn-success{
                color: #f2f2f2;
                background-color: #3b5671 !important;
                border-color: #3b5671 !important;
            }
            h2{
                font-weight: 400;
                margin: 0 0 60px;
                font-size: 36px;
                text-align: center;
            }
            img{
                max-width: 100%;
                vertical-align: middle;
                border: 0;
            }
            .lt-btn{
                width: 100%;
                margin-top: 60px;
                margin-bottom: 96px;
                text-align: center;
                button{
                    width: 175px;
                    padding: 13px 0px;
                    font-size: 16px;
                }
            }
            .lt-desc{
                position: relative;
                padding: 55px 0 80px;
                text-align: center;
                background-color: #fff;
                h2{
                    font-size: 36px;
                    font-weight: 400;
                    margin-top: 0;
                    margin-bottom: 10px;
                    color: #404040;
                }
                p{
                    margin: 0;
                    font-size: 18px;
                    line-height: 30px;
                    color: #a6a6a6;
                    font-family: 'Microsoft Yahei Light',Lantinghei,verdana,sans-serif;
                }
                button{
                    width: 175px;
                    padding: 13px 0;
                    font-size: 16px;
                    margin-top: 30px;
                }
            }
            .lt-major{
                width: 1170px;
                margin: 60px auto;
                h2{
                    margin-bottom: 20px;
                }
                .lt-divider{
                    width: 250px;
                    margin: 0 auto;
                    color: #a6a6a6;
                }
                .lt-major-box{
                    width: 100%;
                    margin-top: 20px;
                    .lt-major-box-left{
                        float: left;
                        width: 250px;
                        .lt-major-left-top,.lt-major-left-center,.lt-major-left-bottom{
                            width: 240px;
                            height: 108px;
                            background: #f5f5f5;
                            border: 2px solid #f5f5f5;
                            line-height: 108px;
                            margin-bottom: 10px;
                            cursor: pointer;
                            font-size: 18px;
                            i{
                                font-size: 25px;
                                margin-right: 18px;
                                margin-top: -5px;
                            }
                            &.active{
                                border: 2px solid #3b5671;
                                color: #3b5671;
                            }
                        }
                    }
                    .lt-major-box-center{
                        width: 650px;
                        margin-left: 10px;
                        margin-right: 10px;
                        float: left;
                        .lt-major-center-content{
                            position: relative;
                            overflow: hidden;
                            img{
                                animation: fade .6s ease-in-out;
                            }
                            .content{
                                position: absolute;
                                top: 50%;
                                left: 0;
                                background:  #3b5671;
                                font-size: 12px;
                                color: #fff;
                                width: 100%;
                                height: 150px;
                                margin-top: -75px;
                                .sub-content{
                                    width: 60%;
                                    margin: 0 auto;
                                    animation: myMove2 .3s ease-in-out;
                                }
                                h2{
                                    width: 60%;
                                    margin: 20px auto;
                                    text-align: left;
                                    font-size: 26px;
                                    animation: myMove .3s ease-in-out;
                                    i{
                                        margin-top: -5px;
                                        margin-right: 9px;
                                    }
                                }
                            }
                        }
                    }
                    .lt-major-box-right{
                        float: right;
                        width: 250px;
                        .lt-major-right-top,.lt-major-right-center,.lt-major-right-bottom{
                            width: 240px;
                            height: 108px;
                            background: #f5f5f5;
                            border: 2px solid #f5f5f5;
                            line-height: 108px;
                            margin-bottom: 10px;
                            cursor: pointer;
                            font-size: 18px;
                            i{
                                font-size: 25px;
                                margin-right: 18px;
                                margin-top: -5px;
                            }
                            &.active{
                                border: 2px solid  #3b5671;
                                color:  #3b5671;
                            }
                        }
                    }
                }
                .lt-btn{
                    button{
                        margin-top: 40px;
                    }
                }
            }
            .lt-client{
                margin-top: 60px;
                h2{
                    font-size: 36px;
                    font-weight: 400;
                    margin-top: 0;
                    margin-bottom: 10px;
                    color: #404040;
                }
                p{
                    margin: 0;
                    font-size: 18px;
                    line-height: 30px;
                    color: #a6a6a6;
                    font-family: 'Microsoft Yahei Light',Lantinghei,verdana,sans-serif;
                }
                .client-conter{
                    margin-top: 20px;
                    margin-bottom: 30px;
                    li{
                        display: inline-block;
                        cursor: pointer;
                        transition: all .3s ease;
                        &:hover{
                            transform: translateY(-10px);
                            border-color: #e99425;
                        }
                    }
                }
            }
            .lt-info{
                width: 100%;
                height: 170px;
                background:  #3b5671;
                ul{
                    width: 1170px;
                    height: 170px;
                    margin: 0 auto;
                    li{
                        // text-decoration: none;
                        list-style: none;
                        height: 90px;
                        margin-top: 40px;
                        float: left;
                        width: 20%;
                        color: #fff;
                        font-size: 30px;
                        border-right: 1px solid #ccc;
                        p{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
    @keyframes myMove{
        0% { transform: translateX(-100%)}
        100% {transform: translateX(0)}
    }
    @keyframes myMove2{
        0% { transform: translateX(100%)}
        100% {transform: translateX(0)}
    }
    @keyframes fade{
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
</style>
