import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //DEV ONLY!!
  await pause(1000);
  //response.data === [{id:1,name:'Myra'}]
  return response.data;
});

//DEV ONLY!
const pause = (duaration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duaration);
  });
};

export { fetchUsers };
