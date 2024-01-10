var express = require("express");
var bodyParser = require("body-parser");

server = express();
var fs = require("fs");

server.use(express.static("bird"));//web root----------伺服器會指定連結到這個資料夾
//server.use(express.static("md110"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises");
var Birds = DB.create("Birds.db");
// Birds.insert([
//     { "src": "./img/bu02.jpg", "name": "笑翠鳥", "nick": "「音效製造機」「哈哈哈哈哈」", "content": "身高：47公分。翠鳥界的超巨，會發出的叫聲多到被抓去當影視音效的免費勞工。", "score": 55, "title": 0 },
//     { "src": "./img/yum02.jpg", "name": "灰冠麻鷺", "nick": "「這是什麼鳥」「搖擺地瓜」", "content": "身高：47公分。被台灣變成留鳥的候鳥，總是一動不動，好像自己真的沒被看到一樣。", "score": 62, "title": 1 },
//     { "src": "./img/pekaboo02.jpg", "name": "玄鳳鸚鵡", "nick": "「炫風鸚鵡」「間諜香蕉」", "content": "身高：30公分。受人類把玩幾世紀的鸚鵡，頭上一撮毛直接推翻達爾文進化論。", "score": 64, "title": 2 },
//     { "src": "./img/coo02.jpg", "name": "珠頸鳩", "nick": "「欸有鴿子欸」「隨便鳩」", "content": "身高：34公分。因為體型相像，總被誤會成鴿子，築巢只要花盆和3根樹枝就搞定了。", "score": 58, "title": 3 },
//     { "src": "./img/sg02.jpg", "name": "綠繡眼", "nick": "「綠色麻雀」「阿呆白眼圈」", "content": "身高：11公分。在樹上會憑空亂飄的一群激動小子，常笨到踩空掉地上，然後大聲求救。", "score": 66, "title": 4 }
// ])




//var sharp=
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");



// server.get("/service", function(req, res){

//     Services = [
//         { icon: "fa-shopping-cart", title: "E-Commerce", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro laborum fuga repellat necessitatibus corporis nulla, in ex velit recusandae obcaecati maiores, doloremque quisquam similique, tempora aspernatur eligendi delectus! Rem." },
//         { icon: "fa-laptop", title: "Responsive Design", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime qua architecto quo inventore harum ex magni, dicta impedit." },
//         { icon: "fa-lock", title: "Web Security", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." }
//     ]
//     res.send(Services);
// })

server.get("/portfolio", function (req, res) {//------------接收form資料

    Birds.find({}).then(results => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!")
        }
    })

})




server.listen(5500, function () {
    console.log("Server is running at port 8000!")
})