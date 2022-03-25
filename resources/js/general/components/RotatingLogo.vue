<template>
    <div class="relative">
        <img class="absolute left-rotate" :src="Kompas" :width="size" :height="size">
        <img class="absolute right-rotate" :src="Titik" :width="size" :height="size">
        <img class="absolute" :src="Processor" :width="size" :height="size">
    </div>
</template>

<script>
    import Kompas from '../../../images/SVG/kompas.png';
    import Titik from '../../../images/SVG/titik.png';
    import Processor from '../../../images/SVG/processor.png';
    export default {
        name: "RotatingLogo",
        props: ['size'],
        data(){
            return {
                Kompas,
                Titik,
                Processor
            }
        }
    }
</script>

<style scoped>
    .relative {
        position: relative;
    }
    .absolute {
        position: absolute;
        left: 0%;
        top: -50%;
    }
    .left-rotate {
        animation: rotateLeft 16s linear infinite;
    }
    .right-rotate {
        animation: rotateRight 16s linear infinite;
    }
    @keyframes rotateLeft {
        0 {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes rotateRight {
        0 {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(-180deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
</style>
