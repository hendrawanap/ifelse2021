<template>
    <div>
        <CRow>
            <CCol sm="12">
                <CCard :border-color="hasError? 'danger' : ''">
                    <CCardHeader>
                        <strong>Quiz Form</strong>
                        <span v-if="isUploading" class="float-right text-secondary">Is Uploading..</span>
                        <span v-if="hasError" class="float-right text-danger">Some Error Occurred</span>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CInput
                                description="Berikan judul yang sesuai"
                                label="Judul Penugasan"
                                horizontal
                                required
                                v-model="title"
                            />
                            <CTextarea
                                rows="10"
                                description="Berikan Keterangan Tugas"
                                label="Deskripsi"
                                horizontal
                                required
                                v-model="description"
                            />
                            <CInput
                                label="Total Field"
                                description="Sebutkan total field yang akan disediakan saat pengisian"
                                type="number"
                                horizontal
                                @change="changeTotal"
                                required
                                v-model="total"
                            />
                            <CInput
                                v-for="field in fields"
                                :key="field.id"
                                :label="'Label untuk '+field.id"
                                horizontal
                                v-model="field.label"
                            />
                            <CInput
                                label="Dibuka pada"
                                type="datetime-local"
                                v-model="startAt"
                                required
                                horizontal
                            />
                            <CInput
                                label="Ditutup pada"
                                type="datetime-local"
                                v-model="endAt"
                                required
                                horizontal
                            />
                            <CSelect
                                label="Pilih Rangkaian Terkait"
                                description="Pilihan ini akan memengaruhi profil mahasiswa"
                                :options="options"
                                @change="agendaId = $event.target.value"
                                horizontal
                            />
                        </CForm>
                    </CCardBody>
                    <CCardFooter>

                        <template v-if="isUploading">
                            <CButton type="submit" disabled size="sm" color="primary" class="mr-2" @click="publish()"><CIcon name="cil-check-circle"/> Publish</CButton>
                            <CButton type="button" disabled size="sm" color="secondary" class="mr-2" @click="publish(false)"><CIcon name="cil-file"/> Draft</CButton>
                        </template>

                        <template v-else>
                            <CButton type="submit" size="sm" color="primary" class="mr-2" @click="publish()"><CIcon name="cil-check-circle"/> Publish</CButton>
                            <CButton type="button" size="sm" color="secondary" class="mr-2" @click="publish(false)"><CIcon name="cil-file"/> Draft</CButton>
                        </template>
                        <CButton type="reset" size="sm" color="danger" @click="resetValues"><CIcon name="cil-ban"/> Reset</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
    import axios from "axios";
    import routes from "../../api";
    import Connection from "../../../js/store/Connection";

    export default {
        name: "PenugasanAdd",
        data(){
            return {
                description: '',
                startAt: '',
                endAt: '',
                total: 1,
                title: '',
                isUploading: false,
                hasError: false,
                fields: [{id: 1, label: 'Link Drive 1'}],
                agendaId: 1,
                options: [],
            }
        },
        methods: {
            assignOptions(){
                let self = this;
                Connection.get(routes.agenda).then(r=>{
                    if(!r.data.error){
                        self.options = r.data.map(a=>{
                            return {
                                label: a.title,
                                value: a.id,
                            }
                        });
                    }
                })
            },
            changeTotal(){
                let val = this.total;
                if(this.fields.length < val){
                    for(let i = this.fields.length; i < val; i++){
                        this.fields.push({id: (i+1), label: 'Link Drive '+(i+1)});
                    }
                } else if(this.fields.length > val){
                    this.fields.splice(val);
                }
            },
            resetValues(){
                this.startAt = '';
                this.endAt = '';
                this.fields = [{id: 1, label: 'Link Drive 1'}];
                this.total = 1;
                this.description = '';
                this.title = '';
                this.agendaId = 1;
            },
            publish(isPublished=true){
                let data = {
                    startAt: this.startAt,
                    endAt: this.endAt,
                    description: this.description,
                    fields: JSON.stringify(this.fields),
                    title: this.title,
                    agendaId: this.agendaId,
                    isPublished: isPublished,
                };
                this.isUploading = true;
                this.hasError = false;
                let self = this;
                Connection.removeHeader('Content-Type');
                let auth = Connection.getHeaders()['Authorization'];
                axios.post(routes.taskAdd, data, {
                    headers: {
                        'Authorization': auth,
                        'Content-Type': 'application/json'
                    }
                }).then(r=>{
                    self.isUploading = false;
                    if(r.data.error){
                        self.hasError = true;
                        return;
                    }
                    self.hasError = false;
                    self.resetValues();
                    self.$router.push('/penugasan');
                }).catch(e=>{
                    self.isUploading = false;
                    self.hasError = true;
                })
            },
        },
        mounted() {
            this.assignOptions();
        }
    }
</script>

<style scoped>

</style>
