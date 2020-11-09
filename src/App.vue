<template>
<div id="app">
    <app-header></app-header>
    <!-- <show-blog></show-blog> -->
    <router-view></router-view>
</div>
</template>

<script>
import Header from "./components/Header";
// import showBlog from "./blogs/showBlog";
export default {
    name: "App",
    components: {
        "app-header": Header,
        // "show-blog": showBlog,
    },
    data() {
        return {};
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
