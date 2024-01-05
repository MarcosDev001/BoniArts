/** @jsxImportSource @emotion/react */

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

const Pedidos = () => {
  const pedidos = [
    {
      cliente: "Marcos Boni",
      produtos: [
        {
          nome: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
          quantidade: 2,
        },
        {
          nome: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
          quantidade: 1,
        },
      ],
      horario: "14:30",
      data: "2024-01-04",
      codigo: "9771413160001",
      
    },
    {
      cliente: "Marcos Boni",
      produtos: [
        {
          nome: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
          quantidade: 2,
        },
        {
          nome: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
          quantidade: 1,
        },
      ],
      horario: "14:30",
      data: "2024-01-04",
      codigo: "9771413160001",
    },
    {
      cliente: "Geefi",
      produtos: [
        {
          nome: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
          quantidade: 2,
        },
        {
          nome: "Imagem de São José da Doce Espera em Resina Colorida - 15cm",
          quantidade: 1,
        },
      ],
      horario: "14:30",
      data: "2024-01-04",
      codigo: "9771413160001",
    },
  ];

  return (
    <div>
      <h1>Pedidos dos Clientes</h1>
      <table className="min-w-full text-[13px]  bg-white border border-gray-300">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border-b">Cliente</th>
            <th className="py-2 px-4 border-b">Produtos</th>
  
            <th className="py-2 px-4 border-b">Horário</th>
            <th className="py-2 px-4 border-b">Data</th>
            <th className="py-2 px-4 border-b">Codigo</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{pedido.cliente}</td>
              <td className="py-2 px-4 border-b">
                <ul>
                  {pedido.produtos.map((produto, i) => (
                    <li key={i}>
                      {produto.nome} - {produto.quantidade} unidade(s)
                    </li>
                  ))}
                </ul>
              </td>
              <td className="py-2 px-4 border-b">{pedido.horario}</td>
              <td className="py-2 px-4 border-b">{pedido.data}</td>
              <td className="py-2 px-4 border-b">{pedido.codigo}</td>
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
        <Pedidos />
      </div>
    </div>
  );
};

export default Home;
