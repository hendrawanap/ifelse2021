<template>
    <div>Logging Out...</div>
</template>

<script>

    import Auth from '../../store/Authenticator';

    export default {
        name: "Logout",
        async mounted() {
            Auth.logout();
            await this.$router.push('/home');
        }
    }
</script>

<style scoped>

</style>
