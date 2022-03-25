<template>
    <div>
        <alert v-if="$route.query.success" :isSuccess="$route.query.success" success-message="Tugas Berhasil Dikumpulkan"/>
        <Loading v-if="isLoading"/>
        <div v-else class="container-fluid pb-4 pt-4" style="background-image: url('assets/login-bg.png'); background-size: cover; background-position: center; margin-bottom: 100px">
            <div class="container">
                <template v-if="tasks.length">
                    <div class="d-flex flex-wrap my-n2 mx-n2">
                        <div v-for="task in tasks" :key="'tugas-'+task.id" class="card task-card my-2 mx-2">
                            <div class="card-body">
                                <h5 class="font-weight-bold">{{task.title}}</h5>
                                <p class="text-black-50">Deadline : {{task.endAt}}</p>
                                <router-link tag="button" class="btn w-100" :class="[setButtonStyle(task)]" :to="'/penugasan/'+task.id" :disabled="setDisabled(task)">{{setButtonTitle(task)}}</router-link>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    Tidak Ada Penugasan
                </template>
            </div>
        </div>
    </div>

</template>

<script>

    import apiRoutes from "../../../router/api";
    import Connection from "../../../store/Connection";
    import Loading from "../../components/Loading";
    import Alert from "../../components/Alert";

    export default {
        name: "TaskIndex",
        components: {Loading, Alert},
        data(){
            return {
                tasks: [],
                isLoading: true,
            }
        },
        methods: {
            setButtonStyle(task) {
                switch (this.getStatus(task)) {
                    case 'open': return 'btn-primary';
                    case 'edit': return 'btn-success';
                    case 'finished': return 'btn-outline-primary';
                    case 'overdue': return 'btn-outline-danger';
                    case 'coming': return 'btn-outline-dark';
                }
            },
            setDisabled(task) {
                const status = this.getStatus(task);
                return status !== 'open' && status !== 'edit';
            },
            setButtonTitle(task) {
                switch (this.getStatus(task)) {
                    case 'open': return 'Kerjakan';
                    case 'edit': return 'Edit';
                    case 'finished': return 'Selesai';
                    case 'overdue': return 'Terlambat';
                    case 'coming': return 'Akan Dibuka';
                }
            },
            getExcerpt(e){
                return e.length > 30? e: e.substring(0, 30)+'...';
            },
            getStatus(task){
                return task.status === 'finished'? 'finished': new Date(task.endAt) < new Date()? 'overdue': (new Date(task.startAt) <= new Date() ? 'open': 'coming');
            },
            getTasks(){
                let self = this;
                Connection.get(apiRoutes.tasks).then(r=>{
                    self.tasks = r.data.map(d=>{
                        console.log(d);
                        return {
                            title: d.title,
                            description: d.description,
                            startAt: d.start_at,
                            endAt: d.end_at,
                            id: d.id,
                            status: d.status,
                        }
                    });
                })
            }
        },
        mounted() {
            this.getTasks();
            setTimeout(()=>{
                this.isLoading = false;
            }, 1000);
        }
    }
</script>

<style scoped>
    .task-card {
        width: 100%;
    }

    @media (min-width: 768px) {
        .task-card {
            width: 330px;
        }
    }

    @media (min-width: 992px) {
        .task-card {
            width: 290px;
        }
    }

    @media (min-width: 1200px) {
        .task-card {
            width: 350px;
        }
    }

</style>
