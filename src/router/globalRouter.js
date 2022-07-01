import express from "express";
import { join } from "../controller/userController";
import { trending } from "../controller/videoController";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);
globalRouter.get("/join", join);
globalRouter.get("/trending", trending);

export default globalRouter;
