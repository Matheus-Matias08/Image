'use client';

import Link from 'next/link';
import { Template } from '@/components';

export default function LoginPage() {
  return (
    <Template>
      <div className="flex min-h-[calc(100vh-130px)] w-full items-center justify-center bg-gray-50 px-4 py-12">
        <main className="w-full max-w-md rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 flex flex-col items-center text-center space-y-6">
          
          <div className="space-y-1 w-full">
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Fazer Login
            </h1>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              Entre com sua conta no Gerenciador de Imagens.
            </p>
          </div>

          <form className="w-full space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                E-mail
              </label>
              <input 
                type="email" 
                placeholder="seu@email.com"
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Senha
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                required
              />
            </div>

            {/* Caixinha de Lembrar de Mim */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 cursor-pointer select-none text-gray-600">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 accent-red-600"
                />
                <span>Não pedir de novo para fazer login</span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full py-3 px-4 text-white font-semibold bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow transition-all duration-200 flex items-center justify-center space-x-2 text-sm mt-2"
            >
              <span>Entrar</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </form>

          <div className="text-xs text-gray-500">
            Ainda não tem uma conta?{' '}
            <Link href="/" className="text-red-600 font-semibold hover:underline">
              Cadastre-se
            </Link>
          </div>

        </main>
      </div>
    </Template>
  );
}