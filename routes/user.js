import express from "express";
// import { UserAPI } from "../models/user.js";
import {
  deleteUser,
  getAllUsers,
  getUserDetails,
  newUser,
  specialFunc,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", newUser);

router.get("/userid/special", specialFunc);

// always add the Dynamic route APIs in the End of code files
router.get("/userid/:id", getUserDetails);

router.put("/userid/:id", updateUser);

router.delete("/userid/:id", deleteUser);

// Or we can do this

// router
//   .route("/userid/:id")
//   .get(getUserDetails)
//   .put(updateUser)
//   .delete(deleteUser);

export default router;
