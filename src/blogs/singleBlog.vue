<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get(
        "https://blog-vue-test-ae254.firebaseio.com/posts/" + this.id + "json"
      )
      .then(function (data) {
        console.log(data);
        return data.json();
        // this.blog = data.content;
      })
      .then(function (data) {
        this.blog = data;
      });
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
