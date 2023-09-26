import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "users", //no use just slice name ;

  //giving initial values to the table field
  initialState: {
    userData: [
      {
        studentName: "Surya",
        email: "surya@gmail.com",
        mobile: "9875632547",
        batch: "b100",
        mentorName: "Vijay",
      },
      {
        studentName: "Arya",
        email: "arya@gmail.com",
        mobile: "7529463815",
        batch: "b200",
        mentorName: "Ajith",
      },
    ],
  },

  //to provide actions
  reducers: {
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    editUser: (state, action) => {
      state.userData.splice(action.payload.index, 1, action.payload.data);
    },
    deleteUser: (state, action) => {
      state.userData.splice(action.payload.index, 1);
    },
  },
});

export const { addUser, editUser, deleteUser } = userReducer.actions;
export default userReducer.reducer;
