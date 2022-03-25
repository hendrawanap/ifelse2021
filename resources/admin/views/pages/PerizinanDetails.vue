<template>
    <div>
        <CRow>
            <CCol sm="12" md="12">
                <CCard>
                    <CCardHeader> Detail </CCardHeader>
                    <CCardBody>
                        <CRow class="mb-2">
                            <CCol sm="3"> Nama </CCol>
                            <CCol sm="9">
                                {{ name }}
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3"> NIM </CCol>
                            <CCol sm="9">
                                {{ nim }}
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3"> Nama Kelompok </CCol>
                            <CCol sm="9">
                                {{ kelompok }}
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3"> ID Line </CCol>
                            <CCol sm="9">
                                {{ line }}
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3"> Tempat Tinggal </CCol>
                            <CCol sm="9">
                                {{ residence }}
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3">Kendala </CCol>
                            <CCol sm="9">
                                {{ reason }}
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3">Deskripsi Kendala </CCol>
                            <CCol sm="9">
                                {{ details }}
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3">Surat Izin </CCol>
                            <CCol sm="9">
                                <a :href="'/private/' + doc"
                                   target="_blank"
                                >
                                    Link
                                </a>
                            </CCol>
                        </CRow>
                        <CRow class="mb-2">
                            <CCol sm="3">Bukti Pendukung Kendala</CCol>
                            <CCol sm="9">
                                <a
                                    v-for="(ev, index) in evidence"
                                    :href="'/private/' + ev"
                                    target="_blank"
                                >
                                    Bukti {{index+1}}
                                </a>
                            </CCol>
                        </CRow>
                    </CCardBody>
                    <CCardFooter>
                        <router-link :to="'/perizinan/'">
                            <CButton color="secondary">Kembali</CButton>
                        </router-link>
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
        name: "PendataanDetails",
        data() {
            return {
                name: "",
                nim: "",
                kelompok: "",
                line: "",
                residence: "",
                reason: "",
                details: "",
                evidence: "",
                doc: "",
            };
        },
        methods: {
            downloadDoc() {

            },
            downloadBukti() {

            },
        },
        async mounted() {
            let res = await Connection.get(routes.perizinan + this.$route.params.id);
            if (res) {
                let pendataan = res.data;
                let student = pendataan.student;
                this.name = student.name;
                this.nim = student.nim;
                this.kelompok = student.group.name;
                this.line = student.line;
                this.residence = student.address;
                this.reason =  ['Sakit', 'Tugas Kampus', 'Alasan Mendesak', 'Acara Keluarga', 'Acara Keagamaan', 'Bencana Alam', 'Mati Listrik', 'Lainnya'][pendataan.reason];
                this.details = pendataan.details;
                this.doc = pendataan.evidences.ev_1.replace(new RegExp('\\\\', 'g'), '');
                this.evidence = pendataan.evidences.ev_2.map(a=>a.replace(new RegExp('\\\\', 'g'), ''));
            }
        },
    };
</script>

<style scoped>
</style>
