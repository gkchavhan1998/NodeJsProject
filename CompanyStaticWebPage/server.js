const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
 
  res.setHeader('Content-Type', 'text/html');
  if(req.url == '/'){
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data);
  }else if(req.url == '/about'){
    res.statusCode = 200;
    const data = fs.readFileSync('about.html');
    res.end(data);
  }else if(req.url == '/emps'){
    res.statusCode = 200;
    const data = fs.readFileSync('./employeeData/empTable.html');
    res.end(data);
  }else if(req.url == '/emp'){
    res.statusCode = 200;
    const data = fs.readFileSync('./employeeData/employee.html');
    res.end(data);
  }else{

  }

});

server.listen(3000, () => {
  console.log(`Server running at 3000`);
});