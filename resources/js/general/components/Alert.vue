<template>
    <div v-if="isSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{{ successMessage }}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" @click="$emit('close')">&times;</span>
            </button>
        </div>
    <div v-else class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{{ errorMessage }}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true" @click="$emit('close')">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: ['isSuccess', 'successMessage', 'errorMessage'],
    emits: ['close']
}
</script>

<style scoped>
    .alert {
        /* position: fixed; */
        /* top: 5px; */
        /* left: 50%; */
        /* transform: translate(-50%, 0); */
        width: 80%;
        margin: 5px auto 0;
        max-width: 478px;
        z-index: 50;
        position: relative;
    }
</style>
