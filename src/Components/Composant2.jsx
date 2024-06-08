import React, { useState } from "react";

const Composant2 = () => {
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [couleur, setCouleur] = useState("");
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((showIt)=> !showIt);
  }
  return (
    <div className="container border border-black p-1">
      <h1 className="text-3xl font-bold text-black text-center">
        Gestion Voitures
      </h1>
      <form style={{ display: "grid" }}>
        <label>Matricule:</label>
        <input
          className="border border-black"
          type="text"
          onChange={(e) => setMatricule(e.target.value)}
        />
        <label>Marque:</label>
        <select
          name="car"
          id="car"
          className="border border-black"
          onChange={(e) => setMarque(e.target.value)}
        >
          <option selected hidden disabled >
            Select an Option
          </option>
          <option value="Toyota">Toyota</option>
          <option value="BMW">BMW</option>
          <option value="Jeep">Jeep</option>
        </select>
        <label>Date de mise en circulation:</label>
        <input
          className="border border-black"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Couleur:</label>
        <input
          className="border border-black"
          type="text"
          onChange={(e) => setCouleur(e.target.value)}
        />
      </form>
      <br />

      <button className="text-white rounded p-1 bg-black" onClick={handleClick}>
        Confirmer
      </button>

      {show && (
        <div className="container border border-black p-1 mt-2">
          <h1 className="text-3xl font-bold text-black text-center">
            Recapitulatif des informations:
          </h1>
          <ul className="font-bold">
            <li>Matricule: {matricule}</li>
            <li>Marque: {marque}</li>
            <li>DAte Mise En Circulation: {date}</li>
            <li>Couleur: {couleur}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Composant2;
