import { Injectable } from '@angular/core';
import { PizzaModel } from '../../models/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  products: PizzaModel[] = [
    {
      id: '1',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC02%40%40Pizza_hai_ssn_sot_pesto.webp&w=1920&q=75',
      title: 'Pizza Hải Sản Sốt Pesto',
      price: '149.000 ',
    },
    {
      id: '2',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC12%40%40Pizza_pho_mai_cao_cap.webp&w=1920&q=75',
      title: 'Pizza Phô Mai Cao Cấp',
      price: '119.000 ',
    },
    {
      id: '3',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC06%40%40Pizza_xuc_xich.webp&w=1920&q=75',
      title: 'Pizza Pepperroni ',
      price: '159.000 ',
    },
    {
      id: '4',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC03%40%40Pizza_thit_va_xuc_xich.webp&w=1920&q=75',
      title: 'pizza Thịt Và Xúc Xích',
      price: '159.000 ',
    },
    {
      id: '5',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FB01%40%40Pizza_hai_san_nhiet_doi.webp&w=1920&q=75',
      title: 'pizza Hải Sản Nhiệt Đới',
      price: '129.000 ',
    },
    {
      id: '6',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC23%40%40Pizza_bo%20_BBQ.webp&w=1920&q=75',
      title: 'pizza Bò BBQ Xốt Cay ',
      price: '129.000 ',
    },
    {
      id: '7',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FB05%40%40Pizza_ga_pho_mai.webp&w=1920&q=75',
      title: 'pizga Gà Phô Mai',
      price: '129.000 ',
    },
    {
      id: '8',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC08%40%40Pizza_ga_nuong_nam.webp&w=1920&q=75',
      title: 'pizza Gà Nướng Nấm',
      price: '129.000 ',
    },
    {
      id: '9',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FA11%40%40Pizza_rau_cu.webp&w=1920&q=75',
      title: 'pizza Rau Củ Sốt Bơ Tỏi',
      price: '129.000 ',
    },
    {
      id: '10',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FB04%40%40pizza_bo_va_hai_san.webp&w=1920&q=75',
      title: 'pizza Thịt Bò Và Hải Sản',
      price: '129.000 ',
    },
    {
      id: '11',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FA26%40%40Beef_Corn_Pizza.webp&w=1920&q=75',
      title: 'pizza Bò Nướng Tiêu Đen',
      price: '129.000 ',
    },
    {
      id: '12',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FA22%40%40Tuna_Crab_Stick_Pizza.webp&w=1920&q=75',
      title: 'pizza Cá Ngừ Thanh Cua',
      price: '129.000 ',
    },
    {
      id: '13',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC22%40%40Pizza_pho_mai_4_vi_mat_ong.webp&w=1920&q=75',
      title: 'pizza Phô Mai 4 Vị Mật Ong',
      price: '129.000 ',
    },
    {
      id: '14',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FB03%40%40Pizza_tom_thit_nuong_tieu.webp&w=1920&q=75',
      title: 'pizza Tôm Thịt Nướng Tiêu',
      price: '129.000',
    },
    {
      id: '15',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FC19%40%40Pizza_Hai_san_vien_pho_mai_3_vi.webp&w=1920&q=75',
      title: 'pizza Hải Sản Viên Phô Mai 3 Vị',
      price: '129.000',
    },
    {
      id: '16',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FA28%40%40Pizza_hai_san_sot_pesto_DT.webp&w=1920&q=75',
      title: 'pizza Gấp Đôi Nhân Phủ Hải Sản',
      price: '129.000',
    },
  ];

  constructor() {}

  // addToCart() {
  //   this.totalItems++;
  // }
}
