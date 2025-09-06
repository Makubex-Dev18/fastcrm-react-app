import { useState, useEffect } from "react";
import CompanyForm from "./components/CompanyForm";
import ContactForm from "./components/ContactForm";
import CompanyTable from "./components/CompanyTable";
import ContactTable from "./components/ContactTable";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Fetch companies
  useEffect(() => {
    fetch("http://localhost:3000/api/companies")
      .then(res => res.json())
      .then(data => setCompanies(data.companies || []));
  }, []);

  // Fetch contacts
  useEffect(() => {
    fetch("http://localhost:3000/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data.contacts || []));
  }, []);

  // Handlers to refresh data after add
  const refreshCompanies = () => {
    fetch("http://localhost:3000/api/companies")
      .then(res => res.json())
      .then(data => setCompanies(data.companies || []));
  };
  const refreshContacts = () => {
    fetch("http://localhost:3000/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data.contacts || []));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">FastCRM Dashboard</h1>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <CompanyForm onAdded={refreshCompanies} />
        <ContactForm companies={companies} onAdded={refreshContacts} />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <CompanyTable companies={companies} />
        <ContactTable contacts={contacts} />
      </div>
    </div>
  );
}