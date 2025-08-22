'use client';
import { useEffect } from 'react';
import { initTypewriter } from '@/lib/typewriterEffect';

export default function Typewriter() {
  useEffect(() => {
    initTypewriter("Bem-vindo ao Estudo-Js.", "titulo");
  }, []);

  return (
    <h1 id="titulo" className="tracking-normal min-h-[1.5em] text-3xl font-semibold text-center mb-8"></h1>
  );
}