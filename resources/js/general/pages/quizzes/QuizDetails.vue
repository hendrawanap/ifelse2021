<template>
    <div class="text-dark">
        <div class="container py-4">
            <div class="row">
                <div class="col col-md-7">
                    <h1 class="d-md-none mb-3 font-medium">Quiz {{ $route.params.slug }}</h1>
                    <div class="d-flex justify-content-between">
                        <h1 class="d-none d-md-block">Quiz {{ $route.params.slug }}</h1>
                        <select name="" id="" class="custom-select custom-select-lg w-auto text-dark font-medium" v-model="selectedFilter">
                            <option value="Semua Soal">Semua Soal</option>
                            <option value="Satu Soal">Satu Soal</option>
                        </select>
                        <timer class="d-md-none" style="height: min-content" :remainingTime="remainingTime"/>
                    </div>
                    <progres-soal class="d-md-none mt-2" :total="total" :banyakSoalTerjawab="banyakSoalTerjawab"/>
                    <div class="mt-3">
                        <soal :setDijawab="setDijawab" :semua-soal="selectedFilter == 'Semua Soal'" :active="selectedSoal" class="soal mb-3" v-for="(soal, index) in questions" :key="soal.id" :soal="soal" :answer="getAnswer(soal.id)" :id="soal.id" :soalKe="index+1"></soal>
                    </div>
                    <div v-if="selectedFilter == 'Satu Soal'" class="d-flex justify-content-between">
                        <button class="btn" :class="[selectedSoal === 1 ? 'btn-outline-secondary' : 'btn-secondary']" v-on:click="selectedSoal == 1 ? null : selectedSoal -= 1" :disabled="selectedSoal === 1">Sebelumnya</button>
                        <button v-show="selectedSoal !== questions.length" class="btn btn-primary" id="btn-selanjutnya" v-on:click="selectedSoal == questions.length ? null : selectedSoal += 1">Selanjutnya</button>
                        <button v-show="selectedSoal === questions.length" class="d-md-none btn btn-primary" data-toggle="modal" data-target="#konfirmasiSelesai" v-on:click="setBanyakSoalTerjawab()">Selesai</button>
                    </div>
                    <div v-else class="d-flex justify-content-end">
                        <button class="d-md-none btn btn-primary" data-toggle="modal" data-target="#konfirmasiSelesai" v-on:click="setBanyakSoalTerjawab()">Selesai</button>
                    </div>
                </div>
                <div class="sidebar d-none d-md-flex flex-md-column col-md-5 vh-100 pt-2 align-items-end">
                    <timer :remaining-time="remainingTime"/>
                    <progres-soal class="mt-3 w-75" :total="total" :banyakSoalTerjawab="banyakSoalTerjawab"/>
                    <navigasi-soal class="mt-3" :soalTerjawab="soalTerjawab" :gantiSoal="gantiSoal"/>
                    <button type="button" class="btn btn-primary mt-3 elevate-1" data-toggle="modal" data-target="#konfirmasiSelesai" v-on:click="setBanyakSoalTerjawab()">Selesai</button>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="konfirmasiSelesai" tabindex="-1" aria-labelledby="konfirmasiSelesai" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-medium" id="konfirmasiSelesaiLabel">Konfirmasi Selesai</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h5>Apakah Anda yakin untuk mengumpulkan jawaban Anda?</h5>
                <h5 v-if="questions.length - banyakSoalTerjawab > 0">Banyak soal yang belum terjawab: {{ questions.length - banyakSoalTerjawab }}</h5>
            </div>
            <div class="modal-footer">
                <button type="button" v-on:click="finishAll($route.params.slug)" data-dismiss="modal" class="btn btn-primary">Kumpulkan</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Kembali</button>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
    import Soal from '../../components/quizzes/Soal.vue';
    import FilterSoal from '../../components/quizzes/FilterSoal.vue';
    import ProgresSoal from '../../components/quizzes/ProgresSoal.vue';
    import Timer from '../../components/quizzes/Timer.vue';
    import NavigasiSoal from '../../components/quizzes/NavigasiSoal.vue';
    import apiRoutes from "../../../router/api";
    import Connection from "../../../store/Connection";

    const daftarSoal = require('../../components/quizzes/DaftarSoal.json');

    export default {
        name: 'QuizDetails',
        components: {
            Soal,
            FilterSoal,
            ProgresSoal,
            Timer,
            NavigasiSoal
        },
        data() {
            return {
                selectedFilter: 'Semua Soal',
                questions: [],
                selectedSoal: 1,
                soalTerjawab: [],
                banyakSoalTerjawab: 0,
                seconds: 0,
                remainingTime: '',
                shouldUpload: false,
                a: null,
                b: null,
            }
        },
        computed:{
          total(){
              return this.questions.length;
          }
        },
        beforeMount() {
            this.getQuestions(this.$route.params.slug);
            // setTimeout(()=>{
            //
            // }, 2000);
        },
        mounted() {
            this.cekWaktu();
            this.a = setInterval(()=>{
                this.cekWaktu();
                if(this.hasNotSubmit())
                    this.submitAnswers(this.$route.params.slug);
            }, 2000);
            this.b = setInterval(()=>{
                this.seconds -= 1;
                this.setDuration();
            }, 1000);
        },
        beforeRouteLeave(to, from, next){
            clearInterval(this.a);
            clearInterval(this.b);
            next();
        },
        beforeRouteEnter: (to, from, next)=>{
            Connection.get(apiRoutes.quizBegin+'/'+to.params.slug).then(r=>{
                if(!r.data.error){
                    next();
                } else {
                    next(false);
                }
            });
        },
        methods: {
            hasNotSubmit: function(){
                return !!this.soalTerjawab.find(s=>!s.hasUploaded);
            },
            gantiSoal: function (nomorSoal) {
                this.selectedSoal = nomorSoal;
            },
            getAnswer: function(id){
                let ans = this.soalTerjawab.find(s=>s.id === id);
                if(!ans) return {};
                return ans;
            },
            setDijawab: function (id, jawaban) {
                let index = this.soalTerjawab.findIndex(s=>s.id === id);
                console.log(index);
                if(index === -1) return;
                this.soalTerjawab[index].key = jawaban;
                this.shouldUpload = true;

                const elemenNomor = document.getElementById(`nomor-soal-${id}`);
                this.soalTerjawab[index].hasUploaded = false;

                if(!jawaban){
                    elemenNomor.classList.remove('done')
                } else {
                    elemenNomor.classList.add('done')
                }
                // False Status, Means Question Hasn't been uploaded yet.
                this.setBanyakSoalTerjawab();
            },
            setBanyakSoalTerjawab: function () {
                this.banyakSoalTerjawab = this.soalTerjawab.filter(answer => !!answer.key).length;
            },
            cekWaktu: function(){
                Connection.get(apiRoutes.quizTime+'/'+this.$route.params.slug).then(r=>{
                    if(r.data.error){
                        this.$router.push('/quiz');
                    } else {
                        this.seconds = r.data.remaining_time;
                    }
                });
            },
            setDuration: function(){
                this.remainingTime = humanizeDuration(this.seconds*1000, {language: 'id'});
            },
            submitAnswers: function(slug){
                if(this.shouldUpload)
                    Connection.post(apiRoutes.quizSubmit+slug, {answers: this.soalTerjawab.filter(s=>!!s.key).map(s => {return {id:s.id, key: s.key}})})
                    .then(r=>{
                        console.log(r);
                        if(r.data.success){
                            let answered = this.soalTerjawab.filter(s=>!!s.key);
                            answered.forEach(a=>{
                                a.hasUploaded = true;
                            });
                            this.shouldUpload = false;
                        }
                    }).catch(e => console.log(e));
            },
            getQuestions: function(slug){
                Connection.get(apiRoutes.quizQuestions+slug).then(r=>{
                    if(r.data.questions){
                        let questions = r.data.questions;
                        this.soalTerjawab = questions.map(q => {return {id: q.id, key:q.answerKey, hasUploaded:!!q.answerKey}});
                        this.questions = questions.map(q=> {return {id: q.id, choices: JSON.parse(q.choices), question: q.question}});
                        this.setBanyakSoalTerjawab();
                    } else {
                        console.log('err');
                    }
                })
            },
            finishAll: function(slug){
                let self = this;
                clearInterval(this.a);
                clearInterval(this.b);
                Connection.get(apiRoutes.quizFinish+slug).then(r=>{
                    if(r.data.error){
                        console.log('an error occurred');
                    } else {
                        self.$router.push('/quiz?success=true').catch(err => {
                            if (err.name !== 'NavigationDuplicated') throw err
                        });
                    }
                });
            }
        },
    }
</script>

<style scoped>
    /* .soal:not(:last-child) {
        margin-bottom: 1.25rem;
    } */

    .soal::before {
        display: block;
        content: "";
        height: 64px;
        margin-top: -64px;
    }
    .sidebar {
        position: fixed;
        position: -webkit-sticky;
        top: 80px;
        right: calc((100vw - 720px) / 2);
        width: auto;
    }

    /* #btn-selanjutnya {
        display: none;
    }

    @media (min-width: 768px) {
        #btn-selanjutnya {
            display: inline-block;
        }
    } */

    @media (min-width: 992px) {
        .sidebar {
            right: calc((100vw - 960px) / 2);
        }
    }

    @media (min-width: 1200px) {
        .sidebar {
            right: calc((100vw - 1140px) / 2);
        }
    }
</style>
