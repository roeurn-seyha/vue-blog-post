<template>
<div>
    <div class="card animated fadeIn">
        <center>
            <img src="../assets/ava.png" alt="avatar" />
        </center>
        <hr />
        <div class="name">Roeurn Seyha</div>
        <p class="subtitle">IT Year 3 Student</p>
        <p class="location">
            <i class="fa fa-map-marker"></i>
            <!-- <a href="#" target="_blank">View Profile</a> -->
            <router-link to="/viewprofile">View Profile</router-link>
        </p>
        <p class="icons animated pulse">
            <a href="https://twitter.com/shrinath_nayak" target="_blank">
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x"></i>
                </span>
            </a>
            <a href="https://www.facebook.com/Abhi.Nayak07" target="_blank">
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-3x fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x"></i>
                </span>
            </a>
            <a href="https://plus.google.com/u/0/112966876017615905321" target="_blank">
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-google-plus fa-stack-1x"></i>
                </span>
            </a>
            <a href="https://www.instagram.com/abhijeet_n7/" target="_blank">
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-instagram fa-stack-1x"></i>
                </span>
            </a>
            <a href="https://github.com/shrinathnayak07" target="_blank">
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x"></i>
                </span>
            </a>
        </p>
    </div>
    <!--footer-->
</div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {};
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    /* -moz-osx-font-smoothing: grayscale; */
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

body {
    width: 100%;
    margin: 0px;
    background-repeat: repeat-y no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.icons>a {
    text-decoration: none;
    color: darkgray;
}

.location>a {
    text-decoration: none;
    color: white;
}

.location:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/*---------- Responsive Grid ---------------*/

@media screen and (min-width: 1001px) {
    .card {
        margin-left: 32%;
        margin-top: 2%;
        padding: 0px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 35%;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
    }

    img {
        border: 20px solid white;
        border-radius: 50%;
        margin-top: 8%;
        margin-bottom: -15%;
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .name {
        text-align: center;
        font-size: 2.8em;
        color: rgb(36, 29, 29);
        margin-top: 15%;
        margin-bottom: auto;
        text-transform: capitalize;
    }

    hr {
        width: 93%;
        height: 2px;
        background-color: gainsboro;
        border: 0px;
    }

    .subtitle {
        text-align: center;
        font-size: 1.5em;
        color: darkgray;
    }

    .icons {
        font-size: 18px;
        text-align: center;
        margin-right: 0px;
        margin-left: 0px;
        color: darkgray;
        margin-bottom: 40px;
    }

    .location {
        text-align: center;
        color: white;
        font-size: 1.5em;
        display: block;
        background-color: cornflowerblue;
        padding: 10px;
        margin-left: 7%;
        margin-right: 7%;
        border-radius: 8px;
    }
}

@media (min-width: 100px) and (max-width: 728px) and (orientation: portrait) {
    body {
        width: 100%;
        margin: 0px;
        /* background: url(img/bg.jpg) fixed no; */
        overflow-x: hidden;
    }

    hr {
        width: 93%;
        height: 2px;
        background-color: gainsboro;
        border: 0px;
    }

    .card {
        margin-top: 10%;
        margin-left: 2%;
        margin-right: 0px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 95%;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
    }

    img {
        border: 15px solid white;
        margin-bottom: -20% !important;
        border-radius: 50%;
        width: 33%;
    }

    .name {
        padding-right: 4px;
        padding-left: 4px;
        text-align: center;
        font-size: 2.5em;
        color: gainsboro;
        margin-top: 16%;
        margin-bottom: auto;
        text-transform: capitalize;
    }

    .subtitle {
        text-align: center;
        font-size: 1.2em;
        color: darkgray;
    }

    .icons {
        font-size: 11px;
        text-align: center;
        margin-right: 0px;
        margin-left: 0px;
        color: darkgray;
        margin-bottom: 40px;
    }

    .location {
        text-align: center;
        color: white;
        font-size: 0.8em;
        display: block;
        background-color: cornflowerblue;
        padding: 10px;
        margin-left: 7%;
        margin-right: 7%;
        border-radius: 8px;
    }
}

@media (min-width: 100px) and (max-width: 728px) and (orientation: landscape) {
    body {
        width: 100%;
        margin: 0px;
        /* background: url(img/bg.jpg) fixed no; */
        overflow-x: hidden;
    }

    hr {
        width: 93%;
        height: 2px;
        background-color: gainsboro;
        border: 0px;
    }

    .card {
        margin-top: 6%;
        margin-left: 9%;
        margin-right: 0px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 80%;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
    }

    img {
        border: 15px solid white;
        margin-bottom: -15% !important;
        border-radius: 50%;
        width: 25%;
    }

    .name {
        padding-right: 4px;
        padding-left: 4px;
        text-align: center;
        font-size: 2.8em;
        color: gainsboro;
        margin-top: 16%;
        margin-bottom: auto;
        text-transform: capitalize;
    }

    .subtitle {
        text-align: center;
        font-size: 1.9em;
        color: darkgray;
    }

    .icons {
        font-size: 18px;
        text-align: center;
        margin-right: 0px;
        margin-left: 0px;
        color: darkgray;
        margin-bottom: 40px;
    }

    .location {
        text-align: center;
        color: white;
        font-size: 1.5em;
        display: block;
        background-color: cornflowerblue;
        padding: 10px;
        margin-left: 7%;
        margin-right: 7%;
        border-radius: 8px;
    }
}

@media only screen and (min-width: 728px) and (max-width: 1000px) {
    body {
        width: 100%;
        margin: 0px;
        overflow-x: hidden;
    }

    hr {
        width: 93%;
        height: 2px;
        background-color: gainsboro;
        border: 0px;
    }

    .card {
        margin-top: 4%;
        margin-left: 13%;
        align-content: center;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 75%;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
    }

    img {
        border: 15px solid white;
        margin-bottom: -18% !important;
        border-radius: 50%;
        width: 30%;
    }

    .name {
        text-align: center;
        font-size: 2.5em;
        color: gainsboro;
        margin-top: 16%;
        margin-bottom: auto;
        text-transform: capitalize;
    }

    .subtitle {
        text-align: center;
        font-size: 2em;
        color: darkgray;
    }

    .icons {
        font-size: 15px;
        text-align: center;
        margin-right: 0px;
        margin-left: 0px;
        color: darkgray;
        margin-bottom: 40px;
    }

    .location {
        text-align: center;
        color: white;
        font-size: 1.8em;
        display: block;
        background-color: cornflowerblue;
        padding: 10px;
        margin-left: 7%;
        margin-right: 7%;
        border-radius: 8px;
    }
}

/*---------- Responsive Grid Ends ---------------*/

/*---------- ICONS ---------------*/

.fa-stack:hover {
    transition: 0.9s;
    transform: rotate(360deg);
}

.fa-lg {
    margin-bottom: 20px;
}

.fa-twitter:hover {
    border-radius: 50%;
    color: white;
    background-color: #1da1f2;
}

.fa-facebook:hover {
    border-radius: 50%;
    color: white;
    background-color: #3b5998;
}

.fa-google-plus:hover {
    border-radius: 50%;
    color: white;
    background-color: #dd4b39;
}

.fa-github:hover {
    border-radius: 50%;
    color: white;
    background-color: black;
}

.fa-instagram:hover {
    border-radius: 50%;
    color: white;
    background-color: #5851db;
}

/*---------- ICONS ENDS---------------*/

footer {
    text-align: center;
    color: rgb(0, 0, 0);
    font-size: 30px;
}
</style>
