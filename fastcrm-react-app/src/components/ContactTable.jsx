export default function ContactTable({ contacts }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Contactos</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-2">ID</th>
            <th className="border px-2">Nombre</th>
            <th className="border px-2">Whatsapp</th>
            <th className="border px-2">Compañía</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td className="border px-2">{c.id}</td>
              <td className="border px-2">{c.name}</td>
              <td className="border px-2">{c.whasapp}</td>
              <td className="border px-2">{c.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
