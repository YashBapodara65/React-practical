import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { postApi } from "../features/ApiSlice";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    url: "",
    title: "",
    price: "",
  });

  const [validForm, setValidForm] = useState({
    url: false,
    title: false,
    price: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url_err = formData.url == "";
    const title_err = formData.title == "";
    const price_err = isNaN(formData.price) || formData.price == "";

    setValidForm({
      url: url_err,
      title: title_err,
      price: price_err,
    });

      let obj = {
        id: v4(),
        url: formData.url,
        title: formData.title,
        price: Number(formData.price),
      };

      dispatch(postApi(obj));

      setFormData({
        url: "",
        title: "",
        price: "",
      });

      navigate("/");

  };

  return (
    <div className="py-10 flex flex-col gap-10 px-5">
      <h1 className="text-3xl text-center font-semibold">Add Recipe Form</h1>
      <div className="flex items-center justify-center py-4">
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
          className="border rounded-lg shadow-2xl border-gray-400 py-20 px-10 gap-x-10 gap-y-8 grid grid-cols-1 md:grid-cols-2 w-200"
        >
          <div className="md:col-span-2 flex flex-col">
            <TextField
              id="outlined-number"
              label="Recipe Image URL *"
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className=""
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" },
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="mt-1 text-red-500 font-semibold">
              {validForm.url == false
                ? ""
                : "This field is required. Please enter a value. *"}
            </span>
          </div>
          <div className="col-span-2 flex flex-col">
            <TextField
              id="outlined-number"
              label="Recipe Title *"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className=""
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="mt-1 text-red-500 font-semibold">
              {validForm.title == false
                ? ""
                : "This field is required. Please enter a value. *"}
            </span>
          </div>
          <div className="col-span-2 flex flex-col">
            <TextField
              id="outlined-number"
              label="Recipe Price *"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="col-span-1"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <span className="mt-1 text-red-500 font-semibold">
              {validForm.price == false ? "" : "Price must be a number. *"}
            </span>
          </div>
          <button
            type="submit"
            className="md:col-span-2 text-white font-semibold text-lg py-3 cursor-pointer bg-blue-700 hover:bg-blue-800"
          >
            Add Recipe
          </button>
        </Box>
      </div>
    </div>
  );
}

export default AddForm;
