import { and, eq } from "drizzle-orm";
import { db } from "../config/db.js";
import { favoritesTable } from "../db/schema.js";

export const addFavourite = async (req, res) => {
  try {
    const { userId, recipeId, title, image} = req.body;

    if (!userId || !recipeId || !title) {
      return res.status(200).json({
        error: "Missing required field !!",
      });
    }

    const newFavourite = await db.insert(favoritesTable).values({
      userId,
      recipeId,
      title,
      image,
    }).returning()

    res.status(200).json(newFavourite[0])
  } catch (error) {
    console.log(error, "Error adding favouroites")
    res.status(500).json({
      error: "Error adding favourites"
    })
  }
};

export const deleteFavourite = async(req,res) =>{
  try {
    const {userId,recipeId} = req.params

    await db.delete(favoritesTable).where(
      and(eq(favoritesTable.userId, userId), eq(favoritesTable.recipeId,parseInt(recipeId)))
    )

    res.status(200).json({
      success : "Recipe removed successfully"
    })
  } catch (error) {
    console.log(error, "Error removing from favouroites")
    res.status(500).json({
      error: "Error deeleting from favourites"
    })
  }
} 

export const getFavourites = async(req,res) =>{
  try {
    const {userId} = req.params;

    const userFav = await db
    .select()
    .from(favoritesTable)
    .where(
      eq(favoritesTable.userId,userId)
    )

    res.status(200).json({
     userFav
    })
  } catch (error) {
    console.log(error, "Error fetching favouroites")
    res.status(500).json({
      error: "Error fetching favourites"
    })
  }
}


