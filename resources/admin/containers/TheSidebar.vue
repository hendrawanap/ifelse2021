<template>
    <CSidebar
        fixed
        :minimize="minimize"
        :show="show"
        @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    >
        <CSidebarBrand class="d-md-down-none" to="/">
            <img class="logo-md" :src="minimizedLogo" v-if="minimize">
            <img class="logo-md" :src="maximizedLogo" v-else>
        </CSidebarBrand>

        <template v-if="nav">
            <CRenderFunction flat :content-to-render="nav"/>
        </template>
        <CSidebarMinimizer
            class="d-md-down-none"
            @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
        />
    </CSidebar>
</template>

<script>
    import adminNav from './_nav';
    import humasNav from './_humas_nav';
    import qeNav from './_qe_nav';
    import companionNav from './_companion_nav';
    import Authenticator from "../store/Authenticator";
    import logo from '../../images/logo.svg';
    import navbarLogo from '../../images/navbar-logo.svg';

    export default {
        name: 'TheSidebar',
        data(){
            return {
                nav: [],
                minimizedLogo: logo,
                maximizedLogo: navbarLogo,
            }
        },
        computed: {
            show () {
                return this.$store.state.sidebarShow
            },
            minimize () {
                return this.$store.state.sidebarMinimize
            }
        },
        mounted() {
            let role = Authenticator.role();
            console.log('role: ' + role);
            if(role === 'admin'){
                this.nav = adminNav;
            } else if(role === 'humas'){
                this.nav = humasNav;
            } else if(role === 'qe'){
                this.nav = qeNav;
            } else if(role === 'companion'){
                this.nav = companionNav;
            }
        }
    }
</script>
<style scoped>
    .logo-md {
        height: 40px;
    }
</style>
