// creatng aa server 
const express = require("express"); // we got the express file 

const app = express();              // calling the function 

// how does route work ? start

app.use("/", (rej, res)=> { // "/" is the main priority even if there is any letters in front of / then also it will juust execute  the reponse of /. only if the / is written below then it will priortize it next 
    res.send("Only for test....."); // Request handler ()
});
app.use("/hello", (rej, res)=> { // similarly 
    res.send("Only for hello....."); // Request handler ()
});
app.use("/hello/23", (rej, res)=> {
    res.send("Only for helloworld....."); // Request handler ()
});

// how does route work ? end

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

