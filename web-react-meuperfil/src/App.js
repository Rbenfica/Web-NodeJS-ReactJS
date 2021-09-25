import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render(){
    return(

      <section>
        <div>
          <p class="titulo">App Meu Perfil</p>
        </div>

        <div class="conteiner">       
          
        <Foto largura={250} altura={250} />
          <div class="D1">

            <h3>Dados pessoais:</h3>
            <p>
              xxxxxxxxx
            </p>

            <h3>Formação:</h3>
            <p>
              xxxxxxxx
            </p>

            <h3>Experiência:</h3>
            <p>
              xxxxx
            </p>

            <h3>Projetos:</h3>
            <p>
              xxxxx
            </p>

          </div>  
        </div>
      </section>
    );
  }
}

export default App;

class Foto extends Component {
  render(){
    
    let img = 'https://static.vecteezy.com/ti/vetor-gratis/p1/512576-icone-preto-do-glyph-do-perfil-gr%C3%A1tis-vetor.jpg';
 
    return(
        <img src={img} width={this.props.largura} height={this.props.altura} />
    );
  }
}
