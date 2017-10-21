const db = require("./db");
const product = require("./product")(db);

async function expiredProducts() {
  try {
    const expiredProducts = await product.selectExpired();
    console.log(expiredProducts.result);

    await product.deleteExpired();
  } catch (error) {
    console.error(error);
  }
}

expiredProducts();
