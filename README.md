### Routes

Semua route berisi parameter Index dan Details. Di mana index berisi sekumpulan
yang ketika diklik akan muncul detailsnya.

Untuk perubahan page index ke details tidak diperlukan refresh kembali sehingga
data hanya dikirim secara langsung dan page index nya.

Vue Route terdiri atas:

1. Home: ```/```

2. Tentang: ```/tentang```

3. Rangkaian: ```/rangkaian``` dan ```/rangkaian/:slug```

4. Berita: ```/berita``` dan ```/berita/:slug```

5. Penugasan: ```/penugasan``` dan ```/penugasan/:slug```

6. Penilaian: ```/penilaian``` dan ```/penilaian/:slug```

7. Perizinan: ```/perizinan``` dan ```/perizinan/:slug```

8. Quiz: ```/quiz``` dan ```/quiz/:slug```

9. Admin: ```/admin``` dan ```/admin/:slug``` (belum diatur)

Perubahan yang terjadi pada link navbar hanya dapat disebabkan oleh autorisasi.
Mahasiswa Baru memiliki autorisasi untuk memeriksa penugasan, penilaian, perizinan, dan quiz HANYA jika telah login

#Installation

#### Install Composer Modules
```
composer install
```
#### Install Node Modules
```
npm install
```

#### Copy ENV File

```
copy .env.example .env
```

#### Generate Key

```
php artisan key:generate
```

#### Create Empty Database

Use the database management you want

#### Add database Information to  ```.env``` file

#### Migrate and Seed

```
php artisan migrate --seed
```

# Core UI Integration

All The Requirements of Core UI is now live!

1. To create new admin route, go to ``/resources/admin/router/index.js``, 
add any routes there as the templates are. Don't forget to add to navbar
in ``/resources/admin/containers/_nav.js`` which dynamically will add
any navigation into the sidebar. 

2. If you have set any icons and not seen on the page, it is caused by
the library importing which is existed on the ``resources/admin/assets/icons/icon.js``.
Add any icons included in icon page to import them directly to the page (add them on the import and export syntax).

