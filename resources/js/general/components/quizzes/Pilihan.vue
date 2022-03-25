<template>
    <div>
    <template v-if="selected">
        <button v-if="uploaded" class="card bg-primary flex-row w-100 text-white p-2 mt-2 text-left text-nowrap">
            <span class="mr-1">{{ pilihan }}.</span><span>{{ jawaban.value }}</span>
        </button>
        <button v-else class="card bg-light flex-row w-100 text-white p-2 mt-2 text-left text-nowrap">
            <span class="mr-1">{{ pilihan }}.</span><span>{{ jawaban.value }}</span>
        </button>
    </template>
    <button v-else class="inactive card w-100 flex-row p-2 mt-2 text-left">
        <span class="mr-1">{{ pilihan }}.</span><span>{{ jawaban.value }}</span>
    </button>
    </div>
</template>

<script>
export default {
    props: ['index', 'jawaban', 'selected', 'uploaded'],
    computed: {
        pilihan() {
            let choice = '';
            switch(this.index) {
                case 0: choice = 'A'; break;
                case 1: choice = 'B'; break;
                case 2: choice = 'C'; break;
                case 3: choice = 'D'; break;
                case 4: choice = 'E'; break;
            }
            return choice;
        }
    }
}
</script>

<style scoped>
    button {
        font-size: 1rem;
    }

    .inactive {
        background: var(--white);
        color: var(--dark);
    }
    .inactive:hover {
        background: var(--light);
        color: var(--primary);
    }
</style>
