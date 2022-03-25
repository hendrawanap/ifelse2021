<template>
    <div>
        <div class="card p-3 elevate-1">
            <div class="d-flex align-items-center">
                <div class="rounded-circle flex justify-content-center align-items-center bg-dark mr-3" style="width:60px; height:60px;"><div class="fa fa-calendar-alt fa-2x text-white"></div></div>
                <div>
                    <div class="font-semibold" style="font-size: 1.15rem">Rangkaian {{ permission.agendaId }}</div>
                    <div class="font-semibold">Batas:</div>
                    <div class="mt-n2">{{ permission.date }}</div>
                </div>
            </div>
            <button v-if="permission.type === 'closed'" class="btn btn-outline-success w-100 mt-3" disabled>Belum Dibuka</button>
            <button v-if="permission.type === 'overdue'" class="btn btn-outline-danger w-100 mt-3" disabled>Ditutup</button>
            <router-link v-else :to="isPerizinan ? `/perizinan/${permission.agendaId}` : `/pendataan/${permission.agendaId}`">
                <button v-if="permission.type === 'open'" class="btn btn-primary w-100 mt-3">{{ isPerizinan ? 'Buat Perizinan' : 'Buat Pendataan'}}</button>
                <button v-if="permission.type === 'resubmit'" class="btn btn-success w-100 mt-3">{{ isPerizinan ? 'Revisi Perizinan' : 'Revisi Pendataan'}}</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['permission', 'isPerizinan']
}
</script>
