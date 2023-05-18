const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env.local" }); //Use when npm run both

const MONGO_PASS=process.env.MONGO_PASS

const URIstring =
  // "mongodb+srv://Yahya:samyaya2003305@notesapp.k0xfpfx.mongodb.net/?retryWrites=true&w=majority";
  `mongodb+srv://Yahya:${MONGO_PASS}@notesapp.k0xfpfx.mongodb.net/mydatabase`;
const connectMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(
    URIstring,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Connection successful")
      }
    }
  );
};
module.exports = connectMongo;