// App.js
import './App.css';
import Helloword from './components/Helloword';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {
  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
      <SayMyName idade="14" />
      <SayMyName nome="joão" />
      <Helloword />
      <img src={url}></img>
      <Pessoa
      nome = 'artur'
      idade = '17'
      profissao = ''
      />
    </div>
  );
}
export default App;