<template>
    <div>
        <CRow>
            <CCol>
                <CCard :border-color="error? 'danger': ''">
                    <CCardHeader>
                        <strong>Form Penambahan Kelompok</strong><p class="float-right text-danger">{{error}}</p>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CInput
                                description="Pastikan nama kelompok tidak typo"
                                label="Nama Kelompok"
                                horizontal
                                v-model="name"
                            />
                            <CInput
                                description="Pastikan Link berupa URL"
                                label="Link Group LINE"
                                horizontal
                                v-model="line_group"
                            />
                        </CForm>
                    </CCardBody>
                    <CCardFooter>
                        <CButton color="primary" @click="update()">Kumpulkan</CButton>
                        <CButton color="danger" @click="resetFields()">Reset</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>

import Connection from "../../../js/store/Connection";
import routes from "../../api";

    export default {
        name: "GroupDetails",
        data(){
            return {
                name: '',
                id: '',
                line_group: '',
                dataset: {},
                error: '',
            }
        },
        methods: {
            resetFields(){
                this.name = this.dataset.name;
                this.id = this.dataset.id;
                this.line_group = this.dataset.line_group;
            },
            async update(){
                this.error = '';
                if(!this.name || !this.line_group){
                    this.error = 'Field Harus Terisi';
                    return;
                }
                Connection.setHeader('Content-Type', 'application/json');
                let res = await Connection.post(routes.groupAdd, {name: this.name, line_group: this.line_group});
                if(res.data.error){
                    if(res.data.error === 'validation'){
                        this.error = 'Validation Error';
                    } else {
                        this.error = 'ID Not Found';
                    }
                } else {
                    await this.$router.push('/kemahasiswaan/kelompok/');
                }
            }
        },
    }
</script>

<style scoped>

</style>
