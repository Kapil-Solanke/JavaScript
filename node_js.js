const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('My first backend tutorial');
res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<style>
    #btn{
        
        padding: 10px 14px;
        border: 1px solid;
        background-color:rosybrown;
        cursor: pointer;
    }
</style>
<body>
    <div class="container">
        <h1>This is heading 1</h1>
        <p id="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid quo sapiente necessitatibus magnam
            animi! Doloremque, animi, architecto nam cum, iure voluptates neque ea eum laboriosam doloribus molestiae
            sit adipisci nemo voluptatem voluptas consectetur?
        </p>    
    </div>
    <button id="btn" onclick="toggleHide()">
        Show/Hide   
    </button>
    <script src="index2.js"></script>
</body>

</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});