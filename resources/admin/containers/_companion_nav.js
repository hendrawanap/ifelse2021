export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavDropdown',
                name: 'Kelompok',
                route: '/kemahasiswaan',
                icon: 'cil-pen-nib',
                items: [
                    {
                        name: 'Semua Kelompok',
                        to: '/kemahasiswaan/kelompok'
                    },
                    {
                        name: 'Data Mahasiswa',
                        to: '/kemahasiswaan/data'
                    },
                    {
                        name: 'Tambah',
                        to: '/kemahasiswaan/kelompok/add'
                    }
                ]
            },
        ]
    }
]
