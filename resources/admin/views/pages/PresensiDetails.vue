<template>
    <div>
        <CCol sm="12" md="12">
            <CCard>
                <CCardHeader>
                    Data Mahasiswa yang Sudah Presensi
                    <CButton size="sm" color="primary" class="float-right" @click="createJSON">Download</CButton>
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        wrap
                        hover
                        fixed
                        :fields="['No', 'NIM', 'Kelompok', 'Nama', 'Waktu Presensi']"
                        :items="getDataset()"
                        :items-per-page="10"
                        pagination
                    >
                    </CDataTable>
                </CCardBody>
            </CCard>
        </CCol>
    </div>
</template>

<script>
    import routes from '../../api';
    import Connection from "../../../js/store/Connection";
    export default {
        name: "PresensiDetails",
        data(){
            return {
                list: []
            }
        },
        methods: {
            getDataset(){
                return this.list;
            },
            refreshDataset(){
                let self = this;
                Connection.get(routes.attendances+this.$route.params.id).then(r=>{
                    if(!r.data.error){
                        self.list = r.data.map((d, i)=>{
                           return {
                               "No": i+1,
                               "NIM": d.student.nim,
                               "Kelompok": d.student.group.name,
                               "Nama": d.student.name,
                               "Waktu Presensi": d.attended_at
                           }
                        });
                    }
                })
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
                let headers = ['No', 'NIM','Nama', 'Kelompok', 'Waktu Presensi'];
                let dataArray = [];

                let newDataset = this.getDataset().sort(function (a, b) {
                    return ('' + a.Kelompok).localeCompare(b.Kelompok+'');
                });

                let ind = 1;
                for(let i in newDataset){
                    let _data = newDataset[i];
                    dataArray.push([ind++, _data.NIM, _data.Nama, _data.Kelompok, _data['Waktu Presensi']]);
                }
                jsonArray = [headers, ...dataArray];
                let json = jsonArray.map((row)=>{
                    return row.map((cell)=>{
                        return `"${cell}"`;
                    }).join(',');
                }).join('\r\n');
                this.exportToCSV(json, 'Presensi');
            }
        },
        mounted(){
            this.refreshDataset();
        }
    }
</script>

<style scoped>

</style>
