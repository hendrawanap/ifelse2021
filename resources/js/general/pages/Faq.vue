<template>
    <div class="container-sm h-100 py-5 text-dark" style="max-width: 720px">
        <h1 class="text-center mb-3">FAQ</h1>
        <div class="card mb-3 elevate-1" v-for="(faq, i) in faqs" :key="'faq-'+i">
            <button class="d-flex align-items-center bg-transparent py-3 px-4 w-100 text-left d-flex justify-content-between collapsed" type="button" data-toggle="collapse" :data-target="'#faq-'+i" aria-expanded="true" :aria-controls="'faq-'+i">
                <h5 class="mb-0 pr-4">{{ faq.question }}</h5>
                <div class="fa fa-chevron-down"></div>
            </button>
            <div :id="'faq-'+i" class="collapse text-muted mt-n3 text-justify" style="font-size: 1rem" :aria-labelledby="'faq-'+i">
                <div class="mt-2 mx-4 mb-3">
                    {{ faq.answer }}
                </div>
            </div>
        </div>
        <div class="text-center flex-fill my-5 py-3">
            <h1>Masih Punya Pertanyaan?</h1>
            <h5 class="text-muted">Jika kamu masih memiliki pertanyaan yang belum terjawab, kamu bisa kirim pertanyaan kamu ke akun sosial media IF ELSE 2021 dibawah ini.</h5>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faqs: [
                {
                    question: 'IF ELSE itu penting gak sih?',
                    answer: 'Sangat penting, karena jika sampai tidak lulus tidak dapat mengikuti organisasi yang ada di HMIF.',
                },
                {
                    question: 'Kapan dan sampai kapan IF ELSE 2021 dilaksanakan?',
                    answer: 'Rangkaian kegiatan IF ELSE 2021 dimulai pada Agustus hingga Oktober 2021.',
                },
                {
                    question: 'Bagaimana cara lulus IF ELSE?',
                    answer: 'Harus mengikuti semua rangkaian kegiatan, menaati peraturan, dan mengerjakan semua penugasan IF ELSE 2021.',
                },
                {
                    question: 'Apakah upload twibbon wajib bagi mahasiswa baru?',
                    answer: 'Wajib, karena twibbon ini termasuk dalam salah satu penugasan IF ELSE 2021.',
                },
                {
                    question: 'Bagaimana mekanisme pelaporan ketika hari H mengalami kendala jaringan atau teknis lainnya?',
                    answer: 'Silakan melaporkan kepada Pendamping masing-masing kelompok disertai dengan bukti pendukung',
                },
                {
                    question: 'Apa itu Pendataan?',
                    answer: 'Pendataan adalah layanan untuk Mahasiswa Baru/Pemutihan Teknik Informatika 2021 jika mengalami kendala jaringan (pemadaman listrik, bencana alam, dan sebagainya) atau teknis (kamera atau mikrofon tidak berfungsi dengan baik dan semacamnya). Pendataan ini dibuka H-2 hingga rangkaian dimulai di setiap rangkaian IF ELSE 2021.',
                },
                {
                    question: 'Apa itu Perizinan?',
                    answer: 'Perizinan adalah layanan untuk Mahasiswa Baru/Pemutihan Teknik Informatika 2021 yang ingin mengajukan perizinan tidak mengikuti rangkaian sesuai dengan Ketentuan Perizinan IF ELSE 2021. Perizinan dibuka H-2 hingga H+3 di setiap rangkaian IF ELSE 2021.',
                },
                {
                    question: 'Bagaimana cara mengetahui informasi mengenai tata tertib yang berlaku pada setiap rangkaian IF ELSE 2021?',
                    answer: 'Untuk tata tertib dapat dilihat pada Buku Saku IF ELSE 2021.',
                },
                {
                    question: 'Dresscode apa yang dipakai pada setiap rangkaian IF ELSE 2021?',
                    answer: 'Untuk dresscode dapat dilihat pada bagian rangkaian pada website IF ELSE 2021.',
                },
                {
                    question: 'Bagaimana cara mengetahui informasi mengenai pelanggaran & sanksi yang berlaku pada setiap rangkaian IF ELSE 2021?',
                    answer: 'Untuk pelanggaran & sanksi dapat dilihat pada Buku Saku IF ELSE 2021.',
                },
                {
                    question: 'Bagaimana cara melakukan komplain mengenai nilai tugas, rangkaian, atau kelulusan IF ELSE 2021?',
                    answer: 'Untuk komplain mengenai hal tersebut dapat melalui Justifikasi IF ELSE 2021.',
                },
                {
                    question: 'Apakah postingan di penugasan sosmed sudah bisa dihapus?',
                    answer: 'Postingan penugasan dapat dihapus setelah seluruh rangkaian kegiatan IF ELSE 2021 selesai.',
                },
                {
                    question: 'Siapa yang dihubungi jika mahasiswa baru mau menanyakan sesuatu?',
                    answer: 'Hubungi pendamping kelompok atau bisa menghubungi contact person yang bersangkutan. ',
                },
                {
                    question: 'Apakah penugasan dapat diunggah pada akun sosial media kedua atau lainnya?',
                    answer: 'Tidak boleh, penugasan harus diunggah pada akun sosial media utama. Selama rangkaian IF ELSE 2021 berlangsung, akun sosial media tidak diperbolehkan diprivasi dan penugasan tidak diarsipkan.',
                },
            ]
        }
    }
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
