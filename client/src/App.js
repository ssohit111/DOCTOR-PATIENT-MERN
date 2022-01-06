import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import PatientList from './components/PatientList';
import DoctorList from './components/DoctorList';
import Patienthistorybyid from './components/Patienthistorybyid';
import Totalcasepatientbyid from './components/Totalcasepatientbyid';
import CreateUser from './components/CreateUser';
function App() {
  return (
    <Router className="myclass">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/patientlist' element={<PatientList />} />
        <Route path='/doctorlist' element={<DoctorList />} />
        <Route path='/historybyid' element={<Patienthistorybyid />} />
        <Route path='/casebyid' element={<Totalcasepatientbyid />} />
        <Route path='/createuser' element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;

