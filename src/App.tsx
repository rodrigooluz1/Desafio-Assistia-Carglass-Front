import { useState } from 'react'
import './App.css'
import {calculaDivisoresApi} from './Services/calculaDivisoresApi'

function App() {
  const[numero, setNumero] = useState('');
  const[numeroEntrada, setNumeroEntrada] = useState('');
  const[listaDivisores, setListaDivisores] = useState('');
  const[listaPrimos, setListaPrimos] = useState('');

  const [mostrarResultado, setMostrarResultado] = useState(false);


  const calculaDivisores = async () => {
      
      let number = +numero; //converte o valor de numero para inteiro

      calculaDivisoresApi(number).then(
          (dados) => {
            if(dados.status == true){
              setNumeroEntrada(dados?.entrada)

              let _divisores = dados?.divisores.join('   ');
              let _primos = dados?.primos.join('   ');
              setListaDivisores(_divisores)
              setListaPrimos(_primos)   

              setMostrarResultado(true)

            }else{
              setMostrarResultado(false)
              alert(dados?.message)
            }   
            
          }
      );


  }

  return (
    <>
      
      <div className="main-form">

          <h1>CÁLCULO DOS DIVISORES PRIMOS</h1>
            
          <div className="formulario">

              <label htmlFor="Digite o número">Digite o número para o cálculo:  <br /> 
                  <input type="text" id="numero" name="numero" placeholder="Número" value={numero}  onChange={(e)=> setNumero(e.target.value)}/>
              </label>

              <button onClick={() => calculaDivisores()}>
                  CALCULAR
              </button>
                
          </div>


          {mostrarResultado && (
            <div className="resultado">
              <strong>Número de Entrada:</strong> {numeroEntrada} <br />
              <strong>Números divisores:</strong> {listaDivisores} <br />
              <strong>Divisores Primos:</strong> {listaPrimos}
            </div>
          )}

      </div>
       
    </>
  )
}

export default App
