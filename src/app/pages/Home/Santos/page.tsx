"use client";

import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartModal from "@/components/CartModal";
import { CartContext } from "@/context/CartProvider";
import Link from "next/link";

interface Product {
  image: string;
  title: string;
  price: number;
  url: string;
  category: string;
  marca: string;
  tamanho: string;
  cor: string;
}

interface ProductCardProps extends Product {
  onAddToCart: (quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  url,
  category,
  marca,
  tamanho,
  cor,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const cart = useContext(CartContext);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleBuyClick = () => {
    const item: Product = {
      image,
      title,
      price,
      url,
      category,
      marca,
      tamanho,
      cor,
    };
    cart.insertItem(item);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-4" style={{ width: "269px" }}>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="relative h-48 mb-4">
          <Link href={`/pages/Home/CardRegister/${url}`}>
            <img
              style={{ width: "120px", height: "184px" }}
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMarca, setSelectedMarca] = useState<string | null>(null);
  const [selectedTamanho, setSelectedTamanho] = useState<string | null>(null);
  const [selectedCor, setSelectedCor] = useState<string | null>(null);

  const products = [
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 19.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },

    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: " Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: " Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: " Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
      title: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
      price: 49.99,
      url: "imagem-de-sao-jose-da-doce-espera-em-resina-colorida",
    },
  ];

  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = (quantity: number) => {
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
  };

 const filteredProducts = products
  .filter((product) => {
    const isCategoryMatch = selectedCategory === null || product.category === selectedCategory;
    const isMarcaMatch = selectedMarca === null || product.marca === selectedMarca;
    const isTamanhoMatch = selectedTamanho === null || product.tamanho === selectedTamanho;
    const isCorMatch = selectedCor === null || product.cor === selectedCor;

    return isCategoryMatch && isMarcaMatch && isTamanhoMatch && isCorMatch;
  })
  .map((product) => (
    <ProductCard
      key={product.id}  // Assuming each product has a unique identifier like 'id'
      onAddToCart={handleAddToCart}
      {...product}
    />
  ));

  return (
    <section className="container-produtos flex">
      <div className="sidebar w-[190px] ml-5 mt-20 text-blue-500">
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Produtos:</h2>

        <div className="filter-option mb-4">
          <label className="block text-gray-600">Categorias:</label>
          <select
            className="w-full border border-gray-300 p-2 rounded-md"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory || ""}
          >
            <option value="">All</option>
            <option value="Categoria 1">Categoria 1</option>
            <option value="Categoria 2">Categoria 2</option>
          </select>
        </div>

        <div className="filter-option mb-4">
          <label className="block text-gray-600">Marca:</label>
          <select
            className="w-full border border-gray-300 p-2 rounded-md"
            onChange={(e) => setSelectedMarca(e.target.value)}
            value={selectedMarca || ""}
          >
            <option value="">All</option>
          </select>
        </div>

        <div className="filter-option mb-4">
          <label className="block text-gray-600">Tamanho:</label>
          <select
            className="w-full border border-gray-300 p-2 rounded-md"
            onChange={(e) => setSelectedTamanho(e.target.value)}
            value={selectedTamanho || ""}
          >
            <option value="">All</option>
          </select>
        </div>

        {/* Cor filter */}
        <div className="filter-option mb-4">
          <label className="block text-gray-600">Cor:</label>
          <select
            className="w-full border border-gray-300 p-2 rounded-md"
            onChange={(e) => setSelectedCor(e.target.value)}
            value={selectedCor || ""}
          >
            <option value="">All</option>
          </select>
        </div>
      </div>

      <div className="main-content w-3/4 ml-36">
        <div className="container ml-5">
          <div className="category mb-8">
            <h1 className="text-cyan-500 text-2xl font-semibold">Products</h1>
          </div>
        </div>
        <div className="container-cards">
          <div className="cards ml-[-98px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts}
          </div>
        </div>
      </div>

      <div className="absolute top-[24px] right-[48px] mt-4 mr-4">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="w-5 h-5 text-black"
          onClick={() => setIsCartModalOpen(true)}
        />
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
