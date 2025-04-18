import {} from "dotenv/config";
import { app } from "./app.js";
import { connectDb } from "./db/connect-db.js";

connectDb()
  .then((result) => {
    console.log(result);
    app.listen(process.env.PORT, () => {
      console.log("Server started at port 4000");
    });
  })
  .catch((err) => {
    console.log("Error connecting database");
  });
