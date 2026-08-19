export const ImageCard: React.FC=() => {
    return (
        <div className = "card relative bg-white rounded-md shadow-md trasition-transform ease-in duration-300 transform hover:shadow-lg translate-y-2x">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/D38c24d6b6cbe855ea448c4d6fa372ea-rdnews-com-br.jpg/330px-D38c24d6b6cbe855ea448c4d6fa372ea-rdnews-com-br.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" alt="Imagem" className="h-56 w-full object-cover rounded-t-md"/>
            <div className="card-body p-4">
                <h1 className="text-xl font-semibold mb-2 text-grey-600">Nome da Imagem</h1>
                <p className="text-xl font-semibold mb-2 text-grey-600">Tamanho</p>
                <p className="text-xl font-semibold mb-2 text-grey-600">Data Upload</p>
            </div>
        </div>
    )
}