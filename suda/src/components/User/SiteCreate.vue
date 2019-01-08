<template>
    <div>
        <Steps :current="current">
            <Step style="cursor:pointer" v-for="(s,index) in steps" :title="s.title" :content="s.content" :key="s.title" @click.native="toStep(index)"></Step>
        </Steps>
        <Divider>{{steps[current].title}}</Divider>
        <div class="body">
            <Form ref="form" :model="model" :rules="rules" label-position="top">
                
                <div class="body1" v-if="current===0">
                    <FormItem label="网站名称" prop="name">
                        <Input v-model="model.name" placeholder="请输入网站名称"></Input>
                    </FormItem>
                    <FormItem label="网站域名" prop="id">
                        <Input v-model="model.id" placeholder="请输入网站域名">
                            <span slot="append">.lantusale.com</span>
                        </Input>
                    </FormItem>
                    <FormItem label="网站类型" prop="apiType">
                        <RadioGroup v-model="model.apiType">
                            <Radio label="EASY">企业网站</Radio>
                            <Radio label="SHOP">电商网站</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem>
                        <Button @click="onStep1" type="primary" long>填好了，下一步</Button>
                    </FormItem>
                </div>
                <div v-else-if="current===1">
                    <Row :gutter="16">
                        <Col span="6" v-for="t in templates" :key="t.id">
                            <Card :class="{card:true, active:t.id===model.templateId}" :bordered="false" @click.native="model.templateId=t.id">
                                <p slot="title">{{t.name}}</p>
                                <a href="javascript:void(0)" slot="extra">
                                    <Icon class="select-icon" type="ios-checkmark-circle-outline" />
                                </a>
                                <div v-if="t.images && t.images[0]" class="card-image" :style="`
                                        background-image:url(/ltimg/0x0/${t.images[0]}.jpg);`"></div>
                                <div v-else class="card-no-image">
                                    暂无图片
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <FormItem>
                        <Button @click="onStep2" type="primary" long>填好了，创建网站</Button>
                    </FormItem>
                </div>
                <div v-else-if="current===2">
                    <Tooltip :content="`已完成${createPercent}%`" style="width: 100%">
                        <Progress :percent="createPercent" :success-percent="createPercent" :stroke-width="25" />
                    </Tooltip>
                    <Alert style="margin-top: 20px;text-align: center;">{{createStatus}}</Alert>
                </div>
                <div v-else>
                    <Alert type="success" show-icon>
                        网站创建成功
                        <span slot="desc">3秒后将自动跳转到<router-link to="/user">用户中心</router-link></span>
                    </Alert>
                </div>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            
        },
        data() {
            return {
                current: 0,
                createPercent: 10,
                templates: [],
                createStatus: '1/1 正在创建中...',
                steps: [
                    {title:'基础信息',content:'填写网站名称,域名,类型等'},
                    {title:'选择主题',content:'以选中的网站主题进行网站初始化'},
                    {title:'生成网站',content:'网站生成过程'},
                    {title:'创建完成'}
                ],
                model: {
                    id: '',
                    name: '',
                    apiType: 'EASY',
                    templateId: '',
                },
                rules: {
                    name: [
                        { required: true, message: '网站名称不能为空', trigger: 'blur' }
                    ],
                    id: [
                        { required: true, message: '网站域名不能为空', trigger: 'blur' }
                    ],
                    apiType: [
                        { required: true, message: '网站类型不能为空', trigger: 'blur' }
                    ],
                }
            }
        }, 
        methods: {
            async reloadTemplates() {
                const resp = await api.request('/api/ltshop/bapi/client_site/templates?apiType=' + this.model.apiType);
                if (resp.status === 0) {
                    this.templates = resp.list || [];
                }
            },
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
            toStep(index) {
                if (this.current === 3) {
                    return;
                }
                if (index < this.current) {
                    this.current = index;
                }
            },
            async onStep1() {
                const valid = await this.checkForm();
                if (!valid) {
                    return;
                }
                const resp = await api.request('/api/ltshop/bapi/client_site/create_check', this.model);
                if (resp.status !== 0) {
                    this.$Modal.error({
                            title: "操作失败",
                            content: resp.message
                        });
                } else {
                    await this.reloadTemplates();
                    this.current = 1;
                }
            },
            async onStep2() {
                if (!this.model.templateId) {
                    this.$Modal.error({
                        title: '创建失败',
                        content: '请选择一个模板主题'
                    })
                    return;
                }
                this.current = 2;
                this.createPercent = 10;
                this.createStatus = "1/3 初始化数据库";
                
                api.request('/api/ltshop/bapi/client_site/create', this.model).then(resp=>{
                    if (resp.status === 0) {
                        this.createPercent = 30;
                        this.createStatus = "2/3 正在创建站点主题(需要1-5分钟)";
                        setTimeout(()=>{
                            this.createPercent = 90;
                            this.createStatus = "3/3 正在处理域名";
                            setTimeout(()=>{
                                this.current = 3;
                                this.createPercent = 100;
                                setTimeout(()=>{
                                    this.$router.push('/user');
                                }, 3000);
                            }, 2000)
                        }, 10000)
                    } else {
                        this.$Modal.error({
                            title: '创建失败',
                            content: resp.message,
                            onOk: ()=>{
                                this.current = 0;
                            },
                            onCancel: ()=>{
                                this.current = 0;
                            }
                        });
                    }
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
:global(.ivu-steps) {
    padding: 20px 0;
    padding-left: 70px;
}
.card {
    margin-bottom: 15px;
    :global(.select-icon) {
        font-size: 20px;
        color: gray;
    }
    &.active {
        :global(.select-icon) {
            color: #008bf8;
            font-weight: bolder;
        }
    }
    .card-image {
        height: 120px; 
        width:100%;
        background-position: center center;
        background-size: cover;
    }
    .card-no-image {
        height: 120px; 
        width:100%;
        text-align: center;
        color: gray;
        padding: 40px 0;
    }
}
.body {
    width: 100%;
    margin: auto;
    padding: 20px;
    // background: #eeeeee;
    margin-top: 40px;
    .body1 {
        width: 600px;
        margin: auto;
    }
}
</style>
