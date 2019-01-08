import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Site from '@/components/Site'
import DomainName from '@/components/DomainName'
import LtDistribution from '@/components/Distribution'
import LtService from '@/components/Service'
import LtSale from '@/components/Sale'
import LtPrice from '@/components/Price'
import LtThemeDev from '@/components/ThemeDev'
import LtTemplate from '@/components/Template'
import LtManual from '@/components/Manual'
import LtAppDev from '@/components/AppDev'
import LtLogin from '@/components/Login'
import LtRegister from '@/components/Register'
import LtAccount from '@/components/Account'
import User from '@/components/User';
import UserSite from '@/components/User/Site';
import UserSiteCreate from '@/components/User/SiteCreate';
import UserAccount from '@/components/User/Account';
import UserRecord from '@/components/User/Record';
import UserChangePassword from '@/components/User/ChangePassword';
import ForgetPassword from '@/components/ForgetPassword';
import About from '@/components/About';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/site',
            name: 'Site',
            component: Site
        },
        {
            path:'/domain',
            name:'Domain',
            component:DomainName
        },
        {
            path:'/distribution',
            name:'Distribution',
            component:LtDistribution
        },
        {
            path:'/service',
            name:'Service',
            component:LtService
        },
        {
            path:'/sale',
            name:'Sale',
            component:LtSale
        },
        {
            path:'/price',
            name:'Price',
            component:LtPrice
        },
        {
            path:'/template',
            name:'Template',
            component:LtTemplate
        },
        {
            path:'/themedev',
            name:'ThemeDev',
            component:LtThemeDev
        },
        {
            path:'/manual',
            name:'Manual',
            component:LtManual
        },
        {
            path:'/appdev',
            name:'AppDev',
            component:LtAppDev
        },
        {
            path:'/login',
            name:'Login',
            component:LtLogin
        },
        {
            path:'/register',
            name:'Register',
            component:LtRegister
        },
        {
            path:'/account',
            name:'LtAccount',
            component:LtAccount
        },
        {
            path:'/forget-password',
            name:'ForgetPassword',
            component: ForgetPassword,
        },
        {
            path: '/user',
            name: 'User',
            component:User,
            redirect: { name: 'UserSite' },
            meta: {
                requireAuth: true,
            },
            children: [
                {
                    path: 'site',
                    name: 'UserSite',
                    component: UserSite,
                    meta: {
                        title: '网站管理',
                    }
                }, {
                    path: 'site-create',
                    name: 'UserSiteCreate',
                    component: UserSiteCreate,
                    meta: {
                        title: '创建网站',
                    }
                }, {
                    path: 'account',
                    name: 'UserAccount',
                    component: UserAccount,
                    meta: {
                        title: '帐户信息'
                    }
                },{
                    path: 'record',
                    component: UserRecord,
                    name: 'UserRecord',
                    meta: {
                        title: '购买记录'
                    }
                },{
                    path: 'change-password',
                    name: 'UserChangePassword',
                    component: UserChangePassword,
                    meta: {
                        title: '修改密码'
                    }
                },

            ]
        },
        {
            path:'/about',
            name:'About',
            component: About,
        },
    ]
})