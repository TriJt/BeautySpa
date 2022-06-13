const navigator = [
    {
        display: 'Về SeoulSpa.vn',
        base: '/gioi-thieu'
    },
    {
        display: 'Điều Trị Da',
        base: '/dich-vu',
        groups: [
            [
                {
                    display: 'Điều Trị Mụn',
                    path: 'dieu-tri-mun'
                },
                {
                    display: 'Trị Mụn E2X',
                    path: 'tri-mun-e2x'
                },
                {
                    display: 'Trị Mụn Chuyên Sâu',
                    path: 'tri-mun-chuyen-sau'
                },
                {
                    display: 'Trị Mụn Y Khoa',
                    path: 'tri-mun-y-khoa'
                },
                {
                    display: 'Điều Trị Mụn Lưng',
                    path: 'dieu-tri-mun-lung'
                },
                {
                    display: 'Điều trị da mụn',
                    path: 'dieu-tri-da-mun'
                },
                {
                    display: 'Điều Trị Thâm Mụn',
                    path: 'dieu-tri-tham-mun-kep'
                },
                {
                    display: 'Trị Mụn Huyết Thanh Tảo Biển',
                    path: 'tri-mun-huyet-thanh-tao-bien'
                }
            ],
            [
                {
                    display: 'Điều Trị Nám',
                    path: 'dieu-tri-nam',
                },
                {
                    display: 'Điều Trị Nám Da E-light',
                    path: 'dieu-tri-nam-da-e-light'
                },
                {
                    display: 'Điều Trị Nám Prp 3.0',
                    path: 'dieu-tri-nam-prp-3-0'
                },
                {
                    display: 'Điều Trị Nám Da Mặt',
                    path: 'dieu-tri-nam-da'
                }
            ],
            [
                {
                    display: 'Điều Trị Sẹo Rỗ',
                    path: 'dieu-tri-seo-ro'
                },
                {
                    display: 'Điều Trị Sẹo Rỗ PRP 3.0',
                    path: 'dieu-tri-seo-ro-prp-3-0'
                },
                {
                    display: 'Điều Trị Sẹo Rỗ PRP 4.0',
                    path: 'dieu-tri-seo-ro-prp-4-0'
                },
                {
                    display: 'Trị Sẹo Rỗ',
                    path: 'tri-seo-ro'
                },
            ],
            [
                {
                    display: 'Điều Trị Thâm',
                    path: 'dieu-tri-tham'
                },
                {
                    display: 'Điều Trị Thâm Mụn',
                    path: 'dieu-tri-tham-mun-kep'
                },
                {
                    display: 'Trị Thâm Vi Kim Tảo Biển',
                    path: 'tri-tham-vi-kim-tao-bien'
                },
                {
                    display: 'Trị Thâm Elight',
                    path: 'tri-tham-elight'
                },
                {
                    display: 'Trị Thâm Vitamin C Kép',
                    path: 'tri-tham-vitamin-c-kep'
                },
            ],

        ]
    },
    {
        display: 'Chăm Sóc Da',
        base: '/dich-vu',
        children: [
            {
                display: 'Cấy DNA Cá Hồi',
                path: 'cay-dna-ca-hoi'
            },
            {
                display: 'Hút Chì Thải Độc',
                path: 'hut-chi-thai-doc'
            },
            {
                display: 'Cấy Glutathione',
                path: 'cay-glutathione'
            },
            {
                display: 'Cấy Hồng Sâm',
                path: 'cay-hong-sam'
            },
            {
                display: 'Cấy Tảo Xoắn Spirulina',
                path: 'cay-tao-xoan-spirulina'
            },
            {
                display: 'Ủ Mầm Tái Sinh Da',
                path: 'u-mam-tai-sinh-da'
            },
            {
                display: 'Ủ Trắng Face Huyết Yến',
                path: 'u-trang-face-huyet-yen'
            },
            {
                display: 'Liệu Trình Carboxyl Thải Độc Da',
                path: 'lieu-trinh-carboxyl-thai-doc-da'
            },
            {
                display: 'Tắm trắng phi thuyền',
                path: 'tam-trang'
            },
            {
                display: 'Triệt Lông Elight',
                path: 'triet-long'
            },
        ]
    },
    // {
    //   display: 'Làm Đẹp Công Nghệ Cao',
    //   base: '/dich-vu'
    // },
    {
        display: 'Phun Xăm',
        base: '/dich-vu',
        children: [
            {
                display: 'Phun chân mày',
                path: 'phun-may'
            },
            {
                display: 'Dịch Vụ Phun Môi',
                path: 'phun-moi'
            },
            {
                display: 'Xóa Xăm Môi',
                path: 'xoa-xam-moi'
            },
            {
                display: 'Xóa xăm lông mày',
                path: 'xoa-xam-long-may'
            },
            {
                display: 'Điêu khắc chân mày',
                path: 'dieu-khac-chan-may'
            },
        ]
    },
    {
        display: 'Thẩm Mỹ',
        base: '/dich-vu',
        children: [
            {
                display: 'Căng Chỉ Collagen',
                path: 'cang-chi-collagen'
            },
            {
                display: 'Cấy Collagen Đa Nguyên Bào',
                path: 'cay-collagen-da-nguyen-bao'
            },
            {
                display: 'Cấy Hủy Mỡ Nọng Cằm',
                path: 'cay-huy-mo-nong-cam'
            },
            {
                display: 'Tạo hình vùng kín',
                path: 'tao-hinh-vung-kin'
            },
            {
                display: 'Tiêm Filler',
                path: 'tiem-filler'
            },
            {
                display: 'Tiêm Filler Cằm',
                path: 'tiem-filler-cam'
            },
            {
                display: 'Tiêm Filler Môi',
                path: 'tiem-filler-moi'
            },
            {
                display: 'Tiêm Filler Mũi',
                path: 'tiem-filler-mui'
            },
            {
                display: 'Tiêm Filler rãnh cười',
                path: 'tiem-filler-ranh-cuoi'
            },
            {
                display: 'Tiêm Filler thái dương',
                path: 'tiem-filler-thai-duong'
            },
            {
                display: 'Tiêm Botox xóa nhăn',
                path: 'tiem-botox'
            },
            {
                display: 'Trẻ hóa da Thermage',
                path: 'tre-hoa-da-bang-cong-nghe-thermage'
            },
        ]
    },
    {
        display: 'Tuyển Dụng',
        base: '/tuyen-dung'
    },
    {
        display: 'Store',
        base: '/san-pham'
    }
]

export default navigator