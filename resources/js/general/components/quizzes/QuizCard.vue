<template>
    <div class="card px-3 pt-2 pb-3 justify-content-around elevate-1 text-dark">
        <div class="d-flex align-items-center text-nowrap">
            <div class="d-flex flex-column align-items-center mr-4">
                <div class="text-nowrap font-weight-bold" style="font-size: 1.25rem">{{ quiz.excerpt }}</div>
                <div class="rounded-circle flex justify-content-center align-items-center bg-dark mt-1" style="width:60px; height:60px;"><div class="fa fa-pencil-alt fa-3x text-white"></div></div>
            </div>
            <div v-if="quiz.type === 'ongoing' || quiz.type === 'overdue' || quiz.type === 'open' || quiz.type === 'coming soon'" class="d-flex flex-column">
                <div>
                    <div class="font-weight-bold">Deadline:</div>
                    <div class="mt-n2">{{ quiz.deadline }}</div>
                </div>
                <div>
                    <div class="font-weight-bold">Durasi:</div>
                    <div class="mt-n2">{{ quiz.durasi }}</div>
                </div>
                <div>
                    <div class="font-weight-bold">Jumlah Soal:</div>
                    <div class="mt-n2">{{ quiz.jumlahSoal }} Soal</div>
                </div>
            </div>
            <div v-if="quiz.type === 'finished'" class="d-flex flex-column">
                <div>
                    <div class="font-weight-bold">Selesai:</div>
                    <div class="mt-n2">{{ quiz.selesai }}</div>
                </div>
            </div>
        </div>
        <button v-if="quiz.type === 'open'" class="btn btn-primary w-100 mt-2" data-toggle="modal" data-target="#konfirmasiKerjakan" @click="() => setModalLink(quiz.id)">Kerjakan</button>
        <button v-if="quiz.type === 'ongoing'" class="btn btn-success w-100 mt-2" data-toggle="modal" data-target="#konfirmasiKerjakan" @click="() => setModalLink(quiz.id)">Lanjutkan</button>
        <button v-if="quiz.type === 'overdue'" class="btn btn-outline-danger btn w-100 mt-2" disabled>Terlewat</button>
        <button v-if="quiz.type === 'finished' || quiz.type === 'coming soon'" class="btn btn-outline-primary w-100 mt-2" disabled>{{quiz.type === 'coming soon'? 'Belum Dibuka': 'Selesai'}}</button>
    </div>
</template>

<script>
export default {
    props: ['quiz', 'setModalLink']
}
</script>
