/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, ArrowUpCircle, Instagram } from 'lucide-react';

import cabecalhoImg from './cabecalho.png';
import implementacaoImg from './implementacao-protocolo.png';
import prismaImg from './consultoria-prisma.png';
import quizImg from './capa-quiz.png';
import agenciaImg from './agencia.png';

const links = [
  {
    id: 1,
    image: implementacaoImg,
    url: "https://api.whatsapp.com/send?phone=5511914337611&text=Oii%2C%20quero%20implementar%20um%20funil%20para%20escalar%20minha%20mentoria!",
    title: "Implementação Protocolo"
  },
  {
    id: 2,
    image: prismaImg,
    url: "https://api.whatsapp.com/send?phone=5511914337611&text=Oii%2C%20quero%20saber%20sobre%20a%20consultoria!",
    title: "Consultoria Prisma"
  },
  {
    id: 3,
    image: quizImg,
    url: "https://form.respondi.app/UxEp59vn",
    title: "Quiz"
  },
  {
    id: 4,
    image: agenciaImg,
    url: "https://www.instagram.com/digitalflly/",
    title: "Biblioteca de Conteúdo"
  }
];

function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fffdf7] text-[#0a0a0a] font-neue selection:bg-[#172219]/10">
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#172219]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#172219]/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative max-w-2xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mb-12"
        >
          <img 
            src={cabecalhoImg} 
            alt="Cabeçalho" 
            className="w-full h-auto rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Links Grid */}
        <div className="w-full space-y-6">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block group relative overflow-hidden rounded-2xl border border-[#0a0a0a]/10 bg-white/40 hover:bg-[#172219]/5 transition-all duration-300 shadow-xl shadow-[#172219]/5"
            >
              <div className="aspect-[897/282] w-full">
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Subtle Overlay for Accessibility/Visual Polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/40 to-transparent pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* Social / Footer Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-col items-center space-y-8 w-full"
        >
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/lemarques/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#0a0a0a]/5 hover:bg-[#0a0a0a]/10 border border-[#0a0a0a]/10 transition-colors"
            >
              <Instagram size={20} className="text-[#0a0a0a]/80" />
            </a>
            <a 
              href="mailto:atendimento@digitalflly.com"
              className="p-3 rounded-full bg-[#0a0a0a]/5 hover:bg-[#0a0a0a]/10 border border-[#0a0a0a]/10 transition-colors"
            >
              <Mail size={20} className="text-[#0a0a0a]/80" />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors text-xs uppercase tracking-widest"
          >
            <ArrowUpCircle size={16} />
            <span>Voltar ao topo</span>
          </button>

          <footer className="text-center space-y-2 pt-8 border-t border-[#0a0a0a]/5 w-full">
            <p className="text-[#0a0a0a]/30 text-[10px] uppercase tracking-widest">
              Todos os direitos reservados • Política de Privacidade
            </p>
            <p className="text-[#0a0a0a]/20 text-[10px] uppercase tracking-widest">
              Site feito com carinho por <span className="text-[#0a0a0a]/40">@digitalflly</span>
            </p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}

// Placeholder for future pages
function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffdf7]">
      <h1 className="text-2xl font-neue">Página de Contato - Em breve</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/lemarques">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
