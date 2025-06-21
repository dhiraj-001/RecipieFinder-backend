import { Router } from "express";
import { addFavourite, deleteFavourite, getFavourites } from "../controllers/favorite.controller.js";

const router = Router()


router.route("/getFavourites").post(getFavourites)
router.route("/favourite").post(addFavourite)
router.route("/delete/:userId/:recipeId").delete(deleteFavourite)

export default router;