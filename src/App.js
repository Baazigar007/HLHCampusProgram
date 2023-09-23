import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/Login/Login';
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import BulkTasks from './pages/admin/BulkTasks/BulkTasks';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/admin/" element={<AdminDashboard/>}/>
      <Route path="/admin/bulktasks" element={<BulkTasks/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
