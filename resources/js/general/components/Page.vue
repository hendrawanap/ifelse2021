<template>
    <div>
        <Loading v-if="isLoading"/>
        <template v-else>
            <div class="container-fluid pb-5 px-md-5 position-relative min-vh-100" style="padding-top: 74px; margin-top: -74px">
                <div class="pt-4 pb-5">
                    <!-- <div class="bg"></div>
                    <div class="bg bg2"></div>
                    <div class="bg bg3"></div> -->
                    <img class="asset leave-left" id="leave-1" :src="leave" alt="leave">
                    <img class="asset leave-right" id="leave-2" :src="leave" alt="leave">
                    <h2 class="mb-4 mt-1 text-dark greeting" data-aos="fade-right" data-aos-duration="1000">Selamat Datang, {{nama}} <span class="wave">👋</span></h2>

                    <div class="row mx-md-n3 mx-xl-n4 pt-3 pt-md-4 pt-xl-5">
                        <div class="col-xl-6 mb-2 px-md-3 px-xl-4">
                            <!-- <div class="card w-100" style="height: auto;">
                                <video-embed class="elevate-1" :params="{autoplay: 1}" src="https://www.youtube.com/watch?v=WYZX0PR_AtY"></video-embed>
                            </div> -->
                            <img class="d-block mx-auto hero-img" :src="heroImg" alt="hero-img">
                        </div>
                        <div class="col-xl-5 px-md-3 px-xl-4 mt-3 mt-xl-0">
                            <div class="my-n3">
                                <div class="top-news d-flex py-3" v-for="news in newsList.filter((v,i)=>i<3)" :key="news.id">
                                    <router-link tag="img" :src="news.image" :to="`/berita/${news.id}`" class="card card-hover center-cropped flex-shrink-0">
                                    </router-link>
                                    <div class="text-dark ml-3">
                                        <h4>{{ news.title }}</h4>
                                        <h6 class="text-justify">{{ stripContent(news.content).substr(0,80) + '...' }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100 pt-5 pb-5 position-relative bg-secondary-bg">
                <img class="asset" id="buoy-1" :src="buoy" alt="buoy">
                <img class="asset" id="stars-1" :src="stars" alt="stars">
                <div class="container pt-5 pb-5">
                    <div class="col-lg-10 mx-auto">
                        <h2 class="text-center text-primary" data-aos="fade-right" data-aos-duration="1000">TENTANG IF ELSE</h2>
                        <p class="text-center mt-3 mb-0 mx-auto about" data-aos="fade-left" data-aos-duration="1000">
                            IF ELSE (Informatics Education and Learning for Society Enhancement) merupakan sebuah acara PROBINMABA (Program Pembinaan Mahasiswa Baru) bagi mahasiswa baru sebagai sarana pengenalan terhadap program studi Teknik Informatika FILKOM UB. IF ELSE ini juga berisikan serangkaian kegiatan pembinaan yang digunakan sebagai sarana Mahasiswa Teknik Informatika angkatan 2021 dalam mengembangkan nilai – nilai positif baik dalam aspek akademis maupun non akademis, serta menjadi kegiatan pembinaan lebih lanjut dalam pembentukan kader-kader berkualitas bagi kebutuhan seluruh elemen HMIF FILKOM UB.
                        </p>
                    </div>
                </div>
                <!-- <img id="bg-bird" class="wallpaper-bg" :src="birdBG" data-aos="fade-up"> -->
                <!-- <img id="bg-bird-1" :src="birdBg1" class="bird" alt="bird-1" data-aos="fade-up"> -->
                <!-- <img id="bg-bird-2" :src="birdBg2" class="bird" alt="bird-2" data-aos="fade-up"> -->
                <!-- <img id="bg-bird-3" :src="birdBg3" class="bird" alt="bird-3" data-aos="fade-up"> -->
                <!-- <img :src="leavesLeft" alt="leaves-right" class="leaves-left d-none d-lg-block" data-aos="zoom-out-down"> -->
                <!-- <img :src="leavesRight" alt="leaves-right" class="leaves-right d-none d-lg-block" data-aos="zoom-out-down"> -->
                <!-- <img class="wallpaper-bg" :src="leafBG" style="z-index: 3; position: absolute; bottom: 0" data-aos="zoom-out-down"> -->
            </div>

            <div class="w-100 py-5 position-relative" style="margin-top: 0">
                <img class="asset" id="flower-1" :src="flower" alt="flower">
                <img class="asset" id="flower-2" :src="flower" alt="flower">
                <img class="asset" id="sandals-1" :src="sandals" alt="sandals">
                <img class="asset" id="stars-2" :src="stars" alt="stars">
                <div class="container pt-5">
                    <h2 class="text-center text-primary mb-3" data-aos="zoom-out-down"  data-aos-duration="500">FILOSOFI LOGO</h2>
                    <div class="pt-3 position-relative">
                        <div class="mx-auto" style="height: 200px; width: 200px; background-color: transparent; border-radius: 50%; border: none" data-aos="zoom-out-up"  data-aos-duration="1000">
                            <img class="logo-animate" :src="logo" style="height: 200px; width: 200px;">
                        </div>

                        <div id="carouselLogo" class="carousel slide" data-ride="carousel" data-aos="zoom-out-down" data-aos-duration="500">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-block w-100" style="height: 400px; background: transparent" alt="..."></div>
                                    <div class="carousel-caption d-md-block" style="color: black">
                                        <img :src="logoTitik" class="card mx-auto mb-3 mt-3 carousel-logo">
                                        <h5 class="text-primary">21 Titik Terhubung</h5>
                                        <p class="text-dark" style="font-size: 16px">Melambangkan Mahasiswa Teknik Informatika angkatan 2021 yang saling terhubung menciptakan sebuah kesatuan.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block w-100" style="height: 400px; background: transparent" alt="..."></div>
                                    <div class="carousel-caption d-md-block" style="color: black">
                                        <img :src="logoKompas" class="card mx-auto mb-3 mt-3 carousel-logo" style="width: 120px; height:120px">
                                        <h5 class="text-primary">Kompas</h5>
                                        <p class="text-dark" style="font-size: 16px">Melambangkan banyaknya arah tujuan atau prospek yang tersedia bagi Mahasiswa Teknik Informatika.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-block w-100" style="height: 400px; background: transparent" alt="..."></div>
                                    <div class="carousel-caption d-md-block" style="color: black">
                                        <img :src="logoProcessor" class="mb-3 mt-3 carousel-logo">
                                        <h5 class="text-primary">Prosesor</h5>
                                        <p class="text-dark" style="font-size: 16px">Melambangkan Mahasiswa Teknik informatika yang dapat berpikir kritis dalam menyelesaikan masalah dan mengambil keputusan layaknya prosessor.</p>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselLogo" role="button" data-slide="prev">
                                <span class="fa fa-angle-left fa-3x" style="color: black" aria-hidden="true"></span>
                            </a>
                            <a class="carousel-control-next" href="#carouselLogo" role="button" data-slide="next" style="text-underline: none">
                                <span class="fa fa-angle-right fa-3x" style="color: black !important; border: none" aria-hidden="true"></span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="w-100 pt-5 pb-5 bg-secondary-bg">
                <div class="container text-primary">
                    <h1 class="text-center mb-4" data-aos="fade-right" data-aos-duration="1000">PENUGASAN TERSEDIA</h1>
                    <h2 class="text-center " data-aos="fade-left" data-aos-duration="1000" style="font-size:22px">Segera Cek Halaman Penugasan</h2>
                </div>
            </div>

            <div class="w-100 py-5 position-relative">
                <img class="asset leave-left" id="leave-3" :src="leave" alt="leave">
                <img class="asset leave-right" id="leave-4" :src="leave" alt="leave">
                <img class="asset" id="sandals-2" :src="sandals" alt="sandals">
                <img class="asset" id="buoy-2" :src="buoy" alt="buoy">

                <div class="container pt-5">
                    <h2 class="text-center text-primary" data-aos="fade-up" data-aos-duration="1000">RANGKAIAN IF ELSE 2021</h2>
                </div>
                <div class="pt-3 mx-auto pb-5 mb-5">
                    <div class="row justify-content-center align-items-center">
                        <div class="flip-card m-2" data-aos="flip-up" data-aos-duration="1000">
                            <div class="flip-card-inner">
                                <div class="flip-card-front p-5">
                                    <img :src="r1" class="mx-auto" style="height: 10rem; width: 10rem">
                                    <h5 class="text-center mt-3 text-primary">START A NEW JOURNEY</h5>
                                </div>
                                <div class="flip-card-back p-5">
                                    <p>
                                        Start A New Journey merupakan rangkaian pertama di acara IF ELSE 2021 untuk menyambut dan mengenalkan kepada Mahasiswa Baru akan Prodi Teknik Informatika. Jadi, jangan sampai ketinggalan ya!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card m-2" data-aos="flip-up" data-aos-duration="1000">
                            <div class="flip-card-inner">
                                <div class="flip-card-front p-5">
                                    <img :src="r2" class="mx-auto" style="height: 10rem; width: 10rem">
                                    <h5 class="text-center mt-3 text-primary" style="text-transform: uppercase">Gain Experience From A New Character</h5>
                                </div>
                                <div class="flip-card-back p-5">
                                    <p>
                                        Mahasiswa Baru akan bertemu sosok baru dan merupakan bagian dari Keluarga Teknik Informatika yang akan membagikan ilmu dan pengalamannya dalam bidang softskill. Yakin engga mau ikutan?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card m-2" data-aos="flip-up" data-aos-duration="1000">
                            <div class="flip-card-inner">
                                <div class="flip-card-front p-5">
                                    <img :src="questionmark2" class="rounded-circle mx-auto logo-animate-card" style="margin-bottom: 1rem ;background-color: transparent; height: 9rem; width: 9rem">
                                    <h5 class="text-center mt-3 text-primary">RANGKAIAN 3</h5>
                                    <h5 class="text-black-50 text-center">Coming Soon</h5>
                                </div>
                                <div class="flip-card-back p-5">
                                    <h2>Rangkaian 3</h2>
                                    <p>Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SMOOTHSCROLLING-->
            <a id="back-to-top" href="#" class="btn btn-light btn-lg back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>
        </template>
    </div>
</template>

<script>

    import logo from '../../../images/logo.png';
    import logoTitik from '../../../images/logo-titik.png';
    import logoKompas from '../../../images/logo-kompas.png';
    import logoProcessor from '../../../images/logo-processor.png';
    // import birdBG from '../../../images/about-bg-birds.png';
    // import birdBg1 from '../../../images/about-bg-bird-1.png';
    // import birdBg2 from '../../../images/about-bg-bird-2.png';
    // import birdBg3 from '../../../images/about-bg-bird-3.png';
    // import leafBG from '../../../images/about-bg.svg';
    // import leavesLeft from '../../../images/about-bg-left.svg';
    // import leavesRight from '../../../images/about-bg-right.svg';
    import sample from '../../../images/sample-post.jpg';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import Authenticator from "../../store/Authenticator";
    import apiRoutes from "../../router/api";
    import Connection from "../../store/Connection"
    import Loading from "./Loading";
    import r1 from '../../../images/r-1.png';
    import r2 from '../../../images/r-2.png';
    import questionmark from '../../../images/questionmarks.png';
    import questionmark2 from '../../../images/questionmarks-2.png';
    import heroImg from '../../../images/Asset10.png';
    import leave from '../../../images/leave.png';
    import flower from '../../../images/Asset1.png';
    import buoy from '../../../images/Asset5.png';
    import sandals from '../../../images/Asset6.png';
    import stars from '../../../images/Asset4.png';

    export default {
        components: {Loading},
        async mounted() {
            AOS.init();
            this.nama = this.getName(Authenticator.user());
            this.newsList = await this.getNews();
            setTimeout(()=>{
                this.isLoading = false;
            }, 1000);
        },
        data: ()=>{
            return{
                logo,
                // leavesLeft,
                // leavesRight,
                // birdBg1,
                // birdBg3,
                // birdBg2,
                logoTitik,
                logoKompas,
                logoProcessor,
                // birdBG,
                // leafBG,
                nama: '',
                sample,
                r1, r2,
                questionmark,
                questionmark2,
                heroImg,
                leave,
                buoy,
                stars,
                flower,
                sandals,
                newsList: [],
                isLoading: true,
            }
        },
        methods: {
            getName: (user)=>{
                if(user){
                    return user.name + '!';
                } else {
                    return 'Sobat IF ELSE!';
                }
            },
            async getNews() {
                let res = await Connection.get(apiRoutes.news);
                return res.data.map(n => {
                    return {
                        id: n.id,
                        image: '/images/' + n.image,
                        title: n.title,
                        content: n.content,
                    }
                });
            },
            stripContent(content) {
                return content.replace(/(<([^>]+)>)/gi, "");
            }
        }
    }
</script>

<style scoped>
    .flip-card {
        background-color: transparent;
        width: 18rem;
        height: 21rem;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .top-news {
        transition: transform 0.2s;
        cursor: pointer;
    }

    .top-news:hover {
        transform: scale(1.05);
    }

    .top-news img {
        height: 100px;
        width: auto;
        aspect-ratio: 16/9;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        border-radius: 2.5rem;
        background-color: white;
        color: black;
        border: solid var(--primary);
        /* border: solid var(--primary); */
    }

    /* Style the back side */
    .flip-card-back {
        border-radius: 2.5rem;
        background-color: var(--primary);
        /* background-color: var(--primary); */
        color: white;
        transform: rotateY(180deg);
    }

    .center-cropped {
        border-radius: 10px !important;
        object-fit: cover; /* Do not scale the image */
        object-position: center; /* Center the image within the element */
        height: 10rem;
        width: 100%;
        border: none;
    }
    .card-hover{
        border-radius: 10px;
        transition: all 0.2s ease-in;
    }
    .card-hover:hover{
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);
    }

    .logo-animate{
        -webkit-animation: scaling 1.25s infinite alternate;
        animation: scaling 1.25s infinite alternate;
    }

    .logo-animate-card{
        -webkit-animation: scaling 1s infinite alternate;
        animation: scaling 1s infinite alternate;
    }

    .carousel-logo{
        width: 100px; height: 100px; object-fit: fill;  background: transparent; border: none
    }

    #bg-bird{
        -webkit-animation: float 3s infinite alternate;
        animation: float 3s infinite alternate;
    }

    .main-heading {
        height: calc(100vh - 72px);
    }

    /* .bg {
        animation:slide 3s ease-in-out infinite alternate;
        background-image: linear-gradient(-60deg,#069681 50%, #57CF71 50%);
        height: 100%;
        left:-50%;
        opacity:.5;
        position:absolute;
        right:-50%;
        top:0;
        z-index:-1;
    }

    .bg2 {
        animation-direction:alternate-reverse;
        animation-duration:4s;
    }

    .bg3 {
        animation-duration:5s;
    }

    .leaves-left, .leaves-right {
        position: absolute;
        bottom: 0;
        width: calc(50% - 200px);
        height: auto;
    }

    .leaves-left {
        left: 0;
        max-width: 300px;
    }

    .leaves-right {
        right: 0;
        max-width: 320px;
    } */

    @keyframes slide {
        0% {
            transform:translateX(-25%);
        }
        100% {
            transform:translateX(25%);
        }
    }

    /* .bird {
        animation: float 3s ease-in-out infinite alternate;
        height: auto;
        width: 100px;
    }

    #bg-bird-1 {
        position: absolute;
        top: -12px;
        left: -15px;
    }

    #bg-bird-2 {
        position: absolute;
        top: 12px;
        right: 300px;
        display: none;
    }

    #bg-bird-3 {
        position: absolute;
        top: -30px;
        right: 10px;
    } */

    .greeting {
        font-size: 1.5rem;
    }

    .hero-img {
        width: 100%;
    }

    .asset {
        position: absolute;
        z-index: 2;
        display: none;
    }

    .leave-left {
        transform: rotate(180deg);
    }

    @media (min-width: 768px) {
        .greeting {
            font-size: 1.75rem;
        }

        .about {
            font-size: 1rem;
        }

        .bird {
            width: auto;
        }

        #bg-bird-1 {
            position: absolute;
            top: -16px;
            left: 20px;
        }

        #bg-bird-2 {
            position: absolute;
            top: 16px;
        }

        #bg-bird-3 {
            position: absolute;
            top: -40px;
            right: 30px;
        }

        .top-news img {
            height: 180px;
        }

        .hero-img {
            width: 80%;
        }

        #leave-4 {
            display: block;
            bottom: -60px;
            right: -30px;
            width: 240px;
        }

        #buoy-1 {
            display: block;
            top: 20px;
            left: 20px;
            width: 100px;
        }

        #buoy-2 {
            display: block;
            top: -20px;
            right: 40px;
            width: 100px;
        }

        #stars-1 {
            display: block;
            bottom: 30px;
            right: 100px;
            width: 60px;
            transform: rotate(270deg);
        }

        #stars-2 {
            display: block;
            bottom: 50px;
            left: 40px;
            width: 60px;
        }

        #sandals-1 {
            display: block;
            top: 100px;
            right: 100px;
            width: 60px;
            transform: rotate(180deg);
        }

        #flower-1 {
            display: block;
            top: -80px;
            left: -30px;
            width: 250px;
        }
    }

    @media (min-width: 992px) {
        .greeting {
            font-size: 2rem;
        }

        .about {
            font-size: 1.15rem;
        }

        #bg-bird-1 {
            position: absolute;
            top: -20px;
            left: 60px;
        }

        #bg-bird-2 {
            position: absolute;
            top: 20px;
            display: block;
        }

        #bg-bird-3 {
            position: absolute;
            top: -60px;
            right: 60px;
        }

        .top-news img {
            height: 200px;
        }

        .hero-img {
            width: 70%;
        }

        #leave-4 {
            display: none;
        }
    }

    @media (min-width: 1200px) {
        .about {
            font-size: 1.25rem;
        }

        #bg-bird-1 {
            position: absolute;
            top: -40px;
        }

        #bg-bird-2 {
            position: absolute;
            top: 40px;
        }

        #bg-bird-3 {
            position: absolute;
            top: -80px;
        }

        .top-news img {
            height: 160px;
        }

        .hero-img {
            width: auto;
            height: 60vh;
        }

        #leave-2 {
            display: block;
            bottom: -120px;
            right: -30px;
            width: 280px;
        }

        #leave-4 {
            display: block;
        }

        #buoy-1 {
            width: 160px;
        }

        #buoy-2 {
            width: 160px;
        }

        #stars-1 {
            width: 100px;
        }

        #stars-2 {
            width: 100px;
        }

        #sandals-1 {
            width: 100px;
        }

        #sandals-2 {
            display: block;
            top: 120px;
            left: 60px;
            width: 100px;
        }

        #flower-1 {
            top: -100px;
            left: -60px;
            width: 350px;
        }

        #flower-2 {
            display: block;
            bottom: 0;
            right: -160px;
            width: 350px;
            transform: scaleX(-1) rotate(-30deg);
        }
    }

    @media (min-width: 1440px) {
        #buoy-1 {
            left: 100px;
        }

        #stars-1 {
            right: 200px;
        }

        #stars-2 {
            left: 100px;
        }

        #leave-3 {
            display: block;
            top: -100px;
            left: -100px;
            width: 300px;
        }

        #sandals-2 {
            top: 200px;
            left: 160px;
        }
    }

    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
    }

    @-webkit-keyframes scaling {
        From {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
        To {
            -webkit-transform: scale(1.15);
            transform: scale(1.15);
        }
    }

    .wave {
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
    }

    @keyframes wave-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) }
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }
        100% { transform: rotate( 0.0deg) }
    }
</style>
