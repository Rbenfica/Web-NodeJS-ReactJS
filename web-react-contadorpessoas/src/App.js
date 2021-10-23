import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [counter, setCount] = useState(0);

  const somar = () => setCount(counter + 1);
  const subtrair = () => setCount(counter - 1);

  return(

    <section>
      <div class="conteiner">       

        <div class="D1">

          <h3>Contador de pessoas</h3>

          <div class="contagem">
            <div class="num">{counter}</div>
          </div>

          <div class="mais">
            <button onClick={somar}>+</button>
          </div>

          <div class="menos">
          <button onClick={subtrair}>-</button>
          </div>
      

        </div>  
      </div>
    </section>
  )
}

export default App;


