var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "",
    database: "trivia_db"
  })
  
connection.connect(function(err) {
if (err) throw err;
// check();
})

module.exports = connection

// function check() {

//     connection.query("SELECT * FROM user_info", function(error, res) {
//         if (error) throw error
//         console.log(res)
//     })
// }