export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavTitle',
                _children: ['Post']
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Pendataan',
                to: '/pendataan',
                icon: 'cil-book',
                items: [
                    {
                        name: 'Pendataan',
                        to: '/pendataan'
                    }
                ]
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Perizinan',
                to: '/perizinan',
                icon: 'cil-notes',
                items: [
                    {
                        name: 'Perizinan',
                        to: '/perizinan'
                    }
                ]
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Penugasan',
                route: '/penugasan',
                icon: 'cil-pen',
                items: [
                    {
                        name: 'Semua Tugas',
                        to: '/penugasan'
                    },
                    {
                        name: 'Tambah Tugas',
                        to: '/penugasan/add'
                    }
                ]
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Quiz',
                route: '/quiz',
                icon: 'cil-pen-nib',
                items: [
                    {
                        name: 'Semua Quiz',
                        to: '/quiz'
                    },
                    {
                        name: 'List Pertanyaan',
                        to: '/quiz/questions'
                    },
                    {
                        name: 'Tambah Quiz',
                        to: '/quiz/add'
                    }
                ]
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Presensi',
                to: '/presensi',
                icon: 'cil-drop',
            },
        ]
    }
]
