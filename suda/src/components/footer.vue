<template>
    <div class="lt-footer">
        <div class="footer-mian">
            <ul class="footer-nav">
                <li v-for="(list,index) in array" :key="index">
                    <dl>
                        <dt>{{list.title}}</dt>
                        <dd :style="list.conter.length>5?'width:205px':'width:86px'">
                            <div v-for="(list2,key) in list.conter" :key="key">
                                <a href="javascript:void(0)">{{list2}}</a>
                            </div>
                        </dd>
                    </dl>
                </li>
            </ul>
            <div class="footer-icon">
                <a href="javascript:void(0)" class="footer-icon-item">
                    <Icon style="margin-bottom: 5px" size="48" type="md-checkmark-circle-outline"/>
                    <div>工商网监<br>电子标识</div>
                </a>
                <a href="javascript:void(0)" class="footer-icon-item">
                    <Icon style="margin-bottom: 5px" size="48" type="ios-globe"/>
                    <div>可信网站<br>身份验证</div>
                </a>
                <a href="javascript:void(0)" class="footer-icon-item">
                    <Icon style="margin-bottom: 5px" size="48" type="ios-globe-outline"/>
                   <div>安全联盟<br>实名验证</div>
                </a>
            </div>
            <div class="footer-copy">
                <span>软件企业编号深RQ-2016-0140</span><br>
                <a href="javascript:void(0)" >粤ICP备XXXXXX号-6</a>
            </div>
            <div class="footer-bar">
                <span>© 2018 lantusuda.com All rights reserved.</span>
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <a href="javascript:void(0)">{{item}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
           array:[
               {title:'产品',conter:['网站建设','分销商城','主题市场','域名市场','企业服务','营销推广','安全证书','企业邮箱',],},
               {title:'文档',conter:['使用手册','主题开发','应用开发','API/SDK'],},
               {title:'关于',conter:['公司简介','公司动态','荣誉资质'],},
               {title:'关注',conter:['新浪微博','微信公众号'],},
               ],
            list:['系统状态','更新日志','服务条款'],
        }
    }
}
</script>
<style lang="scss" scoped>
    .lt-footer{
        position: relative;
        width: 1200px;
        margin: auto;
        height:362px;
    }
    a{
        outline: 0;
        color: inherit;
        background-color: transparent;
    }
    .footer-mian{
        width: 1170px;
        margin: 0 auto;
        padding: 41px 0 43px;
    }
    .footer-nav{
        font-size: 14px;
        margin: 0;
        list-style: none;
        color: #e5e5e5;
    }
    .footer-nav li{
        display: inline-block;
        vertical-align: top;
    }
    .footer-nav dl{
        padding-left: 0;
    }
    .footer-nav dt{
        margin-bottom: 12px;
        font-size: 18px;
        color: #404040;
        height: 26.4px;
    }
    .footer-nav dd{
        margin-left: 0;
        display: inline-block;
        vertical-align: top;
        height: 116px;
        margin-right:35px;
    }
    .footer-nav a{
        display: block;
        float: left;
        line-height: 24px;
        color: #999;
        margin-bottom: 5px;
        padding-right: 29px;
        min-width:99px;
    }
    .footer-nav a:hover{
        color:#3b5671;
        cursor: pointer;
    }
    .footer-icon{
        font-size: 12px;
        overflow: hidden;
        position: absolute;
        top: 46px;
        right: -32px;
    }
    .footer-icon-item{
        float: right;
        margin-right: 48px;
        color: #999;
    }
    .footer-icon i:hover{
        color:#3b5671;
    }
    .footer-icon div:hover{
        color:#000;
    }
    .footer-copy{
        position: absolute;
        top: 133px;
        right: 16px;
        width: 260px;
        margin-top: 20px;
        font-size: 12px;
        line-height: 20px;
        color: #a6a6a6;
        text-align: right;
    }
    .footer-bar{
        width: 1170px;
        margin: 0 auto;
        font-size: 14px;
        line-height: 56px;
        clear: both;
        padding-bottom: 15px;
        color: #a6a6a6;
        border-top: 1px solid #ccc;
        margin-top: 70px;
    }
    .footer-bar>span {
        font-size: 12px;
        float: right;
    }
    .footer-bar>ul {
        margin: 0;
        padding-left: 0;
        list-style: none;
    }
    .footer-bar>ul li {
        display: inline-block;
        padding-right: 38px;
        vertical-align: middle;
        color: #666;
    }

</style>

