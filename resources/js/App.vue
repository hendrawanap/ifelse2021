<template>
    <div class="d-flex flex-column min-vh-100">
        <template v-if="['landing', 'failed'].includes($route.name)">

        </template>
        <template v-else>
            <Navbar
                :is-logged-in="isLoggedIn"
            ></Navbar>
        </template>

        <template v-if="['failed'].includes($route.name)">
          <div class="app flex-fill position-relative">
              <router-view @login="setLoggedIn"></router-view>
          </div>
        </template>
        <template v-else>
          <div class="app flex-fill position-relative bg-primary-bg">
              <router-view @login="setLoggedIn"></router-view>
          </div>
        </template>

        <template v-if="['login', 'landing', 'quiz-index', 'quiz-details', 'failed'].includes($route.name)">

        </template>
        <template v-else>
            <Footer></Footer>
        </template>
    </div>
</template>
<script>

    import Navbar from "./general/layouts/Navbar";
    import Footer from "./general/layouts/Footer";
    import Authenticator from "./store/Authenticator";

    export default {
        name: "App",
        components: {
            Footer,
            Navbar,
        },
        data(){
            return {
                isLoggedIn: false,
            }
        },

        methods: {
            setLoggedIn(){
                this.isLoggedIn = Authenticator.isLoggedIn();
            }
        },
        beforeRouteUpdate(){
            this.setLoggedIn();
        },
        mounted(){
            this.setLoggedIn();
        }
    }
</script>

<style scoped>
    @import "../css/styles.css";
</style>
