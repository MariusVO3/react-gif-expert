import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas para AddCategory', () => { 
    
    test('debe cambiar la variable de la caja de texto', () => { 
        
        // Se monta el componente
        render(<AddCategory onNewCategory={() => {}}/>);
        // Buscamos el input en el html renderizado antes
        const input = screen.getByRole('textbox');
        // Simulo que el usuario escribe Saitama en el input
        fireEvent.input(input, {target: { value:'Saitama'}});
        // Compruebo que el valor es Saitama, es decir, que el value cambia correctamente
        expect(input.value).toBe('Saitama');
     });

     test('Debe llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('NO debe llamar onNewCategory si el input está vacío', () => { 
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
 })
