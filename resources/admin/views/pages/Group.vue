<template>
    <div>
        <CRow>
            <CCol sm="12" md="12">
                <CCard>
                    <CCardHeader>
                        Data Kelompok Pendamping
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            hover
                            fixed
                            :fields="['ID', 'Nama Kelompok', 'Link Group', 'Aksi']"
                            :items="getDataset()"
                            :items-per-page="10"
                            pagination
                            clickable-rows
                        >
                            <template #Aksi="{item}">
                                <td>
                                    <router-link :to="'/kemahasiswaan/kelompok/'+item.ID">
                                        <CButton color="warning">Detail</CButton>
                                    </router-link>
                                    <router-link :to="'/kemahasiswaan/kelompok/edit/'+item.ID">
                                        <CButton color="primary">Edit</CButton>
                                    </router-link>
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
    import axios from 'axios';
    import Connection from "../../../js/store/Connection";

    export default {
        name: "Group",
        data(){
          return {
              dataset: [],
          }
        },
        methods: {
            getDataset(){
                return this.dataset.map(g=>{
                    return {
                        ID: g.id,
                        "Nama Kelompok": g.name,
                        "Link Group": g.line_group,
                    }
                })
            },
        },
        async beforeMount() {
            let res = await Connection.get(routes.group);
            if(res.data){
                this.dataset = res.data;
            }
        }
    }
</script>

<style scoped>

</style>
