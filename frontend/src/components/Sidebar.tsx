'use client';
import Link from 'next/link';

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`fixed z-50 bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform ease-in-out duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Menu</h1>
        <ul className="mt-4">
          <li className="mb-2"><a href="/" className="block hover:text-indigo-400">Início</a></li>
          <li className="mb-2"><a href="/formulario" className="block hover:text-indigo-400">Formulário</a></li>
          <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Calculadora</a></li>
          <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Conversor de Temp</a></li>
        </ul>
      </div>
    </div>
  );
}