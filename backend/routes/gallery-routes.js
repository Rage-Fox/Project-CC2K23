import express from "express";
import { getDeptGallery,insertGallery } from "../controllers/gallery-controller";
const galleryRouter = express.Router();
galleryRouter.get("/:id",getDeptGallery);
galleryRouter.post("/insert",insertGallery);
export default galleryRouter;