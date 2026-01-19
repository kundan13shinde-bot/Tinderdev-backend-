// creatng aa server 
const express = require("express"); // we got the express file 

const app = express();              // calling the function 

app.use("/test", (rej, res)=> {
    res.send("Only for test....."); // Request handler ()
});

app.use((rej, res)=> {
    res.send("Hello from the server"); // Request handler 
});

app.listen(3000, () => {
    console.log("server is created");
});
// done with server

