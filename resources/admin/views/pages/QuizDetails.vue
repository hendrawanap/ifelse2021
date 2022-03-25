<template>
    <div>
        <CRow>
            <CCol sm="12" md="12">
                <CCard>
                    <CCardHeader>
                        Data Peserta
                        <div class="float-right">
                            <CButton @click="createJSON" size="sm" color="warning">Download</CButton>
                            <CButton @click="togglePublish" class="float-right ml-2" size="sm" :color="quiz.is_published? 'primary': 'danger'">{{quiz.is_published? 'Tutup': 'Buka'}}</CButton>
                        </div>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            hover
                            fixed
                            :fields="['NIM','Nama', 'Kelompok', 'Mulai Pada', 'Selesai Pada', 'Nilai']"
                            :items="getDataset"
                            :items-per-page="10"
                            pagination
                            clickable-rows
                            :column-filter="{external: false, lazy: true}"
                        >
                        </CDataTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
    import fakeQuizzes from '../data';
    import api from "../../api";
    import Connection from "../../../js/store/Connection";

    export default {
        name: "QuizDetails",
        data(){
            return {
                quiz: {},
                data: [],
            }
        },
        computed: {
            getDataset(){
                return this.data.map(a=>{
                    return {
                        'NIM': a.nim,
                        'Nama': a.name,
                        'Mulai Pada': a.started_at,
                        'Kelompok': a.group,
                        'Selesai Pada': a.ended_at,
                        'Nilai': a.marking,
                    }
                })
            },
        },
        methods:{
            togglePublish(){
                let self = this;
                Connection.get(api.quizTogglePublish + this.$route.params.id).then(r=>{
                    if(r.data.status){
                        self.quiz.is_published = !self.quiz.is_published;
                    }
                });
            },
            exportToCSV(json, title){
                const blob = new Blob([json], { type: 'application/csv' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = title + '.csv';
                link.click();
                URL.revokeObjectURL(link.href)
            },
            createJSON(){
                let jsonArray = [];
                let headers = ['NIM','Nama', 'Kelompok', 'Mulai Pada', 'Selesai Pada', 'Nilai'];
                let dataArray = [];

                let newDataset = this.data.sort(function (a, b) {
                    return ('' + a.group).localeCompare(b.group+'');
                });

                for(let i in newDataset){
                    let _data = newDataset[i];
                    dataArray.push([_data.nim, _data.name, _data.group, _data.started_at, _data.ended_at,_data.marking]);
                }
                jsonArray = [headers, ...dataArray];
                let json = jsonArray.map((row)=>{
                    return row.map((cell)=>{
                        return `"${cell}"`;
                    }).join(',');
                }).join('\r\n');
                this.exportToCSV(json, this.quiz.label);
            }
        },

        async mounted() {
            let res = await Connection.get(api.quiz + this.$route.params.id);
            this.data = res.data.students;
            this.quiz = res.data.quiz;
        }
    }
</script>

<style scoped>

</style>
