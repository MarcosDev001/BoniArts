"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartModal from "@/components/CartModal";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  onAddToCart: (quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleBuyClick = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-4" style={{ width: "269px" }}>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="relative h-48 mb-4">
          <img
            style={{ width: "120px", height: "184px" }}
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h3 className="text-lg font-normal mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-[110px] "
            onClick={handleBuyClick}
          >
            Comprar
          </button>
          <input
            type="number"
            className="border border-gray-300 p-2 w-16 text-center"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const products = [
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 19.99,
    },

    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: " Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: " Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: " Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
    },
  ];

  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = (quantity: number) => {
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
  };

  return (
    <section className="container-produtos">
      <div className="container ml-5 mt-20">
        <div className="category ml-[126px]  w-2 h-8 bg-cyan-500">
          <h1 className="text-cyan-500 text-2xl font-semibold ml-5">Santos</h1>
        </div>
      </div>
      <div className="container-cards ml-[78px]">
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="container ml-5 mt-20">
        <div className="category ml-[126px] w-2 h-8 bg-cyan-500">
          <h1 className="text-cyan-500 text-2xl font-semibold ml-5">
            Decorações
          </h1>
        </div>
      </div>
      <div className="container-cards ml-[78px]">
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-[24px] right-[48px] mt-4 mr-4">
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 text-black" onClick={() => setIsCartModalOpen(true)} />
        <span className="ml-2 text-sm font-semibold text-gray-800">
          {cartQuantity}
        </span>
      </div>
      <CartModal 
        isOpen={isCartModalOpen} 
        close={() => setIsCartModalOpen(false)} 
      />
    </section>
  );
};

export default Home;
