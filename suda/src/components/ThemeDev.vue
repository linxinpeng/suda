<template>
    <div class="lt-theme-dev">
        <div class="t-header">
            <div class="t-title">主题开发</div>
            <div class="t-input">
                <div class="t-input-inner">
                    <input type="text" placeholder="搜索文档"/>
                    <Button type="success" >搜索</Button>
                </div>
            </div>
        </div>
        <div class="t-center">
            <div class="c-bread">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/manual">文档</BreadcrumbItem>
                    <BreadcrumbItem>主题开发</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="c-center">
                <div class="c-left">
                    <h3>主题开发</h3>
                    <ul class="f-ul">
                        <li class="f-li" v-for="(item,index) in side.side || [] " :key="index" @click="onChange(index,item)">
                            <span :style="active==index? 'background:#15a07b;color: #fff;':'background:#fff;color: #777;'">{{item.title}}<Icon :type="active==index?'ios-arrow-down':''" /></span>
                            <transition name="fade" >
                                <ul class="s-ul" v-if="active == index">
                                    <li v-for="(val,key) in item.children" :key="key" @click.stop="onSubChange(key,val.index)">
                                        <span :style=" subActive == key?'border-left: 2px solid #15a07b;font-weight: bold':''">{{val.title}}</span>
                                    </li>
                                </ul>
                            </transition>
                        </li>
                    </ul>
                </div>
                <div class="c-right">
                    <lt-help :type="type"></lt-help>
                </div>
                <div style="clear:both"></div>
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
import data from '../data/data.js';
import LtHelp from './Help.vue'
export default {
    data(){
        return{
            side: data.themeDev,
            active: 0,
            subActive: 0,
            type:11
        }
    },
    components:{
        LtHelp
    },
    methods:{
        onChange(index,item){
            this.active = index;
            this.subActive = 0;
            this.type = item.children[0].index;
        },
        onSubChange(index,item){
            this.subActive = index;
            this.type = item;
        }
    }
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: rotateX(90deg)
}
    .lt-theme-dev{
        .t-header{
            width: calc(100% - 40px);
            margin: 5px 20px;
            height: 250px;
            position: relative;
            background: url(../assets/images/manual.png) no-repeat;
              background-size: cover;
            border-radius: 5px;
            .t-title{
                width: 100%;
                text-align: center;
                position: absolute;
                top: 90px;
                color: #fff;
                font-size: 42px;
                // font-weight: bold;
            }
            .t-input{
                width: 710px;
                height: 96px;
                border-radius: 5px;
                position: absolute;
                top: 100%;
                left: 50%;
                background: #fff;
                box-shadow: 0 -2px 25px 1px rgba(0,0,0,.1);
                transform: translate3d(-355px,-48px,0);
                padding: 22px 30px;
                .t-input-inner{
                    input{
                        width: 500px;
                        height: 50px;
                        border: none;
                        background: #f4f4f4;
                        padding: 2px 10px;
                        &:focus{
                            outline: none;
                        }
                        &::-webkit-input-placeholder,&::-moz-placeholder,&::-ms-input-placeholder{
                            font-size: 30px;
                            color: #ccc;
                        }
                    }
                    button{
                        width: 140px;
                        height: 50px;
                        font-size: 18px;
                        background: linear-gradient(to top,#43b998,#22a28d);
                        margin-left: 6px;
                        border: none;
                    }
                }
            }
        }
        .t-center{
            width: 1170px;
            margin: 100px auto;
            .c-bread{
                border-bottom: 1px solid #eee;
                padding-bottom: 20px;
            }
            .c-center{
                margin-top: 50px;
                .c-left{
                    float: left;
                    width: 20%;
                    border-right: 1px solid #ccc;
                    h3{
                        font-size: 18px;
                        margin-left: 10px;
                        font-weight: 400;
                        color: #777;
                        margin-bottom: 10px;
                    }
                    .f-ul{
                        li{
                            list-style: none;
                        }
                        .f-li{
                            width: 100%;
                            margin: 0 auto;
                            font-size: 14px;
                            cursor: pointer;
                            span{
                                display: inline-block;
                                width: 100%;
                                padding: 7px 10px;
                                i{
                                    float: right;
                                    font-size: 21px;
                                }
                            }
                            .s-ul{
                                padding: 6px 6px 6px 30px;
                                li{
                                    cursor: pointer;
                                    span{
                                        line-height: 24px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }
                }
                .c-right{
                    width: 76%;
                    float: right;
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
