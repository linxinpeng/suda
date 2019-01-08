<template>
    <div class="lt-sale">
        <div class="lt-sale-banner">
            <h3>营销推广</h3>
            <p>更优惠的价格，更优质的服务</p>
        </div>
        <div class="lt-sale-desc">
            <ul>
                <li v-for="(item,index) in descData" :key="index">
                    <img :src="item.logo" />
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                </li>
            </ul>
        </div>
        <div class="lt-sale-more">
            <ul>
                <li v-for="(item,index) in moreData" :key="index">
                    <img :src="item.logo" />
                    <div class="more-content">
                        <h3>{{item.title}}<span class="s1" v-if="index==0">推荐</span></h3>
                        <div class="tags">
                            <span v-for="(val,key) in item.tags" :key="key">
                                {{val}}
                            </span>
                        </div>
                        <p>{{item.desc}}</p>
                        <Button type="success">查看详情</Button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import data from '../data/data'
export default {
    data(){
        return{
            descData:data.sale.descData || [],
            moreData:data.sale.moreData || []
        }
    }
}
</script>
<style lang="scss" scoped>
    .lt-sale{
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
            width: 100%;
            margin: 5px auto;
            background: url('../assets/images/manual.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 340px;
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
        .lt-sale-desc{
            width: 100%;
            // margin-top: 50px;
            padding: 60px 0px;
            background: #f9f9f7;
            ul{
                width: 1170px;
                margin: 0 auto;
                li{
                    list-style: none;
                    display: inline-block;
                    width: 260px;
                    height: 260px;
                    background: #fff;
                    margin: 16.25px;
                    text-align: center;
                    padding: 5px;
                    border-radius: 50%;
                    // transition: all .3s ease;
                    cursor: pointer;
                    &:hover{
                        animation: myRotate .7s ease;
                    }
                    img{
                        width: 120px;
                        height: 120px;
                        
                    }
                    h3{
                        font-size: 20px;
                    }
                    p{
                        font-size: 15px;
                    }
                }
            }
        }
        .lt-sale-more{
            ul{
                width: 1170px;
                margin: 30px auto;
                li{
                    position: relative;
                    display: inline-block;
                    width: 48%;
                    margin: 1%;
                    border: 1px solid #e6e6e6;
                    border-radius: 6px;
                    height: 655px;
                    // text-align: center;
                    img{
                        width: 340px;
                        height: 250px;
                        position: absolute;
                        top: 30px;
                        left: 50%;
                        margin-left: -170px;
                    }
                    .more-content{
                        position: absolute;
                        top: 350px;
                        left: 50%;
                        width: 80%;
                        margin-left: -40%;
                        h3{
                            font-size: 48px;
                            color: #404040;
                            text-align: left;
                            position: relative;
                            .s1{
                                display: inline-block;
                                color: #fff;
                                width: 64px;
                                height: 27px;
                                line-height: 27px;
                                text-align: center;
                                background: #e55841;
                                border-radius: 20px;
                                border: 1px solid #e55841;
                                position: absolute;
                                top: 0;
                                right: 170px;
                            }
                        }
                        span{
                            display: inline-block;
                            height: 22px;
                            line-height: 22px;
                            padding: 0 8px;
                            margin-right: 8px;
                            border: 1px solid #83a25c;
                            border-radius: 4px;
                            color: #83a25c;
                            font-size: 14px;
                            /*background-color: #83a25c;*/
                            text-align: center;
                            margin-top: 8px;
                        }
                        p{
                            margin: 10px auto;
                            font-size: 18px;
                            color: #8c8c8c;
                        }
                        button{
                            width: 175px;
                            height: 50px;
                            margin-top: 20px;
                            font-size: 20px;
                        }
                    }
                }
                li:last-child{
                    width: 98%;
                    margin: 0 1%;
                    height: 320px;
                    img{
                        position: absolute;
                        top: 50%;
                        right: 30px;
                        margin-top: -125px;
                        left: auto;
                    }
                    .more-content{
                        position: absolute;
                        top: 30px;
                        left: 30px;
                        margin-left: 0px;
                        width: 55%;
                    }
                }
            }
        }
    }
    @keyframes myRotate{
        0% { transform: scale(1)};
        25% {transform: scale(1.1)};
        50% { transform: scale(1)};
        75% {transform: scale(1.1)};
        100% {transform: scale(1)};
    }
</style>
