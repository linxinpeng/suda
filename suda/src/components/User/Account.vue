<template>
    <div class="lt-account">
        <div class="account-conter">
            <div class="left">
                <div class="head-home">
                    <router-link to="/"><Icon size="20" color="#3b5671" type="ios-home-outline" /></router-link>
                </div>
                <div class="head-portrait">
                    <p class="p">Personal center</p>
                    <img class="head-img" src="../../assets/images/user.png" />
                    <p class="head-name">{{user.phone}}</p>
                </div>
            </div>
            <div class="right">
                <!--<div class="urse-info"><Icon type="ios-information-circle-outline" />&nbsp;&nbsp;账户信息</div>-->
                <div class="info-center">
                    <p><Icon type="ios-contact" color="#3b5671"/>&nbsp;&nbsp;<span class="title">用户名</span>:&nbsp;&nbsp;<span style="font-size: 13px">{{user.phone}}</span></p>
                    <p><Icon type="md-phone-portrait" color="#3b5671"/>&nbsp;&nbsp;<span class="title">手机</span>:&nbsp;&nbsp;<span style="font-size: 13px">+86 {{user.phone}}</span></p>
                    <p><Icon type="md-mail" color="#3b5671"/>&nbsp;&nbsp;<span class="title">邮箱</span>:&nbsp;&nbsp;<span style="font-size: 13px">{{user.email}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                user:'',
            }
        },
        methods:{
            async acquireUserId(){
                const resp = await api.request('/api/ltshop/bapi/profile');
                if (resp.status === 0) {
                   this.user = resp.model;
                   console.log(this.user);
                }
            },
        },
        mounted(){
            this.acquireUserId();
        }
    }
</script>
<style lang="scss"lt-ccount scoped>
    .lt-account{
        .account-conter{
            width: 1280px;
            margin: 0 auto;
            min-height: 600px;
            .left{
                width:25%;
                float: left;
                position: relative;
                min-height: 200px;
                /*background-color: #f9f9f9;*/
                box-shadow: 1px 0px 0px #9999;
                .head-portrait{
                    position: relative;
                    width: 100%;
                    text-align: center;
                    /*margin-top: 55%;*/
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
                min-height: 200px;
                /*background-color: #fcfcfc;*/
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
                    margin-top: 20px;
                    margin-left:100px;
                    font-size: 15px;
                    line-height: 60px;
                    .title{
                        font-weight: 500;
                        color: #3b5671;
                    }
                }
            }
        }
    }
</style>