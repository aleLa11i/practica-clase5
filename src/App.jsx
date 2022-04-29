import './App.css';
import { Ejercicio3 } from './Components/Ejercicio3';
import { Ejercicio4 } from './Components/Ejercicio4';

//Ejercicio 1 

console.log( 'Hola mundo!' )

function App() {


  
  return (
      <div className='p-5'>

        <h4>  Ejercicio 2  - Formulario </h4>

        <form >
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email</label>

          <input 
            name='email'
            type='email' 
            className='form-control' 
            id='exampleInputEmail1' 
            aria-describedby='emailHelp' 
            placeholder='Email' 
          />

          <small id='emailHelp' className='form-text text-muted'>Nunca compartiremos su correo electrónico con nadie más.</small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Contraseña</label>

          <input 
            name='password' 
            type='password' 
            className='form-control' 
            id='exampleInputPassword1' 
            placeholder='Contraseña'
          />

        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>Recuerdame</label>
        </div>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>

      <h4 className='mt-5'>  Ejercicio 3 </h4>

      <Ejercicio3 
        titulo='Hola mundo! Esto es un h1' 
        parrafo='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' 
      />

      <h4 className='mt-5' >  Ejercicio 4 </h4>


      <Ejercicio4 

      />

    </div>
  );
}

export default App;
