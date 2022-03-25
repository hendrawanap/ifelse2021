<template>
  <div>
    <CRow>
      <CCol sm="12" md="12">
        <CCard>
          <CCardHeader> Data Berita </CCardHeader>
          <CCardBody>
            <CDataTable
              hover
              fixed
              :fields="['ID', 'Judul', 'Tanggal Publish', 'Status', 'Aksi']"
              :items="getDataset()"
              :items-per-page="10"
              pagination
              clickable-rows
            >
              <template #Status="{ item }">
                <td>
                  <CBadge :color="item.Status ? 'success' : 'danger'">
                    {{ item.Status ? "Publish" : "Draft" }}
                  </CBadge>
                </td>
              </template>
              <template #Aksi="{ item }">
                <td>
                  <router-link :to="'/berita/edit/' + item.ID">
                    <CButton color="secondary">Edit</CButton>
                  </router-link>
                  <CButton
                    :color="item.Status ? 'danger' : 'success'"
                    @click="changeStatus(item)"
                  >
                    {{ item.Status ? "Draft" : "Publish" }}
                  </CButton>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import routes from "../../api";
import Connection from "../../../js/store/Connection";

export default {
  name: "Berita",
  data() {
    return {
      dataset: [],
    };
  },
  methods: {
    getDataset() {
      return this.dataset.map((b) => {
        return {
          ID: b.id,
          Judul: b.title,
          "Tanggal Publish": b.published_at,
          Status: b.is_published,
        };
      });
    },
    changeStatus(item) {
      let self = this;
      let data = {
        id: item.ID,
        is_published: item.Status,
      };
      Connection.setHeader('Content-Type', 'application/json');
      Connection.post(routes.beritaStatus, data).then((d) => {
        if (!d.data.error) {
          item.Status = !item.Status;
        }
      });
    },
  },
  async beforeMount() {
    let res = await Connection.get(routes.berita);
    if (res.data) {
      this.dataset = res.data;
    }
  },
};
</script>

<style scoped>
</style>
