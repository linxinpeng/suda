<template>
    <div class="lt-about">
        <div class="lt-sale-banner">
            <h3>关于我们</h3>
        </div>
        <div class="about-editor">
            <div class="conter"></div>
            <div style="position: relative">
                <p class="fl">
                    厦门蓝途世纪网络科技有限公司<br><br>
                    <span style="font-size: 12px; color: #666666;">人事：13328782906</span><br>
                    <span style="font-size: 12px; color: #666666;">邮箱：hr@lantushiji.com</span>
                </p>
                <p class="fr">
                    厦门蓝途世纪网络科技有限公司创立于2018年  位于福建省厦门市思明区软件园二期望海路12号之一601A<br>
                    厦门蓝途世纪网络科技有限公司产品及解决方案包括:<br>
                    ①智慧城市 &nbsp;②校园云服务 &nbsp;③武术平台 &nbsp;④跨境电商<br>
                    与全国许多家用户建立了长期稳定的服务,供应和合作关系，赢得用户的长久信任&nbsp;<br>
                    我们的理念:<br>
                    ①深刻探究，准确把握,从而充分满足用户 个性化 多样化 国际化 的产品需求<br>
                    ②以市场需求为导向，精诚合作 互利双赢 共同发展<br>
                </p>
                </div>
            </div>
        <div class="lt-sale-banner2">
        </div>
    </div>
</template>
<script>
import data from '../data/data'
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .lt-about{
        .ivu-btn-success{
            color: #f2f2f2;
            background-color: #3b5671 !important;
            border-color: #3b5671 !important;
        }
        .ivu-btn-warning{
            background-color: #83a25c !important;
            border-color: #83a25c !important;
        }
        .lt-sale-banner{
            width: calc(100% - 40px);
            margin: 20px auto;
            height: 300px;
            background: url('../assets/images/domain22.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 5px;
            text-align: center;
            color: #fff;
            h3{
                padding-top: 90px;
                font-weight:400; 
                font-size: 50px;
            }
            p{
                font-size: 24px;
            }
        }
        .lt-sale-banner2{
            width: calc(100% - 40px);
            margin: 20px auto;
            height: 300px;
            background: url('../assets/images/sun.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 5px;
            text-align: center;
            color: #fff;
            h3{
                padding-top: 90px;
                font-weight:400;
                font-size: 50px;
            }
            p{
                font-size: 24px;
            }
        }
        .about-editor{
            width: 1170px;
            min-height: 400px;
            margin: 0 auto;
            line-height: 24px;
            .conter{
                margin-top: 30px;
                margin-bottom: 40px;
                width: 100%;
                height: 50px;
                border-bottom: 1px solid #dedede;
            }
            .fl{
                position: absolute;
                left: 0px;
                top: 0px;
                font-size: 28px;
                color: #000000;
            }
            .fr{
                position: absolute;
                right: 0px;
                top: 0px;
                color: #666666;
                line-height: 32px;
                font-size: 14px;
            }
        }
    }

</style>
