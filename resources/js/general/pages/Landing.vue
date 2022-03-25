<template>
    <div style="position: fixed; top: 0; bottom: 0; left: 0; right: 0;">
        <div id="bg-tree" class="h-100" :style="imageBG">
            <img id="bottom" class="bg" :src="landingWave">
            <img id="middle" class="bg" :src="middleWave">
            <img id="top" class="bg" :src="topWave">
            <img class="bg" id="left-leaves" style="left: 0px" :src="leaves">
            <img id="littleLeaves" :src="littleLeaves">
        </div>
        <div class="container d-flex pr-5" style="flex-direction: column; justify-content: flex-end">
            <nav class="navbar navbar-light bg-light justify-content-end p-0" style="background-color: transparent!important;">
                <img class="mt-5 logo-animate" style="width:80px; height: 80px" :src="logo">
            </nav>
            <h2 class="color-1 mt-3 pt-3 text-right mb-0" style="position: relative">SELAMAT DATANG</h2>
            <h2 class="color-1 text-right mb-0" style="position: relative">DI WEBSITE</h2>
            <h1 class="mb-0 text-right font-weight-light" style="color: #f46b4d; position: relative; font-size: 72px">IF ELSE 2021</h1>
            <div class="text-white text-right" style="position: relative">
                <router-link to="/home">
                    <button type="button" class="fill">
                        <p style="color: white; font-weight: 400; margin-bottom: 0">CLICK TO CONTINUE</p>
                        <i class="icon-arrow-right"></i>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import leaves from '../../../images/landing-left-leaves.png';
    import littleLeaves from '../../../images/leave.png';
    import landingWave from '../../../images/landing-wave.png';
    import middleWave from '../../../images/middle-wave.png';
    import topWave from '../../../images/top-wave.png';
    import logo from '../../../images/logo.png';
    import clouds from '../../../images/clouds.png';

    export default {
        name: "Login",
        data() {
            return {
                leaves, littleLeaves,
                landingWave, middleWave, topWave,
                logo,
                clouds,
                imageBG: {backgroundImage: "url('../../../images/landing-bg.png')"}
            };
        },
    }
</script>

<style scoped>
    body{
        overflow-x: hidden;
    }
    h2{
        color: #7b4d0f;
    }

    @media screen and (max-width: 576px) {
        .clouds {
            opacity: 0!important;
        }
        #bottom{
            display: none!important;
        }
        #middle{
            display: none!important;
        }
        #top{
            display: none!important;
        }
        #bg-tree{
            background-position: 50% 50%!important;
        }
        #left-leaves{
            left: -80px!important;
        }
    }

    #bg-tree{
        width: 100%; position: absolute; z-index: -10; background-size: cover;
    }
    .bg{
        background-repeat: no-repeat; height: 100%; bottom: 0; left: -40px; position: absolute; background-color: transparent; z-index:1;
    }
    #littleLeaves{
        background-repeat: no-repeat; height: 16rem; bottom: 1rem; left: auto; right: -3rem; position: absolute; background-color: transparent; z-index:1;
    }
    #bottom{
        -webkit-animation: wave 3.5s infinite alternate;
        animation: wave 3.5s infinite alternate;
        animation-delay: 0.5s;
    }
    #middle{
        -webkit-animation: wave 3.5s infinite alternate;
        animation: wave 3.5s infinite alternate;
        animation-delay: 0.25s;
    }
    #top{
        -webkit-animation: wave 3.5s infinite alternate;
        animation: wave 3.5s infinite alternate;
    }
    .btn-hover{
        transition: 0.5s;
    }
    .btn-hover:hover{
        transform: scale(1.1);
    }
    .logo-animate{
        -webkit-animation: scaling 2s infinite alternate;
        animation: scaling 2s infinite alternate;
    }
    @-webkit-keyframes scaling {
        From {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
        To {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    @keyframes wave {
        0% {
            transform: translatex(-40px);
        }
        100% {
            transform: translatex(-0px);
        }
    }

    @keyframes slide {
        0% {
            transform: translatex(-40px);
        }
        50% {
            transform: translatex(100rem);
        }
        100% {
            transform: translatex(-40px);
        }
    }

    /* Fill button styling */
    .fill {
        border-radius: 10px;
        font-size: 12px;
        font-weight: 200;
        letter-spacing: 1px;
        padding: 8px 25px 8px;
        outline: 0;
        border: 1px solid black;
        cursor: pointer;
        position: relative;
        background-color: rgba(0, 0, 0, 0);
    }

    .fill::after {
        content: "";
        border-radius: 10px;
        background-color: #41bacc;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 4px;
        left: 4px;
        transition: 0.5s;
    }

    .fill:hover::after {
        top: 0px;
        left: 0px;
    }

    .clouds {
        position: relative;
        overflow: hidden;
        height: 100%;
        opacity: 60%;
    }

    .initialCloud {
        position: absolute;
        left: 100%;
        top: 50px;
        animation: moveFirst 20s linear .2s;
        animation-iteration-count: 1;
        width: 300px;
    }

    @-webkit-keyframes move {
        from {
            left: -30%;
        }
        to {
            left: 100%;
        }
    }

</style>
