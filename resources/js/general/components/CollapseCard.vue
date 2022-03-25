<template>
    <div class="card mb-3 elevate-1">
        <button class="d-flex align-items-center bg-transparent py-3 px-3 w-100 text-left d-flex justify-content-between collapsed" type="button" data-toggle="collapse" :data-target="'#'+id" aria-expanded="true" :aria-controls="id">
            <h5 class="mb-0">{{ title }}</h5>
            <div class="fa fa-chevron-down"></div>
        </button>
        <div :id="id" class="collapse text-muted px-3 pb-2 mt-n2" style="font-size: 1rem" :aria-labelledby="id">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'id']
}
</script>

<style scoped>
    .card .collapsed h5 {
        color: var(--dark);
        transition: color 0.25s;
    }

    .card h5 {
        color: var(--primary);
        transition: color 0.25s;
    }

    .card:hover {
        background-color: var(--light);
        color: var(--primary);
    }

    .card .fa {
        transform: rotate(180deg);
        transition: transform 0.25s;
        color: var(--primary);
    }
    .card .collapsed .fa {
        transform: rotate(0deg);
        transition: 0.25s;
        color: var(--dark);
    }
</style>