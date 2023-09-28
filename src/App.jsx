import { useState } from "react";
import "./App.css";
import companiesJSON from './companies.json';
import techJSON from './technologies.json';
import Nav from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [techs, setTechs] = useState(techJSON);

  return (
    <div>
      <Nav />

    

      <Routes>
        <Route path='/' element={<HomePage companies = {companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage tech={techs} />} />
      </Routes>
    </div>
  );
}

export default App;


