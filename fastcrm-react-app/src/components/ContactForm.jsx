import { useState } from "react";

export default function ContactForm({ companies, onAdded }) {
  const [name, setName] = useState("");
  const [whasapp, setWhasapp] = useState("");
  const [companyID, setCompanyID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, whasapp, companyID: Number(companyID) }),
    });
    setName("");
    setWhasapp("");
    setCompanyID("");
    onAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Agregar Contacto</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Whatsapp"
        value={whasapp}
        onChange={e => setWhasapp(e.target.value)}
        required
      />
      <select
        className="border p-2 mb-2 w-full"
        value={companyID}
        onChange={e => setCompanyID(e.target.value)}
        required
      >
        <option value="">Selecciona Compañía</option>
        {companies.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        Guardar
      </button>
    </form>
  );
}