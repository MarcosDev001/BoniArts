"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ModalUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEntrar = () => {
    // Adicione a lógica desejada para o botão "Entrar"
    console.log("Botão Entrar clicado");

    // Redireciona para a página de login
    window.location.href = '/pages/Home/Login';
  };

  return (
    <div className="flex left-[884px] top-[35px] absolute">
      <div className="cursor-pointer ml-2 text-sm" >
        <p className="mr-10 mt-[10px] ">Conheça nossa loja</p>
      </div>
      <div
        className="flex items-center mr-4 cursor-pointer"
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-black" />
        <span className="hover:underline ml-2 text-sm">
          Bem-vindo(a) <br /> Acesse sua conta
        </span>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div
            className="bg-white mt-[-458px] ml-[954px] p-4 rounded-lg shadow-md"
            style={{ zIndex: 1000, width: "200px", height: "100px" }}
          >
            <button
              onClick={handleEntrar}
              className="bg-blue-500 text-white px-[1rem] w-[172px] py-2 rounded mr-2 hover:bg-blue-700"
            >
              Entrar
            </button>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalUser;