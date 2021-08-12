<template>
    <el-container>
        <el-header>
            <div class="head-center" id="my-title-style">
                Pet-Store
            </div>
            <img src="static/img/logo.png" class="logo-style">
            <home-user class="user"/>
        </el-header>


        <el-container>
            <home-aside :collapse="Collapse"/>
            <el-main>
                <router-view/>
            </el-main>

        </el-container>
    </el-container>
</template>
<script>
import HomeAside from './components/aside'
import HomeBread from './components/bread'
import HomeUser from './components/user'

export default {
    name: 'Layout',
    components: {
        HomeAside,
        HomeBread,
        HomeUser
    },
    data () {
        return {
            Collapse: false,
            isActive: false
        }
    },
    methods: {
        menuClick () {
            this.Collapse = !this.Collapse
            this.isActive = !this.isActive
        }
    },
    computed: {
        Active () {
            return this.isActive ? 'rotateGo' : 'rotateBack'
        }
    }
}
</script>
<style lang="stylus">
@import '~css/base.styl'

#my-title-style
    font-size large
    color grey
    margin-left 24px

.el-header
    display flex
    background-color #d7d7d7
    //
    .logo-style
        margin-top 5px;
        width 161px
        height 40px;
        //margin-right 1009px
        //margin-left 300px
        //flex 2

    .aside-menu
        width 40px
        font-size 32px
        line-height 40px
        cursor pointer
        text-align center

    .head-center
        flex 1

    .user
        width 60px
        margin-right 20px


.rotateGo
    rotateA()

.rotateBack
    rotateB()
</style>
