const db = require("./db");
const product = require("./product")(db);

async function orders() {
  try {
    const productsLessThan10 = await product.selectByQuantity(10);
    console.log(productsLessThan10.result);

    const renewedProducts = await product.renewExpired(100, 10);
    console.log(renewedProducts.result);
  } catch (error) {
    console.error("Error occured", error);
  }
}

orders();
