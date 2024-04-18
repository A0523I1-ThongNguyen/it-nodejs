const path = require('path')
const express = require('express'); //khi bạn gọi require('express'), nó sẽ tìm và tải module Express vào biến express.
const configViewEngine = (app) => {
    console.log(path.join('./src', 'views'))
    //config template engine
    app.set('views', path.join('./src', 'views')) // nơi lưu trữ file template engine
    app.set('view engine', 'ejs')// định nghĩa template engine

    //config static files 
    app.use(express.static(path.join('./src', 'public'))) // nói cho Express biết ta lưu các file tĩnh bên trong file public
}



module.exports = configViewEngine;