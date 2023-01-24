import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div>
        <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
