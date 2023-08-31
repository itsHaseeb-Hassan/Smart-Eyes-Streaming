import './App.css';
import ForgotPageScreen from './pages/ForgotPageScreen';
import LoginPageScreen from './pages/LoginPageScreen';
import { Routes,Route } from 'react-router-dom';
import VerificationPageScren from './pages/VerificationPageScren';
import ChangePasswordPageScreen from './pages/ChangePasswordPageScreen';
import HomePageScreen from './pages/HomePageScreen';
import Account from './components/Account';
function App() {
  return (
    <div>
      <Routes>
    <Route exact path='/' element={<HomePageScreen />}>
      <Route path="/Account" element={<Account />}/>
    </Route>
        <Route path="/login" element={<LoginPageScreen />}/>
        <Route path='/Forgot' element={ <ForgotPageScreen />} />
        <Route path="/Verification" element={<VerificationPageScren />} />
        <Route path="/ChangePassword" element={<ChangePasswordPageScreen />} />
      </Routes>
     
    </div>
  );
}

export default App;
