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
                  :fields="fields"
                  :items="data.students"
                  :items-per-page="10"
                  :column-filter="{external: false, lazy: true}"
                  pagination
                  clickable-rows
                  @row-clicked="gotoPerizinan"
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
        fields: [
            {key: 'id', label: 'ID'},
            {key: 'nim', label: "NIM"},
            {key: 'name', label: 'Nama'},
            {key: "group", label: 'Kelompok'},
            {key: 'reason', label: "Kendala"}
        ]
    };
  },
  methods: {
    agendaClicked(agenda_id) {
      this.agenda_id = agenda_id;
    },
      gotoPerizinan(item){
          this.$router.push('/perizinan/' + item.id);
      }
  },
  async beforeMount() {
    let res = await Connection.get(routes.perizinan);
    if (res.data) {
      this.dataset = res.data.map((d, i) => {
        // Agenda Mapping
        let students = d.students.map((p) => {

            return {
            id: p.id,
            nim: p.student.nim,
            name: p.student.name,
            group: p.student.group.name,
              reason:
                  ['Sakit', 'Tugas Kampus', 'Alasan Mendesak', 'Acara Keluarga', 'Acara Keagamaan', 'Bencana Alam', 'Mati Listrik', 'Lainnya'][p.reason]
          };
        });
        return {
            students,
          id: d.id,
          title: d.agenda.title+'',
        };
      });
      console.log(this.dataset);
    }
  },
};
</script>

<style scoped>
</style>
