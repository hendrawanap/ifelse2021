<template>
    <div class="container text-dark py-5 position-relative" style="z-index: 4; max-width: 760px">
        <headings :isPerizinan="true"/>
        <!-- Breadcrumbs -->
        <div class="d-flex" style="font-size: 1.125rem">
            <div class="d-sm-flex align-items-center mr-5" :class="[currentSection !== 1 ? 'd-none' : 'd-flex']">
                <div class="d-flex align-items-center justify-content-center mr-2 rounded-sm" :class="[currentSection >= 1 ? 'text-white bg-primary' : '']" style="width: 32px; height: 32px">1</div>
                <div :class="[currentSection >= 1 ? 'font-semibold' : '']">Biodata</div>
            </div>
            <div class="d-sm-flex align-items-center mr-5" :class="[currentSection !== 2 ? 'd-none' : 'd-flex']">
                <div class="d-flex align-items-center justify-content-center mr-2 rounded-sm" :class="[currentSection >= 2 ? 'text-white bg-primary' : '']" style="width: 32px; height: 32px">2</div>
                <div :class="[currentSection >= 2 ? 'font-semibold' : '']">Alasan</div>
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
                    <input :placeholder="biodata.nama" type="text" :value="biodata.nama" name="nama" class="form-control" id="nama" disabled>
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="nim">NIM</label>
                    <input :placeholder="biodata.nim" type="text" :value="biodata.nim" name="nim" class="form-control" id="nim" disabled>
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="nama-kelompok">Nama Kelompok</label>
                    <input :placeholder="biodata.namaKelompok" :value="biodata.namaKelompok" type="text" name="nama-kelompok" class="form-control" id="nama-kelompok" disabled>
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="kontak">ID Line</label>
                    <input placeholder="Contoh: david001" v-model="biodata.kontak" type="text" name="kontak" class="form-control" id="kontak">
                </div>
            </section>
            <section v-show="currentSection === 2">
                <div class="form-group">
                    <label class="font-semibold" for="permission-type">Alasan</label>
                    <select v-model="permission.type" class="custom-select custom-select-lg" id="permission-type">
                        <option value="" selected>Pilih...</option>
                        <option v-for="(type, index) in permissionTypes" :value="index" :key="'permission-'+index">{{ type }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="font-semibold" for="details">Deskripsi Alasan</label>
                    <textarea v-model="permission.details" class="form-control p-2" name="details" id="details" rows="3" style="font-size: 1rem"></textarea>
                </div>
            </section>
            <section v-show="currentSection === 3">
                <div class="form-group">
                    <div class="font-semibold">Surat Izin</div>
                    <div class="mb-3 text-justify" style="font-size: 1rem">Berkas Surat Izin IF ELSE 2021 dikumpulkan dalam bentuk PDF (.pdf) dengan ukuran maksimal 1 MB. Format nama berkas adalah <span class="font-semibold text-primary">SI_NIM_NAMA</span></div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="surat-izin" :accept="allowedFileFormats.surat.join()" @change="e => inputFile(e,'surat')">
                        <label class="custom-file-label" for="surat-izin">Upload Surat</label>
                    </div>
                    <div class="text-danger" v-if="errors.surat">{{ errors.surat }}</div>
                </div>
                <div class="form-group mt-4">
                    <div class="font-semibold">Bukti Pendukung Perizinan</div>
                    <div class="mb-3 text-justify" style="font-size: 1rem">Bukti pendukung perizinan dapat berupa (Foto/Surat/lainnya). Diwajibkan mahasiswa baru untuk melakukan swafoto/selfie dengan bukti pendukung terkait. Contoh menghadiri acara pernikahan, bukti pendukung harus melampirkan dokumentasi acara pernikahan dan swafoto/selfie pada saat acara pernikahan. Format nama file adalah <span class="font-semibold text-primary">BUKTI(Perizinan)_NIM_NAMA</span></div>
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
            <button v-if="currentSection === 2" class="btn btn-primary" @click="currentSection += 1" :disabled="currentSection === 2 && (permission.type === '' || permission.details === '')">Lanjut</button>
            <button v-if="currentSection === 3" class="btn btn-primary" @click="currentSection += 1" :disabled="currentSection === 3 && (files.surat === null || files.bukti === null)">Lanjut</button>
            <button v-if="currentSection === 4" class="btn btn-primary" :disabled="!isChecked" @click="sendInfo">Kirim</button>
        </div>
    </div>
</template>

<script>
    import Headings from '../../components/permission/Headings.vue';
    import Connection from "../../../store/Connection";
    import apiRoutes from "../../../router/api";
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
                    surat: null,
                    bukti: null,
                },
                errors: {
                    surat: null,
                    bukti: null,
                },
                permission: {
                    type: '',
                    details: '',
                },
                allowedFileFormats: {
                    surat: ['application/pdf'],
                    bukti: ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
                },
                maxFileSize: {
                    surat: 1_000_000,
                    bukti: 20_000_000,
                },
                permissionTypes: ['Sakit', 'Tugas Kampus', 'Alasan Mendesak', 'Acara Keluarga', 'Acara Keagamaan', 'Bencana Alam', 'Mati Listrik', 'Lainnya'],
            }
        },
        mounted() {
            this.biodata = {
                nama: '',
                nim: '',
                namaKelompok: '',
                kontak: '',
            };
            this.retrieve();
            bsCustomFileInput.init();

        },
        methods: {
            retrieve(){
                let self = this;
                Connection.get(apiRoutes.perizinan + this.$route.params.slug).then(r=>{
                    if(!r.data.error){
                        let data = r.data;
                        let student = data.student;
                        let perizinan = data.perizinan;
                        self.biodata.nama = student.name;
                        self.biodata.nim = student.nim;
                        self.biodata.namaKelompok = student.group.name;
                        self.biodata.kontak = student.line;
                        self.permission.type = perizinan.revision? perizinan.revision.reason: '';
                        self.permission.details = perizinan.revision? perizinan.revision.details : '';
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
                    case 'surat':
                        return 'Format file yang diperbolehkan: .pdf';
                    case 'bukti':
                        return 'Format file yang diperbolehkan: .pdf, .jpg, .jpeg, .png';
                }
            },
            sendInfo() {
                const { kontak } = this.biodata;
                const { surat, bukti } = this.files;
                const { type, details } = this.permission;
                const info =  {
                    line: kontak,
                    evidence1: surat,
                    evidence2: bukti,
                    reason: parseInt(type),
                    details: details,
                };

                Connection.post(apiRoutes.perizinan + this.$route.params.slug, info).then(r=>{
                    if(r.data.status){
                        this.$router.push('/perizinan');
                    }
                });
            }
        },

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
