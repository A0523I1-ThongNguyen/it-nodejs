//chạy Server đối với Nodejs

const { createServer } = require('node:http');//thư viện của node.js

const hostname = '127.0.0.1'; //localhost = ip 127.0.0.1
const port = 3001;

const server = createServer((req, res) => {// HTTP hỗ trợ method createServer Để tạo server website 
  //Nhờ hàm createServer ta có thể render ra nội dung website
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World with NodeJs');
});

//Sau khi định nghĩa Server rồi , chúng ta cần cho Server chạy. Để chạy ta cần hàm server.listen
server.listen(port, hostname, () => { //callback function để sau khi server chạy thành công , thì hàm callback được chạy
  console.log(`Server running at http://${hostname}:${port}/`);// nội dung của callback
});