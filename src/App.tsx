import './App.css';
import { Contacts } from './components/contacts';
import { Main } from './components/main';
import { Routes, Route } from 'react-router-dom';
import { WorkExperience } from './components/work-experience';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/work-experience' element={<WorkExperience />} />
      </Routes>
    </>
  );
}

export default App;
