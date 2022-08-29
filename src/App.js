import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ErrorBoundary from './Components/ErrorBoudary/ErrorBoudary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate';
import SignIn from './Pages/SignIn/SignIn.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import HomePage from './Pages/Homepage/HomePage.jsx'


function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path='login' element={<SignIn />}></Route>
            <Route path='register' element={<SignUp />}></Route>
            <Route index element={<HomePage />}></Route>
            <Route path="*" element={<Navigate to={""} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>


  );
}

export default App;
