const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");

const connectionOpts = {
  host: 8080,
  user: "root",
  password: "root",
  database: "stock1"
};

mysql
  .createConnection(connectionOpts)
  .then(connection => {
    const app = express();
    const product = require("./product")(connection);
    app.use(express.static(path.join(__dirname, "public")));

    app.post("/order", async (req, res) => {
      try {
        const productsLessThan10 = await product.selectByQuantity(10);
        console.log(productsLessThan10.result);

        const renewedProducts = await product.renewExpired(100, 10);
        console.log(renewedProducts.result);
        res.json({
          message: "Ordered successfully"
        });
      } catch (error) {
        res.json({
          message: error.message
        });
        console.error("Error occured", error);
      }
    });

    app.get("/show", async (req, res) => {
      try {
        const allProducts = await product.selectAll();
        res.json({
          message: allProducts.result
        });
      } catch (error) {
        console.error("Error occured", error);
        res.status(200).json({
          message: error.message
        });
      }
    });

    app.post("/discount", async (req, res) => {
      try {
        // const expiredProducts = await product.selectExpired();
        await product.query(
          "UPDATE `prod` SET `cost` = `cost` * 0.6 WHERE `mfd` < DATE(NOW()) - 250"
        );
        res.status(201).json({
          message: "Discount applied successfully"
        });
      } catch (error) {
        res.json({
          message: error.message
        });
      }
    });

    app.delete("/expired", async (req, res) => {
      try {
        const expiredProducts = await product.selectExpired();
        console.log(expiredProducts.result);

        await product.deleteExpired();
        res.status(200).json({
          message: "Deleted"
        });
      } catch (error) {
        console.error(error);
      }
    });

    app.listen(3000, function() {
      console.log("App listening on port 3000!");
    });
  })
  .catch(error => {
    console.error("DB could not be connected", error);
  });
