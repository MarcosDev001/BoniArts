"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faLock } from "@fortawesome/free-solid-svg-icons";


const LoginCadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cpf, setCpf] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("pessoa_fisica");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      if (!email || !password) {
        setError("Preencha todos os campos.");
      } else {
        setError("");
        setSuccessMessage("Login bem-sucedido. Redirecionando...");
        setTimeout(() => {
          console.log("Redirecionar para a página do usuário após o login");
          setSuccessMessage(""); 
        }, 2000);
      }
    } else {
      if (tipoUsuario === "pessoa_fisica") {
        if (!nome || !email || !cpf || !confirmarSenha) {
          setError("Preencha todos os campos.");
        } else if (password !== confirmarSenha) {
          setError("As senhas não coincidem.");
        } else {
          setError("");
          setSuccessMessage("Cadastro bem-sucedido (Pessoa Física). Redirecionando...");
          setTimeout(() => {
            console.log("Redirecionar para a página do usuário após o cadastro");
            setSuccessMessage(""); 
          }, 2000);
        }
      } else if (tipoUsuario === "pessoa_juridica") {
        if (!razaoSocial || !cnpj || !email || !confirmarSenha) {
          setError("Preencha todos os campos.");
        } else if (password !== confirmarSenha) {
          setError("As senhas não coincidem.");
        } else {
          setError("");
          setSuccessMessage("Cadastro bem-sucedido (Pessoa Jurídica). Redirecionando...");
          setTimeout(() => {
            console.log("Redirecionar para a página do usuário após o cadastro");
            setSuccessMessage("");
          }, 2000);
        }
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(""); 
    setSuccessMessage(""); 
  };

  const handleTipoUsuarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoUsuario(e.target.value);
  };




  return (


    
    <div className="max-w-md-[65rem] mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
        {isLogin ? "Login" : "Cadastro"}
      </h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4 text-center">{successMessage}</p>
      )}

      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="tipoUsuario"
            className="block text-sm font-semibold mb-2"
          >
            Tipo de Usuário:
          </label>
          <select
            id="tipoUsuario"
            value={tipoUsuario}
            onChange={handleTipoUsuarioChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="pessoa_fisica">Pessoa Física</option>
            <option value="pessoa_juridica">Pessoa Jurídica</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-2"
          >
            Senha:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {!isLogin && (
          <div className="mb-4">
            {tipoUsuario === "pessoa_fisica" ? (
              <>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold mb-2"
                >
                  Nome:
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="cpf"
                  className="block text-sm font-semibold mb-2"
                >
                  CPF:
                </label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </>
            ) : (
              <>
                <label
                  htmlFor="razaoSocial"
                  className="block text-sm font-semibold mb-2"
                >
                  Razão Social:
                </label>
                <input
                  type="text"
                  id="razaoSocial"
                  value={razaoSocial}
                  onChange={(e) => setRazaoSocial(e.target.value)}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="cnpj"
                  className="block text-sm font-semibold mb-2"
                >
                  CNPJ:
                </label>
                <input
                  type="text"
                  id="cnpj"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </>
            )}
          </div>
        )}

        {!isLogin && (
          <div className="mb-4">
            <label
              htmlFor="confirmarSenha"
              className="block text-sm font-semibold mb-2"
            >
              Confirmar Senha:
            </label>
            <input
              type="password"
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 w-full`}
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <button
        onClick={toggleForm}
        className="mt-4 text-blue-500 hover:underline cursor-pointer w-full"
      >
        {isLogin ? "Cadastrar uma conta" : "Já tenho uma conta"}
      </button>
    </div>
  );
};

export default LoginCadastro;
