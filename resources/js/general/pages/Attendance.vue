<template>
    <Loading v-if="!isMounted"/>
    <div v-else class="container col-lg-5">
        <alert v-if="success || hasError" :isSuccess="success" success-message="Berhasil Presensi!" error-message="Kode Salah! Coba Masukkan Kode yang Benar"/>
        <div class="card mx-auto mt-5" v-if="hasAttendance">
            <div class="card-body">
                <h5>Presensi Rangkaian</h5>
                <div class="form-group">
                    <!-- <small class="text-danger" v-if="hasError">
                        Kode yang diinput salah.
                    </small> -->
                    <input v-model="code" class="form-control w-100" placeholder="Kode Presensi">
                    <small id="emailHelp" class="form-text text-muted">Pastikan kode yang diinput sudah benar ya!</small>
                </div>
                <button @click="upload" class="btn btn-primary w-100">Presensi</button>
            </div>
        </div>

        <div class="card mx-auto mt-5" style="width: 30rem" v-else>
            <div class="card-body">
                <h1 class="text-center">Tidak Ada Presensi</h1>
                <h5 class="text-center">Tidak ada presensi yang sedang berjalan, cek lagi disaat ada rangkaian yaa :)</h5>
            </div>
        </div>



    </div>
</template>

<script>
    import axios from 'axios';
    import apiRoutes from "../../router/api";
    import Connection from "../../store/Connection";
    import Loading from "../components/Loading";
    import Alert from "../components/Alert";
    export default {
        name: "Attendance",
        components: {Loading, Alert},
        data(){
            return {
                hasAttendance:false,
                code: '',
                hasError: false,
                isMounted: false,
                success: false,
            }
        },
        mounted(){
            console.log(this.$route.query);
            if(this.$route.query){
                if(this.$route.query.code){
                    this.code = this.$route.query.code;
                    this.upload();
                } else {
                    this.checkForAttendance();
                }
            } else {
                this.checkForAttendance();
            }
        },
        methods: {
            checkForAttendance(){
                let self = this;
                this.isMounted = false;
                Connection.get(apiRoutes.hasAttendance).then(r=>{
                    self.hasAttendance = !!r.data.result;
                    this.isMounted = true;
                });
            },
            upload(e){
                this.hasError = false;
                let self = this;
                Connection.get(apiRoutes.attend+this.code).then(r=>{
                    if(r.data.error){
                        self.hasError = true;
                        this.checkForAttendance();
                    } else {
                        self.code = '';
                        self.success = true;
                        this.checkForAttendance();
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
