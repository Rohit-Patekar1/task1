const express= require('express')
const app = express()
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const fs= require('fs')
const db = require('./config/database');
const Info = require('../backend/models/Info')
const User = require('../backend/models/Users')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))




db.authenticate().then(()=>console.log('database conect..')).catch(err=>console.log(err))

app.get("/user",async (req,res)=>{
var url='https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001'
var data=[];

const response = await fetch(url)

var data =await response.json();
console.log("called")

res.json(data)

})

app.post("/user",(req,res)=>{
    // var data=JSON.stringify(req.body);
    
    var json=JSON.stringify(req.body);

  

    fs.readFile('./users.json',function(err,content){
      
        if(content.length==0)
        {
            fs.writeFile('./users.json',json,err=>{
                if(err)
                {
                    console.log(err)
                }
                else
                {
                    console.log("written")
                }
            })
        }

else
{
     if(err) throw err;
        var parseJson = JSON.parse(content);
     
        parseJson.push(...req.body)
      
// console.log(parseJson)

var userdata=JSON.stringify(parseJson)










// function removeDuplicates(originalArray, prop) {
//     var newArray = [];
//     var lookupObject  = {};

//     for(var i in originalArray) {
//        lookupObject[originalArray[i][prop]] = originalArray[i];
//     }

//     for(i in lookupObject) {
//         newArray.push(lookupObject[i]);
//     }
//      return newArray;
// }

// var uniqueArray = removeDuplicates(userdata, "id");
// console.log("uniqueArray is: " + JSON.stringify(uniqueArray));








// console.log(parseJson)

        fs.writeFile('./users.json',JSON.stringify(parseJson),function(err){
            if(err) throw err;
        })
}
       
    })
    
    res.json()
    
})


app.get("/check",(req,res)=>{
    const data={
        firstName:"Rohit",
        lastName:"Patekar",
        address:"mumbai",
        email:"hwd@gmial.com",

    }

    let{firstName,lastName,address,email}=data;

    Info.create({
        firstName,
        lastName,
        address,
        email
    }).then(data=>res.send())
    .catch(err=>console.log(err))

})





app.get('/push',async(req,res)=>{
    
    fs.readFile('./mock.json',async function(err,content)
    {
        var data=JSON.parse(content)

        for(var i=0;i<data.length;i++)
        {
            console.log(typeof(data[1].timetype))
          await User.create({
                employeeNumber:i+data[i].employeeNumber+data[i].firstName,
                firstName:data[i].firstName,
                lastName:data[i].lastName,
                displayname:data[i].firstName,
                email:data[i].email,
                jobtitle:data[i].secondaryJobTitle,
                secondaryJobTitle:data[i].secondaryJobTitle,
                reportsTo:data[i].reportsTo,
                timeType:data[i].timetype,
                workerType:data[i].workertype,
                isProfileComplete:data[i].isProfileComplete,
                maritalStatus:data[i].maritalStatus,
                marriageDate:data[i].marriageDate,
                gender:data[i].gender,
                joiningDate:data[i].joiningDate,
                professionalSummary:data[i].professionalSummary,
                dateOfBirth:data[i].dateOfBirth,
                resignationSubmittedDate:data[i].resignationSubmittedDate,
                exitDate:data[i].exitDate,
                employmentStatus:data[i].employmentStatus,
                accountStatus:data[i].accountStatus,
                invitationStatus:data[i].invitationStatus,
                exitStatus:data[i].exitStatus,
                personalEmail:data[i].personalEmail,
                workPhone:data[i].workPhone,
                homePhone:data[i].homePhone,
                mobilePhone:data[i].mobilePhone,
                bloodGroup:data[i].bloodGroup,
                attendanceNumber:data[i].attendanceNumber,
                probationEndDate:data[i].probationEndDate,
                currentAddress:data[i].currentAddress,
                relations:data[i].relations,
                educationDetails:data[i].educationDetails,
                experienceDetails:data[i].experienceDetails,
                customFields:data[i].customFields,
                groups:data[i].groups,
                leavePlanInfo:data[i].leavePlanInfo,
                bandInfo:data[i].bandInfo,
                payGradeInfo:data[i].payGradeInfo,
                shiftPolicyInfo:data[i].shiftPolicyInfo,
                weeklyOffPolicyInfo:data[i].weeklyOffPolicyInfo,
                captureSchemeInfo:data[i].captureSchemaInfo,
                trackingPolicyInfo:data[i].trackingPolicyInfo,
                expensePolicyInfo:data[i].expensePolicyInfo,
                overtimePolicyInfo:data[i].overtimePolicyInfo,
                id:data[i].id,
                succeeded:data[i].succeeded,
                message:data[i].succeeded,
                errors:data[i].errors

            }).then((userCreated)=>{
                if(!userCreated)
                {
                    res.status(400).send("error")
                }
               
            }).catch(err=>console.log(err))
        }
    })

    res.redirect("/ch")
})


app.get('/ch',async(req,res)=>{
    User.findAll().then(data=>{
        // console.log(data)
        res.sendStatus(200)
    })
    .catch(err=>console.log(err))

   var a=await User.findAll({
        where:{
            firstName:'Niko'
        }
    })
    let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log(typeof(text))
    console.log(typeof(a[0].dataValues.educationDetails));
})

app.listen(5000)