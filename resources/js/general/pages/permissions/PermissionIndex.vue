<template>


    <div class="container py-5 text-dark position-relative" style="z-index: 4">
        <headings :isPerizinan="true"/>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-n2 my-n2" style="max-width: 960px">
            <permission-card class="col px-2 my-2" v-for="permission in permissions" :key="permission.agendaId" :permission="permission" :isPerizinan="true"/>
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
        data() {
            return {
                // Types: open, resubmit, closed
                permissions: [],
                template: _template.perizinan
            }
        },
        methods: {
            getPerizinan(){
                let self = this;
                Connection.get(apiRoutes.perizinan).then(r=>{
                    self.permissions = r.data.map(d=>{
                        return {
                            agendaId: d.agenda_id,
                            date: d.ended_at,
                            type: d.status
                        }
                    });
                }).catch(e=>{
                    console.log(e);
                });
            }
        },
        mounted() {
            this.getPerizinan();
        }
    }
</script>

<style scoped>

</style>
