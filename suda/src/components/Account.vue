<template>
    <div class="lt-account">
        <div class="site-header">
            <h2>个人中心</h2>
        </div>
        <div class="account-conter">
            <div class="left">
                <div class="head-home">
                    <router-link to="/"><Icon size="20" color="#3b5671" type="ios-home-outline" /></router-link>
                </div>
                <div class="head-portrait">
                    <p class="p">Personal center</p>
                    <img class="head-img" src="../assets/images/user.png" />
                    <p class="head-name">urse name</p>
                </div>
            </div>
            <div class="right">
                <div class="urse-info"><Icon type="ios-information-circle-outline" />&nbsp;&nbsp;账户信息</div>
                <div class="info-center">
                    <p><Icon type="ios-contact" color="#3b5671"/>&nbsp;&nbsp;<span class="title">用户名</span>:&nbsp;&nbsp;<span style="font-size: 13px">某某某</span></p>
                    <p><Icon type="md-phone-portrait" color="#3b5671"/>&nbsp;&nbsp;<span class="title">手机</span>:&nbsp;&nbsp;<span style="font-size: 13px">86 15558472456</span></p>
                    <p><Icon type="md-mail" color="#3b5671"/>&nbsp;&nbsp;<span class="title">邮箱</span>:&nbsp;&nbsp;<span style="font-size: 13px">QWElantushiji@163.com</span></p>
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
    export default {
        data(){
            return{

            }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>
<style lang="scss"lt-ccount scoped>
    .lt-account{
        .site-header{
            height: 330px;
            margin: 0 20px;
            border-radius: 5px;
            background: url(../assets/images/manual.png) no-repeat;
            background-size: cover;
            text-align: center;
            margin-bottom: 30px;
            h2{
                font-size: 42px;
                padding-top: 104px;
                padding-bottom: 12px;
                color: #fff;
                margin: 0;
                font-weight: 400;
            }
            p{
                font-size: 20px;
                color: #3b5671;
            }
        }
        .account-conter{
            width: 1280px;
            margin: 0 auto;
            min-height: 600px;
            .left{
                width:25%;
                float: left;
                position: relative;
                min-height: 600px;
                background-color: #f9f9f9;
                box-shadow: 1px 0px 0px #9999;
                .head-portrait{
                    position: relative;
                    width: 100%;
                    text-align: center;
                    margin-top: 55%;
                    .p{
                        text-align: center;
                        font-size: 22px;
                        font-weight: 500;
                        margin-top: 20px;
                    }
                    .head-img{
                        margin-top:20px;
                        transition: all .3s ease;
                        &:hover{
                            transform: translateY(-10px);
                        }
                    }
                    .head-name{
                        text-align: center;
                        margin-bottom: 10px;
                    }

                }
                .head-home{
                    margin-top: 10px;
                    margin-left: 10px;
                    transition: all .3s ease;
                    width: 10%;
                    a{
                        color: #999999;
                    }
                    &:hover{
                        transform: translateY(-10px);
                    }
                }

            }
            .right{
                width: 75%;
                float: right;
                min-height: 600px;
                background-color: #fcfcfc;
                .urse-info{
                    display: block;
                    margin-top: 80px;
                    margin-left:95px;
                    font-size: 20px;
                    padding-bottom: 20px;
                    padding-top: 20px;
                    padding-left: 5px;
                    width: 70%;
                    border-bottom:1px solid #dedede;
                    background-color: #3b5671;
                    color: #fff;
                }
                .info-center{
                    margin-top: 30px;
                    margin-left:100px;
                    font-size: 15px;
                    line-height: 80px;
                    .title{
                        font-weight: 500;
                        color: #3b5671;
                    }
                }
            }
        }
        .trail-pc{
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 238px;
            margin-top: 30px;
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
</style>