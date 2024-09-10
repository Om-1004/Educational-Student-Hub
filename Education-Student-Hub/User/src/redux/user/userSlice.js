import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  tasks: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    addTask: (state, action) => {
      const { title, description } = action.payload;
      if (state.tasks[title]) {
        return;
      }
      state.tasks[title] = {
        description,
        id: Date.now(),
      };
    },

    checkTaskOff: (state, action) => {
      const { title } = action.payload;
      const newTasks = { ...state.tasks };
      delete newTasks[title];
      return {
        ...state,
        tasks: newTasks,
      };
    },


    updateTasks: {
      prepare({ title, description, previousTitle }) {
        return {
          payload: {
            title,
            description,
            previousTitle,
          },
        };
      },
      reducer(state, action) {
        const { title, description, previousTitle } = action.payload;
        const newTasks = { ...state.tasks };

        if (previousTitle && previousTitle !== title) {
          delete newTasks[previousTitle];
        }

        newTasks[title] = {
          description,
          id: state.tasks[previousTitle]?.id || Date.now(),
        };

        return {
          ...state,
          tasks: newTasks,
        };
      },
    },

    deleteTask: (state, action) => {
      const { title } = action.payload;
      const newTasks = { ...state.tasks };
      delete newTasks[title];
      return {
        ...state,
        tasks: newTasks,
      };
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  signOutUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  updateTasks,
  addTask,
  deleteTask,
  checkTaskOff,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
