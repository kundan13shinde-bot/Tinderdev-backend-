// creatng aa server 
const express = require("express"); // we got the express file 

const app = express();              // calling the function 

app.get("/user",(rej, res)=> {
  res.send({first : "kundan shinde",
       second : " Kund pal"
  });
})

app.post("/user",(rej, res)=> {
  res.send("posted successfully");
})


app.delete("/user", (rej, res) =>{
    res.send("deleted successfully");
});


app.patch("/nope",(rej, res)=> {
  res.send("Hello stupid");
})

// ************ ROUTING SIGN ************** 


app.get("/ab?c",(rej, res)=> {  // ????? === it can neglect/ignore the letter 
  res.send("Only for test....."); 
  });

app.get("/ab*c",(rej, res)=> {  // ***** === in place of be we can write anything just the first and the last letter should be same 
  res.send("Only for test....."); 
  });

app.get("/ab+c",(rej, res)=> {  // +++++ === it can add up the letters in place of b 
  res.send("Only for test....."); 
  });


app.get("/a/",(rej, res)=> {  // /a/ == if the url contain a letter in it then it will execute
  res.send("Only for test....."); 
  });



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
