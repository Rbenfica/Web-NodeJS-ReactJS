import React from 'react';
import './App.css';

    const App = () => {

      let resultado = document.querySelector("span");
      let n1 = document.querySelector("#num1");
      let n2 = document.querySelector("#num2");
      
      function calc(){
        resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);
      }
      
      return(

        <article>
          <div className=" conteiner">       

            <div className="D1">

              <h3>Multiplicador de Números</h3>

              <form>    
              <div className="numero_1">
                <input type="text" id="num1" placeholder="Digite o primeiro nº"></input>
              </div>

              <div className="nummero_2">
                <input type="text" id="num2" placeholder="Digite o segundo nº"></input>
              </div>

              <div className="Calcular">
                <button onClick={calc}>Calcular</button>
              </div>

              <div className="Result">
                <p>
                  Resultado: <span>0</span>
                </p>
              </div>

            </form>          

            </div>  
          </div>
        </article>
      ) 
    }

export default App;






