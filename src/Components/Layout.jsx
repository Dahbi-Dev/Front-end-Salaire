import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className="p-3  bg-black">
      <ul className=" flex justify-center  space-x-5   text-xl" >
        <li>
          <Link to="/" className=" bg-white  text-green-500 rounded p-1">
            Question-1
          </Link>
        </li>
        <li>
          <Link to="/salaire" className=" text-green-500   bg-white rounded p-1 ">
            Question-2
          </Link>
        </li>
        <li>
          <Link to="/search" className="text-green-500  bg-white rounded p-1 ">
            Question-3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Layout;
