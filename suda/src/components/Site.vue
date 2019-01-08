<template>
    <div class="lt-site">
       <div class="site-main">
           <div class="site-header">
               <h2>化难为易，一步搞定</h2>
               <p>无需开发、设计与运维，更踏实地运营一个网站</p>
           </div>
           <div class="strongpoint">
              <ul>
               <li v-for="(item,index) in array" :key="index" :class="`${item.style}`">
                   <div :class="`img ${item.class}`"></div>
                   <div class="lides-wrap">
                       <h2>{{item.h2}}</h2>
                       <p>{{item.p}}</p>
                   </div>
               </li>
                  <a class="btn-basic" href="javascript:void(0)">
                      <Button type="success">  0 元开启品牌征途</Button>
                  </a>
              </ul>
           </div>
       </div>
        <div class="mobile-tag-content">
            <div class="vendorshow common-sec" v-for="(list,index) in content" :key="index">
                <h2>{{list.title}}</h2>
                <ul>
                    <li class="theme" v-for="(item,indexs) in list.array" :key="indexs">
                        <div class="i"><Icon size="70" :type="`${item.icon}`" /></div>
                        <div class="lides-wrap">
                            <h3>{{item.h3}}</h3>
                            <p>{{item.center}}</p>
                        </div>
                    </li>
                </ul>
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
            array:[
                {style:' ',class:'img-1',h2:'让你的品牌闪耀穹顶',p:'无需开发与设计，60秒上线高品质跨屏站点，PC、小程序、平板、手机、微站一次拥有，技术从未如此省心简单'},
                {style:'img-right',class:'img-2',h2:'让顾客享受每时每刻的愉快体验',p:'全球数据自动化运维，让你的顾客在任何时间地点都能享受愉快的购物体验，有关服务器、带宽、数据节点等的一切都不用投入精力'},
                {style:' ',class:'img-3',h2:'个性化运营你的业务',p:'收放自如的业务体系，覆盖各行业的门户与商城方案；多样营销功能与服务，轻松打造个性玩法，聚合全网热点渠道，快速引入精准流量'},
            ],
            content:[
                {title:'品牌展示',array:[{icon:'ios-bookmarks',h3:'灵活的主题编辑',center:'使用模板、拖拽、代码编辑或风格切换，快速定位品牌特色'},
                        {icon:'ios-contract',h3:'强大的品牌轻博客',center:'文字、图片、视频、音频聚合编辑，用合适的方式撰写品牌故事'},
                        {icon:'ios-crop',h3:'完善的内容管理',center:'文章创作、图片分享、视频发布、营销页制作等轻松实现，让顾客实时了解品牌动态'},
                        {icon:'md-laptop',h3:'视频与直播',center:'高性能视频传输与直播支持，访客实时互动，每时每刻为品牌刷存在'},]},
                {title:'电商系统',array:[{icon:'ios-nutrition',h3:'电商基础功能',center:'媲美 BAT 的平台级技术积累'},
                        {icon:'ios-card',h3:'全球聚合支付',center:'集成支付宝、微信、百度钱包、银联、Paypal 等11种全球主流收款方式，不错过任何一单生意'},
                        {icon:'ios-globe-outline',h3:'全球地址库',center:'多国语言与地址库支持，敞开门做全球生意'},
                        {icon:'md-podium',h3:'数据分析',center:'多维度数据分析引擎，实时把控网站流量来源，基于数据灵活调整运营策略'},
                        {icon:'md-volume-up',h3:'通知',center:'微信、短信、邮件通知模板灵活编辑，让顾客感受细致关怀'},
                        {icon:'md-cloud-outline',h3:'社交账号同步',center:'微信、微博、QQ、豆瓣、知乎等主流社交帐号直连，10种注册方式不错过任何圈子的客户'},
                        {icon:'ios-contacts',h3:'多人协作',center:'多名管理员同步运营与管理，按角色分配权限，配合操作日志让团队协作高效无忧'},
                        {icon:'ios-leaf',h3:'网站 SEO',center:'全方位的 SEO 优化服务，低成本获取百度等搜索引擎优质流量'},
                    ]}
            ],

        }
    }
}
</script>
<style lang="scss" scoped>
    .lt-site{
        .ivu-btn-success{
            color: #f2f2f2;
            background-color: #3b5671 !important;
            border-color: #3b5671 !important;
        }
        .ivu-btn-warning{
            background-color: #83a25c !important;
            border-color: #83a25c !important;
        }
        .site-main{
            margin-top: 5px;
          .site-header{
              height: 330px;
              margin: 0 20px;
              border-radius: 5px;
              background: url(../assets/images/site.png) no-repeat;
              background-size: cover;
              text-align: center;
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
                  color: #fff;
              }
          }
          .strongpoint{
              width: 1000px;
              padding-top: 84px;
              margin: 0 auto 154px;
              ul{
                  list-style: none;
                  padding: 0;
                  li{
                      width: 100%;
                      height: 374px;
                      position: relative;
                      .img{
                          display: inline-block;
                          vertical-align: top;
                          width: 374px;
                          height: 374px;
                          background-size: cover;
                      }
                      .img-1{
                          background-image: url(../assets/images/img1.png);

                      }
                      .img-3{
                          background-image: url(../assets/images/img3.png);
                      }
                      .lides-wrap{
                          display: inline-block;
                          width: 540px;
                          margin-left: 76px;
                          h2{
                              padding-top: 123px;
                              padding-bottom: 13px;
                          }
                          p{
                              color: #a6a6a6;
                              font-size: 18px;
                              line-height: 32px;
                              font-family: 'Microsoft Yahei Light',Lantinghei,verdana,sans-serif;
                          }
                      }
                  }
                  .img-right{
                      .img {
                          position: absolute;
                          right: 0;
                      }
                      .img-2 {
                          background-image: url(../assets/images/img2.png);
                      }
                      .lides-wrap {
                          width: 545px;
                          margin-left: 4px;
                      }
                  }
                  a{
                      display: block;
                      line-height: 50px;
                      border-radius: 4px;
                      margin: 38px auto 0;
                      text-align: center;
                      .ivu-btn-success{
                          font-size: 18px;
                          width: 216px;
                          height: 50px;
                      }
                  }
              }
          }
        }
        .mobile-tag-content{
            .vendorshow{
                width: 1200px;
                margin: 0 auto 77px;
                h2{
                    color: #404040;
                    font-size: 36px;
                    text-align: center;
                    position: relative;
                    font-weight: 400;
                    margin: 0;
                }
                h2:before {
                    left: 1px;
                }
                h2:before,h2:after {
                    content: '';
                    position: absolute;
                    width: 520px;
                    height: 1px;
                    background: #e1dfdf;
                    top: 50%;
                }
                ul{
                    padding-left: 72px;
                    padding-top: 73px;
                    li{
                        display: inline-block;
                        width: 450px;
                        margin-bottom: 91px;
                        margin-right: 111px;
                        padding-left: 99px;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        position: relative;
                        vertical-align: top;
                        .i{
                            vertical-align: top;
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                        .lides-wrap{
                            display: inline-block;
                            min-height: 70px;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            h3{
                                font-size: 20px;
                                color: #404040;
                                position: relative;
                                font-weight: 400;
                            }
                            p{
                                font-size: 15px;
                                color: #a6a6a6;
                                width: 340px;
                                margin-top: 5px;
                                line-height: 23px;
                                font-family: 'Microsoft Yahei Light',Lantinghei,verdana,sans-serif;
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
</style>

