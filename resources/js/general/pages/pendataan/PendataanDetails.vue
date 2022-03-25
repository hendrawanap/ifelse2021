<template>
    <div class="container text-dark py-5 position-relative" style="z-index: 4; max-width: 760px">
        <headings/>
        <!-- Breadcrumbs -->
        <div class="d-flex" style="font-size: 1.125rem">
            <div class="d-sm-flex align-items-center mr-5" :class="[currentSection !== 1 ? 'd-none' : 'd-flex']">
                <div class="d-flex align-items-center justify-content-center mr-2 rounded-sm" :class="[currentSection >= 1 ? 'text-white bg-primary' : '']" style="width: 32px; height: 32px">1</div>
                <div :class="[currentSection >= 1 ? 'font-semibold' : '']">Biodata</div>
            </div>
            <div class="d-sm-flex align-items-center mr-5" :class="[currentSection !== 2 ? 'd-none' : 'd-flex']">
                <div class="d-flex align-items-center justify-content-center mr-2 rounded-sm" :class="[currentSection >= 2 ? 'text-white bg-primary' : '']" style="width: 32px; height: 32px">2</div>
                <div :class="[currentSection >= 2 ? 'font-semibold' : '']">Kendala</div>
            </div>
            <div class="d-sm-flex align-items-center mr-5" :class="[currentSection !== 3 ? 'd-none' : 'd-flex']">
                <div class="d-flex align-items-center justify-content-center mr-2 rounded-sm" :class="[currentSection >= 3 ? 'text-white bg-primary' : '']" style="width: 32px; height: 32px">3</div>
                <div :class="[currentSection >= 3 ? 'font-semibold' : '']">Upload Dokumen</div>
            </div>
            <div class="d-sm-flex align-items-center mr-5" :class="[currentSection !== 4 ? 'd-none' : 'd-flex']">
                <div class="d-flex align-items-center justify-content-center mr-2 rounded-sm" :class="[currentSection >= 4 ? 'text-white bg-primary' : '']" style="width: 32px; height: 32px">4</div>
                <div :class="[currentSection >= 4 ? 'font-semibold' : '']">Kirim</div>
            </div>
        </div>
        <div class="divider mt-2 mb-4"></div>
        <!-- Form -->
        <form @submit.prevent="">
            <section v-show="currentSection === 1">
                <div class="form-group">
                    <label class="font-semibold" for="nama">Nama</label>
                    <input :placeholder="biodata.nama" :value="biodata.nama" type="text" name="nama" class="form-control" id="nama" disabled>
                </div>
                <div class="form-group">
                    <label for="nim">NIM</label>
                    <input :placeholder="biodata.nim" :value="biodata.nim" type="text" name="nim" class="form-control" id="nim" disabled>
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="nama-kelompok">Nama Kelompok</label>
                    <input :placeholder="biodata.namaKelompok" :value="biodata.namaKelompok" type="text" name="nama-kelompok" class="form-control" id="nama-kelompok" disabled>
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="kontak">ID LINE</label>
                    <input placeholder="Contoh: david001" v-model="biodata.kontak" type="text" name="kontak" class="form-control" id="kontak">
                </div>
            </section>
            <section v-show="currentSection === 2">
                <div class="form-group">
                    <label class="font-semibold" for="tempat-tinggal">Tempat Tinggal</label>
                    <input v-model="kendala.address" placeholder="Contoh: Kota Malang" type="text" name="tempat-tinggal" class="form-control" id="tempat-tinggal">
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="permission-type">Kamera yang Digunakan</label>
                    <select v-model="kendala.camera" class="custom-select custom-select-lg" id="permission-type">
                        <option value="" selected>Pilih...</option>
                        <option v-for="(type, index) in cameraTypes" :value="index" :key="'camera-'+index">{{ type }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="kendala">Deskripsi Kendala</label>
                    <textarea v-model="kendala.details" type="text" name="kendala" class="form-control p-2" id="kendala" rows="3" style="font-size: 1rem"></textarea>
                </div>
            </section>
            <section v-show="currentSection === 3">
                <div class="form-group">
                    <div class="font-semibold">Dokumen Pendataan</div>
                    <div class="mb-3 text-justify" style="font-size: 1rem">Dokumen Pendataan yang dikumpulkan telah terisi dengan data yang benar dan ditandatangani. Dokumen Pendataan dikumpulkan dalam bentuk PDF (.pdf) dengan ukuran maksimal 1 MB. Format nama dokumen adalah <span class="font-semibold text-primary">Pendataan_NIM_NAMA</span></div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="dokumen-pendataan" :accept="allowedFileFormats.dokumen.join()" @change="e => inputFile(e,'dokumen')">
                        <label class="custom-file-label" for="dokumen-pendataan">Upload Dokumen</label>
                    </div>
                    <div class="text-danger" v-if="errors.dokumen">{{ errors.dokumen }}</div>
                </div>
                <div class="form-group mt-4">
                    <div class="font-semibold">Bukti Pendukung Kendala</div>
                    <div class="mb-3 text-justify" style="font-size: 1rem">Bukti pendukung kendala dapat berupa (Foto/Surat/lainnya). Diwajibkan mahasiswa baru untuk melakukan swafoto/selfie dengan bukti pendukung terkait. Contoh pemadaman listrik, bukti pendukung harus melampirkan dokumentasi meteran listrik dan swafoto/selfie dengan memperlihatkan meteran listrik. Format nama file adalah <span class="font-semibold text-primary">BUKTI(Pendataan)_NAMA_NIM</span></div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="bukti-pendukung" :accept="allowedFileFormats.bukti.join()" @change="e => inputFile(e,'bukti')" multiple>
                        <label class="custom-file-label" for="bukti-pendukung">Upload Bukti</label>
                    </div>
                    <div class="text-danger" v-if="errors.bukti">{{ errors.bukti }}</div>
                </div>
            </section>
            <section v-show="currentSection === 4">
                <div class="custom-control custom-checkbox">
                    <input v-model="isChecked" class="custom-control-input" type="checkbox" value="" id="checkbox-pernyataan">
                    <label class="custom-control-label text-justify" for="checkbox-pernyataan">
                        Dengan menekan tombol kirim, maka saya menyatakan data serta informasi yang saya berikan benar dan dapat dipertanggung jawabkan. Jika ditemukan  pemalsuan data di kemudian hari maka saya siap menerima segala konsekuensi yang diberikan.
                    </label>
                </div>
            </section>
        </form>
        <div class="d-flex justify-content-end py-3">
            <button v-if="currentSection !== 1" class="btn btn-outline-primary mr-2" @click="currentSection -= 1">Kembali</button>
            <button v-if="currentSection === 1" class="btn btn-primary" @click="currentSection += 1" :disabled="currentSection === 1 && biodata.kontak === ''">Lanjut</button>
            <button v-if="currentSection === 2" class="btn btn-primary" @click="currentSection += 1" :disabled="currentSection === 2 && (kendala.address === '' || kendala.camera === '' || kendala.details === '')">Lanjut</button>
            <button v-if="currentSection === 3" class="btn btn-primary" @click="currentSection += 1" :disabled="currentSection === 3 && (files.dokumen === null || files.bukti === null)">Lanjut</button>
            <button v-if="currentSection === 4" class="btn btn-primary" :disabled="!isChecked" @click="sendInfo">Kirim</button>
        </div>
    </div>
</template>

<script>
    import Headings from '../../components/permission/Headings.vue';
    import Connection from "../../../store/Connection";
    import apiRoutes from "../../../router/api";
    import Authenticator from '../../../store/Authenticator';
    export default {
        name: "PermissionDetails",
        components: {
            Headings
        },
        data() {
            return {
                currentSection: 1,
                activeClass: '',
                isChecked: false,
                biodata: {
                    nama: '',
                    nim: '',
                    namaKelompok: '',
                    kontak: '',
                },
                files: {
                    dokumen: null,
                    bukti: null,
                },
                errors: {
                    dokumen: null,
                    bukti: null,
                },
                kendala: {
                    address: '',
                    camera: '',
                    details: '',
                },
                allowedFileFormats: {
                    dokumen: ['application/pdf'],
                    bukti: ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
                },
                maxFileSize: {
                    dokumen: 1_000_000,
                    bukti: 20_000_000,
                },
                cameraTypes: ['Camera (Built-in)', 'Handphone (Droidcam, dll)']
            }
        },
        mounted() {
            this.biodata = {
                nama: '',
                nim: '',
                namaKelompok: '',
                kontak: '',
            };
            bsCustomFileInput.init();
            this.retrieve();
        },
        methods: {
            retrieve(){
                let self = this;
                Connection.get(apiRoutes.pendataan + this.$route.params.slug).then(r=>{
                    if(!r.data.error){
                        let data = r.data;
                        let student = data.student;
                        let agenda = data.agenda;
                        self.biodata.nama = student.name;
                        self.biodata.nim = student.nim;
                        self.biodata.namaKelompok = student.group.name;
                        self.biodata.kontak = student.line;
                        self.kendala.address = student.address;
                        self.kendala.camera = agenda.pendataan? agenda.pendataan.reason: '';
                        self.kendala.details = agenda.pendataan? agenda.pendataan.details : '';
                    }

                })
            },
            inputFile(e, target) {
                const files = e.target.files;
                const MAX_FILES = 5; // Banyak file maksimal yang diperbolehkan untuk input file yang bertipe multiple
                const MAX_FILES_SIZE = this.maxFileSize[target];
                if (files.length > MAX_FILES) {
                    this.files[target] = null;
                    this.errors[target] = `Banyak file tidak boleh melebihi ${MAX_FILES} file.`;
                    return;
                }
                let formatIsValid = true;
                let totalSize = 0;
                for (let i= 0; i < files.length; i++) {
                    formatIsValid = formatIsValid && this.validateFileFormat(files[i], target);
                    totalSize += files[i].size;
                }
                if (totalSize > MAX_FILES_SIZE) {
                    this.files[target] = null;
                    this.errors[target] = `Ukuran file tidak boleh melebihi ${parseInt(MAX_FILES_SIZE / 1_000_000)} MB`;
                    return;
                }
                if (formatIsValid) {
                    this.files[target] = files;
                    this.errors[target] = null;
                } else {
                    this.files[target] = null;
                    this.errors[target] = this.generateFormatErrorMessage(target);
                }
            },
            validateFileFormat(file, target) {
                return this.allowedFileFormats[target].includes(file.type);
            },
            generateFormatErrorMessage(target) {
                switch(target) {
                    case 'dokumen':
                        return 'Format file yang diperbolehkan: .pdf';
                    case 'bukti':
                        return 'Format file yang diperbolehkan: .pdf, .jpg, .jpeg, .png';
                }
            },
            sendInfo() {
                const { nama, nim, namaKelompok, kontak } = this.biodata;
                const { address, camera, details } = this.kendala;
                const { dokumen, bukti } = this.files;
                const info = {
                    agendaId: parseInt(this.$route.params.slug), // integer/string
                    line: kontak, // string
                    evidence1: dokumen, // file
                    evidence2: bukti, // files
                    address: address, // string
                    reason: parseInt(camera), // 0 | 1
                    details: details,
                };

                Connection.post(apiRoutes.pendataan + this.$route.params.slug, info).then(r=>{
                    if(r.data.status){
                        this.$router.push('/pendataan');
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .divider {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    form {
        min-height: 50vh;
        font-size: 1.125rem;
    }

    label {
        font-weight: 600;
    }

    input {
        font-size: 1.125rem;
    }
</style>
