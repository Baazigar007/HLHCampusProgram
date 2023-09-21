import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/Login/Login';
import ProfilePage from './pages/Login/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/profile" element={<ProfilePage/>} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
