
import './App.css';
import './index.css'
import Login from './pages/Login';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
   <Router>
   <Routes>
   <Route exact path="" element={<Login />} />
   </Routes>
   </Router>
  );
}

export default App;
