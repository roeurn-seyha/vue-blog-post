<template>
<div id="show-blog">
    <h1>Show Blog Post</h1>
    <b-nav-form>
        <b-form-input v-model="search" size="md" class="mr-sm-1" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
    <!-- <div v-for class="single-blog"></div> -->
    <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
        <h2>{{ blog.title | to-uppercase}}</h2>
        <article>{{ blog.body | snippet }}</article>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            search: "",
        };
    },
    methods: {},
    created() {
        this.$http
            .get("https://jsonplaceholder.typicode.com/posts", {
                // title: this.blog.title,
                // body: this.blog.content,
                // userId: 1,
            })
            .then(function (data) {
                console.log(data);
                this.blogs = data.body.slice(0, 50);
            });
    },
    computed: {
        filteredBlogs: function () {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        },
    },
};
</script>

<style scoped>
#show-blog {
    max-width: 1000px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
