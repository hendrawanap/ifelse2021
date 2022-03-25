<template>
    <div>
        <CRow>
            <CCol sm="12" md="12">
                <CCard>
                    <CCardHeader>
                        Data Kelompok Pendamping
                        <CButton class="float-right" size="sm" color="primary">Tambah</CButton>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            hover
                            fixed
                            :fields="['No', 'Nama Pendamping', 'LINE', 'Nomor Telepon/WA', 'Aksi']"
                            :items="getDataset()"
                            :items-per-page="10"
                            pagination
                            clickable-rows
                        >
                            <template #Aksi="{item}">
                                <td>
                                    <CButton color="primary">Hapus Pendamping</CButton>
                                </td>
                            </template>
                        </CDataTable>
                    </CCardBody>
                </CCard>
            </CCol>

            <CCol sm="12" md="12">
                <CCard>
                    <CCardHeader>
                        Data Mahasiswa Terkait
                        <CButton class="float-right" size="sm" color="primary">Tambah</CButton>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            hover
                            fixed
                            :fields="['No', 'NIM', 'Nama', 'Nama Panggilan', 'Whatsapp', 'Line']"
                            :items="getStudents()"
                            :items-per-page="10"
                            pagination
                            clickable-rows
                            wrap
                        >
                            <template #Aksi="{item}">
                                <td>
                                    <CButton color="primary">Hapus Pendamping</CButton>
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
        name: "GroupDetails",
        data(){
            return {
                companionDataset: [],
                studentsDataset: [],
            }
        },
        methods: {
            getDataset(){
                return this.companionDataset.map((d,i)=>{
                    return {
                        id: d.id,
                        'No': i+1,
                        'Nama Pendamping': d.name,
                        'LINE': d.line,
                        'Nomor Telepon/WA': d.phone,
                    }
                })
            },
            getStudents(){
                return this.studentsDataset.map((d,i)=>{
                    return {
                        'id': d.id,
                        'No': i+1,
                        'NIM': d.nim,
                        'Nama': d.name,
                        'Nama Panggilan': d.nickname,
                        'Whatsapp': d.whatsapp,
                        'Line': d.line,
                    };
                })
            }
        },
        async beforeMount() {
            let res = await Connection.get(routes.groupCompanions+this.$route.params.id);
            if(!res.data.error){
                this.companionDataset = res.data;
            }
            res = await Connection.get(routes.groupStudents+this.$route.params.id);
            if(!res.data.error){
                console.log(res.data);
                this.studentsDataset = res.data;
            }
        }

    }
</script>

<style scoped>

</style>
