import React from 'react';
import './App.css';
import api from './api.js';



function App() {
  

 async function handlePost(){

   const quiz = await api.get('/quizzes');
   const dados = quiz.data;
   console.log(dados);

 }
 handlePost();



  return (
    <div  className="App">
      <div className="compApp">
          <button className="Cvoltar">Voltar</button> 
          <img/>
            <div className="compQuiz">
              <h1>Titulo Quiz</h1>
              
             <p>
                Descrição asdasda
             </p>   
             <form>
                <span>Pergunta :</span>                
                <input/><br></br>
                <span>Pergunta :</span>                
                <input/>
             </form>

             <button className="btn">Enviar</button>

            </div>
      </div>
      Hello World!
      
    </div>
  );
}

export default App;
