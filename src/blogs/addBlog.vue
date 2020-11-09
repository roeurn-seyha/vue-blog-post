<template>
<div id="add-blog">
    <h5>
        <b>បង្កើតផុសថ្មី</b>
    </h5>
    <form v-if="!submitted">
        <label>ចំណងជើង</label>
        <input type="text" placeholder="ចំណងជើង" v-model="blog.title" required />
        <br />
        <label>អត្ថបទ</label>
        <textarea placeholder="អត្ថបទ" v-model="blog.content"></textarea>
        <br />
        <div id="checkboxes">
            <h5>ប្រភេទ៖</h5>
            <label>ព័ត៌មាន</label>
            <input type="checkbox" value="ព័ត៌មាន" v-model="blog.categories" />
            <label>កីឡា</label>
            <input type="checkbox" value="កីឡា" v-model="blog.categories" />
            <label>កម្សាន្ត</label>
            <input type="checkbox" value="កម្សាន្ត" v-model="blog.categories" />
            <label>ចំណេះដឹង</label>
            <input type="checkbox" value="ចំណេះដឹង" v-model="blog.categories" />
            <label>ស្នេហា</label>
            <input type="checkbox" value="ស្នេហា" v-model="blog.categories" />
        </div>
        <label>អត្ថបទដោយ៖</label>
        <select v-model="blog.author">
            <option selected>ជ្រើសរើសឈ្មោះខាងក្រោម</option>
            <option>សីហា</option>
            <option>បុប្ផា</option>
            <option>ដារ៉ា</option>
            <option>តុលា</option>
            <option>រចនា</option>
        </select>
        <br />
        <br />
        <button @click.prevent="post" class="btn btn-primary">បង្កើតផុស</button>
    </form>
    <div v-if="submitted">
        <h5>អរគុណសម្រាប់ការបន្ថែមផុសថ្មី</h5>
    </div>
    <div id="preview">
        <h5>
            <b>បង្ហាញ</b>
        </h5>
        <p>
            <b>ចំណងជើង៖ {{ blog.title }}</b>
        </p>
        <p>
            <b>អត្ថបទ៖</b>
            {{ blog.content }}
        </p>
        <p>
            <b>ប្រភេទអត្ថបទ៖</b>
        </p>
        <ul>
            <li v-for="category in blog.categories" :key="category.id">{{ category }}</li>
        </ul>
        <p>
            <b>អត្ថបទដោយ៖</b>
            {{ blog.author }}
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: {},
    components: {},
    data() {
        return {
            blog: {
                title: "",
                content: "",
                categories: [],
                author: "",
            },
            submitted: false,
        };
    },
    methods: {
        // post: function () {
        //     this.$http
        //         .post("https://jsonplaceholder.typicode.com/posts", {
        //             title: this.blog.title,
        //             body: this.blog.content,
        //             userId: 1,
        //         })
        //         .then(function (data) {
        //             console.log(data);
        //             this.submitted = true;
        //         });
        // },
        post: function () {
            this.$http
                .post(
                    "https://blog-vue-test-ae254.firebaseio.com/posts.json",
                    this.blog
                )
                .then(function (data) {
                    console.log(data);
                    this.submitted = true;
                });
        },
    },
};
</script>

<style>
* {
    text-align: left;
    font-family: "Khmer OS Battambang";
    font-size: 15px;
}

#add-blog * {
    box-sizing: border-box;
    border-color: rgb(99, 20, 20);
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],
textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

select option {
    width: 100px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h5 {
    text-align: center;
}

h3 {
    margin-top: 10px;
}

#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>
