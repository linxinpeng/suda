<template>
    <div>
        <Button style="margin-bottom: 10px" @click="$router.push('/user/site-create')"><Icon type="md-add" />添加网站</Button>
        <Table border :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
const apiTypes = [
    {id:'SHOP',name:'电商网站',color:'primary'},
    {id:'EASY',name:'企业网站',color:'green'},
]
export default {
    data() {
        return {
            columns: [
                {
                    title: '网站域名',
                    key: 'id',
                    render: (h, {row}) => {
                        return h('a', {
                                attrs: {
                                    href:`http://${row.id}.lantusale.com/`,
                                    target:'_blank'
                                }
                            }, `${row.id}.lantusale.com`);
                    }
                }, {
                    title: '网站名称',
                    key: 'name'
                }, {
                    title: '网站类型',
                    key: 'apiType',
                    render: (h, {row}) => {
                        const t = apiTypes.filter(x=>x.id==row.apiType)[0];
                        return h('Tag', {
                            props:{color:t.color}
                        }, t.name);
                    }
                }, {
                    title: '状态',
                    key: 'enabled',
                    render: (h, {row}) => {
                        return h('Tag', {
                            props:{
                                color: row.enabled ? 'green':'error'
                            }
                        }, row.enabled?'已启用':'未启用');
                    }
                }, {
                    title: '操作',
                    key: 'opt',
                    render: (h, {row}) => {
                        return h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            if (!row.enabled) {
                                                this.$Message.error('网站未启用，可能在审核中，如有问题，请联系客服');
                                                return;
                                            } else if (!store.state.user.token) {
                                                this.$router.push('/login');
                                                return;
                                            }
                                            window.open(`/api/ltshop/bapi/client_site/login_admin?siteId=${row.id}&token=${store.state.user.token}`);
                                        }
                                    }
                                }, '进入后台');
                    }
                }
            ],
            data: [
            ]
        }
    },
    mounted() {
        this.reload();
    },
    methods: {
        reload() {
            api.request('/api/ltshop/bapi/client_site/list', {query:{}}).then(resp=>{
                this.data = resp.list;
            })
        }
    }
}
</script>

