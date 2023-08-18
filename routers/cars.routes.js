import { Router } from "express";
import car from "../controllers/cars.contr.js";
export const carRouter = new Router();

carRouter
    .get("/cars", car.GET)
    .get("/cars/:id", car.GETID)
    .delete("/cars/:id", car.DELETE)
    .post("/cars", car.POST);
