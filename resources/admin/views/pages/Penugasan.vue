<template>
    <CRow>
        <CCol sm="12" md="12">
            <CCard>
                <CCardHeader>
                    Penugasan Tersedia
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        hover
                        fixed
                        :fields="['ID','Title', 'Dimulai Pada', 'Selesai Pada', 'Jumlah Field', 'Rangkaian', 'Aksi']"
                        :items="getDataset()"
                        :items-per-page="10"
                        pagination
                        clickable-rows
                    >
                        <template #Aksi="{item}">
                            <td>
                                <CButton data-id color="warning" @click="details(item.id)">Detail</CButton>
                                <CButton data-id :color="!item.isPublished? 'success': 'danger'" @click="togglePublish(item)">{{item.isPublished? 'Tutup': 'Buka'}}</CButton>
                            </td>
                        </template>
                    </CDataTable>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>
    import routes from "../../api";
    import Connection from "../../../js/store/Connection";

    export default {
        name: "Penugasan",
        data(){
            return {
                tasks: [],
            }
        },
        methods: {
            getDataset(){
                return this.tasks;
            },
            details(id){
                this.$router.push('/penugasan/'+id);
            },
            togglePublish(item){
                Connection.get(routes.taskTogglePublish+item.id).then(r=>{
                    if(r.data.status){
                        item.isPublished = !item.isPublished;
                    }
                });
            },
            retrieve(){
                let self = this;
                Connection.get(routes.tasks).then(r=>{
                    self.tasks = r.data.map(r=>{
                        return {
                            id: r.id,
                            "ID": r.id,
                            "Title" : r.title,
                            'Dimulai Pada': r.start_at,
                            'Selesai Pada': r.end_at,
                            'Jumlah Field': r.fields.length,
                            'Rangkaian' : r.agenda.title,
                            'isPublished': r.is_published
                        }
                    });
                });
            },
        },
        mounted() {
            this.retrieve();
        }
    }
</script>

<style scoped>

</style>
