const express = require("express");
const app = express();
const cors = require("cors");
const userrouter = require("./routes/Users");
const productsrouter = require("./routes/Products");
require("./config");
app.use( cors({ origin: "*", }) );
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use("/users", userrouter);
app.use("/products", productsrouter);
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

