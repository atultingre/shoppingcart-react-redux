import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: "1",
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "800.95",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      inStock: 0,
      fastDelivery: false,
      ratings: 3.9,
    },
    {
      id: "2",
      name: "Mens Casual Premium Slim Fit T-Shirts ",
      price: "650.00",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 4.1,
    },
    {
      id: "3",
      name: "Mens Cotton Jacket",
      price: "1500.99",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      inStock: 2,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "4",
      name: "Mens Casual Slim Fit",
      price: "750.99",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      inStock: 1,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "5",
      name:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: "4500.00",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      inStock: 5,
      fastDelivery: false,
      ratings: 4,
    },
    {
      id: "6",
      name: "Solid Gold Petite Micropave ",
      price: "2750.00",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      inStock: 5,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: "7",
      name: "White Gold Plated Princess",
      price: "1800.99",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      inStock: 5,
      fastDelivery: false,
      ratings: 1,
    },
    {
      id: "8",
      name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: "1100.99",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      inStock: 3,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "9",
      name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: "6500.00",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      inStock: 2,
      fastDelivery: true,
      ratings: 2,
    },
    {
      id: "10",
      name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: "3500.00",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      inStock: 1,
      fastDelivery: false,
      ratings: 4,
    },
    {
      id: "11",
      name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: "2000.00",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      inStock: 0,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "12",
      name:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: "8500.00",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "13",
      name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: "15999",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "14",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: "18999.99",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "15",
      name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: "650.99",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "16",
      name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: "950.00",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "17",
      name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: "460.99",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "18",
      name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: "999.85",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "19",
      name: "Opna Women's Short Sleeve Moisture",
      price: "550.95",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "20",
      name: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: "350.00",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 2,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRaing: 0,
    searchQuery: "",
  });

  return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
