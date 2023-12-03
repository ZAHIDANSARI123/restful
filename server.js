// CRUD
/**
 * CREATE POST
 * READ GET
 * UPDATE PUT
 * DELETE DELETE
 */

const express = require("express");

const aap = express();

aap.use(express.json());

aap.use(myMiddleWare);

function myMiddleWare ( req, res, next){
              
              console.log("Inside the middle ware I created");
              next(); //It will pass on the control to the next step
}

/**
 * Stich the routes to the server
 */
require("./routes/idea.routes")

/**
 * 
 * Server Starting
*/
aap.listen(3030,()=>{
              console.log("server started");
})