import express from "express";
import { getAllGallery,insertGallery } from "../controllers/gallery-controller";
const galleryRouter = express.Router();
galleryRouter.get("/all",getAllGallery);
galleryRouter.post("/insert",insertGallery);
export default galleryRouter;