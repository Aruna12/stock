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
// var sql="select *from prod where exp < now()";
  var sql="insert into prod (id,name,mfd,exp,qty,cost) values ?";
  var values=[
    [1,'brush','2017-08-09','2018-08-09',100,50],
    [2,'soap','2017-04-10','2018-10-10',50,30],
    [3,'detergent','2016-01-05','2017-02-20',70,200],
    [4,'lays','2017-04-10','2017-06-20',60,60],
    [5,'mop','2017-04-10','2020-04-10',9,100]
  ];
  con.query(sql,[values],function(err,result,fields){
    if (err) throw err;
    console.log("records inserted:"+result.affectedRows);
  });
});
