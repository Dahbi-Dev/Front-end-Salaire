import React, { useState } from "react";
import Layout from "./Layout";

function Composant3({ data }) {
  const [service, setService] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const founded = data.filter((item) => item.service.nomser === service);

    if (founded.length > 0) {
      const names = founded.map((item) => `${item.nomsal} ${item.prenomsal}`);
      setResult(names.join(", "));
    } else {
      setResult("Service not found");
    }
  };

  return (
    <div>
      <Layout />

      <h1 className="text-3xl text-center p-2 mb-2 bg-black text-white">
        Search
      </h1>

      <div className="grid m-5">
        <h2 className="text-3xl font-bold">Recherche par service:</h2>
        <label className="p-2">Entrer le nom du service: </label>
        <input
          type="text"
          className="border border-black border-2"
          onChange={(e) => setService(e.target.value)}
        />
        <br />

        <button
          onClick={handleSearch}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Chercher
        </button>
      </div>

      <div className="m-5 text-center">
        <h1 className="font-bold text-4xl">Résultat</h1>
        <ul className="mt-5  pl-6">
          {result.split(", ").map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Composant3;
