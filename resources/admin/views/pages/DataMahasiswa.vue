<template>
    <div>
        <CRow>
            <CCol sm="12">
                <CButton color="primary" class="mb-3" @click="collapseAdd = !collapseAdd">
                    Tambah Data
                </CButton>
                <CCollapse :show="collapseAdd" :duration="400">
                    <CCard :border-color="(addIsUploading)?'warning':(error)?'danger':''">
                        <CCardHeader body-wrapper>
                            <CCardText>Form Data</CCardText>
                        </CCardHeader>
                        <CCardBody>
                            <CForm @submit="submitForm()">
                                <CInput
                                    label="NIM"
                                    required
                                    horizontal
                                    v-model="nim"
                                />
                                <CInput
                                    label="Nama"
                                    required
                                    horizontal
                                    v-model="nama"
                                />
                                <CInput
                                    label="Password"
                                    required
                                    horizontal
                                    type="text"
                                    v-model="password"
                                />
                                <CInput
                                    label="Alamat"
                                    horizontal
                                    v-model="address"
                                />
                                <CSelect
                                    label="Kelompok"
                                    horizontal
                                    :value="group"
                                    :options="getGroups()"
                                    @change="updateSelection"
                                />

                                <CButton type="submit" size="sm" color="success">Publish</CButton>
                                <CButton @click="resetFields()" type="button" size="sm" color="danger">Reset</CButton>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCollapse>
            </CCol>
            <CCol sm="12" md="12">
                <CCard>
                    <CCardHeader>
                        Data Mahasiswa
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            hover
                            fixed
                            :fields="['NIM', 'Nama', 'Whatsapp', 'LINE', 'Aksi']"
                            :items="getDataset()"
                            :items-per-page="10"
                            pagination
                            clickable-rows
                        >
                        <template #Aksi="{item}">
                            <td>
                                <router-link :to="'data/'+item.id">
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
        </CRow>
    </div>
</template>

<script>

    import routes from "../../api";
    import Connection from "../../../js/store/Connection";

    export default {
        name: "GroupDetails",
        data(){
            return {
                error: false,
                nim: '',
                nama: '',
                password: '',
                isEditting: false,
                group: -1,
                address: '',

                initial: {
                    nim: '',
                    nama: '',
                    password: '',
                    group: -1,
                    address: '',
                },

                dataset: [],
                addIsUploading: false,
                collapseAdd: false,
                groups: [],
            }
        },
        methods: {
            getDataset(){
                return this.dataset.map(d=>{
                    return {
                        id: d.id,
                        NIM: d.nim,
                        Nama: d.name,
                        "Nama Panggilan": d.nickname,
                        LINE: d.line,
                        Whatsapp: d.whatsapp
                    }
                });
            },
            resetFields(){
                this.nama = this.initial.nama;
                this.nim = this.initial.nim;
                this.password = this.initial.password;
                this.group =  this.initial.group;
                this.address =  this.initial.address;
            },
            submitForm(){
                this.addIsUploading = true;
                Connection.setHeader('Content-Type', 'application/json');
                Connection.post(routes.studentAdd, {
                    nim: this.nim,
                    name: this.nama,
                    address: this.address,
                    group_id: this.group,
                    password: this.password,
                }).then(r=>{
                    if(r.data.error) {
                        this.error = true;
                        console.log(r.data.error);
                    }
                    this.addIsUploading = false;
                });
            },
            getGroups(){
                let options = [{label: '- Pilih Kelompok -', value: -1}];
                this.group = -1;
                let newGroup = [];
                if(Array.isArray(this.groups))
                    newGroup = this.groups;

                options.push(...newGroup.map(g=>{
                    return {
                        label: g.name,
                        value: g.id
                    }
                }));
                return options;
            },
            updateSelection(e){
                this.group = e.target.value;
            }
        },
        async beforeMount() {
            let res = await Connection.get(routes.students);
            if(res.data){
                this.dataset = res.data;
            }
            let groups = await Connection.get(routes.group);
            if(groups.data){
                this.groups = groups.data;
                this.group = -1;
            }
        }
    }
</script>

<style scoped>

</style>
