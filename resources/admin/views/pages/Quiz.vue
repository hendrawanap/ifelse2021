<template>
    <CRow>
        <CCol sm="12" md="12">
            <CCard>
                <CCardHeader>
                    Quiz Tersedia
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        hover
                        fixed
                        :fields="['ID','Title', 'Dimulai Pada', 'Selesai Pada']"
                        :items="getDataset()"
                        :items-per-page="10"
                        pagination
                        clickable-rows
                        @row-clicked="rowClicked"
                    >
                    </CDataTable>
                </CCardBody>
            </CCard>
        </CCol>
        <CCol sm="6" md="6">
            <CCard>
                <CCardHeader>
                    Rata-rata Nilai
                </CCardHeader>
                <CCardBody>
                    <CChartBar :labels="quizLabels" :datasets="markings" :options="{ maintainAspectRatio: false }"/>
                </CCardBody>
            </CCard>
        </CCol>
        <CCol sm="6" md="6">
            <CCard>
                <CCardHeader>
                    Jangka Waktu Pengerjaan
                </CCardHeader>
                <CCardBody>
                    <CChartLine :labels="chartLabel" :datasets="getLineDataset()"/>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>

    import CChartDoughnutExample from "../charts/CChartDoughnutExample";
    import {CChartBar, CChartLine} from '@coreui/vue-chartjs'
    import api from '../../api';
    import 'humanize-duration'
    import dateDiff from '../../dateDiff.js';
    import randomize from "../../randomize";
    import Connection from "../../../js/store/Connection";

    // Per Hour
    const quizSubmissions = [];

    export default {
        name: "Quiz",
        components: {CChartBar, CChartLine, CChartDoughnutExample},
        data(){
            return{
                quizzes: [],
                markings: [],
                quizLabels: [],
                quizSubmissions,
                chartLabel: [],
            }
        },
        methods: {
            getMeanArray(){
                let quizzes = this.quizzes;
                return [{
                    data: quizzes.map(q=>q.mean),
                    backgroundColor: quizzes.map(q=>{ return randomize.color().toRGB()}),
                    label: 'Rata-rata Nilai',
                }]
            },
            getLineDataset(){
                return this.quizSubmissions.map(s=>{
                    return {
                        label: s.label,
                        data: s.submissions.map(s=>s.value),
                        backgroundColor: randomize.color().toRGBA(0.84)
                    }
                });
            },
            getDataset(){
                return this.quizzes.map(a => {
                    return {"ID": a.id, 'Title': a.label, 'Dimulai Pada': a.start_at, 'Selesai Pada': a.end_at}
                });
            },
            rowClicked(item, index){
                this.$router.push('/quiz/'+item.ID);
            }
        },
        async mounted() {
            let res = await Connection.get(api.quiz);
            this.quizzes = res.data;
            this.quizLabels = this.quizzes.map(q => q.title);
            this.markings = this.getMeanArray();

            this.quizSubmissions = [];
            // Get Quiz Answer Information
            let quizRange = await Connection.get(api.quiz+'info');
            quizRange = quizRange.data;

            // Get Min Max
            let min = quizRange[0].date;
            let max = quizRange[quizRange.length - 1].date;

            // Get Submissions By Range


            for(let i in this.quizzes){
                let id = this.quizzes[i].id;
                let label = this.quizzes[i].label;


                if(quizRange.length > 0){

                    let submissions = dateDiff.createRange(min, max, 12, quizRange.filter(q=>q.id === id).map(q=>{return q.date}));
                    this.chartLabel = submissions.map(a=>a.label);
                    console.log(this.chartLabel);
                    this.quizSubmissions.push(
                        {
                            label,
                            submissions
                        }
                    );
                }

            }

        }
    }
</script>

<style scoped>

</style>
