import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddForm from "../pages/AddForm";
import EditForm from "../pages/EditForm";
import MainLayout from "./MainLayout";
import { ToastContainer } from "react-toastify";

function AppRoutes() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/addForm" element={<AddForm />} />
          <Route path="/editForm" element={<EditForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
