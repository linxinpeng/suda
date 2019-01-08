<template>
    <div class="lt-temp-app-api">
        <div class="t-header">
            <div class="t-title">
                {{title}}
            </div>
            <div class="t-input">
                <div class="t-input-inner">
                    <Icon type="ios-search" />
                    <input placeholder="搜索文档"/>
                    <Button>搜索</Button>
                </div>
            </div>
        </div>
        <div class="t-center">
             <Breadcrumb separator=">">
                <BreadcrumbItem v-for="(item,index) in loca" :key="index" :to="item.href">{{item.title}}</BreadcrumbItem>
            </Breadcrumb>
            <div class="c-left">
                <h3></h3>
                <ul class="first-ul">
                    <li v-for="(item,index) in leftContent" :key="index">
                        <span @click="onClick(index)" :style="active==index?'background:#15a07b;color:#fff':''">{{item.title}}<Icon :type="active == index ?'ios-arrow-down':''" /></span>
                       <transition name="fade">
                            <ul v-if="active == index" class="sub-ul">
                                <li v-for="(val,key) in item.children" :key="key" @click="onSubClick(key,val)" :style="subActive==key?'border-left:2px solid #39c19a;font-weight:bold':''">{{val.title}}</li>
                                <li>&nbsp;</li>
                            </ul>
                       </transition>
                    </li>
                </ul>
            </div>
            <div class="c-right">
                <lt-help :type="current"></lt-help>
            </div>
            <div style="clear:both"></div>
        </div>
    </div>    
</template>
<script>
import LtHelp from './Help.vue'
export default {
    props:{
        leftContent:Array,
        loca:{
            type:Array,
            default:[
                { href:'/' ,title:'Home' },
                { href:'/appdev', title:'应用开发' }
            ]
        },
        title:{
            type:String,
            default:'应用开发'
        }
    },
    components:{LtHelp},
    data(){
        return{
            active: 0,
            current: 11,
            subActive: 0
        }
    },
    methods:{
        onClick(index){
            this.active = index;
            this.subActive = 0;
            this.current = 11;
        },
        onSubClick(index,val){
            this.subActive = index;
            this.current = val.index;
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
    .t-header{
        width: calc(100% - 40px);
        margin: 10px auto;
        height: 250px;
        background: url('../assets/images/manual.png') no-repeat;
        background-size: cover;
        border-radius: 5px;
        position: relative;
        .t-title{
            width: 100%;
            position: absolute;
            top: 26%;
            font-size: 30px;
            text-align: center;
            color: #fff;
        }
        .t-input{
            width: 710px;
            height: 100px;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate3d(-355px,-50px,0);
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            .t-input-inner{
                width: calc( 100% - 50px);
                height: 50px;
                margin: 25px auto;
                // border:1px solid #ccc;
                position: relative;
                input{
                    width: 500px;
                    height: 100%;
                    border: none;
                    background: #f4f4f4;
                    padding-left: 50px;
                    font-size: 18px;
                    border-radius: 3px;
                    &:focus{
                        outline: none;
                    }
                }
                i{
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    font-size: 30px;
                    
                }
                button{
                    width: 140px;
                    height: 50px;
                    margin-left: 10px;
                    margin-bottom: 7px;
                    box-shadow: inset 0 0 0 1px #12b687, 0 2px 8px #8be3ca;
                    background: #39c19a;
                    color: #fff;
                    font-size: 18px;
                }
            }
        }
    }
    .t-center{
        width: 1170px;
        margin: 100px auto;
        .ivu-breadcrumb{
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 50px;
        }
        .c-left{
            width: 20%;
            display: inline-block;
            border-right: 1px solid #ccc;
            .first-ul{
                li{
                    list-style: none;
                    width: 100%;
                    cursor: pointer;
                    span{
                        display: inline-block;
                        width: 100%;
                        padding: 7px 18px;
                        font-size: 14px;
                        i{
                            font-size: 24px;
                            float: right;
                        }
                    }
                    .sub-ul{
                        margin-left: 18px;
                        li{
                            padding-left: 30px;
                            padding-top: 6px;
                            padding-bottom: 6px;
                            font-size: 14px;
                        }
                        border-left: 1px solid #ccc;
                    }
                }

            }
        }
        .c-right{
            width: 76%;
            float: right;
        }
    }
</style>
