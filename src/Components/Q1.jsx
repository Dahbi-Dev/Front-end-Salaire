import Composant2 from "./Composant2";
import Composant from "./Composant";
import React, { useState  } from "react";

function Q1() {
    const [show, setShow] = useState(false);
    function handleClick() {
      setShow((prevShow) => !prevShow);
    }
  return (
    <div>

          <div className=" ">
        <h1 className=" text-3xl text-center p-2 mb-2 bg-black text-white">
          New Version
        </h1>
        <Composant2 />
        <button
          className=" text-center p-2 mb-2  text-blue-500  "
          onClick={handleClick}
        >
          Old Version  &#10067;
        </button>
        {show && <Composant />}
      </div>
    </div>
  )
}

export default Q1
