import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //response.data === [{id:1,name:'Myra'}]
  return response.data;
});

export { fetchUsers };
