<template>
    <div class="lt-domain">
        <div class="header">
            <h1>域名购买</h1>
            <p>通过本站购买域名，享<a href="https://docs.lantusuda.com/menu/s/547c326fe2931e18f000001f" target="_blank"><span>备案绿色通道</span><Icon type="ios-ribbon" /></a></p>
            <div class="lt-input">
                <input v-model="value" placeholder="输入域名，如：baidu 或 baidu.com"/> <Button type="success" >查询</Button>
            </div>
        </div>
        <div class="center">
            <h2>为什么选择蓝途速搭？</h2>
            <div class="content">
                <div class="domain-why-item">
                    <div class="domain-img">
                        <img src="../assets/images/domain1.png" width="100%"/>
                    </div>
                    <h4>免费高品质 DNS 解析服务</h4>
                    <p>通过 DNSPod 提供的专业免费 DNS 解析服务，简单快捷绑定到蓝途速搭</p>
                </div>
                <div class="domain-why-item">
                     <div class="domain-img">
                        <img src="../assets/images/domain2.png" width="100%"/>
                    </div>
                    <h4>免费开启 HTTPS</h4>
                    <p>免费生成 SSL 安全证书，开启全站 HTTPS ，提升网站安全性能</p>
                </div>
                <div class="domain-why-item">
                     <div class="domain-img">
                        <img src="../assets/images/domain3.png" width="100%"/>
                    </div>
                    <h4>免费开通企业邮箱</h4>
                    <p>免费开通以网站域名为后缀的企业邮箱，提升品牌形象、优化内部管理</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="index-trail-title">蓝途速搭，让商业更简单</div>
            <div class="lt-domain-btn"><Button type="warning">0元开始</Button></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    }
}
</script>
<style lang="scss" scoped>
    .lt-domain{
        width: 100%;
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
            width: calc(100% - 40px);
            margin: 20px auto;
            height: 300px;
            background: url(../assets/images/domain22.png) no-repeat;
            background-size: cover;
            border-radius: 5px;
            text-align: center;
            position: relative;
            h1{
                color: #fff;
                padding-top: 65px;
                font-size: 42px;
            }
            p{
                font-size: 24px;
                color: #fff;
                margin: 0;
                margin-top: 8px;
                a{
                    margin-left: 13px;
                    color: #fece2c;
                }
            }
            .lt-input{
                width: 710px;
                height: 80px;
                background: #fff;
                position: absolute;
                top: 100%;
                left: 50%;
                margin-top: -40px;
                margin-left: -355px;
                box-shadow: 0 -2px 25px 1px rgba(0,0,0,.14);
                border-radius: 5px;
                input{
                    width: 600px;
                    height: 40px;
                    margin: 20px auto;
                    font-size: 14px;
                    padding: 7px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    &::placeholder{
                        color: #ccc;
                    }
                }
                button{
                    width: 70px;
                    height: 40px;
                    margin-top: -6px;
                }
            }
        }
        .center{
            margin-top: 100px;
            h2{
                font-size: 26px;
                color: #777777;
                margin-bottom: 56px;
                text-align: center;
                font-weight: normal;
            }
            .content{
                width: 1170px;
                margin: 0 auto;
                .domain-why-item{
                    width: 310px;
                    display: inline-block;
                    margin: 0 38px;
                    vertical-align: top;
                    .domain-img{
                        display: inline-block;
                        width: 200px;
                        height: 130px;
                        margin-left: 42px;
                    }
                    h4{
                        width: 100%;
                        margin: 0;
                        text-align: center;
                        font-size: 22px;
                        color: #333333;
                        margin-top: 21px;
                        font-weight: normal;
                    }
                    p{
                        width: 100%;
                        margin: 0;
                        text-align: center;
                        font-size: 16px;
                        color: #999999;
                        margin-top: 11px;
                        line-height: 24px;
                        font-family: 'Microsoft Yahei light','Microsoft Yahei',verdana,sans-serif;
                    }
                }
            }
        }
        .footer{
            width: 100%;
            height: 230px;
            margin-top: 80px;
            text-align: center;
            background: #3b5671;
            .index-trail-title{
                padding-top: 20px;
                margin-bottom: 22px;
                font-size: 35px;
                color: #fff;
            }
            .lt-domain-btn{
                button{
                    width: 185px;
                    height: 52px;
                    font-size: 16px;
                }
            }
        }
    }
</style>
