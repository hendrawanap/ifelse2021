<?php

namespace Database\Seeders;

use App\Models\Companion;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Companion::insert([
            [
                'name'=>'Tria Elvafizani',
                'line' => 'triaelva',
                'phone' => '081359797929'
            ],
            [
                'name'=>'Elok Nuraida Kusuma Dewi',
                'line' => 'aoiyuki_',
                'phone' => '083839300146'
            ],
            [
                'name'=>'Syarli Nurapriliany',
                'line' => '088289802475',
                'phone' => '087773042002'
            ],
            [
                'name'=>'Azka Isnandaru Fajrina Mulya',
                'line' => 'ndaruaifm',
                'phone' => '085330712935'
            ],
            [
                'name'=>'Muhammad Rhobith Ageng Rif&#39;atullah',
                'line' => 'raros05',
                'phone' => '085865930419'
            ],
            [
                'name'=>'Ahmad Luthfi Azmi Haikal',
                'line' => 'alahaikal',
                'phone' => '082145636277'
            ],
            [
                'name'=>'Muhammad Huda Nugraha',
                'line' => 'hudanugraha12',
                'phone' => '085261161550'
            ],
            [
                'name'=>'Muhammad Fadhil Hidayatullah',
                'line' => 'faddd16',
                'phone' => '082299227661'
            ],
            [
                'name'=>'Ivanna Adista Sihombing',
                'line' => 'ivanasihombingcias30',
                'phone' => '082336973885'
            ],
            [
                'name'=>'Abdul Haris Halim',
                'line' => 'haris-halim',
                'phone' => '081289328639'
            ],
            [
                'name'=>'Sza Sza Amulya Larasati',
                'line' => 'szaszaal',
                'phone' => '08817018980'
            ],
            [
                'name'=>'Oktaviani Dwi Nur Aini',
                'line' => 'oktavianda',
                'phone' => '083856679549'
            ],
            [
                'name'=>'Jhon Michael Manik',
                'line' => 'besunshine_',
                'phone' => '082272253372'
            ],
            [
                'name'=>'Faishal Afif',
                'line' => 'faishal777',
                'phone' => '081907025320'
            ],
            [
                'name'=>'Thana Fadhila P',
                'line' => 'tfdhila_',
                'phone' => '081519512550'
            ],
            [
                'name' => 'Hanna Shafira Anggraheni',
                'line' => 'hannahanna127',
                'phone' => '085257636610'
            ],
            [
                'name'=>'Ido Suranta Munthe',
                'line' => 'ido_munthe',
                'phone' => '081248509635'
            ]
        ]);
    }
}
