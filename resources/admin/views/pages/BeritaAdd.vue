<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-pencil" />
            <strong>Form Tambah Berita </strong>
            <span v-if="isUploading" class="float-right text-secondary"
              >Is Uploading..</span
            >
            <span v-if="hasError" class="float-right text-danger"
              >Some Error Occurred</span
            >
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
                @change="uploadImage"
                required
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
            <template v-if="isUploading">
              <CButton
                type="submit"
                disabled
                size="sm"
                color="primary"
                class="mr-2"
                @click="publish()"
                ><CIcon name="cil-check-circle" /> Publish</CButton
              >
              <CButton
                type="button"
                disabled
                size="sm"
                color="secondary"
                class="mr-2"
                @click="publish(false)"
                ><CIcon name="cil-file" /> Draft</CButton
              >
            </template>

            <template v-else>
              <CButton
                type="submit"
                size="sm"
                color="primary"
                class="mr-2"
                @click="publish()"
                ><CIcon name="cil-check-circle" /> Publish</CButton
              >
              <CButton
                type="button"
                size="sm"
                color="secondary"
                class="mr-2"
                @click="publish(false)"
                ><CIcon name="cil-file" /> Draft</CButton
              >
            </template>
            <CButton type="reset" size="sm" color="danger" @click="resetValues"
              ><CIcon name="cil-ban" /> Reset</CButton
            >
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
    import Editor from "@tinymce/tinymce-vue";
    import axios from "axios";
    import routes from "../../api";
    import Connection from "../../../js/store/Connection";

    export default {
  name: "BeritaAdd",
  data() {
    return {
      isUploading: false,
      id: "",
      title: "",
      content: "",
      image: "",
      published_at: "",
      is_published: "",
      dataset: {},
      hasError: false,
      error: "",
    };
  },
  components: {
    Editor,
  },
  methods: {
      uploadImage(e){
          this.image = e[0];
      },
    resetValues() {
      this.title = "";
      this.id = "";
      this.content = "";
      this.image = "";
      this.published_at = "";
    },

    publish(isPublished = true) {
      let formData = new FormData();
    formData.append('id', this.id);
    formData.append('title', this.title);
    formData.append('content', this.content);
    formData.append('published_at', this.published_at);
    formData.append('is_published', isPublished?'1':'0');
    formData.append('image', this.image);

      this.isUploading = true;
      this.hasError = false;
      let self = this;
      let auth = Connection.getHeaders()['Authorization'];

      axios
        .post(routes.beritaAdd, formData, {headers: {'Authorization': auth}})
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
};
</script>

<style scoped>
</style>
