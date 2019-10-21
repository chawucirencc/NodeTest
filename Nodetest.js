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


function coercoinchangetype() {
    // 强制类型转换。
    var a = "10"
    var b = Number(a)
    // console.log(typeof a)
    // console.log(typeof b)
    console.log(b)
    // ----------------
    let c = "12"
    let d = c * 1   // 隐事式强制转换。
    console.log(d)
}


function scopedefinition() {
    // 每个函数都有自己的作用域。同一作用域中的变量名是必须是唯一的。一个作用域可以嵌套另一个作用域内。
    // "=="判断两个变量的值是否想等，"==="不仅判断两个变量的值，还判断两个变量的类型，两者全部相同返货TRUE。
}


function functionName() {
    
}

function moidfyArry(arr, callback) {
    // 操作arr
    // 回调函数，可以将函数作为参数传递的函数。
    arr.push(100);  // 向数组中添加元素。
    callback();
}


function strictuse() {
    //使用严格语法模式。
    // 好处：消除了语言代码中一些不严谨的地方，消除代码不安全的地方，提高编译器效率，增加运行速度；
    /*-----------------*/
    /**
     * 关于null和undefined：
     * undefined:尚未初始化的东西。
     * null:目前不可用。
     */ 
}


function createBase(number) {   // 一个闭包函数，createBase函数返回一个带参数的函数，赋值给一个变量name
    // 再次调用name，就能得到结果。
    return function (x) {
        return number + x
    }
}


function basevaluetype() {
    // string, number, boolean, null, undefined, object, symbol
    // isNaN(number)用来判断一个变量是否为数值。
    // typeof()可以用来查看变量类型。
}


function functionName() {
    
}

function main() {
    // readSyncByRl('请输入任意字符：').then((res) => {
    //     console.log(res);
    // });
    let a = createBase(10)
    console.log(a(6))
}

main()
