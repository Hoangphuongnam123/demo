var mysql = require('mysql'); //nhớ npm install mysql mới require dc
var connection = mysql.createConnection({
   
    localhost :"localhost",
    user :"root",  //mặc đinh là root
    password:"",  //pass trống.
    database:"nhanvien" //tên database tùy mình chọn

});
 connection.connect(function(err){
  if(err) throw err;
  console.log("Connected");
 });
 module.exports=connection;