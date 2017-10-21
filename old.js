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
  var sqld="update prod set cost=cost*0.6 where mfd < date(now())- 250";
 });
});
