
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-8 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-400 to-sky-400">
        Схема Изучения Python
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
        Ваш интерактивный путь от новичка до профессионала в мире Python. Отмечайте изученные темы и следите за своим прогрессом!
      </p>
    </header>
  );
};

export default Header;
   