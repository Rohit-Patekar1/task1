const express= require('express')
const app = express()
const fetch = require('node-fetch');


app.get('/users', async (req,res)=>{
  
    var url='https://hub.dummyapis.com/employee?noofRecords=30&idStarts=1001'
    const response = await fetch(url)

var data =await response.json();
    
    var currentpage=1
    const limit=10;
    var startIndex=0
    var endIndex=10
    const totalpage=data.length/limit 
    console.log(totalpage)

    while(currentpage<=totalpage)
    {
        startIndex=(currentpage-1)*limit;
        endIndex=(currentpage)*limit;
        console.log(data.slice(startIndex,endIndex))
        console.log("break")
        currentpage++;
    }

  
    // console.log(data.slice(startIndex,endIndex))
    // console.log(data.length)
    res.json(data.slice(startIndex,endIndex))

})


app.listen(3000)