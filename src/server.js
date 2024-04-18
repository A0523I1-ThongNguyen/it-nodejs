require('dotenv').config()
const { render } = require('ejs');
const express = require('express') // commonjs
// import express form 'express';//es express 
const path = require('path');
const app = express() //tạo express application 
const configViewEngine = require('./config/viewEngine')// tách ra xử lí rồi import vào 
const webRoutes = require('./routes/web')// tách ra xử lí rồi import vào 

const port = process.env.PORT || 8888; // init port
const hostname = process.env.HOST_NAME;
console.log("check", process.env.PORT)

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);// thêm tiền tố > phân biệt các route


//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes) 
app.listen(port, hostname, () => {
  console.log(`Example app listening on port :  ${port}`)
})


//   app.METHOD(PATH, HANDLER)

// app ở đây là ứng dụng express

// method: là HTTP request method, viết thường (sẽ đề cập tới sau) method GET sẽ nói với Express cần trả ra nội dung cho client
// Path: đường link (route) trên server
// Handler: function để xử lý khi route được match

// res.send là cách gửi nội dung về client 'ABC' là định dạng text (String)