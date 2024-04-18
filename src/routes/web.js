// file Web này là những API để phục vụ cho server side rendering
// web có method nào sẽ viết ở đây
const { handlerHome, handlerABC } = require('../controllers/homeController');
const express = require('express');//khi bạn gọi require('express'), nó sẽ tìm và tải module Express vào biến express.biến ex đại diện cho framework Express và cho phép bạn sử dụng các chức năng và phương thức của Express trong mã của bạn.

const router = express.Router();//biến router sẽ trở thành một đối tượng Router của framework Express


//req (request), res(response) là 2 object trong môi trường Node.js 
// router.get('/', (req, res) => {
//     //xử lí data
//     res.send('Hello World with Express & Nodemon!')
// })

//khai báo routes :router.Method('/route', handler)
router.get('/', handlerHome);//nhờ khai bào hàm handlerHome ở bên trong router nên có tham số tham số req và res để truyền  xuống cho hàm handlerHome ở Controller (Truyền từ trên xuống dưới)


router.get('/abc', handlerABC)

module.exports = router;// export default



//PS :việc khai báo biến và gắn framework Express và các hàm có sẵn của nó vào các biến cho phép bạn sử dụng các chức năng và
//phương thức của Express để xây dựng ứng dụng và xử lý các yêu cầu HTTP tương ứng.