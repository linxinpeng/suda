<template>
    <div class="lt-template">
        <div class="t-banner">
             <Carousel v-model="active" loop>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img :src="require('../assets/images/t-banner1.png')" width="100%"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img :src="require('../assets/images/t-banner2.png')"  width="100%"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img :src="require('../assets/images/t-banner3.png')"  width="100%"/>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
        <div class="t-center">
            <h3>分类推荐</h3>
            <ul class="t-ul-first">
                <li v-for="(item,index) in content.content || []" :key="index" :style="`background:url(${item.logo})`">
                    <!-- <img :src="item.logo" /> -->
                    <h4>{{item.title}}</h4>
                    <div class="mask"></div>
                </li>
                <div style="clear:both"></div>
            </ul>
            <h3>精品主题</h3>
            <ul class="t-ul-second">
                <li v-for="(item,index) in content.content2 || []" :key="index" :style="`background:url(${item.pclogo});background-size: 100%`">
                    <div class="mask">
                        <a>预览网站</a>
                    </div>
                    <div class="t-mb-img">
                        <img :src="item.mblogo" />
                    </div>
                    <div class="t-info">
                        <h3><b>{{item.theme}}</b>&nbsp;&nbsp;|&nbsp;&nbsp;{{item.desc}}<span>{{item.price}}</span></h3>
                    </div>
                    <pre class="t-reviews" :style="`top:${index*5+4}%`">{{item.reviews}}
                                    ------来自{{item.name}}的评价
                    </pre>
                </li>
            </ul>
            <h3>品牌客户</h3>
            <div class="t-brand">
                <div class="swiper-container swiper-container-horizontal">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in content.content3" :key="index">
                            <div class="b-top">
                                <img :src="item.logo" width="100%"/>
                                <div class="mask">
                                    <a class="a1" href="javascript:void(0)">查看网站</a>
                                    <a class="a2" href="javascript:void(0)">预览同款主题</a>
                                </div>
                            </div>
                            <div class="b-bottom">
                                <p>{{item.desc}}</p>
                                <div class="b-info">
                                    <img :src="item.slogo" />
                                    <span class="comment-guild">
                                        行业:<span class="trade">{{item.use}}</span>
                                    </span>
                                </div>
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
        </div>
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
            active:0,
            content:data.template
        }
    },
    methods:{
        initSwiper(){       
            var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            // loop : true,
            spaceBetween: 50,
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
    .lt-template{
        .ivu-btn-success{
            color: #f2f2f2;
            background-color: #3b5671 !important;
            border-color: #3b5671 !important;
        }
        .ivu-btn-warning{
            background-color: #83a25c !important;
            border-color: #83a25c !important;
        }
        .t-center{
            h3{
                margin-bottom: 52px;
                font-size: 36px;
                text-align: center;
                margin-top: 50px;
            }
            .t-ul-first{
                width: 1170px;
                margin: 0 auto;
                li{
                    // float: left;
                    display: inline-block;
                    position: relative;
                    width: 332px;
                    height: 176px;
                    margin: 29px;
                    list-style: none;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all .3s ease;
                    &:hover{
                        transform: scale(1.02)
                    }
                    .mask{
                        width: 332px;
                        height: 176px;
                        background: rgba(0,0,0,0.6);
                        position: absolute;
                        top: 0;
                        left: 0;
                        border-radius: 5px;
                    }
                    h4{
                        position: absolute;
                        z-index: 33;
                        left: 50%;
                        width: 100px;
                        text-align: center;
                        margin-left: -50px;
                        line-height: 176px;
                        font-size: 23px;
                        color: #fff;
                    }
                }
            }
            .t-ul-second{
                width: 1170px;
                margin: 0 auto;
                li{
                    display: inline-block;
                    width: 330px;
                    height: 428px;
                    margin: 30px;
                    border-radius: 5px;
                    overflow: hidden;
                    position: relative;
                    cursor: pointer;
                    border: 1px solid #eee;
                    background-size: 100%;
                    &:hover{
                        .t-mb-img{
                            transform: translateY(0);
                            img{
                                transform: translateY(0);
                            }
                        }
                        .mask{
                            opacity: 1;
                        }
                        .t-reviews{
                            animation: side 15s linear infinite;
                        }
                    }
                    .t-mb-img{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background: url('../assets/images/mobilebg.png');
                        transform: translateY(100%);
                        transition: all .5s ease;
                        img{
                                position: absolute;
                                left: 50%;
                                bottom: 0px;
                                width: 180px;
                                margin-left: -90px;
                                transform: translateY(100%);
                                border-radius: 4px;
                                z-index: 99;
                        }
                    }
                    .mask{
                        // display: none;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: rgba(0,0,0,0.6);
                        opacity: 0;
                        transition: all .5s ease;
                        color: #fff;
                        a{
                            text-align: center;
                            border-radius: 5px;
                            display: block;
                            width: 84px;
                            margin: 23px auto;
                            height: 30px;
                            line-height: 30px;
                            color: #1cc999;
                            border: 1px solid #3e5771;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            font-size: 14px;
                            position: relative;
                            z-index: 4;
                            -webkit-transition: background .3s,color .3s,opacity .6s;
                            -o-transition: background .3s,color .3s,opacity .6s;
                            transition: background .3s,color .3s,opacity .6s;
                            text-indent: 2px;
                            opacity: 1;
                            &:hover{
                                background: #3e5771;
                                color: #fff;
                            }
                        }
                    }
                    .t-info{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background: #3e5771;
                        padding: 2% 8%;
                        // transform: translateY(100%);
                        transition: all .5s ease;
                        h3{
                            font-size: 14px;
                            color:rgba(255,255,255,.6);
                            margin: 0;
                            text-align: left;
                            b{
                                font-size: 18px;
                                font-weight: 400;
                                color: #fff;
                            }
                            span{
                                float: right;
                                font-size: 17px;
                                color: #fff;
                            }
                        }
                    }
                    .t-reviews{
                        width: 100%;
                        text-align: center;
                        transform: translateX(100%);
                        position: absolute;
                        top: 50%;
                        font-weight: bold;
                        left: 0;
                        font-size: 17px;
                        color: #3e5771;
                    }
                }
            }
            .t-brand{
                width: 1170px;
                margin: 0 auto;
                .swiper-button-prev,.swiper-button-next{
                        background-image: none;
                        font-size: 50px;
                        color: #3e5771;
                    }
                .swiper-button-next{
                    right: 27px;
                }
                .swiper-slide{
                    border-radius: 4px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    border: 1px solid #d0d0d0;
                    .b-top{
                        width: 100%;
                        position: relative;
                        .mask{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, .8);
                            opacity: 0;
                            transition: all .3s ease;
                            .a1{
                                position: absolute;
                                top: 45%;
                                left: 18%;
                                width: 84px;
                                text-align: center;
                                padding: 6px 0px;
                                border-radius: 4px;
                                margin-right: 20px;
                                color: #3e5771;
                                border: 1px solid #3e5771;
                                box-sizing: border-box;
                                -webkit-transition: background .3s,color .3s,opacity .6s;
                                -o-transition: background .3s,color .3s,opacity .6s;
                                transition: background .3s,color .3s,opacity .6s;
                                &:hover{
                                    background: #3e5771;
                                    color: #fff;
                                }
                            }
                            .a2{
                                position: absolute;
                                top: 45%;
                                left: 50%;
                                width: 110px;
                                text-align: center;
                                padding: 6px 0px;
                                border-radius: 4px;
                                color: #3e5771;
                                border: 1px solid #3e5771;
                                box-sizing: border-box;
                                -webkit-transition: background .3s,color .3s,opacity .6s;
                                -o-transition: background .3s,color .3s,opacity .6s;
                                transition: background .3s,color .3s,opacity .6s;
                                 &:hover{
                                    background: #3e5771;
                                    color: #fff;
                                }
                            }
                            &:hover{
                                opacity: 1;
                            }
                        }
                    }
                    .b-bottom{
                        width: 100%;
                        p{
                            margin: 20px;
                            color: #777;
                            font-size: 14px;
                            height: 42px;
                        }
                        .b-info{
                            margin: 20px;
                            position: relative;
                            .comment-guild{
                                position: absolute;
                                right: 0;
                                top: 50%;
                                -webkit-transform: translateY(-50%);
                                -ms-transform: translateY(-50%);
                                transform: translateY(-50%);
                                font-size: 14px;
                                color: #333;
                                .trade{
                                    color: #333;
                                }
                            }
                        }
                    }
                }
            }
        }
         .trail-pc{
            position: relative;
            overflow: hidden;
            width: 100%;
            margin: 50px auto;
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
    @keyframes side{
        0% { transform: translateX(100%)};
        100% {transform: translateX(-150%)}
    }
</style>
