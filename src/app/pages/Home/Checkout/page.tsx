"use client";
// pages/checkout.tsx
import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([
    { id: 1, name: "Nome do Produto", price: 99.99, quantity: 1 },
    { id: 1, name: "Nome do Produto", price: 99.99, quantity: 1 },
    { id: 1, name: "Nome do Produto", price: 99.99, quantity: 1 },
    { id: 1, name: "Nome do Produto", price: 99.99, quantity: 1 },
    { id: 1, name: "Nome do Produto", price: 99.99, quantity: 1 },
  ]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
  };

  const handleRemove = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );





  
  return (



    
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <h2 className="text-xl font-bold mb-4">Detalhes do Pedido</h2>
          <div className="categorys-grids">
            <div className="bg-[#ebebeb] w-[47rem] h-[2rem] ">
              <div className="title flex gap-[4rem] ml-[8.75rem] ">
                <h1>PRODUTO</h1>
                <h1>QUANTIDADE</h1>
                <h1>VALOR UNIT</h1>
                <h1>VALOR TOTAL</h1>
              </div>
            </div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-5 gap-4 mt-4 ">
              <div className="col-span-2 flex items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Produto"
                  className="rounded-lg mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">Descrição breve do produto.</p>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor={`quantity-${item.id}`} className="mr-2">
                  Quantidade:
                </label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  name={`quantity-${item.id}`}
                  className="border p-2 w-16 text-center"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10);
                    const updatedCart = cart.map((cartItem) => {
                      if (cartItem.id === item.id) {
                        return {
                          ...cartItem,
                          quantity: isNaN(newQuantity) ? 1 : newQuantity,
                        };
                      }
                      return cartItem;
                    });
                    setCart(updatedCart);
                  }}
                />
              </div>

              <div className="flex items-center">
                <p className="ml-[46px] ">R$ {item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center">
                <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="text-red-500 ml-2 text-[10px]"
                  onClick={() => handleRemove(item.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <Link href="/produtos">
              <h1 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Continuar Comprando
              </h1>
            </Link>
          </div>
        </div>

        <div className="col-span-5">
          <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="border-t border-gray-500 my-2"></div>
            <div className="flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="font-bold">R$ {subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Finalizar Compra
          </button>
        </div>
      </div>
      <div className="aviso w-20 h-7 bg-slate-300 ">
          
          </div>
    </div>
  );
};

export default CheckoutPage;
