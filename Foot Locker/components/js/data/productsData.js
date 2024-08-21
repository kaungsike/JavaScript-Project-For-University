const products = [
    {
        id : 1,
        img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT?wid=250&hei=250',
        name : 'Vans Knu Skool',
        brand : 'Vans',
        gender : "Men's",
        color : 'Black / True White',
        price : 75.00,
        rating : 4.2,
        product : [
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT?wid=250&hei=250',
                color : 'Black / True White',
                price : 75.00,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
                // productDetailInfo : {
                //     img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a1?wid=581&hei=581&fmt=png-alpha',
                //     categoryImg : [
                //         {
                //             img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a1?wid=581&hei=581&fmt=png-alpha'
                //         },
                //         {
                //             img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a2?wid=581&hei=581&fmt=png-alpha'
                //         },
                //         {
                //             img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a3?wid=581&hei=581&fmt=png-alpha'
                //         },
                //         {
                //             img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a4?wid=581&hei=581&fmt=png-alpha'
                //         },
                //         {
                //             img : 'https://images.footlocker.com/is/image/EBFL2/N09QC6BT_a5?wid=581&hei=581&fmt=png-alpha'
                //         }
                //     ]
                // }
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/N0009QC6?wid=250&hei=250',
                color : 'Black / Red / White',
                price : 75.00,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/N0009QC6_01?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N0009QC6_01?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N0009QC6_02?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N0009QC6_03?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N0009QC6_04?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/N0009QC6_05?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/9QCNWD?wid=250&hei=250',
                color : 'Navy / White',
                price : 75.00,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/9QCNWD_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9QCNWD_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9QCNWD_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9QCNWD_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9QCNWD_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9QCNWD_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/VN9QCBLS?wid=250&hei=250',
                color : 'Yellow / Brown',
                price : 80.00,
                main_img : "https://images.footlocker.com/is/image/EBFL2/VN9QCBLS_01?wid=581&hei=581&fmt=png-alpha",
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/VN9QCBLS_01?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/VN9QCBLS_02?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/VN9QCBLS_03?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/VN9QCBLS_04?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/VN9QCBLS_05?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            }
        ],  
    },

    {
        id : 2,
        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669141?wid=250&hei=250',
        name : 'Jordan Retro 4',
        brand : 'Jordan',
        gender : "Boys' Preschool",
        color : 'Off White / Military Blue / Neutral Grey',
        price : 100,
        rating : 4.6,
        product : [
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/Q7669141?wid=250&hei=250',
                color : 'Off White / Military Blue / Neutral Grey',
                price : '100',
                main_img : "https://images.footlocker.com/is/image/EBFL2/Q7669141_01?wid=581&hei=581&fmt=png-alpha",
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669141_01?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669141_02?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669141_03?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669141_04?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669141_05?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/Q7669103?wid=250&hei=250',
                color : 'White',
                price : '100',
                main_img : "https://images.footlocker.com/is/image/EBFL2/Q7669103_01?wid=581&hei=581&fmt=png-alpha",
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669103_01?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669103_02?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669103_03?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669103_04?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Q7669103_05?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            }
        ]
    },

    {
        id : 3,
        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100?wid=250&hei=250',
        name : "Nike Blazer Mid '77",
        brand : "Nike",
        gender : "Women's",
        color : 'Black / White / Sail',
        price : 79.00,
        rating : 3.5,
        product : [
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100?wid=250&hei=250',
                color : 'Black / White / Sail',
                price : 79.00,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055100_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/Z1055117?wid=250&hei=250',
                color : 'White / White',
                price : 74.99,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/Z1055117_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055117_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055117_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055117_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055117_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/Z1055117_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            }
        ]
    },

    {
        id : 4,
        img : 'https://images.footlocker.com/is/image/EBFL2/T8529164?wid=250&hei=250',
        name : 'Jordan Retro 6',
        brand : 'Jordan',
        gender : "Men's",
        color : 'White / Navy / Red',
        price : 200,
        rating : 4.8,
        product : [
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/T8529164?wid=250&hei=250',
                color : 'White / Navy / Red',
                price : 200,
                main_img : "https://images.footlocker.com/is/image/EBFL2/T8529164_01?wid=581&hei=581&fmt=png-alpha",
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529164_01?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529164_02?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529164_03?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529164_04?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529164_05?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {  
                img : 'https://images.footlocker.com/is/image/EBFL2/T8529170?wid=250&hei=250',
                color : 'White / Yellow Ochre / Black',
                price : 169.99,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/T8529170_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529170_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529170_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529170_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529170_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529170_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/T8529112?wid=250&hei=250',
                color : 'White / Black',
                price : 169.99,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/T8529112_01?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529112_01?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529112_02?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529112_03?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529112_04?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/T8529112_05?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            }
        ]
    },

    {
        id : 5,
        img : 'https://images.footlocker.com/is/image/EBFL2/W2288111?wid=250&hei=250',
        name : "Nike Air Force 1 '07 LE",
        brand : 'Nike',
        gender : "Men's",
        color : 'White / White',
        price : 115,
        rating : 4.9,
        product : [
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/W2288111?wid=250&hei=250',
                color : 'White / White',
                price : 115,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/W2288111_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/W2288111_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/W2288111_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/W2288111_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/W2288111_a5?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/W2288111_a6?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {  
                img : 'https://images.footlocker.com/is/image/EBFL2/D2739100?wid=250&hei=250',
                color : 'White / Brown / White',
                price : 115,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/D2739100_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/D2739100_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/D2739100_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/D2739100_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/D2739100_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/D2739100_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            }
        ]
    },

    {
        id : 6,
        img : 'https://images.footlocker.com/is/image/EBFL2/98893005?wid=250&hei=250',
        name : 'New Balance 9060',
        brand : 'New Balance',
        gender : "Men's",
        color : 'Black / Grey',
        price : 150,
        rating : 4.3,
        product : [
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/98893005?wid=250&hei=250',
                color : 'Black / Grey',
                price : 150,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/98893005_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/98893005_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/98893005_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/98893005_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/98893005_a4?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/98893005_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {  
                img : 'https://images.footlocker.com/is/image/EBFL2/9060NRH?wid=250&hei=250',
                color : 'Agate / Black / Rich Oak',
                price : 150,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/9060NRH_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060NRH_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060NRH_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060NRH_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060NRH_a4?wid=581&hei=581&fmt=png-alpha'
                    },

                ],
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/U9060FA?wid=250&hei=250',
                color : 'Blue / Purple',
                price : 150,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/U9060FA_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/U9060FA_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/U9060FA_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/U9060FA_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/U9060FA_a4?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/9060ESD?wid=250&hei=250',
                color : 'Teal / White / Sand',
                price : 150,
                main_img : 'https://images.footlocker.com/is/image/EBFL2/9060ESD_a1?wid=581&hei=581&fmt=png-alpha',
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060ESD_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060ESD_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060ESD_a3?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/9060ESD_a4?wid=581&hei=581&fmt=png-alpha'
                    }
                ],
            }
        ]
    },

    {
        id : 7,
        img : "https://images.footlocker.com/is/image/EBFL2/M1906REB?wid=250&hei=250",
        name : 'New Balance 1906R',
        brand : 'New Balance',
        gender : "Men's",
        color : 'Blue / White / Silver',
        price : 155,
        rating : 3.2,
        product : [
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/M1906REB?wid=250&hei=250',
                color : 'Blue / White / Silver',
                price : 155,
                main_img : "https://images.footlocker.com/is/image/EBFL2/M1906REB_a1?wid=581&hei=581&fmt=png-alpha",
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906REB_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906REB_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906REB_a3?wid=581&hei=581&fmt=png-alpha',
                    },
                    {
                        img : "https://images.footlocker.com/is/image/EBFL2/M1906REB_a4?wid=581&hei=581&fmt=png-alpha",
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906REB_a5?wid=581&hei=581&fmt=png-alpha'
                    }
                ]
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/M1906RA?wid=250&hei=250',
                color : 'Black / Gold / White',
                price : 155,
                main_img : "https://images.footlocker.com/is/image/EBFL2/M1906RA_a1?wid=581&hei=581&fmt=png-alpha",
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906RA_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906RA_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906RA_a3?wid=581&hei=581&fmt=png-alpha',
                    },
                    {
                        img : "https://images.footlocker.com/is/image/EBFL2/M1906RA_a4?wid=581&hei=581&fmt=png-alpha",
                    },
                ]
            },
            {
                img : 'https://images.footlocker.com/is/image/EBFL2/M1906RET?wid=250&hei=250',
                color : 'Granite / Metallic Pink',
                price : 155,
                main_img : "https://images.footlocker.com/is/image/EBFL2/M1906RET_a1?wid=581&hei=581&fmt=png-alpha",
                productInfo : [
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906RET_a1?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906RET_a2?wid=581&hei=581&fmt=png-alpha'
                    },
                    {
                        img : 'https://images.footlocker.com/is/image/EBFL2/M1906RET_a3?wid=581&hei=581&fmt=png-alpha',
                    },
                    {
                        img : "https://images.footlocker.com/is/image/EBFL2/M1906RET_a4?wid=581&hei=581&fmt=png-alpha",
                    }
                ]
            },

        ]
    }

    // {
    //     id : 7,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/Z5485071?wid=250&hei=250',
    //     name : 'Jordan Retro 1 High OG',
    //     gender : "Men's",
    //     color : 'Black / Metalllic Gold',
    //     price : 180,
    //     rating : 4.5,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Z5485071?wid=250&hei=250',
    //             color : 'Black / Metalllic Gold',
    //             price : 180,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Z5485052?wid=250&hei=250',
    //             color : 'Muslin / White / Tech Grey',
    //             price : 180,
    //         },
    //     ]
    // },
    // {
    //     id : 8,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/HQ6638?wid=250&hei=250',
    //     name : 'Adidas Originals Campus 00s',
    //     gender : "Boys' Grade School",
    //     color : 'Core Black / White',
    //     price : 90,
    //     rating : 4.8,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/HQ6638?wid=250&hei=250',
    //             color : 'Core Black / White',
    //             price : 90,
    //         },
    //     ]
    // },
    // {
    //     id : 9,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/D1391100?wid=250&hei=250',
    //     name : 'Nike Dunk Low',
    //     gender : "Men's",
    //     color : 'White / Black / White',
    //     price : 115,
    //     rating : 3.6,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/D1391100?wid=250&hei=250',
    //             color : 'White / Black / White',
    //             price : 115,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/V0833103?wid=250&hei=250',
    //             color : 'White / Concord / University Red',
    //             price : 115,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/V0833106?wid=250&hei=250',
    //             color : 'White / Teal / White',
    //             price : 115,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/V0833102?wid=250&hei=250',
    //             color : 'Cosmic Clay / White',
    //             price : 115,
    //         }
    //     ]
    // },
    // {
    //     id : 10,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/Q8138103?wid=250&hei=250',
    //     name : 'Jordan Retro 4',
    //     gender : "Men's",
    //     color : 'White / Green / Grey',
    //     price : 215,
    //     rating : 3.2,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q8138103?wid=250&hei=250',
    //             color : 'White / Green / Grey',
    //             price : 215,
    //         }
    //     ]
    // },
    // {
    //     id : 11,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/Z3548612?wid=250&hei=250',
    //     name : 'Nike Dunk Low',
    //     gender : "Boys' Grade School",
    //     color : 'Pink Foam / Fire Red / Light Crimson',
    //     price : 79.99,
    //     rating : 3.0,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Z3548612?wid=250&hei=250',
    //             color : 'Pink Foam / Fire Red / Light Crimson',
    //             price : 79.99,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/B9109108?wid=250&hei=250',
    //             color : 'White / Pacific Moss',
    //             price : 90,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/B9109111?wid=250&hei=250',
    //             color : 'Gold / Blue',
    //             price : 90,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/B9109105?wid=250&hei=250',
    //             color : 'Blue / White',
    //             price : 90,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/W1590100?wid=250&hei=250',
    //             color : 'White / Black',
    //             price : 90,
    //         }
    //     ]
    // },
    // {
    //     id : 12,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/F3950001?wid=250&hei=250',
    //     name : 'Jordan Spizike Low',
    //     gender : "Boys' Grade School",
    //     color : 'Black / Grey',
    //     price : 125,
    //     rating : 4.3,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/F3950001?wid=250&hei=250',
    //             color : 'Black / Grey',
    //             price : 125,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q3950100?wid=250&hei=250',
    //             color : 'Coconut Milk / Sail / University Red',
    //             price : 125,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q3950106?wid=250&hei=250',
    //             color : 'White / Team Red / Wolf Grey',
    //             price : 125,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q3950006?wid=250&hei=250',
    //             color : 'Gym Red / Black / Cool Gray',
    //             price : 99.99,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q3950104?wid=250&hei=250',
    //             color : 'Pure Platinum / Obsidian / White',
    //             price : 125,
    //         }
    //     ]
    // },
    // {
    //     id : 13,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/D2920111?wid=250&hei=250',
    //     name : 'Nike Air Force 1 Low',
    //     gender : "Boys' Grade School",
    //     color : 'White / White',
    //     price : 90,
    //     rating : 4.6,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/D2920111?wid=250&hei=250',
    //             color : 'White / White',
    //             price : 90,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/F5948108?wid=250&hei=250',
    //             color : 'White / Aquamarine / Hyper Pink',
    //             price : 90,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/M9473100?wid=250&hei=250',
    //             color : 'White / Light Green Spark / Aluminum',
    //             price : 95,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/V5948110?wid=250&hei=250',
    //             color : 'White / Vintage Green',
    //             price : 90,
    //         }
    //     ]
    // },
    // {
    //     id : 14,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/JI2013?wid=250&hei=250',
    //     name : 'Adidas Originals Samba OG',
    //     gender : "Women's",
    //     color : 'White / Collegiate Green / Rose Tone',
    //     price : 100,
    //     rating : 4.9,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/JI2013?wid=250&hei=250',
    //             color : 'White / Collegiate Green / Rose Tone',
    //             price : 100,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/JI4209?wid=250&hei=250',
    //             color : 'Aurora Black / Cream White / Silver',
    //             price : 100,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/JI4208?wid=250&hei=250',
    //             color : 'Cream White / Hazy Green / Indigo',
    //             price : 100,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/ID0478?wid=250&hei=250',
    //             color : 'Black / White / Beige',
    //             price : 100,
    //         }
    //     ]
    // },
    // {
    //     id : 15,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/M0032402?wid=250&hei=250',
    //     name : 'Nike Air Max Plus',
    //     gender : "Men's",
    //     color : 'Aquarius Blue / Photo Blue / White',
    //     price : 129.99,
    //     rating : 4.1,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/M0032402?wid=250&hei=250',
    //             color : 'Aquarius Blue / Photo Blue / White',
    //             price : 129.99,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/52630411?wid=250&hei=250',
    //             color : 'Battle Blue / Blue Glaze / Black',
    //             price : 180,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q2381001?wid=250&hei=250',
    //             color : 'Grey / Black / Volt',
    //             price : 129.99,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q2415500?wid=250&hei=250',
    //             color : 'Black / Teal / Purple',
    //             price : 129.99,
    //         }
    //     ]
    // },
    // {
    //     id : 16,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/Q1759104?wid=250&hei=250',
    //     name : 'Jordan Spizike Low',
    //     gender : "Men's",
    //     color : 'White / Navy',
    //     price : 160,
    //     rating : 4.8,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q1759104?wid=250&hei=250',
    //             color : 'White / Navy',
    //             price : 160,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q1759001?wid=250&hei=250',
    //             color : 'Black / Black / Black',
    //             price : 160,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q1759100?wid=250&hei=250',
    //             color : 'White / Red / Grey',
    //             price : 160,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q1759106?wid=250&hei=250',
    //             color : 'Grey / Red / White',
    //             price : 160,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/Q1759006?wid=250&hei=250',
    //             color : 'Cool Grey / Gym Red / Black',
    //             price : 160,
    //         }
    //     ]
    // },
    // {
    //     id : 17,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/IG5744?wid=250&hei=250',
    //     name : 'Adidas Originals Sambae',
    //     gender : "Women's",
    //     color : 'White / Core Black / Gum',
    //     price : 110,
    //     rating : 4.5,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/IG5744?wid=250&hei=250',
    //             color : 'White / Core Black / Gum',
    //             price : 110,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/IF7162?wid=250&hei=250',
    //             color : 'Off White / Alumina / Gold Metallic',
    //             price : 110,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/ID0436?wid=250&hei=250',
    //             color : 'Core Black / White / Gum',
    //             price : 110,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/IG1953?wid=250&hei=250',
    //             color : 'Blue Spark Met / Off White / Halo Blue',
    //             price : 110,
    //         }
    //     ]
    // },
    // {
    //     id : 18,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/4066410?wid=250&hei=250',
    //     name : 'Adidas Anthony Edwards 1 Low',
    //     gender : "Men's",
    //     color : 'Wonder Beige / Silver / Core Black',
    //     price : 110,
    //     rating : 3.7,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/4066410?wid=250&hei=250',
    //             color : 'Wonder Beige / Silver / Core Black',
    //             price : 110,
    //         },
    //     ]
    // },
    // {
    //     id : 19,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/B9108102?wid=250&hei=250',
    //     name : 'Nike Dunk Low',
    //     gender : "Girls' Preschool",
    //     color : 'Laser Fuchsia / White',
    //     price : 70,
    //     rating : 4.9,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/B9108102?wid=250&hei=250',
    //             color : 'Laser Fuchsia / White',
    //             price : 70,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/F9108110?wid=250&hei=250',
    //             color : 'White / Viotech / White',
    //             price : 70,
    //         }
    //     ]
    // },
    // {
    //     id : 20,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/D0587308?wid=250&hei=250',
    //     name : 'Jordan Retro 5',
    //     gender : "Men's",
    //     color : 'Solar Orange / Army Olive',
    //     price : 119.99,
    //     rating : 4.9,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/D0587308?wid=250&hei=250',
    //             color : 'Solar Orange / Army Olive',
    //             price : 119.99,
    //         }
    //     ]
    // },
    // {
    //     id : 21,
    //     img : 'https://images.footlocker.com/is/image/EBFL2/BB550ESC?wid=250&hei=250',
    //     name : 'New Balance 550',
    //     gender : "Men's",
    //     color : 'Grey / White',
    //     price : 69.99,
    //     rating : 4.9,
    //     product : [
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/BB550ESC?wid=250&hei=250',
    //             color : 'Grey / White',
    //             price : 69.99,
    //         },
    //         {  
    //             img : 'https://images.footlocker.com/is/image/EBFL2/BB550FCB?wid=250&hei=250',
    //             color : 'Grey / White / Blue',
    //             price : 69.99,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/BB550ESB?wid=250&hei=250',
    //             color : 'White / Green',
    //             price : 69.99,
    //         },
    //         {
    //             img : 'https://images.footlocker.com/is/image/EBFL2/BB550PLB?wid=250&hei=250',
    //             color : 'Black / Blue',
    //             price : 74.99,
    //         }
    //     ]
    // },

]

export default products;