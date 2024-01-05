'use client'

import React, { useState } from 'react';
import { FiHome, FiInfo, FiSettings, FiChevronDown,FiShoppingCart,FiUser } from 'react-icons/fi';

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
              isOpen ? 'rotate-180' : 'rotate-0'
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
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p>This is the main content of the home page.</p>
      </div>
    </div>
  );
};

export default Home;