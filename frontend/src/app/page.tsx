'use client';
import { useState } from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import CardsGrid from '@/components/CardsGrid';
import Typewriter from '@/components/Typewriter';
import Link from 'next/link';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Estudo-Js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="h-screen flex overflow-hidden bg-gray-100">
          <Sidebar isOpen={sidebarOpen} />
          
          <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
            sidebarOpen ? 'blur-sm brightness-90' : ''
          }`}>
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            
            <div className="flex-1 overflow-auto p-8">
              <Typewriter />
              <p className="tracking-widest text-center mb-12">... Em Construção ...</p>
              <CardsGrid />
            </div>
          </div>

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