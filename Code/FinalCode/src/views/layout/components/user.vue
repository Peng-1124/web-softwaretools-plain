<template>
    <el-dropdown trigger="click">
        <div>
            <img src="/static/img/user-pic.jpg" class="user-img" alt="None">
            <i class="el-icon-caret-bottom el-icon--right dropdown-icon"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="navToUserInfo">Information</el-dropdown-item>
            <el-dropdown-item @click.native="navToHome">Home</el-dropdown-item>
            <el-dropdown-item @click.native="teaLogout">Logout</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        // 退出登录
        teaLogout() {
            this.$confirm('Do you want to log out?', 'Warning', {
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                type: 'warning'
            }).then(res => {
                this.$router.push('/')
            }).catch(err => {
                console.log(err)
                // this.$message('已取消')
            })
        },

        navToUserInfo() {
            this.$router.push({ path: '/user' })
        },

        navToHome() {
            this.$router.push({ path: '/pet/show' })
        }
    }
}
</script>
<style lang="stylus" scoped>
.el-dropdown
    width 80px
    cursor pointer

.user-img
    float left
    height 40px
    width 40px
    margin 7px 0
    border-radius 50%

.dropdown-icon
    display inline-block
</style>
