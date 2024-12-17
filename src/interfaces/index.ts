// {
//     "id": 1,
//     "name": "iPhone 11",
//     "description": "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
//     "price": 699,
//     "stock": 10,
//     "image": "https://mac-center.com/cdn/shop/files/IMG-14858971_c5c1695f-1cda-4c4d-9502-5971a324ea76.jpg?v=1726245745&width=823",
//     "categoryId": 1
//   },
export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface RegisterFormType {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}
export interface UserType {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface FormDataType {
  email: string;
  password: string;
}
