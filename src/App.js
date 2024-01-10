// App.js
import './App.css';
import Helloword from './components/Helloword';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Eventos';
import Form from './components/form';
import Condicional from './components/condicional';
import OutraLista from './components/OutraLista';
import Olá from './components/seuNome';
import Saudacao from './components/Saudacao';
import { useState } from 'react';


function App() {

  const [nome,setNome] = useState()

  const meusItens = ['react','vue','angular'] 

  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
      <h1>testando css</h1>
      <Frase/>
      <Helloword />
      <img src={url}></img>
      <SayMyName nome="joão" />
      <Pessoa
      nome = 'artur'
      idade = '17'
      profissao = 'programador front-end'
      foto="https://via.placeholder.com/150"
      />
      <List/>
      <Evento/>
      <Form/>
      <Condicional/>
      <OutraLista itens={meusItens}/>
      <Olá setNome={setNome}/>
      {nome}
      <Saudacao nome={nome}/>
    </div>
  );
}
export default App;