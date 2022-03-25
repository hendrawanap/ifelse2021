<template>

<!--    <div class="card w-75 mx-auto mt-5">-->
<!--        <div class="card-body text-center">-->
<!--            <h1>EITSS!!<span>😲</span></h1>-->
<!--            <h5>Untuk Sekarang Halaman Ini Tidak Tersedia Mohon Balik Arah Yaa!!</h5>-->
<!--            <router-link to="/profile">-->
<!--                <button type="button" class="btn btn-primary">Klik Tombol ini untuk kembali <span>😊</span></button>-->
<!--            </router-link>-->
<!--        </div>-->
<!--    </div>-->
    <div>
    <alert v-if="$route.query.success" :isSuccess="$route.query.success" success-message="Quiz Berhasil Dikumpulkan"/>
    <Loading v-if="isLoading"/>
    <div v-else class="container py-4">
        <h1 class="mb-4 text-dark font-medium">Quiz</h1>
        <div class="d-flex flex-wrap my-n2 mx-n2">
            <template v-if="daftarQuiz.length">
                <quiz-card class="quiz-card relative my-2 mx-2" style="z-index: 4" v-for="quiz in daftarQuiz" :key="'quiz-'+quiz.id" :quiz="quiz" :setModalLink="setModalLink"/>
            </template>
            <template v-else>
                Belum Ada Quiz.
            </template>
        </div>

        <div class="modal fade" id="konfirmasiKerjakan" tabindex="-1" aria-labelledby="konfirmasiKerjakan" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="konfirmasiKerjakanLabel">Konfirmasi Kerjakan</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Apakah anda yakin untuk memulai pengerjaan quiz ini?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                    <router-link :to="modalLink">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Kerjakan</button>
                    </router-link>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import QuizCard from '../../components/quizzes/QuizCard.vue';
import Loading from '../../components/Loading.vue';
import apiRoutes from "../../../router/api";
import Connection from "../../../store/Connection";
import Alert from "../../components/Alert";

export default {
    name: 'QuizIndex',
    components: {
        QuizCard,
        Loading,
        Alert,
    },
    data() {
        return {
            daftarQuiz: [],
            modalLink: '#',
            isLoading: true,
        }
    },
    methods: {
        setModalLink(quizId) {
            this.modalLink = `/quiz/${quizId}`;
        }
    },
    mounted() {
        Connection.get(apiRoutes.quiz).then(r=>{
            let data = r.data;
            console.log(data);
            this.daftarQuiz = data.map(quiz => {
                return {
                    id: quiz.id,
                    label: quiz.label,
                    starts: quiz.start_at + " WIB",
                    deadline: quiz.end_at + " WIB",
                    excerpt: quiz.excerpt,
                    durasi: quiz.duration_sec/60 + " Menit",
                    jumlahSoal: quiz.total,
                    type: quiz.status,
                    jumlahBenar: quiz.marking,
                    selesai: quiz.ended_at + " WIB",
                }
            })
            setTimeout(()=>{
                this.isLoading = false;
            }, 1000);
        }).catch(e=>{
            console.log(e);
        });
    },
}
</script>

<style scoped>
    .quiz-card {
        width: 100%;
    }

    @media (min-width: 768px) {
        .quiz-card {
            width: 330px;
        }
    }

    @media (min-width: 992px) {
        .quiz-card {
            width: 290px;
        }
    }

    @media (min-width: 1200px) {
        .quiz-card {
            width: 350px;
        }
    }
</style>
