<template>
    <div>
    <div class="container page-title">
        <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem>个人中心</BreadcrumbItem>
            <BreadcrumbItem>{{pageTitle}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div class="container page-content">
        
        <Row>
            <Col span="3">
                <Menu width="100%" :active-name="activeName">
                    <MenuItem name="UserSite" to="/user/site">
                        <Icon type="md-globe" />
                        网站管理
                    </MenuItem>
                    <MenuItem name="UserAccount" to="/user/account">
                        <Icon type="md-person" />
                        帐户信息
                    </MenuItem>
                    <MenuItem name="UserRecord" to="/user/record">
                        <Icon type="md-list-box" />
                        购买记录
                    </MenuItem>
                    <MenuItem name="UserPassword" to="/user/change-password">
                        <Icon type="md-lock" />
                        修改密码
                    </MenuItem>
                </Menu>
            </Col>
            <Col span="21">
                <div class="content">
                    <router-view></router-view>
                </div>
            </Col>
        </Row>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        activeName() {
            return this.$route.name;
        },
        pageTitle() {
            return this.$route.meta && this.$route.meta.title;
        }
    }
}
</script>

<style lang="scss" scoped>
.page-title {
    padding: 20px 0;
}
.page-content {
    padding: 20px 0;
    background: white;
    min-height: 400px;
    .content {
        padding: 0 20px;
    }
}
</style>

