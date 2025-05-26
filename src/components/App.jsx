import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NavBar from './NavBar';
//import ActivityLog from '../../../parentpal-back-end/models/ActivityLog';

function App() {
  return (
  <>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<div>Test route working!</div>} />
       
     </Routes>
  </>
  );
}

export default App;