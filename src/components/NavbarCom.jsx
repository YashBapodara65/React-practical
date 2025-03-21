import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavbarCom() {
  const [disp, setDisp] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-100">
        <div className="">
          <section className="bg-black flex items-center py-3 justify-between px-10">
            <h1 className="text-white text-3xl font-bold">Logo</h1>
            <ul className="hidden md:flex gap-10">
              <Link to={"/"}>
                <li className="text-white font-semibold text-lg">Home</li>
              </Link>
              <Link to={"/addForm"}>
                <li className="text-white font-semibold text-lg">
                  Add Recipe
                </li>
              </Link>
            </ul>
            <button
              onClick={() => setDisp(true)}
              className="text-white block md:hidden"
            >
              <MenuIcon />
            </button>
          </section>
        </div>

        {disp ? (
          <div className="block md:hidden bg-black fixed inset-0 z-10">
            <div className="flex justify-between px-10 py-3">
              <h1 className="text-white text-3xl font-bold">Logo</h1>
              <button
                onClick={() => setDisp(false)}
                className="text-white block md:hidden"
              >
                <CloseIcon />
              </button>
            </div>
            <ul className="flex flex-col px-10 mt-7 gap-5">
              <Link to="/" onClick={() => setDisp(!disp)}>
                <li className="text-white font-semibold hover:bg-gray-600 rounded-md px-5 text-lg">
                  Home
                </li>
              </Link>
              <Link to="/addForm" onClick={() => setDisp(!disp)}>
                <li className="text-white font-semibold hover:bg-gray-600 rounded-md px-5 text-lg">
                  Add Recipe
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default NavbarCom;
