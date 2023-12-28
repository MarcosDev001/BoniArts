"use client";

import { useState } from "react";

const LoginCadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      if (!email || !password) {
        setError("Preencha todos os campos.");
      } else {
        setError("");
        console.log("Login successful");
      }
    } else {
    
      if (!nome || !email || !confirmarSenha) {
        setError("Preencha todos os campos.");
      } else if (password !== confirmarSenha) {
        setError("As senhas não coincidem.");
      } else {
        setError("");
        console.log("Cadastro successful");
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (



    
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

   
      <form onSubmit={handleFormSubmit}>
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
            <label htmlFor="nome" className="block text-sm font-semibold mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
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
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700`}
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </button>
      </form>
      <button
        onClick={toggleForm}
        className="mt-4 text-blue-500 hover:underline cursor-pointer"
      >
        {isLogin ? "Cadastrar uma conta" : "Já tenho uma conta"}
      </button>
    </div>

  );
};

export default LoginCadastro;



