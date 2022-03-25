<template>
    <div>
        <CRow>
            <CCol lg="12">
                <CCard>
                    <CCardHeader>
                        <CIcon name="cil-pencil" />
                        <strong>Edit Data </strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CInput
                                description="Masukkkan Judul Berita"
                                label="Judul Berita"
                                horizontal
                                v-model="title"
                            />
                            <CRow>
                                <CCol sm="3"> Konten </CCol>
                                <CCol sm="9">
                                    <Editor
                                        api-key="1p6b2ohxm4p6m2d0mwuljypf214adlk57nglwpu4le4fsx5a"
                                        :init="editorInit()"
                                        output-format="html"
                                        v-model="content"
                                    />
                                </CCol>
                            </CRow>
                            <CInputFile
                                label="Upload Gambar"
                                horizontal
                                @change="updateImage"
                            />
                            <CInput
                                label="Publish pada"
                                type="datetime-local"
                                v-model="published_at"
                                required
                                horizontal
                            />
                        </CForm>
                    </CCardBody>
                    <CCardFooter>
                        <CButton color="primary" @click="updateNews()">Simpan</CButton>
                        <router-link :to="'/berita/'">
                            <CButton color="secondary">Batal</CButton>
                        </router-link>
                        <CButton color="danger" @click="resetValues()">Reset</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
    import Editor from "@tinymce/tinymce-vue";
    import axios from 'axios';
    import routes from "../../api";
    import Connection from "../../../js/store/Connection";

    export default {
        name: "BeritaEdits",
        data() {
            return {
                isUploading: false,
                id: "",
                title: "",
                content: "",
                image: "",
                published_at: "",
                dataset: {},
                error: "",
            };
        },
        components: {
            Editor,
        },
        methods: {
            updateImage(e){
              this.image = e.length? e[0] : null;
            },
            resetValues() {
                this.title = this.dataset.title;
                this.id = this.dataset.id;
                this.content = this.dataset.content;
                this.image = this.dataset.image;
                this.published_at = this.dataset.published_at;
            },
            updateNews() {
                this.error = "";
                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('content', this.content);
                formData.append('published_at', this.published_at);
                if(this.image)
                    formData.append('image', this.image);

                this.isUploading = true;
                this.hasError = false;
                let self = this;
                let auth = Connection.getHeaders()['Authorization'];
                axios
                    .post(routes.beritaUbah + this.id, formData, {
                        headers: {
                            "Authorization": auth,
                        }
                    })
                    .then((r) => {
                        self.isUploading = false;
                        if (r.data.error) {
                            self.hasError = true;
                            return;
                        }
                        self.hasError = false;
                        self.resetValues();
                        self.$router.push("/berita");
                    })
                    .catch((e) => {
                        self.isUploading = false;
                        self.hasError = true;
                    });
            },
            editorInit() {
                return {
                    height: 500,
                    menubar: false,
                    plugins: ["lists link image paste help wordcount"],
                    toolbar:
                        "undo redo | formatselect | link image | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
                };
            },
        },
        async beforeMount() {
            let res = await Connection.get(routes.beritaEdits + this.$route.params.id);
            if (res.data) {
                this.dataset = res.data;
                this.title = this.dataset.title;
                this.id = this.dataset.id;
                this.content = this.dataset.content;
                // this.image = this.dataset.image;
                this.published_at = this.dataset.published_at;
            }
        },
    };
</script>

<style scoped>
</style>
