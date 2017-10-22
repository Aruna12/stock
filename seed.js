const db = require("./db")();
const product = require("./product")(db);
const seedData = [
  [1, "brush", "2017-08-09", "2018-08-09", 100, 50],
  [2, "soap", "2017-04-10", "2018-10-10", 50, 30],
  [3, "detergent", "2016-01-05", "2017-02-20", 70, 200],
  [4, "lays", "2017-04-10", "2017-06-20", 60, 60],
  [5, "mop", "2017-04-10", "2020-04-10", 9, 100]
];

async function seedDB(seedData) {
  // create the connection
  const [result, fields] = await product.add(...seedData);
  console.log(`Records inserted: ${result.affectedRows}`);
}

try {
  seedDB(seedData);
} catch (error) {
  console.error(`Error while seeding DB`, error);
}
