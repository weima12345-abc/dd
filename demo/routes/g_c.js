let express=require('express');
let router=express.Router();
var fs=require('fs');
let data=new Array();
var mysql=require('mysql');
let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });  
router.get('/',(req,res)=>{
    
      
  
        connection.query("select * from 租赁表 limit 0,6 ",function(err,a,fieids){  
           res.render('indent_view',{detail:a});
        });
     })
       
        
   

module.exports=router;