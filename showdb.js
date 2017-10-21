var mysql=require('mysql');

var con=mysql.createConnection({
  host:8080,
  user:"root",
  password:"root",
  database:"stock1"
});

con.connect(function(err) {
 if (err) throw err;
 con.query("SELECT * FROM prod", function (err, result, fields) {
   if (err) throw err;
   console.log(result);
 });
});
