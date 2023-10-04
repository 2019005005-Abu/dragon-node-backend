const express=require('express');
const app=express();
const port=process.env.PORT || 5000;
const cors=require('cors');
app.use(cors());
const catagoriesData=require('./Data/catagories.json')
const newsData=require('./Data/news.json');
app.get('/',(req,res)=>{
    res.send("I am Now in Home");
})

app.get('/cat',(req,res)=>{
   res.send(catagoriesData);
})
app.get('/news',(req,res)=>{
   res.send(newsData);
})
app.get('/news/:id',(req,res)=>{
   const id=req.params.id;
   console.log(id);
   const selectedNews=newsData.find(n=>n._id===id);
   res.send(selectedNews)
})
app.get('/cat/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  if(id===0){
   res.send(newsData);
  }else{
   const filteringnews=newsData.filter(n=> parseInt(n.category_id)===id);
   res.send(filteringnews);
  }

})
 app.listen(port,()=>{
    console.log(`Server is Running at ${port}`)
 })