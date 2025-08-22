'use client';
import Link from 'next/link';

export default function CardsGrid() {
  const cards = [
    { 
      title: "Formulário", 
      description: "Teste de formulário feito em JavaScript." ,
      href: "/formulario" 
    },
    { 
      title: "Calculadora", 
      description: "Teste de calculadora feita em JavaScript." ,
      href: "/formulario" 
    },
    { 
      title: "Conversor", 
      description: "Teste de conversor de temperatura feito em JavaScript." ,
      href: "/formulario" 
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {cards.map((card, index) => (
        <div key={index} className="w-80 h-52 bg-gradient-to-tr from-blue-500 to-sky-300 rounded-2xl shadow-2xl relative transition-all duration-300 hover:scale-105">
          <div className="p-6 flex flex-col h-full justify-between relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{card.title}</h2>
              <p className="text-gray-200">{card.description}</p>
            </div>
            <Link 
              href={card.href}
              className="w-full py-2 bg-white text-blue-700 rounded-lg font-semibold hover:scale-105 transition-transform text-center"
            >
              Clique aqui!
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}