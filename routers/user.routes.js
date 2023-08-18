import { Router } from "express";
import user from "../controllers/users.contr.js";
export const userRouter = new Router();

userRouter
    .get("/address", user.ADDRESSGET)
    .get("/users", user.GET)
    .get("/users/:id", user.GETID)
    .delete("/users/:id", user.DELETE)
    .post("/users", user.POST);
