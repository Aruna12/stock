const db = require("./db")();
const product = require("./product")(db);

async function showAll() {
  try {
    const allProducts = await product.selectAll();
    console.log(allProducts.result);
  } catch (error) {
    console.error("Error occured", error);
  }
}

showAll();
