
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Elementor } from './Components/Elementor';
import { BlockEditor } from './Components/BlockEditor';
import { BuilderList } from './Components/BuilderList';
import { ImportOptions } from './Import/ImportOptions';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<BuilderList/>}/>
      <Route path='block-editor' element={<BlockEditor/>} />
      <Route path='elementor' element={<Elementor/>} />
      <Route path='id=1' element={<ImportOptions/>} />
    </Routes>


    </>
  );
}

export default App;
