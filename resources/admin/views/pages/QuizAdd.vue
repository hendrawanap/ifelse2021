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
                                label="Judul Quiz"
                                horizontal
                                :value="title"
                                @change="setTitle"
                            />
                            <CInput
                                description="Label ini akan tampil pada halaman semua quiz maba"
                                label="Label Singkat"
                                horizontal
                                :value="excerpt"
                                @change="setExcerpt"
                            />
                            <CInput
                                description="Sebutkan dalam detik (15 menit = 900 detik)"
                                label="Waktu Pengerjaan"
                                type="number"
                                horizontal
                                :value="duration"
                                @change="setDuration"
                            />
                            <CInput
                                label="Total Soal"
                                description="Sebutkan total soal yang akan diambil dari acakan"
                                type="number"
                                horizontal
                                :value="total"
                                @change="setTotal"
                            />
                            <CInput
                                label="Dibuka pada"
                                type="datetime-local"
                                @change="setStart"
                                :value="startAt"
                                horizontal
                            />
                            <CInput
                                label="Ditutup pada"
                                type="datetime-local"
                                @change="setEnd"
                                :value="endAt"
                                horizontal
                            />
                            <CSelect
                                placeholder="Pilih Rangkaian..."
                                label="Rangkaian Terkait"
                                :options="agendas"
                                @change="updateAgenda"
                                horizontal
                            />
                        </CForm>
                    </CCardBody>
                    <CCardFooter>

                        <template v-if="isUploading">
                            <CButton type="submit" disabled size="sm" color="primary" class="mr-2"><CIcon name="cil-check-circle"/> Publish</CButton>
                            <CButton type="button" disabled size="sm" color="secondary" class="mr-2"><CIcon name="cil-file"/> Draft</CButton>
                        </template>

                        <template v-else>
                            <CButton type="submit" size="sm" color="primary" class="mr-2" @click="publish"><CIcon name="cil-check-circle"/> Publish</CButton>
                            <CButton type="button" size="sm" color="secondary" class="mr-2" @click="draft"><CIcon name="cil-file"/> Draft</CButton>
                        </template>
                        <CButton type="reset" size="sm" color="danger" @click="resetValues"><CIcon name="cil-ban"/> Reset</CButton>
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
        name: "QuizAdd",
        data(){
          return {
              startAt: '',
              endAt: '',
              total: 15,
              duration: 900,
              title: '',
              isUploading: false,
              hasError: false,
              agendas: [],
              agenda: null,
              isMounted: false,
              excerpt: '',
          }
        },
        methods: {
            updateAgenda(agenda){
              this.agenda = agenda.target.value;
            },
            setStart(newVal){
                this.startAt = newVal;
            },
            setEnd(newVal){
                this.endAt = newVal;
            },
            setTitle(newVal){
                this.title = newVal;
            },
            setTotal(newVal){
                this.total = newVal;
            },
            setDuration(newVal){
                this.duration = newVal;
            },
            setExcerpt(newVal){
                this.excerpt = newVal;
            },
            resetValues(){
                this.startAt = '';
                this.endAt = '';
                this.total = 15;
                this.duration = 900;
                this.title = '';
                this.excerpt = '';
            },
            publish(isPublished=true){
                let data = {
                    startAt: this.startAt,
                    endAt: this.endAt,
                    total: this.total,
                    duration: this.duration,
                    excerpt: this.excerpt,
                    title: this.title,
                    isPublished: isPublished,
                    agendaId: this.agenda,
                };
                console.log(data);
                this.isUploading = true;
                this.hasError = false;
                let self = this;
                Connection.setHeader('Content-Type', 'application/x-www-form-encoded');
                Connection.post(routes.quizAdd, data).then(r=>{
                    self.isUploading = false;
                    if(r.data.error){
                        self.hasError = true;
                        return;
                    } else {
                        this.$router.push('/quiz');
                    }
                    self.hasError = false;
                }).catch(e=>{
                    self.isUploading = false;
                    self.hasError = true;
                })
            },
            draft(){
                this.publish(false);
            },
        },
        mounted() {
            let self = this;
            Connection.get(routes.agenda).then(r=>{
                if(!r.data.error){
                    self.agendas = r.data.map(d=>{return {value: d.id, label: d.title}});
                    self.isMounted = true;
                }
            });
            Connection.setHeader('Content-Type', 'application/x-www-form-encoded');
        }
    }
</script>

<style scoped>

</style>
