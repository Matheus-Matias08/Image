import Link from 'next/link';
import { Template } from '@/components';

export default function Home() {
  return (
    <Template>
      <div className="flex min-h-[calc(100vh-130px)] w-full items-center justify-center bg-gray-50 px-4 py-12">
        <main className="w-full max-w-md rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100 flex flex-col items-center text-center space-y-6">
          
          {/* Cabeçalho */}
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Gerenciador de Imagens
            </h1>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              Centralize e organize os seus arquivos visuais com alta performance.
            </p>
          </div>

          <Link 
            href="/galeria"
            className="w-full py-3 px-4 text-white font-semibold bg-red-600 hover:bg-red-700 active:bg-blue-800 rounded-xl shadow transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
          >
            <span>Acessar Galeria</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </main>
      </div>
    </Template>
  );
}