import { Image } from "./image";

class ImageService {
    baseURL: string ='http://localhost:8080/images';    

    async buscas(): Promise<Image[]> {
        const response = await fetch(this.baseURL);
        return response.json();
        }
    }

    export const useImage = () => new ImageService();