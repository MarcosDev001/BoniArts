"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Carousel from "./pages/Home/Carousel";
import Cards from "./pages/Home/Produtos/page";
import Banner from "./pages/Home/Banners/page";
import Footer from "./pages/Home/Footer/page";
import ModalUser from "./pages/Home/ModalUser/page";
import Produtos from "./pages/Home/CardRegister/registerCard";

export default function Home() {
  const [isSantosDropdownOpen, setSantosDropdownOpen] = useState(false);
  const [isDecoracoesDropdownOpen, setDecoracoesDropdownOpen] = useState(false);
  const [isCrucifixosDropdownOpen, setCrucifixosDropdownOpen] = useState(false);
  const [isCamisetasDropdownOpen, setCamisetasDropdownOpen] = useState(false);
  const [isPresentesDropdownOpen, setPresentesDropdownOpen] = useState(false);

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
      <Carousel />
      <Cards />
      <Banner />
      <Footer />
      <ModalUser />
      <Produtos/>
  
    </>
  );
}
