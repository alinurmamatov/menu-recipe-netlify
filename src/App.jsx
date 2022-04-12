import './App.css';
import {Route, Routes} from 'react-router-dom';
import Recipe from './components/Recipe';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Recipe/:recipe' element={<Recipe />}/>
      </Routes>
    </div>
  );
}

export default App;
