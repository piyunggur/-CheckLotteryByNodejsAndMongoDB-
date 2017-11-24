
var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');
var find = require('./findAndQuery.js');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());


app.get('/', function (req, res) {
    find.all(res);
});

app.get('/:year', function (req, res) {
    var path = req.path;
    path = path.substring(1, path.length);
    find.year(res, path);
});

app.get('/:year/:month', function (req, res) {
    var path = req.path;
    path = path.substring(1, path.length);
    find.month(res, path);
});

app.get('/:year/:month/:day', function (req, res) {
    var path = req.path;
    path = path.substring(1, path.length);
    find.fullDate(res, path);
});


app.post('/', function (req, res) {
    var body = req.body;
    var check = true;
    for (var i in body) {
        var tmp = i.split('/');
        if (tmp.length === 3) {
            try {
                var year = parseInt(tmp[0]);
                var month = parseInt(tmp[1]);
                var day = parseInt(tmp[2]);
                if (year < 2555 || year > 2560) {
                    check = false;
                    console.log('worng year : ', year);
                }
                if (month < 0 || month > 12) {
                    check = false;
                    console.log('worng month : ', month);
                }
                if (day < 0 || day > 32) {
                    check = false;
                    console.log('wrong date : ', day);
                }
            } catch (e) {
                check = false;
                console.log('wrong format input : ', tmp);
            }
        } else {
            check = false;
            console.log('wrong format input : ', tmp);
        }
    }
    if (check) {
        find.findPrize(body, res);
    } else {
        res.send('ข้อมูล input บางช่องไม่ถูกต้อง\nกรุณากรอกข้อมูลให้ถูกต้อง');
    }

});



//  //function get url แบบเต็ม
// function fullUrl(req) {
//     return url.format({
//         protocol: req.protocol,
//         host: req.get('host'),
//         pathname: req.originalUrl
//     });
// }


app.listen(8080);
console.log('node run at http://localhost:8080');
