import "reflect-metadata"
import express from "express"
import "./database"

const app = express();

app.listen(8000, () =>  { 
  return console.log("Server is running NLW Oi") 
});
