<template>
    <div>
        <CRow>
            <CCol>
                <CCard :border-color="error? 'danger': ''">
                    <CCardHeader>
                        <strong>Edit Data</strong> untuk Kelompok ID 1<p class="float-right text-danger">{{error}}</p>
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

    import routes from "../../api";
    import Connection from "../../../js/store/Connection";

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
                Connection.setHeader('Content-Type', 'application/x-www-form-encoded');
                let res = await Connection.post(routes.groupEdit + this.$route.params.id, {name: this.name, line_group: this.line_group});
                console.log(res);
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
        async beforeMount() {
            let res = await Connection.get(routes.group+this.$route.params.id);
            if(res.data){
                this.dataset = res.data;
                this.name = this.dataset.name;
                this.id = this.dataset.id;
                this.line_group = this.dataset.line_group;
            }
        }
    }
</script>

<style scoped>

</style>
