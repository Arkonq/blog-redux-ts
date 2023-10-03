import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './features/home/Home';
import Create from './features/create/Create';
import Navbar from './features/navbar/Navbar';
import Details from './features/details/Details';

function App() {



  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>      
    </div>
    </BrowserRouter>
  );
}

export default App;
