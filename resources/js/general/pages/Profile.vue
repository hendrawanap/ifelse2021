<template>
    <div>
        <template v-if="isLoading">
            <Loading/>
        </template>
        <template v-else>
            <div class="w-100">
                <div class="container py-4 pb-5 mb-n3">
                    <div class="row mb-2">
                        <div class="col-lg-3 mb-2">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="card mx-auto rounded-circle mb-3 mt-3" style="width: 100px; height: 100px; overflow: hidden">
                                        <img v-if="biodata.avatar" style="object-fit: cover; height: 100%; width: 100%" :src="'/images/' + biodata.avatar">
                                    </div>
                                    <h3>{{ biodata.nickname }}</h3>
                                    <p class="mb-0 text-black-50 ">{{ biodata.nim }}</p>
                                    <template v-if="biodata.group">
                                        <p class="mb-1 text-black-50">{{ biodata.group? biodata.group.name:'Tidak Memiliki Kelompok' }}</p>
                                        <a class="mb-1 btn btn-outline-primary btn-sm w-75" :href="'//'+biodata.group.line_group" target="_blank">Link Group</a>
                                        <a class="mb-3 btn btn-outline-primary btn-sm w-75" data-toggle="modal" data-target="#passwordModel">Ganti Password</a>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col-sm-3">Nama</div>
                                        <div class="col-sm-9 text-secondary">{{ biodata.name }}</div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-sm-3">NIM</div>
                                        <div class="col-sm-9 text-secondary">{{ biodata.nim }}</div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-sm-3">Alamat</div>
                                        <div class="col-sm-9 text-secondary">{{ biodata.address }}</div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-sm-3">Id Line</div>
                                        <div class="col-sm-9 text-secondary">{{ biodata.line }}</div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-sm-3">Nomor Whatsapp</div>
                                        <div class="col-sm-9 text-secondary">{{ biodata.whatsapp }}</div>
                                    </div>
                                    <template v-if="biodata.companions">
                                        <div class="row mb-2 text-primary">
                                            <div class="col-sm-3" style="font-weight: bold">Pendamping</div>
                                        </div>
                                        <template v-for="companion in biodata.companions">
                                            <div class="row mb-2 text-primary">
                                                <div class="col-sm-3">Nama</div>
                                                <div class="col-sm-9">{{ companion.name }}</div>
                                            </div>
                                            <div class="row mb-2 text-primary">
                                                <div class="col-sm-3">ID LINE</div>
                                                <div class="col-sm-9">{{ companion.line }}</div>
                                            </div>
                                            <div class="row text-primary">
                                                <div class="col-sm-3">Nomor Telepon/WA</div>
                                                <div class="col-sm-9">{{ companion.phone }}</div>
                                            </div>
                                        </template>
                                    </template>
                                    <div>
                                        <button class="btn btn-secondary pl-3 pr-3 mt-2 text-white" data-toggle="modal" data-target="#editModal">Edit Data</button>
                                        <button class="btn btn-secondary  mt-2 text-white" data-toggle="modal" data-target="#editProfilePicModal">Ganti Foto Profil</button>
                                        <router-link to="/pendataan" class="btn btn-secondary pl-3 pr-3 mt-2 text-white">Pendataan</router-link>
                                        <router-link to="/perizinan" class="btn btn-secondary pl-3 pr-3 mt-2 text-white">Perizinan</router-link>
                                        <router-link to="/presensi" class="btn btn-secondary pl-3 pr-3 mt-2 text-white">Presensi</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-n2">
                      <progress-penugasan class="col-md-6 col-12 px-2" v-for="score,index in kelulusan.nilai" :key="'rangkaian-'+index" :nilai="score" :rangkaian-ke="index+1"/>
                    </div>
                    <a v-if="kelulusan.isLulus" target="_blank" class="btn btn-primary w-100 fw-bold text-white" :href="kelulusan.linkSertifikat">Cetak Sertifikat</a>
                    <router-link v-else class="btn btn-primary w-100 fw-bold text-white" to="/failed">Cetak Sertifikat</router-link>
                    <!-- <button class="btn btn-primary w-100 fw-bold text-white">
                    </button> -->
                </div>
            </div>

        <div class="modal fade" id="passwordModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="some">Ubah Password</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Password Baru</label>
                            <input type="text" class="form-control" v-model="newPassword" name="new-password" required placeholder="Jangan Lupakan Password ini">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updatePassword()">Perbarui</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Data</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Ubah Id Line</label>
                            <input type="text" class="form-control" v-model="newBiodata.line" aria-describedby="emailHelp" placeholder="Contoh: dewa_kipas02">
                        </div>
                        <div class="form-group">
                            <label>Ubah Nomor Whatsapp</label>
                            <input type="text" class="form-control" v-model="newBiodata.whatsapp" placeholder="Contoh: 087883945647">
                        </div>
                        <div class="form-group">
                            <label>Ubah Alamat</label>
                            <input type="text" class="form-control" v-model="newBiodata.address" placeholder="Contoh: Jl. XXXX No.X">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateContact()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editProfilePicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Ubah Foto Profil</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="picture-container">
                            <div class="picture mb-3">
                                <img src="https://lh3.googleusercontent.com/LfmMVU71g-HKXTCP_QWlDOemmWg4Dn1rJjxeEsZKMNaQprgunDTtEuzmcwUBgupKQVTuP0vczT9bH32ywaF7h68mF-osUSBAeM6MxyhvJhG6HKZMTYjgEv3WkWCfLB7czfODidNQPdja99HMb4qhCY1uFS8X0OQOVGeuhdHy8ln7eyr-6MnkCcy64wl6S_S6ep9j7aJIIopZ9wxk7Iqm-gFjmBtg6KJVkBD0IA6BnS-XlIVpbqL5LYi62elCrbDgiaD6Oe8uluucbYeL1i9kgr4c1b_NBSNe6zFwj7vrju4Zdbax-GPHmiuirf2h86eKdRl7A5h8PXGrCDNIYMID-J7_KuHKqaM-I7W5yI00QDpG9x5q5xOQMgCy1bbu3St1paqt9KHrvNS_SCx-QJgBTOIWW6T0DHVlvV_9YF5UZpN7aV5a79xvN1Gdrc7spvSs82v6gta8AJHCgzNSWQw5QUR8EN_-cTPF6S-vifLa2KtRdRAV7q-CQvhMrbBCaEYY73bQcPZFd9XE7HIbHXwXYA=s200-no" class="picture-src" id="wizardPicturePreview" title="">
                                <input type="file" ref="avatar" id="wizard-picture" @change="changeProfile">
                            </div>
                            <h5 class="text-center mx-auto">Click Above To Change</h5>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateProfilePic">Save changes</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- <div class="modal fade" id="progressModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-if="selectedProgress" class="modal-title">Progress Penugasan Rangkaian {{ selectedProgress.rangkaianId }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-if="selectedProgress" class="row pl-1 pr-1 pt-2 justify-content-center">

                            <div v-for="(penugasan, index) in selectedProgress.penugasan" :key="`penugasan-${index+1}`" class="card m-2" style="width: 10rem;">
                                <div class="card-body pl-1 pr-1 text-center">
                                    <h5 class="card-title">Penugasan {{ index + 1 }}</h5>
                                    <span class="fa fa-6x text-center mb-3" :class="[penugasan ? 'fa-check' : 'fa-times']"></span>
                                </div>
                            </div>
                            <div v-for="(quiz, index) in selectedProgress.quiz" :key="`quiz-${index+1}`" class="card m-2" style="width: 10rem;">
                                <div class="card-body pl-1 pr-1 text-center">
                                    <h5 class="card-title">Quiz {{ index + 1 }}</h5>
                                    <span class="fa fa-6x text-center mb-3" :class="[quiz ? 'fa-check' : 'fa-times']"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary w-100" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- End Modal -->
        </template>
    </div>
</template>

<script>
import ProgressPenugasan from '../components/profile/ProgressPenugasan.vue';
import profileBg from '../../../images/login-bg.png';
import apiRoutes from "../../router/api";
import Connection from "../../store/Connection";
import Loading from "../components/Loading";

export default {
    components: {Loading, ProgressPenugasan },
    data() {
        return {
            profileBg,
            isLoading: true,
            biodata: {
                name: '',
                nickname: '',
                nim: '',
                address: '',
                line: '',
                whatsapp: '',
                group: '',
                avatar: null,
                companions: [],
            },
            selectedProgress: null,
            daftarProgress: null,
            newBiodata: {
                line: '',
                whatsapp: '',
                address: '',
                avatar: null,
            },
            newPassword: '',
            kelulusan: {
              isLulus: false,
              nilai: [0, 0, 0, 0],
            },
        }
    },
    async mounted() {

        //Profile Picture JS
        $(document).ready(function(){
            $("#wizard-picture").change(function(){
                readURL(this);
            });
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        // this.daftarProgress = await this.getAgendas();
        this.kelulusan  = await this.getKelulusan();
        let res = await Connection.get(apiRoutes.profile);
        if(res.data.error === 'Unauthorized'){
            await this.$router.push('/login');
            return;
        }

        this.biodata = res.data;
        this.newBiodata = {
            line: this.biodata.line,
            whatsapp: this.biodata.whatsapp,
            avatar: this.biodata.avatar,
            address: this.biodata.address,

        };
        setTimeout(()=>{
            this.isLoading = false;
        }, 1000);
    },
    methods: {
        openLink(a){
            location.href = a;
        },
        async updatePassword() {
            let password = this.newPassword;
            let res = await Connection.post(apiRoutes.changePassword, {password});
            if(!res.data.error){
                console.log('succeeded');
            }
            this.newPassword = '';
        },
        // getProgress(rangkaianId) {
        //     this.daftarProgress.find(progress => progress.rangkaianId === rangkaianId)
        // },
        // changeSelected(rangkaianId) {
        //     this.selectedProgress = this.daftarProgress.find(progress => progress.rangkaianId === rangkaianId)
        // },
        async updateContact() {
            let {line, whatsapp, address} = this.newBiodata;
            let res = await Connection.post(apiRoutes.profileContact, {line, whatsapp, address});
            if(res.data.status === 'success'){
                this.biodata.whatsapp = whatsapp;
                this.biodata.line = line;
                this.biodata.address = address;
            }
        },
        changeProfile(e){
            this.biodata.avatar = e.target.files[0];
        },
        async updateProfilePic() {
            if(this.biodata.avatar){
                let avatar = this.biodata.avatar;
                let formData = new FormData();
                formData.append('avatar', avatar);
                Connection.setHeader('Content-Type','multipart/form-data');
                let res = await Connection.post(apiRoutes.profilePicture, formData);
                if(!res.data.error){
                    this.biodata.avatar = res.data.avatar;
                    console.log('succeeded');
                }
            }
        },

        async getKelulusan() {
          let res = await Connection.get('/api/profile/graduation');
          let message = res.data.message
          let data;
          if (message == 'success') {
            data = res.data.kelulusan;

            return {
              isLulus: data.isLulus,
              nilai: data.nilai,
              linkSertifikat: data.linkSertifikat == 'blank' ? null : data.linkSertifikat,
            }
          } else {
            return {
              isLulus: false,
              nilai: [0, 0, 0, 0],
            }
          }
          // return {
          //   isLulus: false,
          //   nilai: [0, 0, 0, 0],
          // }
        },

        // async getAgendas() {
        //     let res = await Connection.get(apiRoutes.profileAgendas);
        //     let agendas = res.data.agenda;
        //     let quizzes = res.data.quizzes;
        //     let tasks = res.data.tasks;

        //     let daftarProgress = [];

        //     for(let i in agendas){
        //         let id = agendas[i].id;
        //         let agendaTasks = agendas[i].published_tasks.map(t=>{
        //             return !!tasks.find(task => task.task_id === t.id)
        //         });
        //         let agendaQuizzes = agendas[i].published_quizzes.map(a=>{
        //             return !!quizzes.find(q=>q.quiz_id === a.id);
        //         });

        //         let combine = [...agendaTasks, ...agendaQuizzes];

        //         daftarProgress.push(
        //             {
        //                 rangkaianId: id,
        //                 rangkaian: agendas[i].title,
        //                 penugasan: agendaTasks,
        //                 quiz: agendaQuizzes,
        //                 persentase: Math.round(combine.filter(c=>c).length / combine.length * 100)
        //             }
        //         )
        //     }

        //     return daftarProgress;
        // }
    }
}
</script>

<style scoped>
    @media (max-width: 768px) {
        .btn, .btn-group {
            width:100%;
        }
    }
    .picture-container{
        position: relative;
        cursor: pointer;
        text-align: center;
    }
    .picture{
        width: 106px;
        height: 106px;
        background-color: #999999;
        border: 4px solid #CCCCCC;
        color: #FFFFFF;
        border-radius: 50%;
        margin: 0px auto;
        overflow: hidden;
        transition: all 0.2s;
        -webkit-transition: all 0.2s;
    }
    .picture:hover{
        border-color: #2ca8ff;
    }
    .content.ct-wizard-green .picture:hover{
        border-color: #05ae0e;
    }
    .content.ct-wizard-blue .picture:hover{
        border-color: #3472f7;
    }
    .content.ct-wizard-orange .picture:hover{
        border-color: #ff9500;
    }
    .content.ct-wizard-red .picture:hover{
        border-color: #ff3b30;
    }
    .picture input[type="file"] {
        cursor: pointer;
        display: block;
        height: 100%;
        left: 0;
        opacity: 0 !important;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .picture-src{
        width: 100%;

    }
</style>
