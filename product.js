module.exports = db => ({
  add(...values) {
    return db.execute(
      "INSERT INTO `prod` (id, name, mfd, exp, qty, cost) VALUES ?",
      values
    );
  },
  selectAll() {
    return db.execute("SELECT `name`, `qty` FROM `prod`");
  },
  selectByQuantity(quantity) {
    return db.execute(
      "SELECT `name`, `qty` FROM `prod` WHERE `qty` < ?",
      quantity
    );
  },
  selectExpired() {
    return db.execute("SELECT * FROM `prod` WHERE `exp` < DATE(NOW())");
  },
  deleteExpired() {
    return db.execute("UPDATE `prod` SET `qty` = 0 WHERE `exp` < NOW()");
  },
  renewExpired(quantity, threshold) {
    return db.execute(
      "UPDATE `prod` SET `qty` = `qty` + ?, `mfd` = NOW(), `exp` = DATE_ADD(NOW(), INTERVAL 360 day) WHERE qty < ? ",
      [quantity, threshold]
    );
  },
  query(...args) {
    return db.query(...args);
  }
});
