import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas para GifItem', () => { 
    
    const title = 'Messi';
    const url = 'https://static.messi.com/wp-content/uploads/2019/10/messi-logo-01.png'

    test('debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe existir el titulo y url en los props', () => { 
        render(<GifItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
 })