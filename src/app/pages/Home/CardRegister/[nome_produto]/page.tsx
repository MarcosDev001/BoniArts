"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import {
  FaCreditCard,
  FaMoneyBill,
  FaPercent,
  FaMoneyCheck,
  FaPlus,
} from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [isSantosDropdownOpen, setSantosDropdownOpen] = useState(false);
  const [isDecoracoesDropdownOpen, setDecoracoesDropdownOpen] = useState(false);
  const [isCrucifixosDropdownOpen, setCrucifixosDropdownOpen] = useState(false);
  const [isCamisetasDropdownOpen, setCamisetasDropdownOpen] = useState(false);
  const [isPresentesDropdownOpen, setPresentesDropdownOpen] = useState(false);

  const params = useParams(); //ta vebdoooo tooo viaduauuuuuu

  const toggleSantosDropdown = () => {
    setSantosDropdownOpen(!isSantosDropdownOpen);
  };

  const toggleDecoracoesDropdown = () => {
    setDecoracoesDropdownOpen(!isDecoracoesDropdownOpen);
  };

  const toggleCrucifixosDropdown = () => {
    setCrucifixosDropdownOpen(!isCrucifixosDropdownOpen);
  };

  const toggleCamisetasDropdown = () => {
    setCamisetasDropdownOpen(!isCamisetasDropdownOpen);
  };

  const togglePresentesDropdown = () => {
    setPresentesDropdownOpen(!isPresentesDropdownOpen);
  };

  const [quantidade, setQuantidade] = useState(1);

  const handleIncrement = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <>
    
      <section className="Search">
        <div className="container-menu w-100 h-[100px] bg-[#fffdfd] ">
          <div className="container flex justify-center ">
            <img
              className="mr-[987px] w-[129px] "
              src="https://i.ibb.co/BNM9TXP/image.png"
              alt="logo"
            />
            <div className="search">
              <input
                className="w-[36rem] h-10 absolute left-[18rem]  top-8 cursor-pointer text-center bg-[#e9e5e5] border-cyan-500 outline-[#00c3ff] rounded-3xl "
                type="search"
                name="search"
                id="searchProdut"
                placeholder="Pesquisar Produto"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="w-5 h-5 absolute left-[51rem] top-8  mt-[10px] cursor-pointer "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="menu-container w-100 h-[80px] bg-[#1579B4] flex items-center justify-center text-white">
          <div className="container-nav">
            <nav>
              <ul className="flex justify-center gap-20 ">
                <li className="transition duration-300 hover:text-blue-500 hover:text-white">
                  <Link href="/">Inicio</Link>
                </li>
                <li className="relative">
                  <div
                    onClick={toggleSantosDropdown}
                    className="cursor-pointer"
                  >
                    Santos
                  </div>
                  {isSantosDropdownOpen && (
                    <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg p-2 z-50">
                      <li className="bg-cyan-500">
                        <Link href="/">Item 1</Link>
                      </li>
                      <li>
                        <Link href="/">Item 2</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <div
                    onClick={toggleDecoracoesDropdown}
                    className="cursor-pointer"
                  >
                    Decorações
                  </div>
                  {isDecoracoesDropdownOpen && (
                    <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg p-2 z-50">
                      <li>
                        <Link href="/">Item 1</Link>
                      </li>
                      <li>
                        <Link href="/">Item 2</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <div
                    onClick={toggleCrucifixosDropdown}
                    className="cursor-pointer"
                  >
                    Crucifixos
                  </div>
                  {isCrucifixosDropdownOpen && (
                    <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg p-2 z-50">
                      <li>
                        <Link href="/">Item 1</Link>
                      </li>
                      <li>
                        <Link href="/">Item 2</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <div
                    onClick={toggleCamisetasDropdown}
                    className="cursor-pointer"
                  >
                    Camisetas
                  </div>
                  {isCamisetasDropdownOpen && (
                    <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg p-2 z-50">
                      <li>
                        <Link href="/">Item 1</Link>
                      </li>
                      <li>
                        <Link href="/">Item 2</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <div
                    onClick={togglePresentesDropdown}
                    className="cursor-pointer"
                  >
                    Presentes
                  </div>
                  {isPresentesDropdownOpen && (
                    <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg p-2 z-50">
                      <li>
                        <Link href="/">Item 1</Link>
                      </li>
                      <li>
                        <Link href="/">Item 2</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="informacoes-produtos flex mt-8 ml-8">
        <div className="container-produto flex flex-col">
          <div className="title-produto mb-4">
            <h1 className="text-2xl">
              {params.nome_produto}
            </h1>
            <span className="text-base">Cod: 9771413160001</span>
          </div>
          <div className="visualizer-produto mb-4">
            <div className="produtos w-[40rem] h-[36rem] bg-[#c9c9c9]"></div>
          </div>
        </div>

        <div className="descricao-produto mt-[116px] ml-8">
          <div className="produto-title-price">
            <h1 className="text-green-500 text-[40px] ">R$ 106,99</h1>
          </div>

          <div className="preco-pagamento mb-4 text-sm">
            <p className="flex items-center font-bold">
              <FaCreditCard className="mr-2 text-blue-500" />
              1x de R$ 106,99 no cartão de crédito
            </p>
            <p className="mt-1 flex items-center">
              <FaMoneyBill className="mr-2 text-blue-500" />
              R$ 103,78 à vista no boleto ou pix
            </p>
            <p className="mt-1 text-gray-500">
              (3% Desconto){" "}
              <span className="text-green-500"> Economize R$ 3,21 </span>
            </p>
          </div>

          <div className="quantidade flex items-center mb-4">
            <button
              onClick={handleDecrement}
              className="bg-gray-300 px-6 py-3 rounded-l text-2xl"
            >
              -
            </button>
            <span className="px-6 text-3xl">{quantidade}</span>{" "}
            <button
              onClick={handleIncrement}
              className="bg-gray-300 px-6 py-3 text-2xl"
            >
              +
            </button>
            <button className="bg-blue-500 text-white rounded-xl px-8 py-4 ml-4 flex items-center text-2xl">
              <FaPlus className="mr-2" /> Adicionar
            </button>
          </div>

          <p className="descricao text-lg mb-4">
            Presépio em resina com três peças soltas: Nossa Senhora ajoelhada,
            São José em pé e o Menino Jesus deitado em uma manjedoura.
          </p>
          <div className="especificacoes">
            <p className="text-xl font-bold text-green-500">Especificações:</p>
            <p className="text-lg font-bold">
              • José:{" "}
              <span className="font-normal">18,5cm altura x 6cm largura</span>
            </p>
            <p className="text-lg font-bold">
              • Jesus:{" "}
              <span className="font-normal">6,5cm altura x 5,5cm largura</span>
            </p>
            <p className="text-lg font-bold">
              • Maria:{" "}
              <span className="font-normal">14cm altura x 7cm largura</span>
            </p>
            <p className="italic text-base">*Medidas aproximadas</p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Boni<span className="text-blue-600">Arts</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Produtos</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Santos
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Decorações
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terços
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Crucifixos
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Camisetas
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Presentes
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Institucional
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Quem Somos
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Política de Privacidade
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Política de Entrega
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Fale Conosco
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Suporte</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Troca, Devolução, Garantia
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Como Comprar
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Entregas - Taxas
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Minha Conta
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          2023 Todos os direitos reservados | Desenvolvido com ❤ por{" "}
          {"Marcos Boni & Milton "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            {" "}
          </span>
        </h1>
      </div>
    </>
  );
}
