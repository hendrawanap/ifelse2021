<template>
    <div v-if="isValid" class="container-fluid pb-5 pt-4 mb-5" style="background-size: cover; background-position: center">
        <div class="container col-lg-7">
            <div class="card mb-3">
                <div class="card-body align-items-center text-center">
                    <h3 class="text-center">
                        {{title}}
                    </h3>
                    <pre style="white-space: pre-wrap; text-align: justify; font-family: 'Poppins', sans-serif;">
                        {{description}}
                    </pre>
                </div>
            </div>

            <div class="card mb-5">
                <div class="card-body">
                    <h5>Pengumpulan</h5>
                    <form @submit="submitTask">
                        <div v-for="field in fields" class="form-group">
                            <label>{{field.label}}</label>
                            <input class="form-control" v-model="field.value">
<!--                            <small class="form-text text-muted">Pastikan File Yang Anda Share Bersifat Public</small>-->
                        </div>

<!--                        <div class="form-group">-->
<!--                            <label>Link Drive 2</label>-->
<!--                            <input class="form-control">-->
<!--                            <small class="form-text text-muted">Pastikan File Yang Anda Share Bersifat Public</small>-->
<!--                        </div>-->

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import apiRoutes from "../../../router/api";
    import Connection from "../../../store/Connection";

    export default {
        name: "TaskDetails",
        data(){
            let id = this.$route.params.id;
            return {
                id: id,
                title: '',
                description: '',
                fields: [],
                isValid: false,
            }
        },
        methods: {
            submitTask(e){
                e.preventDefault();
                let fielder = {};
                this.fields.forEach((curr)=>{
                    return fielder[curr.id] = curr.value;
                });
                Connection.setHeader('Content-Type','multipart/form-data');
                Connection.post(apiRoutes.tasks+this.id, {fields: fielder}).then(r=>{
                    if(r.data.error){

                    } else {
                        this.$router.push('/penugasan?success=true');
                    }
                })
            },
            getTaskInfo(){
                let self = this;
                Connection.get(apiRoutes.tasks+self.id).then(r=>{
                    if(!r.data.error){
                        let d = r.data;
                        self.title = d.title;
                        self.description = d.description;
                        self.fields = d.fields.map(f=>{return{...f, value: ''}});
                        self.startAt = d.start_at;
                        self.endAt = d.end_at;

                        self.fielder = self.fields.map(f=>{
                            return {
                                id: f.id,
                                value: ''
                            }
                        })
                        self.isValid = true;
                    } else {
                        self.$router.push('/penugasan');
                    }
                })
            }
        },
        mounted(){
            this.getTaskInfo();
        }
    }
</script>

<style scoped>

</style>
