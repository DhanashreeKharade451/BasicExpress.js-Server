import express from 'express'

//built-in path module
import path from 'path'

//instance of an Express application.
const app = express();

// port to run the server
const port = 3000

//Create a route handler for GET requests to the root URL (/).
//  When this route is requested, it should send the index.html file
//  from your public directory.
app.use(express.static("public"));


//Create another route handler for GET requests to /contact. 
// This should send the contact.html file.

app.use(express.static(path.join(__dirname,'contact')))

 //listen on  port
 app.listen(port,() => {
    console.log('server listening on port' +port)
 });
 