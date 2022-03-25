<template>
    <div class="card px-2 pt-1 pb-2 elevate-1" style="min-width: 226px">
        <div class="d-flex justify-content-between font-semibold">
            <div>Progress</div>
            <div>{{ banyakSoalTerjawab }}/{{total}} Soal</div>
        </div>
        <div class="progress mt-1">
            <div class="progress-bar" role="progressbar" :style="`width:${banyakSoalTerjawab / total * 100}%`" :aria-valuenow="banyakSoalTerjawab / total * 100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['banyakSoalTerjawab', 'total']
}
</script>
