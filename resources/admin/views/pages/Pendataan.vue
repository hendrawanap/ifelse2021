<template>
  <div>
    <CRow>
      <CCol sm="12" md="12">
        <CCard>
          <CCardHeader> Data Pendataan </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab
                v-for="data in dataset"
                :key="data.id"
                :title="data.title"
                @click="agendaClicked(1)"
                active
              >
                <CDataTable
                  hover
                  fixed
                  :fields="['ID', 'NIM', 'Nama', 'Kelompok', 'Aksi']"
                  :items="data.pendataan"
                  :items-per-page="10"
                  pagination
                  :column-filter="{external: false, lazy: true}"
                  clickable-rows
                >
                  <template #Aksi="{ item }">
                    <td>
                      <router-link :to="'/pendataan/' + item.ID">
                        <CButton color="secondary">Details</CButton>
                      </router-link>
                    </td>
                  </template>
                </CDataTable>
              </CTab>
            </CTabs>
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
  name: "Pendataan",
  data() {
    return {
      dataset: [],
      agenda_id: 3,
    };
  },
  methods: {
    agendaClicked(agenda_id) {
      this.agenda_id = agenda_id;
    },
  },
  async beforeMount() {
    let res = await Connection.get(routes.pendataan);
    if (res.data) {
      this.dataset = res.data.map((d, i) => {
        // Agenda Mapping
        let pendataan = d.pendataan.map((p) => {
          return {
            ID: p.id,
            NIM: p.student.nim,
            Nama: p.student.name,
            Kelompok: p.student.group.name,
          };
        });
        return {
          pendataan,
          id: d.id,
          title: d.title,
        };
      });
    }
  },
};
</script>

<style scoped>
</style>
