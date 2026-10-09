import dotenv from 'dotenv';


import connectdb from "./db/index.js";

dotenv.config();


connectdb()
.then(()=>{
    app.on("error", (error) =>{
        console.log("ERROR: ", error);
        throw error
        
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("mongodb connection failed");
    
})