import { Injectable } from '@angular/core';
import { DessertModel } from '../../models/dessert.model';

@Injectable({
  providedIn: 'root',
})
export class DessertService {
  products: DessertModel[] = [
    {
      id: '1',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2F1000x1000px-Sidedish.webp&w=640&q=100',
      price: '79.000',
      title: 'Bánh Vòng Xúc Xích Phô Mai',
    },
    {
      id: '2',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA30%40%40banh_mi_bo_toi.webp&w=640&q=100',
      price: '29.000',
      title: 'Bánh Mì Bơ Tỏi',
    },
    {
      id: '3',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA515%40%40Banh_Nachos.webp&w=640&q=100',
      price: '29.000',
      title: 'Nachos',
    },
    {
      id: '4',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA33%40%40khoai_tay_chien.webp&w=640&q=100 ',
      price: '59.000',
      title: 'Khoai Tây Chiên',
    },
    {
      id: '5',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA501%40%40banh_cuon_pho_mai_2023.webp&w=640&q=100 ',
      price: '69.000',
      title: 'Bánh Cuộn Phô Mai',
    },
    {
      id: '6',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA130%40%40pho_mai_chien_gion.webp&w=640&q=100 ',
      price: '69.000',
      title: 'Phô Mai Chiên Giòn',
    },
    {
      id: '7',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA32%40%40packshot_muc_chien_gion.webp&w=640&q=100 ',
      price: '99.000',
      title: 'Mực Chiên Giòn',
    },
    {
      id: '8',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA504%40%40Khoai_tay_chien_dut_lo.webp&w=640&q=100 ',
      price: '79.000',
      title: 'Khoai Tây Chiên Đút Lò',
    },
    {
      id: '9',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA514%40%40bap_pho_mai_thit_xong_khoi.webp&w=640&q=100 ',
      price: '79.000',
      title: 'Bắp Nướng Phô Mai Thịt Xông Khói',
    },
    {
      id: '10',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FHA31%40%40xx_Y_nuong.webp&w=640&q=100 ',
      price: '99.000',
      title: 'Xúc Xích Ý Nướng',
    },
    {
      id: '11',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FJA501%40%40sup_kem_ga_nam.webp&w=640&q=100 ',
      price: '49.000',
      title: 'Súp Kem Nấm Thịt Gà',
    },
    {
      id: '12',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FJA20%40%40sup_hai_san.webp&w=640&q=100 ',
      price: '69.000',
      title: 'Súp Hải Sản',
    },
    {
      id: '13',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FJA20%40%40sup_hai_san.webp&w=640&q=100 ',
      price: '69.000',
      title: 'Súp Hải Sản',
    },
    {
      id: '14',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FIA11%40%40salad_ca_ngu.webp&w=640&q=100 ',
      price: '79.000',
      title: 'Xà Lách Trộn Cá Ngừ Và Thịt Xông Khói',
    },
    {
      id: '15',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FIA517%40%40salad_ga_pesto.webp&w=640&q=100 ',
      price: '79.000',
      title: 'Xà Lách Gà Pestro',
    },
    {
      id: '16',
      image:
        'https://pizzahut.vn/_next/image?url=https%3A%2F%2Fcdn.pizzahut.vn%2Fimages%2FWeb_V3%2FProducts_MenuTool%2FIA112%40%40salad_da_ca_hoi.webp&w=640&q=100 ',
      price: '89.000',
      title: 'Xà Lách Da Cá Hòi',
    },
  ];

  constructor() {}
}
