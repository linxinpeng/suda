<template>
    <div class="lt-login">
        <div class="l-inner">
            <Form ref="form" :model="model" :rules="rules" inline>
                <h3><img src="../assets/images/logo.png" /></h3>
                <div class="username">
                    <FormItem prop="username">
                        <Icon type="ios-person-outline" />
                        <input type="text" v-model="model.username" placeholder="手机号" />
                    </FormItem>
                </div>
                <div class="password">
                    <FormItem prop="password">
                        <Icon type="ios-lock-outline"></Icon>
                        <input type="password" v-model="model.password" placeholder="密码" />
                    </FormItem>
                </div>
                <div class="forget">
                    忘记密码？<router-link to="/forget-password">点击</router-link>找回密码
                </div>
                <div class="btn-login">
                    <FormItem>
                        <Button type="success" @click="handleSubmit()">登录</Button>
                    </FormItem>
                </div>
                <div class="created">
                    没有账号,<router-link to="/register">点击</router-link>创建
                </div>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
     data () {
            return {
                model: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '手机号不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        api.request('/api/ltshop/bapi/account_login', this.model).then(resp=>{
                            if (resp.status === 0) {
                                let u = '/';
                                if (this.$route.query.redirect) {
                                    u = this.$route.query.redirect;
                                }
                                this.$router.push(u);
                            } else {
                                this.$Message.error('登录失败: ' + resp.message);
                            }
                        })
                        
                    } 
                })
            }
        }

}
</script>
<style lang="scss" scoped>
    .lt-login{
        width: 100%;
        min-height: 600px;
        // background: #f9f9f7;
        padding-top: 100px;
        padding-bottom: 100px;
        .l-inner{
           width: 450px;
           height: 550px;
           background: #fff;
           margin: 0 auto;
           box-shadow: 0 0 25px #ccc;
           border-radius: 5px;
           h3{
               width: 100%;
               text-align: center;
               font-size: 30px;
               line-height: 56px;
               padding-top: 30px;
            //    border-bottom: 1px solid #ccc;
           }
           .username,.password,.btn-login{
               position: relative;
               width: 80%;
               margin: 30px auto 0px;
               i{
                   position: absolute;
                   top: 4px;
                   left: 7px;
                   z-index: 100;
                   font-size: 20px
               }
               .ivu-form-item{
                   width: 100%;
                    input{
                        border: none;
                        border-bottom: 1px solid #ccc;
                        border-radius: 5px;
                        width: 100%;
                        padding-left: 35px;
                        &:focus{
                            outline: none;
                        }
                    }
                    button{
                        width: 100%;
                        height: 40px;
                        font-size: 18px;
                    }
               }
           }
           .forget{
               width: 80%;
               margin: 30px auto;
           }
           .created{
               width: 80%;
               margin: 0 auto;
               text-align: center;
               font-size: 16px;
           }
        }
    }
</style>
