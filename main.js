//problem: we need a simple way to look for users badge count and java script points from a web browser
//solution: use node.js to perform profile looks and sever our templates via HTTP

//1: create a web server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000);
{
  console.log(`Server running at http://${hostname}:${port}/`);
});

//2:handle HTTP route GET / and POST /i.e  home
        //if the url=="/" && GET
        //show search
        //if the  url=="/" && POST
        //redirect to/:username


//3:handle HTTP route GET /:username i.e. /trevan
        //if the url=="/..."
        //get json from treehouse
        //on "end"
        //show profile
        //on "error"


//4:function that handles the reading and merge in values
        //read fromfile and get string
        //merge values in to string