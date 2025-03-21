import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getApi = createAsyncThunk("getApi", async () => {
    let response = await axios.get(`http://localhost:3000/recipe`);
    let res = response.data || [];
    return res;
});

export const postApi = createAsyncThunk("postApiData", async (formData) => {
    let response = await axios.post(`http://localhost:3000/recipe`, formData);
    let res = response.data;

    return res;
});

export const deleteApi = createAsyncThunk("deleteApiData", async (id) => {
    let response = await axios.delete(`http://localhost:3000/recipe/${id}`);
    let res = response.data;
    return res;
});

export const editApi = createAsyncThunk(
  "editApiData",
  async ({ id, otherData }) => {
      let response = await axios.put(
        `http://localhost:3000/recipe/${id}`,
        otherData
      );
      let res = response.data;
      return res;
  }
);

export const ApiSlice = createSlice({
  name: "apiSlice",
  initialState: { data: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(postApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(deleteApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    });
    builder.addCase(editApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data.map((e) => {
        if (e.id == action.payload.id) {
          action.payload.formData;
        } else {
          e;
        }
      });
    });
  },
});

export default ApiSlice.reducer;
