var express = require('express');
var router = express.Router();
var dbConn = require('../dbConnect/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  let sql = "select * from nhanvien";
  let query = dbConn.query(sql,(err,users)=>{
     if(err) throw err;
     res.render('index',{users:users});
  });
  
 
 
});
router.get('/add', function(req, res, next) {
   
  res.render('add');
});
router.get('/edit/(:id)', function(req, res, next) {
  let id = req.params.id;
  console.log(id);
  let sql = "select * from nhanvien where id = " +id;
  let query = dbConn.query(sql,(err,users)=>{
     if(err) throw err;
     res.render('userpage',{users:users});
  });
});
router.post('/adduser', function(req, res, next) {
  
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let data ={ten:name,email:email,password:password};
  
  let sql = "insert into nhanvien set ?";
  let query = dbConn.query(sql,data,(err,users)=>{
     if(err) throw err;
     res.redirect('/');
  });
});
router.post('/update/:id', function(req, res, next) {
  let id = req.params.id;
  let name = req.body.name;
  let email = req.body.email;
  let data ={ten:name,email:email};
  console.log(id);
  let sql = "update  nhanvien set ? where id = " +id;
  let query = dbConn.query(sql,data,(err,users)=>{
     if(err) throw err;
     res.redirect('/');
  });
});
router.get('/delete/(:id)',function(req,res,next){
  let id = req.params.id;
  let sql = "delete  from nhanvien where id ="+id;
  let query= dbConn.query(sql,(err)=>{
     if(err) throw err;
     res.redirect('/');
  });
});
module.exports = router;
