import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/page2' element={<Page2/>}/>
      <Route path='/page3' element={<Page3/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
