import './App.css';
import { Contacts } from './components/contacts';
import { Main } from './components/main';
import { Routes, Route } from 'react-router-dom';
import { WorkExperience } from './components/work-experience';
import { Education } from './components/education';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/work-experience' element={<WorkExperience />} />
        <Route path='/education' element={<Education />}/>
      </Routes>
    </>
  );
}

export default App;
