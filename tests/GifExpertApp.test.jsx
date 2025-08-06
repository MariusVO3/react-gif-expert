import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente GifExpertApp', () => { 
    
    test('debe mostrar la categoría inicial "Dragon Ball"', () => { 
        
        render(<GifExpertApp/>);
        expect(screen.getByText("Dragon Ball")).toBeTruthy;
     });

    test('debe añadir una nueva categoría si no existe previamente', () => { 
        
        const miCategoria = 'One Piece';

        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: miCategoria}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(screen.getByText(miCategoria)).toBeTruthy();
    });

    test('no debe añadir una categoría duplicada', () => { 
        
        const miCategoria = 'Dragon Ball';

        render(<GifExpertApp/>);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: miCategoria}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(screen.getAllByText(miCategoria).length).toBe(1);
    })
 })