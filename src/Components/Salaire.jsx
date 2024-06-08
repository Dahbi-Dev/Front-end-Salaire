import Layout from "./Layout";

function Salaire({data}) {
  return (
    <div>
      <div className="">
        <Layout  />
      </div>

      <h1 className="text-3xl text-center p-2 mb-2 bg-black text-white">
        Salaire
      </h1>

      <div className="  m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">nom</th>
              <th  scope="col" className="px-6 py-3">prenom</th>
              <th  scope="col" className="px-6 py-3">Fonction</th>
              <th  scope="col" className="px-6 py-3">Service</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4">{employee.nomsal}</td>
                <td className="px-6 py-4">{employee.prenomsal}</td>
                <td className="px-6 py-4">{employee.fonction}</td>
                <td className="px-6 py-4">{employee.service.nomser}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Salaire;
