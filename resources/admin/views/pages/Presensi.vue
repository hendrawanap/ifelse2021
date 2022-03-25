<template>
    <div>
        <CCol sm="12">
            <CButton color="primary" class="mb-3" @click="collapseAdd = !collapseAdd">
                Tambah Presensi
            </CButton>
            <CCollapse :show="collapseAdd" :duration="400">
                <CCard :border-color="(isUploading)?'warning':hasError? 'danger': ''">
                    <CCardHeader body-wrapper>
                        <CCardText>Form Pertanyaan</CCardText>
                    </CCardHeader>
                    <CCardBody>
                        <CForm @submit="saveAttendance">
                            <CRow>
                                <CCol sm="3">
                                    Nama (sebagai pembeda)
                                </CCol>
                                <CCol sm="9">
                                    <CInput
                                        v-model="title">
                                    </CInput>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol sm="3">
                                    Kode Presensi
                                </CCol>
                                <CCol sm="6">
                                    <CInput
                                        v-model="code">
                                    </CInput>
                                </CCol>
                                <CCol sm="3">
                                    <CButton color="primary" @click="generateCode()">
                                        Generate
                                    </CButton>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CButton type="submit" size="sm" class="mx-3" color="warning">
                                    Tambahkan
                                </CButton>
                                <CButton @click="resetValues" color="danger">
                                    Reset
                                </CButton>
                            </CRow>

                        </CForm>
                    </CCardBody>
                </CCard>
            </CCollapse>
        </CCol>
        <CCol sm="12" md="12">
            <CCard>
                <CCardHeader>
                    Presensi Tersedia
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        wrap
                        hover
                        fixed
                        :fields="['No', 'Title', 'Kode Presensi', 'Status', 'Aksi']"
                        :items="list"
                        :items-per-page="10"
                        pagination
                    >
                        <template #Status="{item}">
                            <td>
                                <CBadge :color="item.Status? 'success': 'danger'">
                                    {{item.Status? 'Buka': 'Tutup'}}
                                </CBadge>
                            </td>
                        </template>
                        <template #Aksi="{item}">
                            <td>
                                <CButton :color="item.Status? 'danger': 'success'" size="sm" @click="changeStatus(item.id)">
                                    {{item.Status? 'Tutup': 'Buka'}}
                                </CButton>
                                <CButton color="primary" size="sm" @click="downloadQR(item['Kode Presensi'], item['Title'])">
                                    Download QR
                                </CButton>
                                <router-link :to="'/presensi/'+item.id">
                                    <CButton color="warning" size="sm">
                                        Detail
                                    </CButton>
                                </router-link>
                            </td>
                        </template>
                    </CDataTable>
                </CCardBody>
            </CCard>
        </CCol>
    </div>
</template>

<script>
    import axios from 'axios';
    import routes from "../../api";
    import Functions from '../../functions';
    import apiRoutes from "../../../js/router/api";
    import Connection from "../../../js/store/Connection";
    export default {
        name: "Presensi",
        data(){
            return {
                collapseAdd: false,
                title: '',
                code: '',
                initials: {
                    title: '',
                    code: ''
                },

                isUploading: false,
                hasError: false,
                list: [],
            }
        },
        methods: {
            saveAttendance(e){
                e.preventDefault();
                this.hasError = false;
                this.isUploading = true;
                let self = this;
                if(this.title && this.code) {
                    let data = {
                        title: this.title,
                        code: this.code
                    };
                    Connection.setHeader('Content-Type','application/json');
                    Connection.post(routes.attendanceAdd, data).then(d=>{
                        if(d.data.error){
                            self.hasError = true;
                        } else {
                            let id = d.data.id;
                            self.list.push({
                                id,
                                'No': self.list.length+1,
                                'Title': self.title,
                                'Kode Presensi': self.code,
                                'Status': false,
                            });
                            self.resetValues();
                        }
                    }).catch(e=>{
                        self.hasError = true;
                    })
                }
            },
            getDataset(){
                return this.list;
            },
            generateCode(){
                this.code = Functions.random(8, false);
            },
            changeStatus(id){
                let self = this;
                Connection.setHeader('Content-Type','application/json');
                Connection.post(routes.attendancesStatus, {id}).then(d=>{
                    if(d.data.error){
                        console.log('Validation Error');
                    } else {
                        let l = self.list.find(l=>l.id === id);
                        if(l){
                            l.Status = !l.Status;
                        }
                    }
                })
            },
            resetValues(){
                this.isUploading = false;
                this.hasError = false;
                this.title = this.initials.title;
                this.code = this.initials.code;
            },
            openDetails(id){
                console.log(id);
            },
            downloadQR(code, title){
                let encoded = encodeURIComponent(window.location.origin + apiRoutes.attendQR + code);
                var qrCodeBaseUri = 'https://api.qrserver.com/v1/create-qr-code/?';
                Functions.downloadImage({url: qrCodeBaseUri+`data=${encoded}&size=450x450&margin=0&download=true`, label:title+'_'+code});
            },
            retrieve(){
                let self = this;
                Connection.get(routes.attendances).then(r=>{
                    self.list = r.data.map((d, i)=>{
                        return {
                            id: d.id,
                            'No': i+1,
                            'Title': d.title,
                            'Kode Presensi': d.code,
                            'Status': d.status,
                        }
                    })
                })
            }
        },
        mounted() {
           this.retrieve();
        }
    }
</script>

<style scoped>

</style>
