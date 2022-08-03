import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
  isLiked: false,
  isDisliked: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
    like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );


      } else {
        //todo: Si ya estaba con like, lo desactiva
        console.log("Ya estaba like, quitando...")

      }


    },
    dislike: (state, action) => {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );

      } else {
        //todo: Si ya estaba con dislike, lo desactiva
        console.log("Ya estaba dislike, quitando...")
      }




    },
  },
});

export const { fetchStart, fetchSuccess, fetchError, like, dislike } =
  videoSlice.actions;

export default videoSlice.reducer;
