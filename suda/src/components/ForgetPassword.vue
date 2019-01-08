<template>
    <div class="lt-register">
        <Card class="card" :bordered="false">
            <h1 slot="title">找回密码</h1>
            <Form ref="form" :model="model" :rules="rules">
                <FormItem prop="phone">
                    <Input size="large" type="text" v-model="model.phone" placeholder="手机号码">
                        <Icon type="md-phone-portrait" slot="prepend"/>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input size="large" type="password" v-model="model.password" placeholder="重置密码">
                        <Icon type="ios-lock" slot="prepend"/>
                    </Input>
                </FormItem>
                <FormItem prop="password2">
                    <Input size="large" type="password" v-model="model.password2" placeholder="确认密码">
                        <Icon type="ios-lock-outline" slot="prepend"/>
                    </Input>
                </FormItem>
                <FormItem prop="imgCode" class="image-code">
                    <Input size="large" v-model="model.imgCode" placeholder="图片验证码">
                        <Icon type="ios-image" slot="prepend"/>
                        <div slot="append">
                            <img @click="reloadImageCode()" :src="imgUrl" height="100%">
                        </div>
                    </Input>
                </FormItem>
                <FormItem prop="verifyCode" class="verify-code">
                    <Input size="large" v-model="model.verifyCode" placeholder="手机验证码">
                        <Icon type="ios-paper-plane" slot="prepend"/>
                        <Button slot="append" :loading="finishSendVerifyCode" @click="onSendMsgCode">
                            <span v-if="finishSendVerifyCode">{{verifyText}}</span>
                            <span v-else>发送验证码</span>
                        </Button>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button size="large" type="success" @click="handleSubmit()">重置密码</Button>
                    <Button size="large" @click="$router.push('/login')">返回登录</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script>
export default {
    created() {
        this.reloadImageCode();
    },
    data () {
        return {
            lastSendTime: 0, 
            verifyText: '',
            finishSendVerifyCode: false,
            imgUrl: '',
            model: {
                phone: '',
                password: '',
                password2: '',
                imgCode: '',
                verifyCode: '',
                imgKey: '',
            },
            rules: {
                phone: [
                    { required: true, message: '手机号码格式不正确', trigger: 'blur' },
                    { validator: (rule, value, callback)=> {
                        if (/^1[34578]\d{9}$/.test(value)) {
                            callback();
                        } else {
                            callback(new Error('手机号码格式不正确'));
                        }
                    }, trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '登录密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '登录密码长度至少6位', trigger: 'blur' },
                ],
                password2: [
                    { required: true, message: '确认密码不能为空', trigger: 'blur' },
                    { validator: (rule, value, callback) => {
                        if (value !== this.model.password) {
                            callback(new Error('密码两次输入不匹配'));
                        } else {
                            callback();
                        }
                    }, trigger: 'blur'},
                ],
                imgCode: [],
                verifyCode: [],
            }
        }
    },
    methods: {
        checkForm() {
            return new Promise((resolve)=>{
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            })
        },
        checkTime() {
            const seconds = parseInt((new Date().getTime()-this.lastSendTime)/1000);
            if (seconds >= 60) {
                this.reloadImageCode();
                this.finishSendVerifyCode = false;
            } else {
                this.leftTime = 60-seconds;
                this.verifyText = this.leftTime + "秒后可重发";
                setTimeout(()=>{
                    this.checkTime();
                }, 100);
            }
        },
        async onSendMsgCode() {
            this.rules.verifyCode = [];
            this.rules.imgCode = [{ required: true, message: '图片验证码不能为空', trigger: 'blur'}];
            const valid = await this.checkForm();
            if (!valid) {
                return;
            }
            this.finishSendVerifyCode = true;
            this.verifyText = "发送中...";
            const resp = await api.request('/api/ltshop/bapi/send_verify_code', Object.assign({resetPassword:true},this.model));
            if (resp.status === 0) {
                this.lastSendTime = new Date().getTime();
                this.$Modal.success( {title:'发送成功', content:"验证码获取成功,请查看您的手机!"});
                this.checkTime();
            } else {
                this.finishSendVerifyCode = false;
                this.$Modal.error( {title:'发送失败', content:resp.message});
                this.reloadImageCode();
            }
        },
        reloadImageCode() {
            this.model.imgKey = new Date().getTime() + "";
            this.model.imgCode = "";
            this.imgUrl = "/api/ltshop/bapi/image_code.jpg?key=" + this.model.imgKey;
        },
        handleReset() {
            this.$refs.form.resetFields();
        },
        async handleSubmit() {
            this.rules.imgCode = [];
            this.rules.verifyCode = [
                { required: true, message: '手机验证码不能为空', trigger: 'blur'}
            ];
            const valid = await this.checkForm();
            if (!valid) {
                return;
            }
            const resp = await api.request('/api/ltshop/bapi/reset_password', this.model);
            if (resp.status === 0) {
                this.$Modal.success( {title:'密码重置成功', content:'请谨记密码，不要告诉陌生人!', 
                        onOk: ()=>{
                            this.$router.push('/login');
                        }
                    });
            } else {
                this.$Modal.error( {title:'密码重置失败', content:resp.message});
                this.reloadImageCode();
            }
        }
    }

}
</script>
<style lang="scss" scoped>
    .card {
        width: 600px;
        margin: auto;
        margin-top: 30px;
        h1 {
            text-align: center;
        }
    }
    .image-code {
        :global(.ivu-input-group-append) {
            padding: 0;
            border: 0;
        }
        img {
            height: 34px;
            cursor: pointer;
        }
    }
</style>
