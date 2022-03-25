<template>
    <div>
        <CRow>
            <CCol lg="12">
                <CCard>
                    <CCardHeader>
                        <CIcon name="cil-user" />
                        <strong>Profil Mahasiswa</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol lg="10">
                                <CForm>
                                    <CInput
                                        label="Nama"
                                        horizontal
                                        v-model="studentData.name"
                                        readonly
                                    />
                                    <CInput
                                        label="NIM"
                                        horizontal
                                        v-model="studentData.nim"
                                        readonly
                                    />
                                    <CInput
                                        label="Whatsapp"
                                        horizontal
                                        v-model="studentData.whatsapp"
                                        readonly
                                    />
                                    <CInput
                                        label="Alamat"
                                        horizontal
                                        v-model="studentData.address"
                                        readonly
                                    />
                                    <CInput
                                        label="Nama Kelompok"
                                        horizontal
                                        v-model="studentData.group.name"
                                        readonly
                                    />
                                    <CInput
                                        label="Nama Pendamping"
                                        horizontal
                                        v-model="studentData.companion.name"
                                        readonly
                                    />
                                </CForm>

                            </CCol>
                            <CCol>
                                <img v-if="studentData.avatar" class="rounded-circle" style="aspect-ratio: 1; object-fit: cover; height: auto; width: 100%" :src="'/images/' + studentData.avatar">
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
                <CCard>
                    <CCardHeader>
                        <CIcon name="cil-task" />
                        <strong>Quiz Mahasiswa</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            wrap
                            hover
                            fixed
                            :fields="['No', 'Title', 'Agenda', 'Nilai', 'Dikumpulkan Pada']"
                            :items="quizzes"
                            :items-per-page="10"
                            pagination
                        >
                        </CDataTable>
                    </CCardBody>
                </CCard>
                <CCard>
                    <CCardHeader>
                        <CIcon name="cil-task" />
                        <strong>Penugasan Mahasiswa</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            wrap
                            hover
                            fixed
                            :fields="['No', 'Title', 'Agenda', 'Status', 'Dikumpulkan Pada', 'Aksi']"
                            :items="tasks"
                            :items-per-page="10"
                            pagination
                        >
                        <template #Aksi="{ item }">
                            <CButton
                                @click="openDetails(item)"
                                color="warning"
                            >
                                Detail
                            </CButton>
                        </template>
                        </CDataTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>

        <CModal
            :title="selectedTask && selectedTask['Title']"
            color="info"
            :show.sync="detailModal"
            size="lg"
        >
            <template v-if="selectedTask">
                <CForm>
                    <CInput
                        v-for="(submission, index) in selectedTask.submissions"
                        :key="'submission' + index"
                        :label="submission.label"
                        v-model="submission.content"
                        readonly
                    />
                    <CInput
                        label="Nilai"
                        v-model="selectedTask.nilai"
                    />
                </CForm>
            </template>
            <template v-slot:footer>
                <CButton color="secondary" @click="detailModal = false">Tutup</CButton>
                <CButton color="info" @click="simpanNilai()">Simpan</CButton>
            </template>
        </CModal>
    </div>
</template>

<script>
    import Connection from "../../../js/store/Connection";
    import routes from "../../api";

    export default {
        name: "ProfileDetails",
        data() {
            return {
                avatar: '../../img/avatars/1.jpg',
                studentData: null,
                quizzes: [],
                tasks:[],
                selectedTask: null,
                detailModal: false,
            }
        },
        methods: {
            openDetails(item) {
                this.detailModal = true;
                this.selectedTask = this.tasks[item['No']-1];
            },
            simpanNilai() {

                this.detailModal = false;
            },
            retrieve(){
                Connection.get(routes.students+this.$route.params.id).then(r=>{
                    if(!r.err){
                        console.log(r);
                        this.studentData = r.data;
                        this.quizzes = r.data.quizzes.map((quiz, i) => {
                            return {
                                'No': i+1,
                                'Title': quiz.quiz.label,
                                'Agenda': quiz.quiz.agenda_id,
                                'Nilai': Math.round(quiz.marking, 2),
                                'Dikumpulkan Pada': quiz.ended_at,
                            }
                        });
                        this.tasks = r.data.submissions.map((task, i) => {
                            return {
                                'No': i+1,
                                'Title': task.task.title,
                                'Agenda': task.task.agenda_id,
                                'Status': 'Belum Dinilai',
                                'Dikumpulkan Pada': task.submitted_at,
                                'submissions': task.task.fields.map((submission) => {
                                    return {
                                        label: submission.label,
                                        content: task.submission[submission.id]
                                    }
                                }),
                                'nilai': task.marking,
                            }
                        });
                    }
                })
            },
        },
        async mounted(){
            this.retrieve();
        }
    }
</script>

<style scoped>

</style>
