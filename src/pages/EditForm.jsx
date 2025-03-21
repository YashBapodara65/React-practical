import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { editApi } from "../features/ApiSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function EditForm() {

  const navigate = useNavigate();
  
    const location = useLocation();
    const single_data = location.state || {};
  
    const [formData, setFormData] = useState({
      url: single_data?.url || "",
      title: single_data?.title || "",
      price: single_data?.price || "",
    });

    console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: single_data.id,
      otherData : {
        url: formData.url,
        title: formData.title,
        price: Number(formData.price),
      }
    };

    dispatch(editApi(obj));

    navigate("/");
  };

  return (
    <>
      <div className="py-10 flex flex-col gap-10 px-5">
        <h1 className="text-3xl text-center font-semibold">
          Edit Recipe Form
        </h1>
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
                onChange={handleChange}
                value={formData.url}
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
            </div>
            <div className="col-span-2 flex flex-col">
              <TextField
                id="outlined-number"
                label="Recipe Title *"
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
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
            </div>
            <div className="col-span-2 flex flex-col">
              <TextField
                id="outlined-number"
                label="Recipe Price *"
                type="text"
                name="price"
                onChange={handleChange}
                value={formData.price}
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
            </div>
            <button
              type="submit"
              className="md:col-span-2 text-white font-semibold text-lg py-3 cursor-pointer bg-yellow-700 hover:bg-yellow-800"
            >
              Edit Recipe
            </button>
          </Box>
        </div>
      </div>
    </>
  );
}

export default EditForm;
