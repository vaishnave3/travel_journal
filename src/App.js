import './App.css';
import Header from './components/Header';
import Data from './components/Data';
import Block from './components/Block';

function App() {
  const dataEl = Data.map(item => {
    return <Block 
              key={item.id}
              item={item}
            />
  })
  return (
    <div>
      <Header />
      {dataEl}
    </div>
  );
}

export default App;
