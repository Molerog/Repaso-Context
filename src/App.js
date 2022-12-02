
import './App.css';
import { ConContext } from './components/ConContext/ConContext';
import { SinContext } from './components/SinContext/SinContext';

function App() {
  return (
   <>
    <h1>App Sin Context</h1>
      <SinContext />
    <h1>App Con Context</h1>
      <ConContext />
  </>
  );
}

export default App;
