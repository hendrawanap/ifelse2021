<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary-bg" style="position: relative; z-index: 10; border-bottom: 1px solid var(--primary-text);">
            <div class="container-fluid my-1" data-aos="fade-down" data-aos-duration="1000">
                <router-link to="/home" style="text-decoration: none; color: inherit; display: flex"><img class="mr-2" width="48" height="48" :src="navbarLogo" alt="if else 2021"><div class="text-primary"><h3 class="m-0">IF ELSE</h3><div class="mt-n1">2021</div></div></router-link>
                <p class="ml-4 mr-0 text-primary-text font-medium mb-0" style="cursor: pointer;"><router-link to="/berita" style="text-decoration: none; color: inherit; letter-spacing: 0.5px; font-size: 1.15rem">Berita</router-link></p>
                <p class="ml-3 mr-auto text-primary-text font-medium mb-0" style="cursor: pointer;"><router-link to="/faq" style="text-decoration: none; color: inherit; letter-spacing: 0.5px; font-size: 1.15rem">FAQ</router-link></p>
                <template v-if="isLoggedIn">
                    <button v-on:click="openNav()" class="btn fw-bolder mr-0 p-0" id="sidebarToggle"><span class="fa fa-bars fa-2x mr-0 pr-0" style="color: var(--primary)"></span></button>
                </template>
                <template v-else>
                    <a href="/login" class="btn btn-color-2-1 text-white">Login</a>
                </template>
            </div>
        </nav>

        <!-- The overlay -->
        <div id="myNav" class="overlay" :style="imageBG">

            <!-- Button to close the overlay navigation -->
            <a class="closebtn" style="z-index: 6; cursor: pointer" v-on:click="closeNav()">&times;</a>

            <!-- Overlay content -->
            <div class="overlay-content" style="z-index: 5">
                <div style="width: 200px; height: 200px" class=" mx-auto">
                    <RotatingLogo size="200"/>
                </div>
                <div class="col ml-auto mr-auto" style="width: auto">
                    <div class="text-white m-2" style="width: auto">
                            <p class="text-white mb-0 btn btn-secondary" style="width: 220px; border-radius: 26px" v-on:click="closeNav()">
                                <router-link to="/profile" class="p-0" style="text-decoration: none; color: inherit; cursor:pointer;font-size: 26px" v-on:click="closeNav()">
                                    Profile<span class="fa fa-user text-white ml-2"></span>
                                </router-link>
                            </p>
                    </div>
                    <div class="text-white m-2" style="width: auto">
                        <p class="text-white mb-0 btn btn-secondary" style="width: 220px; border-radius: 26px" v-on:click="closeNav()">
                            <router-link to="/penugasan" class="p-0" style="text-decoration: none; color: inherit; cursor:pointer;font-size: 26px" v-on:click="closeNav()">
                                Penugasan<span class="fa fa-question text-white ml-2"></span>
                            </router-link>
                        </p>
                    </div>
                    <div class="text-white m-2" style="width: auto">
                        <p class="text-white mb-0 btn btn-secondary" style="width: 220px; border-radius: 26px" v-on:click="closeNav()">
                            <router-link to="/quiz" class="p-0" style="text-decoration: none; color: inherit; cursor:pointer;font-size: 26px" v-on:click="closeNav()">
                                Quiz<span class="fa fa-tasks text-white ml-2"></span>
                            </router-link>
                        </p>
                    </div>
                    <div class="text-white m-2" style="width: auto">
                        <p class="text-white mb-0 btn btn-danger" style="width: 220px; border-radius: 26px" v-on:click="closeNav()">
                            <a href="/logout" class="p-0" style="text-decoration: none; color: inherit; cursor:pointer;font-size: 26px" v-on:click="closeNav()">
                                Logout
                            </a>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import footerLow from '../../../images/footer-low.png'
    import logo from '../../../images/logo.svg'
    import Authenticator from "../../store/Authenticator";
    import bG from '../../../images/login-bg-2.png';
    import RotatingLogo from "../components/RotatingLogo";
    import navbarLogo from "../../../images/logo.png";

    export default {
        name: "Navbar",
        components: {RotatingLogo},
        props: ['isLoggedIn'],
        data: ()=>{
            return {
                footerLow,
                logo,
                navbarLogo,
                bG,
                imageBG: {backgroundImage: "url('../../../images/navbar-overlay.png')"}
            }
        },
        methods: {
            /* Open when someone clicks on the span element */
            openNav: function() {
                document.getElementById("myNav").style.width = "100%";
                document.getElementById("myNav").style.left = "0";
            },

            /* Close when someone clicks on the "x" symbol inside the overlay */
            closeNav: function(){
                document.getElementById("myNav").style.width = "0%";
                document.getElementById("myNav").style.left = "100%";
            }
        },
    }
</script>

<style scoped>
#myNav{
    background-size: cover;
    background-position: 52% 0%;
}
</style>
