<template>
  <div>
    <div class="card mb-3">
      <div class="card-body ">
          <h4 class="text-center">Nilai Rangkaian {{ rangkaianKe }}</h4>
          <div class="d-flex justify-content-center align-items-center" style="height: 200px;">
            <h1 v-show="show">{{ nilai }}</h1>
            <button v-show="!show" class="mt-3 btn btn-secondary fw-bold text-white" @click="() => show = true">Tampilkan Nilai</button>
          </div>
          <!-- <div class="progress">
              <div class="progress-bar bg-primary" :style="`width: ${progress.persentase}%`" role="progressbar" :aria-valuenow="progress.persentase" aria-valuemin="0" aria-valuemax="100"></div>
          </div> -->
          <!-- <button class="mt-3 btn btn-secondary w-100 fw-bold text-white" data-toggle="modal" data-target="#progressModal1" @click="$emit('change-selected', progress.rangkaianId)">Detail Penugasan</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['nilai', 'rangkaianKe'],
    data() {
      return {
        show: false
      }
    }
}
</script>
