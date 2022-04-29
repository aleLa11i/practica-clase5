import React, { useState } from 'react';

export const Ejercicio4 = () => {
    
    const [value, setValue] = useState(0);
  
    return (
        <div>
            <label> El valor del contador es: { value} </label>

            <button 
                className='btn btn-primary d-block m-2'
                onClick={ () => setValue( value+1 ) }
            >
                Aumentar el valor!
            </button>

            <button 
                className='btn btn-primary d-block m-2'
                onClick={ () => setValue( value-1 ) }
            >
                Disminuir el valor!
            </button>
        </div>
    )
}
