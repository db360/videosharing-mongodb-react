import express from "express";
import {
  deleteuser,
  dislike,
  getUser,
  like,
  subscribe,
  unSubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user

router.put("/:id", verifyToken, update); // url/middleware /next()=>/ function

// delete user
router.delete("/:id", verifyToken, deleteuser);

// get a user
router.get("/find/:id", getUser);

//subscribe to user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe from user
router.put("/unsub/:id", verifyToken, unSubscribe);

// like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
