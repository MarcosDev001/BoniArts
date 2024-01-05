"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FiHome,
  FiInfo,
  FiSettings,
  FiUser,
  FiShoppingCart,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

interface SubItem {
  label: string;
  link: string;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  subItems?: SubItem[];
}

const SidebarItem = ({ icon, label, subItems }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <div
        onClick={handleToggle}
        className="flex items-center cursor-pointer text-white hover:bg-gray-700 p-2 rounded-md"
      >
        {icon}
        <span className="ml-2">{label}</span>
        {subItems && (
          <FiChevronRight
            className={`ml-auto transition-transform transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>
      {isOpen && (
        <div className="ml-4">
          {subItems &&
            subItems.map((subItem, index) => (
              <a
                key={index}
                href={subItem.link}
                className="block py-1 text-gray-300 hover:text-white"
              >
                {subItem.label}
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    productCode: "",
    description: "",
    size: "",
  });

  const [postSuccess, setPostSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Produto enviado:", productData);

    setPostSuccess(true);

    setTimeout(() => {
      setPostSuccess(false);
      setProductData({
        name: "",
        price: "",
        productCode: "",
        description: "",
        size: "",
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md-[68rem] mx-auto">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nome do Produto
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Preço Unitário
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="size"
          className="block text-sm font-medium text-gray-700"
        >
          Desconto Do Produto
        </label>
        <input
          type="text"
          id="size"
          name="size"
          value={productData.size}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="productCode"
          className="block text-sm font-medium text-gray-700"
        >
          Código do Produto
        </label>
        <input
          type="text"
          id="productCode"
          name="productCode"
          value={productData.productCode}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Descrição do Produto
        </label>
        <textarea
          id="description"
          name="description"
          value={productData.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="size"
          className="block text-sm font-medium text-gray-700"
        >
          Tamanho
        </label>
        <input
          type="text"
          id="size"
          name="size"
          value={productData.size}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Enviar Produto
        </button>
      </div>
    </form>
  );
};

const Home = () => {
  return (
    <div className="flex">
     <aside className="bg-gray-800 text-white w-64 h-[100vw] p-4">
        <h1 className="text-2xl font-bold mb-4 mt-[114px] ">Logo</h1>
        <div className="container-menu"></div>
        <SidebarItem icon={<FiHome />} label="Home" />
        <SidebarItem
          icon={<FiShoppingCart />}
          label="Produtos"
          subItems={[
            { label: "Postar Produtos", link: "Painel/Postar" },
            { label: "Produtos Cadastrados", link: "Painel/Cadastrados" },
          ]}
        />
        <SidebarItem
          icon={<FiUser />}
          label="Pedidos"
          subItems={[
            { label: "Pedidos Clientes", link: "Painel/PedidosClients" },
            { label: "Codigos de Pedidos", link: "/preferences" },
          ]}
        />
        <SidebarItem
          icon={<FiShoppingCart />}
          label="TESTE"
          subItems={[
            { label: "TESTE", link: "/Painel/postar" },
            { label: "TESTE", link: "/team" },
          ]}
        />
        <SidebarItem
          icon={<FiUser />}
          label="TESTE"
          subItems={[
            { label: "TESTE", link: "/profile" },
            { label: "TESTE", link: "/preferences" },
          ]}
        />
      </aside>
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Postagem</h1>
        <ProductForm />
      </div>
    </div>
  );
};

export default Home;
