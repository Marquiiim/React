import './App.css';
import SayMyName from './components/SayMyName';
import Peoples from './components/Peoples';
import Frase from './components/Frase';
import List from './components/List';
import Item from './components/Item';

function App() {

  

  return (
    <div className="App">
      <List />
      <Frase />
      <SayMyName nome="Marcos" />
      <Peoples nome="Marcos" idade="18" profissao="Marceneiro"/>
    </div>
  );
}

export default App;
