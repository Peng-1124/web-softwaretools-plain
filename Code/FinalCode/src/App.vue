<template>
    <div id="app" v-cloak>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
<style>
@import "../static/style/common.css";

#app {
    height: 100%;
    width: 100%;
}
</style>
