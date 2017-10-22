const db = require("./db")();
const product = require("./product")(db);

async function expired() {
  try {
    const expiredProducts = await product.selectExpired();
    console.log(expiredProducts.result);
    //"update prod set cost=cost*0.6 where mfd < date(now())- 250";
  } catch (error) {
    console.error("Error occured", error);
  }
}

expired();
