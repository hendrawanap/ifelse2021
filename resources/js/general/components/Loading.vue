<template>
    <div class="loading-container">
        <img :src="LoadingSVG" width="100" height="100">
        <h3 class="mt-3 text-center text-primary">Loading...</h3>
    </div>
</template>

<script>
    import LoadingSVG from '../../../images/kompas.png'
    export default {
        name: "Loading",
        data(){
            return {
                LoadingSVG
            }
        }
    }
</script>

<style scoped>
    .loading-container {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        animation: rotate 1s infinite ease-in-out;
    }
    h3 {
        animation: fading 1s ease-in-out infinite alternate;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes fading {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
