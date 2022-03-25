<template>
    <footer class="w-100 pt-4 pb-3" :style="imageBG" style="border-top: 1px solid #7b4d0f">
        <div class="d-block">
            <h4 class="text-center font-medium mb-3">VISIT OUR SOCIAL MEDIA</h4>
            <div class="row justify-content-center">
                <a href="https://line.me/R/ti/p/@ifelsefilkomub" target="_blank" class="mx-3" style="width: 50px; height: 50px">
                    <img :src="line" class="h-100 w-100 footer-icon rounded-circle">
                </a>
                <a href="https://www.youtube.com/channel/UCaAZt3JB9xgqj7xRosdtsig" target="_blank" class="mx-3" style="width: 50px; height: 50px">
                    <img :src="youtube" class="h-100 w-100 footer-icon rounded-circle">
                </a>
                <a href="https://www.instagram.com/ifelsefilkomub/" target="_blank" class="mx-3" style="width: 50px; height: 50px">
                    <img :src="instagram" class="h-100 w-100 footer-icon rounded-circle">
                </a>
            </div>
            <h5 class="text-center mt-3 font-medium">Developed by IT x DDM IF ELSE</h5>
            <h6 class="text-center mt-2 font-medium">&copy; 2021</h6>
            <!-- <img class="wallpaper-bg d-none d-lg-block" :src="footerLeaves" style="z-index: 3; position: absolute; bottom: 0"> -->
        </div>
    </footer>
</template>

<script>
    import footerBG from '../../../images/footer-bg.png';
    import leaves from '../../../images/landing-left-leaves.png';
    import footerLeaves from '../../../images/footer-leaves.png';
    import footerLeavesLeft from '../../../images/footer-leaves-left.svg';
    import footerLeavesRight from '../../../images/footer-leaves-right.svg';
    import youtube from '../../../images/youtube.png';
    import instagram from '../../../images/instagram.png';
    import line from '../../../images/line.png';
    export default {
        name: "Footer",
        data: ()=>{
            return {
                imageBG: {backgroundImage: "url('../../../images/footer-bg.png')"},
                leaves,
                footerLeaves,
                footerLeavesLeft,
                footerLeavesRight,
                line,
                instagram,
                youtube,
            };
        }
    }
</script>

<style scoped>
    .leaves-left, .leaves-right {
        position: absolute;
        bottom: 0;
        width: calc(50% - 200px);
        height: auto;
    }

    .leaves-left {
        left: 0;
        max-width: 410px;
    }

    .leaves-right {
        right: 0;
        max-width: 380px;
    }
    .footer-icon{
        transition: 0.25s;
    }
    .footer-icon:hover{
        -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.30);
        -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.30);
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.30);
        transform: scale(1.1);
    }
    .bg{
        background-repeat: no-repeat; height: 100%; width: 100%; bottom: 0; left: 0px; position: absolute; background-color: transparent; z-index:0;
    }
</style>
