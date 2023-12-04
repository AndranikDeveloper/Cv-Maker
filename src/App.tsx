import "./App.css";
import { Contacts } from "./components/contacts";
import { Main } from "./components/main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </>
  );
}

export default App;
