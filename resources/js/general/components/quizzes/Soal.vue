<template>
    <div v-show="semuaSoal === true || active === soalKe" :id="'soal'+soalKe" class="card card-body elevate-1">
        <div class="d-flex font-medium text-dark" style="font-size: 1rem">
            <div class="mr-1">{{ soalKe }}.</div>
            <div v-html="soal.question"></div>
        </div>
        <div class="row-cols-1 mt-2">
            <Pilihan v-for="(choice,index) in soal.choices" :key="index" :jawaban="choice" :index="index" :uploaded="(answer.key === choice.key)?answer.hasUploaded: false" :selected="answer.key === choice.key" v-on:click.native="changeChoice(index)"></Pilihan>
        </div>
    </div>
</template>

<script>
import Pilihan from './Pilihan.vue';
export default {
    components: {
        Pilihan
    },
    props: ['soal', 'soalKe', 'active', 'semuaSoal', 'setDijawab', 'answer', 'id'],
    data() {
        return {
            selectedChoice: null,
        }
    },
    methods: {
        changeChoice: function (index) {
            if (this.selectedChoice === index) {
                this.selectedChoice = null;
                this.setDijawab(this.id, '');
            } else {
                this.selectedChoice = index;
                this.setDijawab(this.id, this.soal.choices[index].key);
            }
        },
        text: ()=>{

        },
        isUploaded: ()=>{

        }
    },
}
</script>
