<template>
    <div class="aside">

        <el-menu :collapse="collapse" :default-active="asideActive" :router="true">
            <template v-for="(items, index) in Routers">
                <el-submenu :index="items.name" :key="index" v-if="items.children">
                    <template slot="title">
                        <i :class="items.meta.icon"></i>
                        <span>{{ items.meta.name }}</span>
                    </template>
                    <span :key="i" v-for="(child, i) in items.children">
              <el-menu-item :index="child.path">{{ child.meta.name }}</el-menu-item>

            </span>

                </el-submenu>
                <template v-else>
                    <el-menu-item :index="items.path" :key="items.path">
                        <i :class="items.meta.icon"></i>
                        <span slot="title">{{ items.meta.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>


</template>

<script>
import SiderPath from '../../../router/siderPath.js'

export default {
    name: 'Aside',
    data () {
        return {
            Routers: SiderPath,
            asideActive: null
        }
    },
    methods: {
        getPath () {
            let path = this.$route.path
            console.log(path)
            this.asideActive = path
        }
    },
    mounted () {
        this.getPath()
    },
    watch: {
        $route () {
            this.getPath()
        }
    },
    props: {
        collapse: Boolean
    }
}
</script>
