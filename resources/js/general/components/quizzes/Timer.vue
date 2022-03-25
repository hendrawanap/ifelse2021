<template>
    <div class="card px-3 py-2 text-nowrap elevate-1">
        <div class="font-medium" style="font-size: 0.85rem">Sisa Waktu:</div>
        <div class="font-semibold" style="font-size: 1rem">{{remainingTime}}</div>
    </div>
</template>

<style scoped>
    .card {
        max-width: min-content;
    }
</style>

<script>
export default {
    props: {
        remainingTime: String,
    }
}
</script>
