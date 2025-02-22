import { Injectable } from '@angular/core';
import { ChickenModel } from '../../models/chicken.model';

@Injectable({
  providedIn: 'root',
})
export class ChickenService {
  chickens: ChickenModel[] = [
    {
      id: '1',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA538%40%40Chicken_Mala_4pcs.webp&w=640&q=100',
      price: '79.000',
      title: 'Cánh Gà Chiên Giòn Sốt Cay Mê La (4 Miếng)',
    },
    {
      id: '2',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA539%40%40Chicken_Mala_6pcs.webp&w=640&q=100',
      price: '119.000',
      title: 'Cánh Gà Chiên Giòn Sốt Cay Mê La (6 Miếng)',
    },
    {
      id: '3',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA540%40%40Chicken_Mala_BL.webp&w=640&q=100',
      price: '79.000',
      title: 'Gà Giòn Không Xương Sốt Cay Mê La ',
    },
    {
      id: '4',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA535%40%40Chicken_Gochujang_4pcs.webp&w=640&q=100',
      price: '79.000',
      title: 'Cánh Gà Giòn Sốt Hàn Mật Ong (4 Miếng)',
    },
    {
      id: '5',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA536%40%40Chicken_Gochujang_6pcs.webp&w=640&q=100',
      price: '119.000',
      title: 'Cánh Gà Giòn Sốt Hàn Mật Ong (6 Miếng)',
    },
    {
      id: '6',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA537%40%40Chicken_Gochujang_BL.webp&w=640&q=100',
      price: '79.000',
      title: 'Gà Giòn Không Xương Sốt Hàn Mật Ong',
    },
    {
      id: '7',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA532%40%40Chicken_Tomyum_4pcs.webp&w=640&q=100',
      price: '79.000',
      title: 'Cánh Gà Giòn Xốt Thái TomYum (4 Miếng)',
    },
    {
      id: '8',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA533%40%40Chicken_Tomyum_6pcs.webp&w=640&q=100',
      price: '119.000',
      title: 'Cánh Gà Giòn Xốt Thái TomYum (6 Miếng)',
    },
    {
      id: '9',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA534%40%40Chicken_Tomyum_BL.webp&w=640&q=100',
      price: '79.000',
      title: 'Gà Giòn Không Xương Sốt Thái TomYum',
    },
    {
      id: '10',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA538%40%40Chicken_Mala_4pcs.webp&w=640&q=100',
      price: '79.000',
      title: 'Cánh Gà Giòn Xốt Trứng Muối (4 Miếng)',
    },
    {
      id: '11',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA529%40%40Chicken_Salted_egg_4pcs.webp&w=640&q=100',
      price: '119.000',
      title: 'Cánh Gà Giòn Xốt Trứng Muối (6 Miếng)',
    },
    {
      id: '12',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA531%40%40Chicken_Salted_egg_BL.webp&w=640&q=100',
      price: '79.000',
      title: 'Gà Giòn Không Xương Sốt Trứng Muối',
    },
    {
      id: '13',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FFY021%40%40Chicken_Cay_pop_4pcs.webp&w=640&q=100',
      price: '79.000',
      title: 'Cánh Gà Sốt Cay-Pop Hàn Quốc (4 Miếng)',
    },
    {
      id: '14',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FFY022%40%40Chicken_Cay_pop_6pcs.webp&w=640&q=100',
      price: '119.000',
      title: 'Cánh Gà Sốt Cay-Pop Hàn Quốc (6 Miếng)',
    },
    {
      id: '15',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FFY023%40%40Chicken_Cay_pop_BL.webp&w=640&q=100',
      price: '79.000',
      title: 'Gà Giòn Không Xương Sốt Cay-Pop Hàn Quốc',
    },
    {
      id: '16',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FFY020%40%40Chicken_Mekong_BL.webp&w=640&q=100',
      price: '79.000',
      title: 'Gà Giòn Không Xương Xóc Mắm Tỏi Mekong',
    },
  ];

  constructor() {}
}
