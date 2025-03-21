import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../features/ApiSlice";
import { deleteApi } from "../features/ApiSlice";
import { useNavigate } from "react-router-dom";

function RecipeCom() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getApi());
    }, 700);
  }, []);

  const record = useSelector((state) => {
    return state.apiReducer;
  });

  const handleEditData = (edit_data) => {
    navigate("/editForm",{replace:false,state:edit_data});
  }

  const handleDelete = (id) => {
    dispatch(deleteApi(id));
  };

  return (
    <>
      <section className="mt-20">
        { record?.data && record.data.length > 0 ? (
          <div className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {record.data.map((e, i) => {
              return (
                <div
                  key={i}
                  className="border group overflow-hidden relative shadow-2xl rounded-sm border-gray-400 col-span-1 p-5 flex flex-col gap-3"
                >
                  <img src={e.url} alt="" />
                  <h1>{e.title}</h1>
                  <div className="flex gap-10">
                    <button onClick={()=>handleEditData(e)}>Edit</button>
                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-2xl text-center font-semibold">
            No Recipe available
          </p>
        )}
      </section>
    </>
  );
}

export default RecipeCom;
