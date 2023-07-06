const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const userinfoRoute = require("./routes/userinfo");


// Login Auth Routes import
const routeuser = require('./routes/user-routes')
const routeauth = require('./routes/auth-routes')
// const userRoutes = require('')
// const authRoutes = require('./routes/auth-routes');


var cors = require("cors");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/userinfos", userinfoRoute);

// Routes Login Auth
app.use("/api/user",routeuser);
app.use("/api/authuser",routeauth);


app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running");
});