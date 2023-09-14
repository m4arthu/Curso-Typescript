import { Router } from "express";
import musicController from "../controllers/music-controller";
import validateSchema from "../middleweres/validateSchema.middlewere.ts";
import { musicSchema } from "../schemas/musics.schema.ts";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;