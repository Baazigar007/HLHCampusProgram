import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/Login/Login';
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import BulkTasks from './pages/admin/BulkTasks/BulkTasks';
import ProfilePage from './pages/Login/Profile';
import PastSubmission from './pages/Login/PastSubmission';
import Balance from './pages/Login/Balance';
import UserTasks from './pages/admin/UserTasks/UserTasks';
import TaskDetails from './pages/admin/TaskDetails/TaskDetails';
import SubmitTask from './pages/Login/SubmitTask';



const App = () =>  {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/pastsubmission" element={<PastSubmission/>} />
      <Route path="/balance" element={<Balance/>} />
      <Route path="/submit" element={<SubmitTask/>} />
      
      <Route path="/admin/" element={<AdminDashboard/>}/>
      <Route path="/admin/bulktasks" element={<BulkTasks/>}/>
      <Route path="/admin/usertasks" element={<UserTasks/>} />
      <Route path="/admin/taskdetails" element={<TaskDetails/>} />
    </Routes>
</BrowserRouter>
  );
}

export default App;

