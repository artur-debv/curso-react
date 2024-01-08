// App.js
import './App.css';
import Helloword from './components/Helloword';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Eventos';
import Form from './components/form';

function App() {
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
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Evento numero="3"/>
      <Form/>
    </div>
  );
}
export default App;