const express = require('express');
const mongoose = require('mongoose');
// 链接mongo
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('mongo connect success');
})
// 类似于mysql里面的表 mongo里有文档、字段的概念
const user = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
}));
// user.create({
//     user: 'imooc',
//     age: 18
// }, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })
user.remove({
    age: 18
}, function(err, doc) {
    console.log(doc);
})
user.update({
    user: 'xiaoming'
}, {
    '$set': {
        age: 28
    }
}, function(err, doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err);
    }
})
// 新建app
const app = express();
app.get('/', function(req, res) {
    res.send('<h1>hello World</h1>')
})
app.get('/data', function(req, res) {
    user.find({}, function(err, doc) {
        res.json(doc);
    })
// res.send({
//     name: 'imooc React APP',
//     type: 'IT'
// });
})
app.listen(9093, function() {
    console.log('Node APP start at port 9093');
})