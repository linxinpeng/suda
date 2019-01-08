<template>
    <div class="lt-banner">
        <div class="lt-inner">
            <div class="lt-nav">
                <div class="lt-img">
                    <img src="../assets/images/logo.png" width="90%" @click="$router.push('/')"/>
                </div>
                <ul>
                    <li v-for="(item,index) in menus" :key="index">
                        <router-link :to="item.href" :class="active == item?'active':''">{{item.name}}</router-link>
                        <ul v-if="item.submenus.length>0">
                            <li v-for="(val,key) in item.submenus" :key="key"><router-link :to="val.href">{{val.name}}</router-link></li>
                        </ul>
                    </li>
                    <li class="lt-btn" v-if="user.token"><router-link to="/user"><Icon type="md-person" />{{user.username}}</router-link><Button type="default" @click="onLogout">注销</Button></li>
                    <li class="lt-btn" v-else><Button type="info" @click="openRegister()">注册</Button><Button type="success" @click="openLogin()">登录</Button></li>
                </ul>
            </div>
        </div>
        <div class="lt-placeholder">

        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            user() {
                return store.state.user || {};
            }
        },
        data(){
            return{
                active:null,
                menus:[
                    {
                        name:'首页',
                        href:'/',
                        submenus:[]
                    },
                    {
                        name:'建站',
                        href:'/site',
                        submenus:[
                            {name:'网站建设', href:'/site'},
                            {name:'主题' , href:'/template'},
                            {name:'域名', href: '/domain'}
                        ]
                    },
                    // {
                    //     name:'分销系统',
                    //     href:'/distribution',
                    //     submenus:[]
                    // },
                    {
                        name:'服务',
                        href:'/service',
                        submenus:[]
                    },
                    {
                        name:'营销',
                        href:'/sale',
                        submenus:[]
                    },
                    {
                        name:'价格',
                        href:'/price',
                        submenus:[]
                    },
                    // {
                    //     name:'案例',
                    //     href:'/',
                    //     submenus:[]
                    // },
                    // {
                    //     name:'文档',
                    //     href:'/manual',
                    //     submenus:[
                    //         {name:'使用手册', href:'/manual'},
                    //         {name:'主题开发', href:'/themedev'},
                    //         {name:'应用开发', href:'/appdev'},
                    //         {name:'API/SDK', href:'/'},
                    //         {name:'更新日志', href:'/'}
                    //     ]
                    // },
                    // {
                    //     name:'开放平台',
                    //     href:'/open',
                    //     submenus:[
                    //         {name:'合作伙伴', href:'/'},
                    //         {name:'开发者', href:'/'},
                    //         {name:'代理商', href:'/'}
                    //     ]
                    // },
                    {
                        name:'关于我们',
                        href:'/about',
                        submenus:[
                            // {name:'公司简介', href:'/'},
                            // {name:'公司动态', href:'/'},
                            // {name:'资质荣誉', href:'/'}
                        ]
                    },
                    // {
                    //     name:'个人中心',
                    //     href:'/account',
                    //     submenus:[
                    //
                    //     ]
                    // },

                ]
            }
        },
        watch:{
            $route(to,from){
                this.setCurrent();
            }
        },
        methods:{
            onLogout() {
                utils.logout();
            },
            openRegister() {
                this.$router.push('/register');
                // window.open('http://account.lantusuda.com/#/user/register');
            },
            openLogin() {
                this.$router.push('/login');
                // window.open('http://account.lantusuda.com/#/user/login');
            },
            setCurrent(){
                const path = location.pathname;
                hit:
                    for(var i in this.menus){
                        if(path == this.menus[i].href){
                            this.active = this.menus[i];
                            break;
                        }
                        else{
                            for(var sub in this.menus[i].submenus){
                                if(path == this.menus[i].submenus[sub].href){
                                    this.active = this.menus[i];
                                    break hit;
                                }
                            }
                        }
                    }
            }
        },
        mounted(){
            this.setCurrent();
        }
    }
</script>
<style lang="scss" scoped>
    .lt-banner{
        .lt-inner{
            width: 100%;
            height: 76px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            background: #fff;
            box-shadow: rgba(0,0,0,.2) 0 1px 8px 0;
            .active,.router-link-exact-active{
                color: #4576a8 !important;
            }
            .lt-nav{
                width: 1170px;
                margin: 0 auto;
                .lt-img{
                    display: inline-block;
                    width: 170px;
                    height: 76px;
                    img{
                        margin-top: 15px;
                    }
                }
                ul{
                    width: calc(100% - 170px);
                    float: right;
                    li{
                        display: inline-block;
                        position: relative;
                        list-style: none;
                        &:hover{
                            text-decoration:underline;
                            ul{
                                display: block;
                                animation: myfirst .3s ease;
                            }
                        }
                        a{
                            font-size: 16px;
                            line-height: 76px;
                            position: relative;
                            display: inline-block;
                            zoom: 1;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            height: 76px;
                            margin: 0 19px;
                            vertical-align: middle;
                            color: #333;
                            &:hover{
                                color: #3b5671;
                            }
                        }
                        .lt-line{
                            display: inline-block;
                            width: 100%;
                            height: 1px;
                            position: absolute;
                            top: 43px;
                            left: 0px;
                            background: #000;
                        }
                        ul{
                            display: none;
                            position: absolute;
                            top: 76px;
                            left: 50%;
                            margin-left: -65px;
                            width: 130px;
                            background: #fff;
                            box-shadow: 0 3px 10px 0 rgba(34,24,21,.2);
                            li{
                                a{
                                    line-height: 48px;
                                    position: relative;
                                    display: inline-block;
                                    width: 130px;
                                    height: 48px;
                                    text-align: center;
                                    text-decoration: none;
                                    color: #737373;
                                    margin: 0;
                                    transition: all .3s ease;
                                    &:hover{
                                        background: #3b5671;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                    .lt-btn{
                        margin-left: 50px;
                        button{
                            width: 80px;
                            margin: 10px;
                        }
                        .ivu-btn-info {
                            color: #fff;
                            background-color: #82a15b;
                            border-color: #82a15b;
                            &:hover {
                                -webkit-box-shadow:  0 2px 4px #a6cc71, 0 4px 9px rgba(139,227,202,.2);
                                box-shadow:  0 2px 4px #a6cc71, 0 4px 9px rgba(139,227,202,.3);
                            }
                        }
                        .ivu-btn-success {
                            color: #fff;
                            background-color: #3b5671;
                            border-color: #3b5671;
                            &:hover {
                                -webkit-box-shadow:  0 2px 4px #517b9e, 0 4px 9px rgba(50,86,133,.2);
                                box-shadow:  0 2px 4px #517b9e, 0 4px 9px rgba(50,86,133,.3);
                            }
                        }
                    }
                }
            }
        }
        .lt-placeholder{
            height: 76px;
            width: 100%;
        }
    }

    @keyframes myfirst
    {
        0%   { transform: translateY(-10px);opacity: 0;}
        100% { transform: translateY(0);opacity: 1;}
    }
</style>
