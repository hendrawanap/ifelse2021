<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('news')->insert(
            [
                'title' => 'Berita 1',
                "content"=> "### Takbir berkumandang, pertanda hari kemenangan telah datang.\nHalo Informatics 👋🏻!\n\nKami segenap keluarga besar IF ELSE 2021 mengucapkan Selamat Hari Raya Idul Adha 1442 H. Tidak masalah menunda berkumpul bersama keluarga. Karena Idul Adha bukan hanya bertemu keluarga, tetapi pengorbanan serta keikhlasan hati kita dalam melaksanakannya.  \n\"Semangat berkurban untuk kita semua. Jadikan hari raya ini pengingat untuk memperkuat keimanan dan kemanusiaan kita. Selamat Hari Raya Idul Adha.\" 🙏\n\nUntuk info lebih lanjut tetap pantau terus linimasa dan sosial media kami di\n- LINE : @ifelsefilkomub  \n- INSTAGRAM : [ifelsefilkomub](https://www.instagram.com/ifelsefilkomub/)  \n- YOUTUBE : IF ELSE FILKOM UB\n\nDepartemen Pengembangan Sumber Daya Manusia  \nEksekutif Mahasiswa Informatika UB 2021  \nKabinet Lentera  \n\n---\n\n**#ifelse2021**  \n**#SatuPaduInformatika**  \n**#KnowYourHomeGrowYourZone**  \n**#BeFearlessToExploreLoveBringsYouHome**  ",
                'image' => 'berita1.jpg',
                'published_at' => '2021-07-08',
                'is_published' => true,
            ],
            [
                'title' => 'Berita 2',
                'content' => Str::random(100),
                'image' => 'berita2.jpg',
                'published_at' => '2021-08-08',
                'is_published' => false,
            ]
        );
    }
}
