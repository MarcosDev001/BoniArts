"use client";

import React, { useState } from "react";
import { FiHome, FiInfo, FiSettings, FiChevronDown,FiShoppingCart,FiUser } from "react-icons/fi";

interface SubItem {
  label: string;
  link: string;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  subItems?: SubItem[];
}

interface ProductData {
  name: string;
  price: string;
  productCode: string;
  description: string;
  size: string;
  [key: string]: string;
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
          <FiChevronDown
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

const ProductTable = ({ products }: { products: ProductData[] }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Produtos Cadastrados</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nome do Produto</th>
            <th className="py-2 px-4 border-b">Preço Unitário</th>
            <th className="py-2 px-4 border-b">Código do Produto</th>
            <th className="py-2 px-4 border-b">Descrição do Produto</th>
            <th className="py-2 px-4 border-b">Tamanho</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.productCode}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">{product.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Home = () => {
  const [productList, setProductList] = useState<ProductData[]>([]);

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
        <h1 className="text-3xl font-bold mb-4"></h1>
        <ProductTable products={productList} />
      </div>
    </div>
  );
};

export default Home;
