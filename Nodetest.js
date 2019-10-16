const readline = require('readline');
const mysql = require('mysql');
const redis = require("redis")
const mongodb = require("mongodb")


function readSyncByRl(tips) {
    // 实现控制台输入：
    tips = tips || '> ';

    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(tips, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}


function connect_mysql() {
    // 连接mysql数据库，查询
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "world"
    })
    connection.connect()

    let se_sql = "select * from dytt_new"
    connection.query(se_sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            result
        }
    })
}


function connect_redis() {
    // 连接redis数据库，查询
    client = redis.createClient(6379)
    client.on("error", function (err) {
        console.log("Error" + err)
    })
    
    client.quit()
}


function connect_mongodb() {
    // 连接MongoDB数据库.
    mongodb.connect("mongodb://localhost:27017/");
    let db = mongodb.connection;
    db.on('open', function (err) {
        if (err) {
            console.log('Error')
        }
        console.log("Succeed")
    })
}


function Person() {
    this.name = 'Mic'
}
Person.prototype.sayName = function(){
    console.log(this.name)
}

function moidfyArry(arr, callback) {
    // 操作arr
    // 回调函数，可以将函数作为参数传递的函数。
    arr.push(100);
    callback();
}


function main() {
    // readSyncByRl('请输入任意字符：').then((res) => {
    //     console.log(res);
    // });
    let arr = [12]
    moidfyArry(arr, function () {
        console.log("This is test", arr)
    });   
}

main()
