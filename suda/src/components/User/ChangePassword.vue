<template>
    <div class="content">
        <Form ref="form" :model="model" :rules="rules" label-position="top">
            <FormItem label="旧密码" prop="oldPassword">
                <Input v-model="model.oldPassword" type="password" placeholder="请输入旧密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem label="新密码" prop="newPassword">
                <Input v-model="model.newPassword" type="password" placeholder="请输入新密码">
                    <Icon type="ios-lock" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem label="确认密码" prop="newPassword2">
                <Input v-model="model.newPassword2" type="password" placeholder="请输入确认密码">
                    <Icon type="ios-lock" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button @click="onOk" type="primary">确认</Button>
                <Button @click="onReset">重置表单</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                oldPassword: '',
                newPassword: '',
                newPassword2: '',
            },
            rules: {
                oldPassword: {required:true, message: '旧密码不能为空', trigger: 'blur'},
                newPassword: {required:true, message: '新密码不能为空', trigger: 'blur'},
                newPassword2:[{required:true, message: '确认密码不能为空', trigger: 'blur'},{
                    validator: (rule, value, callback) => {
                        if (value !== this.model.newPassword) {
                            callback(new Error('新密码两次输入不匹配'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }],
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
        async onOk() {
            const flag = await this.checkForm();
            if (!flag) {
                return;
            }
            const resp = await api.request('/api/ltshop/bapi/change_password', this.model);
            if (resp.status === 0) {
                this.$Modal.success({
                    title:"密码修改成功", 
                    content:'请重新登录',
                    onOk:()=>{
                        utils.logout();
                    }
                });
            } else {
                this.$Modal.error({
                    title: '密码修改失败',
                    content: resp.message
                });
            }
        },
        onReset() {
            this.$refs.form.resetFields();
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 800px;
    margin: auto;
}
</style>


