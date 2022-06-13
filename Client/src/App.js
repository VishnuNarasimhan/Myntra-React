import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import Summary from './Components/Summary/Summary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/:productId' element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
