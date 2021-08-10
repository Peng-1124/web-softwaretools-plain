<template>
    <el-breadcrumb class="clean-position" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in breadList" :key='index' :to="{path: item.path}">{{item.meta.name}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
    export default {
        name: 'HomeBread',
        data() {
            return {
                breadList: []
            }
        },
        methods: {
            morenRouter() {
                this.breadList = this.$route.matched.slice(1)
                console.log(this.breadList)
            }
        },
        mounted() {
            this.morenRouter()
        },
        watch: {
            $route() {
                this.morenRouter()
            }
        }
    }
</script>
<style scoped>
    .clean-position {
        line-height: 50px
    }
</style>
