<template>
    <div class="lt-manual">
       <div class="site-main">
           <div class="site-header">
               <h2>使用手册</h2>
               <div class="banner-search">
                   <input class="banner-searchIpt" placeholder="搜索文档" type="text">
                   <div class="docmain-ico-search"><Icon type="md-search" /></div>
                   <div class="banner-search-prefix"></div>
                   <div class="search-btn btn-basic">搜索</div>
               </div>
           </div>
       </div>
        <div class="page-common">
            <div class="cont-common">
               <div class="docmain-content">
                   <div class="docmain-content-title">后台使用</div>
                   <div v-for="(list,index) in array" :key="index">
                       <div class="docmain-content-titlegray">{{list.head}}</div>
                       <div class="clearfix" v-for="(item,indexs) in list.conter" :key="indexs">
                           <a href="javascript:void(0)" class="docmain-content-bgeach">
                               <div class="docmain-ico">
                                   <Icon :type="`${item.icon}`" size="50" color="#39c19a"/>
                               </div>
                               <div class="docmain-content-bgeach-txt">{{item.name}}</div>
                           </a>
                       </div>
                   </div>
               </div>
               <div class="docmain-content-faq">
                   <div class="docmain-content-faqblock">
                       <div class="docmain-content-title">常见问题</div>
                       <div class="docmain-content-faqlist">
                           <div class="docmain-content-faqlist-l">
                               <ul style="list-style: none">
                                   <li>
                                       <a href="javascript:void(0)">主题可自行修改吗？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)" >如何使用蓝途速搭建立电商网站？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)" >注册后没有收到激活邮件？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)" >使用蓝途速搭需要下载安装应用程序吗？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)" >如何验证网站所有权？</a>
                                   </li>
                               </ul>
                           </div>
                           <div class="docmain-content-faqlist-r">
                               <ul style="list-style: none">
                                   <li>
                                       <a href="javascript:void(0)">蓝途速搭是什么？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)">蓝途速搭稳定吗？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)">如何实现商品线下交易(货到付款)？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)">使用新主题对网站设置有什么影响？</a>
                                   </li>
                                   <li>
                                       <a href="javascript:void(0)">如何购买或升级版本？ </a>
                                   </li>
                               </ul>
                           </div>
                           <div class="docmain-content-faqbtn">
                               <a class="docmain-btn" href="javascipt:void(O)">查看所有问题</a>
                           </div>
                       </div>
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
export default {
    data(){
        return{
           array:[
               {head:'常用功能',conter:[
                       {name:'账号中心',icon:'ios-person'},
                       {name:'概览',icon:'ios-podium'},
                       {name:'订单管理',icon:'ios-list-box'},
                       {name:'商品管理',icon:'md-grid'},
                       {name:'顾客管理',icon:'md-contacts'},
                       {name:'营销中心',icon:'md-map'},
                       {name:'企业服务',icon:'ios-ribbon'},
                       {name:'主题风格',icon:'md-shirt'},
                       {name:'自定义页面',icon:'ios-paper-outline'},
                       {name:'导航管理',icon:'md-help-buoy'},
                       {name:'文章管理',icon:'md-document'},
                       {name:'轻博客',icon:'ios-albums'},
                       {name:'收银台',icon:'ios-card'},
                       {name:'图片管理',icon:'ios-image'},
                       {name:'多媒体管理',icon:'md-videocam'},
                       {name:'文件管理',icon:'md-open'},
                   ],
               },
               {head:'相关设置',conter:[
                       {name:'网站设置',icon:'ios-home'},
                       {name:'域名设置',icon:'ios-globe'},
                       {name:'收款方式',icon:'logo-yen'},
                       {name:'运费模板',icon:'ios-subway'},
                       {name:'社交授权',icon:'ios-people'},
                       {name:'网站通知',icon:'md-megaphone'},
                       {name:'管理员',icon:'ios-man'},
                   ],

               },
           ],
        }
    }
}
</script>
<style lang="scss" scoped>
    .lt-manual{
        .site-main{
            margin-top: 5px;
          .site-header{
              position: relative;
              height: 250px;
              margin: 0 20px;
              border-radius: 5px;
              /*background: linear-gradient(to top,#43b998,#22a28d);*/
              background: url(../assets/images/manual.png) no-repeat;
              background-size: cover;
              text-align: center;
              h2{
                  font-size: 42px;
                  padding-top: 90px;
                  padding-bottom: 12px;
                  color: #fff;
                  margin: 0;
                  font-weight: 400;
              }
              .banner-search{
                  position: absolute;
                  width: 710px;
                  height: 96px;
                  border-radius: 3px;
                  background: #fff;
                  top: 202px;
                  box-sizing: border-box;
                  padding: 22px 30px;
                  margin: auto;
                  left: 0;right: 0;
                  box-shadow: 0 -2px 25px 1px rgba(0,0,0,.1);
                  .banner-searchIpt{
                      border: 0;
                      padding: 0;
                      margin: 0;
                      width: 500px;
                      height: 50px;
                      line-height: 100%;
                      position: relative;
                      padding-left: 56px;
                      font-size: 16px;
                      outline: none;
                      background-color: #f4f4f4;
                      border-radius: 4px;
                      box-sizing: border-box;
                      left: -11%;
                  }
                  .docmain-ico-search{
                      position: absolute;
                      cursor: pointer;
                      left: 50px;
                      top: 23px;
                      font-size: 30px;
                      color:#999;
                  }
                  .banner-search-prefix{
                      position: relative;
                      background: #fff;
                      border: 1px solid #ddd;
                      border-radius: 5px;
                      font-size: 14px;
                      overflow: hidden;
                      -webkit-transition: all 0.3s ease;
                      -moz-transition: all 0.3s ease;
                      -o-transition: all 0.3s ease;
                      transition: all 0.3s ease;
                      max-height: 0;
                      opacity: 0;
                      z-index: 1;
                  }
                  .search-btn{
                      width: 140px;
                      height: 50px;
                      position: absolute;
                      right: 30px;
                      top: 22px;
                      cursor: pointer;
                      z-index: 2;
                      text-align: center;
                      border-radius: 5px;
                      color: #fff;
                      -webkit-box-shadow: inset 0 0 0 1px #12b687, 0 2px 8px #8be3ca;
                      box-shadow: inset 0 0 0 1px #12b687, 0 2px 8px #8be3ca;
                      font-size: 18px;
                      transition: all ease .3s;
                      background: #39c19a;
                      line-height: 50px;
                  }
                  .btn-basic:hover {
                      -webkit-box-shadow: inset 0 0 0 1px #12b687, 0 4px 8px #8be3ca, 0 12px 27px rgba(139,227,202,.5);
                      box-shadow: inset 0 0 0 1px #12b687, 0 4px 8px #8be3ca, 0 12px 27px rgba(139,227,202,.5);
                  }


              }
          }
        }
        .page-common{
            z-index: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            width: 1220px;
            margin: 0 auto;
            position: relative;
            padding: 0;
            zoom: 1;
            .cont-common{
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                overflow: hidden;
                padding-bottom: 96px;
                min-height: 600px;
                .docmain-content{
                    padding: 140px 60px ;
                    .docmain-content-title{
                        line-height: 32px;
                        font-size: 24px;
                        font-weight: 400;
                        color: #333333;
                        font-family: 'Microsoft Yahei',verdana,sans-serif;
                    }
                    .docmain-content-titlegray{
                        padding: 20px 0;
                        color: #aaaaaa;
                        font-size:18px;
                    }
                    .clearfix{
                        clear: both;
                        display: inline-block;
                        .docmain-content-bgeach{
                            float: left;
                            width: 108px;
                            height: 100px;
                            margin-right: 20px;
                            text-align: center;
                            border-radius: 3px;
                            margin-bottom: 20px;
                            border: 1px solid #efefef;
                            &:hover{
                                border: 2px solid  #39c19a;;
                            }
                            .docmain-ico{
                                margin-top: 5px;
                                margin-bottom: 5px;
                            }
                            .docmain-content-bgeach-txt{
                                line-height: 30px;
                                color: #9a9a9a;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
        .docmain-content-faq{
            position: relative;
            height: 275px;
            padding: 40px 0px;
            border-top: 1px solid #e3e3e3;
            text-align: left;
            padding-left: 60px;
            margin-top: -110px;
            .docmain-content-faqblock{
                width: 70%;
                float: left;
                .docmain-content-title{
                    line-height: 32px;
                    font-size: 24px;
                    font-weight: 400;
                    color: #333333;
                    font-family: 'Microsoft Yahei',verdana,sans-serif;
                }
                .docmain-content-faqlist{
                    padding: 10px 0px 20px;
                    color: #15a07b;
                    .docmain-content-faqlist-l{
                        display: inline-block;
                        width: 48%;
                        font-size: 16px;
                        a{
                            color: #15a07b;
                        }
                    }
                    .docmain-content-faqlist-r{
                        display: inline-block;
                        width: 48%;
                        margin-left: 3%;
                        font-size: 16px;
                        a{
                            color: #15a07b;
                        }
                    }
                    .docmain-content-faqbtn{
                        position: relative;
                        clear: left;
                        top: 10px;
                        .docmain-btn{
                            display: inline-block;
                            background: #39c19a;
                            padding: 12px 45px;
                            cursor: pointer;
                            font-size: 18px;
                            box-shadow: inset 0 0 0 1px #12b687, 0 2px 8px #8be3ca;
                            border-radius: 4px;
                            transition: all ease .3s;
                            text-decoration: none;
                            color:#fff;
                            &:hover {
                                -webkit-box-shadow: inset 0 0 0 1px #12b687, 0 4px 8px #8be3ca, 0 12px 27px rgba(139,227,202,.5);
                                box-shadow: inset 0 0 0 1px #12b687, 0 4px 8px #8be3ca, 0 12px 27px rgba(139,227,202,.5);
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
            background: -webkit-gradient(linear,left top,left bottom,from(#22a28d),to(#43b998));
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

