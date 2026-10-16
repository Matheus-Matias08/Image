'use client'

import { Template, ImageCard } from '@/components';
import { useImageService } from '@/resource/service';
import { Image } from '@/resource/service';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';
import { useState } from 'react';

export default function Galeria() {

  const router = useRouter();
  const useService = useImageService()
  const [images, setImages] = useState<Image[]>([])
  const [query, setQuery] = useState<string>('')
  const [extension, setExtension] = useState<string>('')
  
  // 1. Criar o estado de loading
  const [loading, setLoading] = useState<boolean>(false)

  async function searchImages() {
    try {
      setLoading(true); // Ativa o loading antes de iniciar a busca
      const result = await useService.buscar(query, extension);
      setImages(result);
      console.log(query, extension)
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    } finally {
      setLoading(false); // Desativa o loading independentemente de sucesso ou erro
    }
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard
        key={image.url}
        imageName={image.name}
        imageUrl={image.url}
        imageSize={image.size}
        uploadDate={image.uploadDate}
        extension={image.extension}
      />
    )
  }

  function renderImageCards() {
    return images.map(renderImageCard);
  }

  return (
    <Template>
      <section className="flex flex-col items-center justify-center my-5">
            <div className="flex space-x-4">
              <input 
                type="text" 
                onChange={(e) => setQuery(e.target.value)}
                className="border px-4 py-2 rounded-lg text-gray-900" 
                placeholder="Buscar imagens..." 
                disabled={loading} // Opcional: desativa o input durante o carregamento
              />
              
              <select 
                onChange={event => setExtension(event.target.value)} 
                className="border px-4 py-2 rounded-lg text-gray-900"
                disabled={loading}
              >
                <option value="">All formats</option>
                <option value="PNG">PNG</option>
                <option value="JPG">JPG</option>
                <option value="GIF">GIF</option>
                <option value="JPEG">JPEG</option>
              </select>

              {/* 2. Altera o texto do botão de acordo com o estado de loading */}
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50" 
                onClick={searchImages}
                disabled={loading}
              >
                {loading ? 'Buscando...' : 'Procurar'}
              </button>

              <Button type="button" variant="danger" onClick={() => router.push('/upload')}>Adicionar </Button>
            </div>
        </section>

      {/* 3. (Opcional) Mensagem ou componente visual caso esteja carregando */}
      {loading ? (
        <div className="flex justify-center items-center my-10">
          <p className="text-gray-600 text-lg">Carregando imagens do banco de dados...</p>
        </div>
      ) : (
        <section className="grid grid-cols-3 gap-4 p-4">
          {renderImageCards()}
        </section>
      )}
    </Template>
  )
}