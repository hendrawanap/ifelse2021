<template>
    <div>
        <h1 class="mb-1" v-if="isPerizinan">Perizinan</h1>
        <h1 class="mb-1" v-else>Pendataan Kendala</h1>
        <h5 class="mb-4 text-muted text-justify" v-if="isPerizinan">Diperuntukkan bagi Mahasiswa Teknik Informatika Angkatan 2021 yang ingin melakukan perizinan karena tidak hadir pada rangkaian</h5>
        <h5 class="mb-4 text-muted text-justify" v-else>Diperuntukkan untuk Mahasiswa Teknik Informatika 2021 yang mengalami kendala dan masalah teknis lainnya saat pelaksanaan IF ELSE 2021.</h5>
    </div>
</template>

<script>
export default {
    props: ['isPerizinan']
}
</script>
