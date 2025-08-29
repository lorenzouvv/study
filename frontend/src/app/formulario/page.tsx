'use client';
import { useState } from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import CardsGrid from '@/components/CardsGrid';
import Typewriter from '@/components/Typewriter';
import Link from 'next/link';


export default function FormularioPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
      produto: '',
      categoria: '',
      preco: '',
      descricao: '',
      quantidade: ''
    })

    const handleInputChange = (e) => {
      const {name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Dados do formulário:', formData)
    }

  return (
    <div className="bg-gray-100 min-h-screen">
            <div className="h-screen flex overflow-hidden bg-gray-100">
              <Sidebar isOpen={sidebarOpen} />
              
              <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
                sidebarOpen ? 'blur-sm brightness-90' : ''
              }`}>
                <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
                
                <div className="flex-1 overflow-auto p-8">
                  <Typewriter />
                  <p className="tracking-widest text-center mb-4">... Em Construção ...</p>

                <div className='bg-white h-auto w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-lg border border-blue-100' >
                  <h2 className='font-bold text-center text-2xl'>Cadastro de Produtos</h2>
                  <p className="text-center text-gray-600 mb-8">Preencha os dados do seu produto abaixo</p>
                  
                  <form onSubmit={handleSubmit} className='space-y-6'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                          <label htmlFor="produto" className='block text-sm font-medium text-gray-700'>Nome do Produto</label>
                          <input 
                          type="text" 
                          id='produto' 
                          name='produto' 
                          required 
                          value={formData.produto} 
                          onChange={handleInputChange} 
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                          placeholder='Ex: Iphone 16' />
                        </div>
                        <div className='space-y-2'>
                          <label htmlFor="categoria" className='block text-sm font-medium text-gray-700'>Categoria</label>
                          <select 
                          id='categoria' 
                          name='categoria' 
                          required 
                          value={formData.categoria} 
                          onChange={handleInputChange} 
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'>
                            <option value="">Selecione uma categoria</option>
                            <option value="eletronicos">Eletrônicos</option>
                            <option value="vestuario">Vestuário</option>
                            <option value="casa">Casa e Decoração</option>
                            <option value="livros">Livros</option>
                            <option value="outros">Outros</option>
                           </select>
                        </div>
                        <div className='space-y-2'>
                          <label htmlFor="preco" className='block text-sm font-medium text-gray-700'>Preço</label>
                          <input 
                          id='preco' 
                          name='preco' 
                          type='number'
                          step='0.01'
                          min='0'
                          required 
                          value={formData.preco} 
                          onChange={handleInputChange} 
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                          placeholder="Ex: 299,90" 
                          />
                        </div>
                        <div className="space-y-2">
                                        <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">Quantidade em Estoque *</label>
                                        <input 
                                            id="quantidade"
                                            name="quantidade"
                                            type="number" 
                                            min="0"
                                            required
                                            value={formData.quantidade}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            placeholder="Ex: 50"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição do Produto</label>
                                    <textarea 
                                        id="descricao"
                                        name="descricao"
                                        rows={4}
                                        value={formData.descricao}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="Descreva as características do produto..."
                                    ></textarea>
                                </div>
                                
                                <div className="flex justify-center pt-4">
                                    <button 
                                        type="submit" 
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1"
                                    >
                                        Cadastrar Produto
                                    </button>
                      </div>
                  </form>

                </div>
                    
                </div>
              </div>
              </div>
              </div>
  );
}