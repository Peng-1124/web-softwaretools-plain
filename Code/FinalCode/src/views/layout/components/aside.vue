<template>
    <div class="aside">

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
