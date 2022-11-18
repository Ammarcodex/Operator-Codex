const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const port = 5000;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Ammar786%",
    database: "hammad",

});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));




app.get("/api/get", (req,res) =>{
    let num = "+923421118181";
    let firsttwo = num.substring(0,2)
    let remove = num.substring(3);
    console.log(remove);
    const sqlGet = "SELECT * FROM tasknum WHERE countryCode LIKE '%"+(firsttwo)+"%';";
    db.query(sqlGet, (error,result) =>{
        
      result.forEach(element => {
       
        if(num.startsWith(element.countryCode)) {

            let CountryNumberlength = element.countryCode;
            let InputLength = num;
            let sum = InputLength.length - CountryNumberlength.length;

            if (element.countryLength == sum){

            if(remove.startsWith("30")  ){

            res.send("Enter Number was : " + num)    
            console.log("Country id : "+element.id);
            console.log("Country Name : "+element.countryName);
            console.log("Country Code : "+element.countryCode);
            console.log("Country Number Length : "+element.countryLength);
            console.log("Operator Company : Mobilink");
            console.log("Register Number Owner  : unautharzied")
            console.log("---------------")

            }else if (remove.startsWith("31") ) {

            res.send("Enter Number was : " + num)    
            console.log("Country id : "+element.id);
            console.log("Country Name : "+element.countryName);
            console.log("Country Code : "+element.countryCode);
            console.log("Country Number Length : "+element.countryLength);
            console.log("Operator Company : Zong");
            console.log("Register Number Owner  : unautharzied")
            console.log("---------------")
            
            }
            else if(remove.startsWith("32") ){

            res.send("Enter Number was : " + num)    
            console.log("Country id : "+element.id);
            console.log("Country Name : "+element.countryName);
            console.log("Country Code : "+element.countryCode);
            console.log("Country Number Length : "+element.countryLength);
            console.log("Operator Company : Warid Pakistan ");
            console.log("Register Number Owner  : unautharzied")
            console.log("---------------")

            }
            else if(remove.startsWith("33") ){

                res.send("Enter Number was : " + num)    
                console.log("Country id : "+element.id);
                console.log("Country Name : "+element.countryName);
                console.log("Country Code : "+element.countryCode);
                console.log("Country Number Length : "+element.countryLength);
                console.log("Operator Company : Ufone");
                console.log("Register Number Owner  : unautharzied")
                console.log("---------------")
    
                }
                else if(remove.startsWith("34") ){

                    console.log("Enter Number was : " + num)    
                    console.log("Country id : "+element.id);
                    console.log("Country Name : "+element.countryName);
                    console.log("Country Code : "+element.countryCode);
                    console.log("Country Number Length : "+element.countryLength);
                    console.log("Operator Company : telenor");
                    console.log("Register Number Owner  : unautharzied")
                    console.log("---------------")
        
                    }else{
                        console.log("Invalid operator number")
                    }
                
            

            }
            else{
                console.log("Invalid Number");
            }            

        }
      });
        
    }); 
});

app.listen(port, () =>
{                                          
    console.log(`Server is running on port http://localhost:${port}/api/get`);
});