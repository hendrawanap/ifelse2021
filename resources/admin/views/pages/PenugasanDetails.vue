<template>
    <div>
        <CRow>
            <CCol sm="12" md="12">
                <CCard>
                    <CCardHeader> Data Penugasan
                        <CButton color="primary" size="sm" class="float-right" @click="createJSON">
                            Download Penugasan
                        </CButton>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            hover
                            fixed
                            :fields="getFields()"
                            :items="getDataset()"
                            :items-per-page="10"
                            pagination
                            clickable-rows
                            @row-clicked="gotoProfile"
                            :columnFilter='{ external: false, lazy: true }'
                            :sorter='{ external: false, resetable: true }'
                            :tableFilter='{ external: false, lazy: true }'
                        >
                            <template #submission="{ item }">
                                <td>
                                    <a v-for="submission in Object.values(item.submission)" :href="submission" target="_blank">{{submission}}</a>,
                                </td>
                            </template>
                        </CDataTable>

                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
    import routes from "../../api";
    import Connection from "../../../js/store/Connection";

    export default {
        name: "PenugasanDetails",
        data(){
            return {
                dataset: [],
                fields: [],
                title: 'download',
            }
        },
        methods: {
            getDataset(){
                return this.dataset;
            },
            getFields(){
                return [
                    {key: 'nim', label: "NIM"},
                    {key: 'name', label: "Nama"},
                    {key: 'group', label: "Nama Kelompok"},
                    {key: 'submission', label: "Data"},
                    {key: 'submitted_at', label: "Dikumpulkan Pada"}
                ]
            },
            gotoProfile(item, id){
                this.$router.push('/kemahasiswaan/data/'+item.id);
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
                let headers = ['NIM', 'Nama', 'Kelompok'];
                let dataArray = [];

                for(let i in this.fields){
                    headers.push(this.fields[i].label);
                }

                headers.push('Dikumpulkan Pada');
                let newDataset = this.dataset.sort(function (a, b) {
                    return ('' + a.group).localeCompare(b.group+'');
                });

                for(let i in newDataset){
                    let _data = newDataset[i];
                    let submissions = Object.values(_data.submission);
                    dataArray.push([_data.nim, _data.name, _data.group, ...submissions, _data.submitted_at]);
                }
                jsonArray = [headers, ...dataArray];
                let json = jsonArray.map((row)=>{
                    return row.map((cell)=>{
                        return `"${cell}"`;
                    }).join(',');
                }).join('\r\n');
                this.exportToCSV(json, this.title);
            }
        },
        mounted() {
            let self = this;
            Connection.get(routes.tasks + this.$route.params.id).then(r=>{
               if(!r.data.error){
                   self.fields = r.data.fields;
                   self.title = r.data.title;
                   self.dataset = r.data.submissions.map(d=>{
                       return {
                           'id': d.student.id,
                           'nim': d.student.nim,
                           'name': d.student.name,
                           'group': d.student.group.name,
                           'submission': d.submission,
                           'submitted_at': d.submitted_at
                       }
                   });
               }
            });
        }
    }
</script>

<style scoped>

</style>
