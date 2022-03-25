<template>
    <div class="card px-3 pt-2 pb-3 elevate-1">
        <div class="font-semibold mb-2">Soal:</div>
        <div id="navigasi-soal" class="grid">
            <a v-on:click="gantiSoal(index+1)" v-for="(soal, index) in soalTerjawab" :key="'soal'+(soal.id)" :href="`#soal${index+1}`" :id="'nomor-soal-'+soal.id" :class="'nomor-soal d-flex align-items-center justify-content-center '+(soal.key? 'done':'')">
                {{ index + 1 }}
            </a>
        </div>
    </div>
</template>

<style scoped>
    .nomor-soal {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        width: 32px;
        height: 32px;
        font-weight: 600;
        text-decoration: none;
    }
    .nomor-soal:hover, .nomor-soal.done {
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 50%;
        background-color: var(--primary);
        color: white;
    }

    .grid {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        gap: 12px;
    }
</style>

<script>
export default {
    props: ['soalTerjawab', 'gantiSoal'],
}
</script>
