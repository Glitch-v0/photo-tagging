import express from "express";
import controller from "./controller.js";

const router = express.Router();

//get all app pictures from cloudinary
router.get("/pictures", async (req, res) => {
  await controller.sendAllPictureData(req, res);
});

router.get("/pictures/:name/:screenDimension", async (req, res) => {
  await controller.getPictureURL(req, res);
});

router.get("/pictures/:name/guess/:guessCoordinates", async (req, res) => {
  await controller.checkGuess(req, res);
});

router.get("/scores", async (req, res) => {
  await controller.getScores(req, res);
});

router.post("/scores", async (req, res) => {
  await controller.postScore(req, res);
});

export default router;
