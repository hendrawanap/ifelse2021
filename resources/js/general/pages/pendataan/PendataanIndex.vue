<template>

<!--    <div class="card w-75 mx-auto mt-5">-->
<!--        <div class="card-body text-center">-->
<!--            <h1>EITSS!!<span>😲</span></h1>-->
<!--            <h5>Untuk Sekarang Halaman Ini Tidak Tersedia Mohon Balik Arah Yaa!!</h5>-->
<!--            <router-link to="/profile">-->
<!--                <button type="button" class="btn btn-primary">Klik Tombol ini untuk kembali <span>😊</span></button>-->
<!--            </router-link>-->
<!--        </div>-->
<!--    </div>-->
    <div class="container py-5 text-dark position-relative" style="z-index: 4">
        <headings :isPermission="false"/>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-n2 my-n2" style="max-width: 960px">
            <permission-card class="col px-2 my-2" v-for="permission in permissions" :key="permission.id" :permission="permission"/>
        </div>
        <span class="mt-5" style="display: block"></span>
        <collapse-card v-for="(item, index) in template" :key="index" style="max-width: 600px" :id="item.title.split(' ').join('')" :title="item.title">
            <Component :is="item.tag" class="px-4">
                <Component v-html="item.data.join('')"/>
            </Component>
        </collapse-card>
    </div>
</template>

<script>
    import PermissionCard from '../../components/permission/PermissionCard.vue';
    import Headings from '../../components/permission/Headings.vue';
    import CollapseCard from '../../components/CollapseCard.vue';
    import Connection from "../../../store/Connection";
    import apiRoutes from "../../../router/api";
    import _template from "../../_template";

    export default {
        name: "PermissionIndex",
        components: {
            PermissionCard,
            Headings,
            CollapseCard
        },
        methods: {
            getPendataan(){
                let self = this;
                Connection.get(apiRoutes.pendataan).then(r=>{
                    self.permissions = r.data.map(d=>{
                        return {
                            agendaId: d.id,
                            date: d.pendataan_end_at,
                            type: d.status
                        }
                    });
                }).catch(e=>{
                    console.log(e);
                });
            }
        },
        data() {
            return {
                // Types: open, resubmit, closed
                permissions: [],
                template: _template.pendataan,
            }
        },
        mounted(){
            this.getPendataan();
        }
    }
</script>

<style scoped>
</style>
