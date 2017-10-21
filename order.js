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
 var sql="select name,qty from prod where qty < 10";
  con.query(sql,function(err,result,fields){
    if (err) throw err;
    console.log(result);
  var sql1="update prod set qty=qty+100,mfd=now(), exp=DATE_ADD(now(), INTERVAL 360 day) where qty<10"
  con.query(sql1,function(err,result1,fields){
    if (err) throw err;
    console.log(result1);
  });
 });
});
