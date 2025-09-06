import { useState } from "react";

export default function CompanyForm({ onAdded }) {
  const [name, setName] = useState("");
  const [ruc, setRuc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, ruc }),
    });
    setName("");
    setRuc("");
    onAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Agregar Compañía</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="RUC"
        value={ruc}
        onChange={e => setRuc(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Guardar
      </button>
    </form>
  );
}