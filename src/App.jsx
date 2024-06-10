
import './App.css';
import './index.css'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Employee from './pages/Employee';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
   <Router>
   <Routes>
   <Route exact path="" element={<Login />} />
   <Route exact path='/register' element={<SignUp />} />
   <Route exact path='/employee' element={<Employee />} />
   </Routes>
   </Router>
  );
}

export default App;
