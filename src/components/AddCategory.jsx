import { useState } from 'react';
import PropTypes from "prop-types";

// Componente funcional que recibe una función como prop: onNewCategory
export const AddCategory = ({ onNewCategory }) => {

    // Creamos un estado local para controlar el valor del input
    const [inputValue, setInputValue] = useState('');

    // Manejador del evento onChange del input
    // Actualiza el estado con el valor que el usuario escribe
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    // Manejador del evento onSubmit del formulario
    // Evita que se recargue la página y ejecuta la lógica de validación/envío
    const onSubmit = (event) => {
        // Previene el comportamiento por defecto del formulario (para que no refresque)
        event.preventDefault(); 

        // Si el texto tiene 1 carácter o menos, no hacemos nada
        if (inputValue.trim().length <= 1) return;

        // Ejecutamos la función pasada por props con el valor del input limpio
        onNewCategory(inputValue.trim());

        // Limpiamos el campo de texto tras enviar
        setInputValue('');
    }

    // Renderizamos el formulario con un input controlado
    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text" // Campo de texto
                placeholder="Buscar gifs" // Texto sugerido dentro del input
                value={inputValue} // Valor actual del input (estado controlado)
                onChange={onInputChange} // Manejador que actualiza el estado al escribir
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}