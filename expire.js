var mysql=require('mysql');

var con=mysql.createConnection({
  host:8080,
  user:"root",
  password:"root",
  database:"stock1"
});

 con.connect(function(err){
 if(err) throw err;
 console.log("Connected!");
 var sql="select *from prod where exp < date(now())";
  con.query(sql,function(err,result,fields){
    if (err) throw err;
    console.log(result);
  var sqld="update prod set qty=0 where exp < now()";
  con.query(sqld,function(err,result1,fields){
    if (err) throw err;
    console.log("deleted");
  });
 });
});
