import express from "express";
import { ENV } from "./config/env.js";
import foodRouter from "./routes/favourites.routes.js"

const app = express();
app.use(express.json({limit: "200kb"}));
app.use(express.urlencoded({extended: true, limit: "100kb"}));
app.use(express.static("public"))
const PORT = ENV.PORT;

app.use("/api/food", foodRouter)

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
