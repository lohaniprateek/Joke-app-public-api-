import express from "express";
// import axios from "axios";
import  JokeAPI from 'sv443-joke-api';
const app= express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    
    JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    let joke = JSON.stringify(data.setup);
    res.render('index.ejs',{
        joke:joke,
        crack:JSON.stringify(data.delivery),
        flag:JSON.stringify(data.category)
    })

})
})

app.listen (port,() => {
  console.log(`server is running on port ${port}.`);
  
}
)