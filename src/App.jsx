import Form from './components/Form';
import './App.css';
import Recipes from './components/Recipes';
import {Route, Routes} from 'react-router-dom';
import Recipe from './components/Recipe';

function App() {
  return (
    <div className="App">
      <Form />
      <Recipes />
      <Routes>
        <Route path='/' />
        <Route path='/Recipe/:recipe' element={<Recipe />}/>
      </Routes>
    </div>
  );
}

export default App;
