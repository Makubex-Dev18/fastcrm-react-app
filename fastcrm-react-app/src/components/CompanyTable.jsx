export default function CompanyTable({ companies }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Compañías</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-2">ID</th>
            <th className="border px-2">Nombre</th>
            <th className="border px-2">RUC</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(c => (
            <tr key={c.id}>
              <td className="border px-2">{c.id}</td>
              <td className="border px-2">{c.name}</td>
              <td className="border px-2">{c.ruc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}