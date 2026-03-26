import express from "express";
import dotenv from "dotenv";

import adminroute from "./Route/adminroute.js";
import userroute from "./Route/userroute.js";
import { authentication } from "./middleware/auth.js";

dotenv.config();

const app = express();
const port = 8000;


app.use(express.json());

app.use("/admin", authentication, adminroute);
app.use("/user", userroute);


app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
