const { render, screen } = require("@testing-library/react");
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Mockeamos el hook personalizado para controlar sus valores en los tests
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas con GifGrid', () => { 

    const category = 'One Punch';

    test('debe mostrar el Loading inicialmente', () => { 

        // Simulamos el estado inicial del hook: cargando, sin imágenes aún
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     });

     test('Debe mostrar items cuando se cargan las imágenes mediante useFecthGifs', () => { 
        
        const gifs = [
            {
                id: 'MESSI',
                title: 'Messi',
                url: 'https://localhost/messi.jpg'
            },
            {
                id: 'CRISTIANO',
                title: 'CR7',
                url: 'https://localhost/CR7.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 })