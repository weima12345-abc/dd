let express=require('express');
let router=express.Router();
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
});
router.post('/',(req,res)=>{

  let sql=`select * from book where 名称 like '${req.body.名称}%' or 作者 like '${req.body.作者}%' or 分类 like '${req.body.分类}%' `;
  connection.query(sql,function(err,a,fields){
  res.render('test3',{detail:a});
  })

    
    

});

module.exports=router;