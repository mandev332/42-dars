import express from "express";
import { carRouter } from "../routers/cars.routes.js";
import { userRouter } from "../routers/user.routes.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(carRouter);

app.listen(PORT);
console.log("server");
