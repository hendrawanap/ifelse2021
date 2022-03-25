export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavTitle',
                _children: ['Post']
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Berita',
                route: '/berita',
                icon: 'cil-newspaper',
                items: [
                    {
                        name: 'Daftar Berita',
                        to: '/berita'
                    },
                    {
                        name: 'Tambah Berita',
                        to: '/berita/add'
                    }
                ]
            },
        ]
    }
]
