const mongoose =require("mongoose");


   let employeeSchema = new mongoose.Schema({
    Name:{
      type:String,
      uppercase:true,
      requried:true,
      match:/^[A-Z]+$/,
    },
    employeeID:Number,
    age: {
      type:Number,
      min:[18,'too young'],
      max:[70,'too old']
    },
    email:{
      type:String,
      requried:true,
      match:/^\S+@\S+\.\S+$/
    },
    deparment:String,
    gender:{
      type:String,
      lowercase:true,
      enum:['male','female']
    },
    companyName:String, 
     phone: {
      type: String,
      validate: {
        validator: function(v) {
          return  /^[6-9]\d{9}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: [true, 'User phone number required']
    }
   });

   let Employee = new mongoose.model("Employees",employeeSchema,"ABCemployees");

   let insertEmployeeintoDB = async ()=>{

    try{
        let ashok =new Employee ({
        Name:"Ashok",
        gender:"male",
        age:25,
        employeeID:11,
        email:"ashok@gmail.com",
        deparment:"IT",
        companyName:"ABCSolutions",
        phone:9087654321
      });
      // await ashok.save();

      let venu =new Employee({
        Name:"venu",
        gender:"female",
        age:26,
        employeeID:10,
        email:"venu@gmail.com",
        deparment:"Manegement",
        companyName:"ABCSolutions",
        phone:6087654321

      });

    

      let monu =new Employee({
        Name:"monu",
        gender:"male",
        age:19,
        employeeID:13,
        email:"Monu@gmail.com",
        deparment:"Sales",
        companyName:"ABCSolutions",
        phone:9087654321

      });

      let Bhasker =new Employee({
        Name:"Bhasker",
        gender:"male",
        age:27,
        employeeID:15,
        email:"bhasker21@gmail.com",
        deparment:"Sales",
        companyName:"ABCSolutions",
        phone:7894563210

      });

      let sathish =new Employee({

        Name:"sathish",
        gender:"male",
        age:22,
        employeeID:19,
        email:"sathish@gmail.com",
        deparment:"sales",
        companyName:"ABCSolutions",
        phone:8975463210
      });

      let vivek =new Employee ({
        
        Name:"vivek",
        gender:"male",
        age:24,
        employeeID:21,
        email:"viveknetha@gmail.com",
        deparment:"IT",
        companyName:"ABCSolutions",
        phone:7788994400
      });
        let vinay =new Employee({
          
        Name:"vinay",
        gender:"male",
        age:21,
        employeeID:30,
        email:"vinay@gmail.com",
        deparment:"sales",
        companyName:"ABCSolutions",
        phone:6302794522
        });



      Employee.insertMany([ashok,venu,monu,Bhasker,sathish,vivek,vinay]);

      console.log("inserted data into MongoDb one ");

    }catch(err){
        console.log("unable to insert data into MongoDB one");
    }
             
   };
  


  let connect2DB = async()=>{

    try{
        await mongoose.connect("mongodb+srv://ukumar:ukumar@merndata.ajemg.mongodb.net/kumar?retryWrites=true&w=majority&appName=MernData");

        insertEmployeeintoDB();
        console.log("connect to mongoDB one");
     }
     catch(err){
     console.log("unable connect to MongoDB one");
     }
  
};


connect2DB();