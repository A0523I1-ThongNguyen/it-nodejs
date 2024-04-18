const handlerHome = (req, res) => {
    //Process data --> Call Model
    res.send('Hello World with Express & Nodemon!');
}

const handlerABC = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    handlerHome, handlerABC
}