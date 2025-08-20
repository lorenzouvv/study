'use client'; // Necessário para hooks e interatividade

import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Efeito typewriter
  useEffect(() => {
    const texto = "Bem-vindo ao Estudo-Js.";
    const elemento = document.getElementById("titulo");
    let i = 0;
    let isDeleting = false;

    function digitar() {
      const velocidadeNormal = 100;
      const velocidadeApagar = 50;
      const esperaFim = 2000;

      if (!isDeleting && i <= texto.length) {
        if (elemento) elemento.textContent = texto.substring(0, i);
        i++;
        setTimeout(digitar, i === texto.length ? esperaFim : velocidadeNormal);

        if (i > texto.length) {
          isDeleting = true;
          i = texto.length;
        }
      } else if (isDeleting && i >= 0) {
        if (elemento) elemento.textContent = texto.substring(0, i);
        i--;
        setTimeout(digitar, velocidadeApagar);
        if (i < 0) {
          isDeleting = false;
          i = 0;
        }
      }
    }

    digitar();
  }, []);

  return (
    <>
      <Head>
        <title>Estudo-Js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="h-screen flex overflow-hidden bg-gray-100">
          {/* Sidebar */}
          <div 
            className={`fixed z-50 bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform ease-in-out duration-300 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-4">
              <h1 className="text-2xl font-semibold">Menu</h1>
              <ul className="mt-4">
                <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Início</a></li>
                <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Formulário</a></li>
                <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Calculadora</a></li>
                <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Conversor de Temp</a></li>
              </ul>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
            sidebarOpen ? 'blur-sm brightness-90' : ''
          }`}>
            {/* Navbar */}
            <div className="bg-white shadow">
              <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-2">
                  <h1 className="text-xl font-semibold">Estudo-Js.</h1>
                  <button 
                    className="text-gray-500 hover:text-gray-600"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Body content */}
            <div className="flex-1 overflow-auto p-8">
              <h1 id="titulo" className="tracking-normal min-h-[1.5em] text-3xl font-semibold text-center mb-8"></h1>
              <p className="tracking-widest text-center mb-12">... Em Construção ...</p>
              
              <div className="flex flex-wrap justify-center gap-8 w-full">
                {/* Card 1 */}
                <div className="w-80 h-52 bg-gradient-to-tr from-blue-500 to-sky-300 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="glow opacity-0 transition-opacity duration-300"></div>
                  <div className="p-6 flex flex-col h-full justify-between relative z-10">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">Formulário</h2>
                      <p className="text-gray-200">Teste de formulário feito em JavaScript.</p>
                    </div>
                    <button className="w-full py-2 bg-white text-blue-700 rounded-lg font-semibold hover:scale-105 transition-transform">
                      Clique aqui!
                    </button>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-80 h-52 bg-gradient-to-tr from-blue-500 to-sky-300 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="glow opacity-0 transition-opacity duration-300"></div>
                  <div className="p-6 flex flex-col h-full justify-between relative z-10">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">Calculadora</h2>
                      <p className="text-gray-200">Teste de calculadora feita em JavaScript.</p>
                    </div>
                    <button className="w-full py-2 bg-white text-blue-700 rounded-lg font-semibold hover:scale-105 transition-transform">
                      Clique aqui!
                    </button>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-80 h-52 bg-gradient-to-tr from-blue-500 to-sky-300 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="glow opacity-0 transition-opacity duration-300"></div>
                  <div className="p-6 flex flex-col h-full justify-between relative z-10">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">Conversor</h2>
                      <p className="text-gray-200">Teste de conversor de temperatura feito em JavaScript.</p>
                    </div>
                    <button className="w-full py-2 bg-white text-blue-700 rounded-lg font-semibold hover:scale-105 transition-transform">
                      Clique aqui!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay para fechar sidebar ao clicar fora */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}