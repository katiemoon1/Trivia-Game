
import MySQL from './mysql'

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "trivia_db"
  })
  
connection.connect(function(err) {
  if (err) throw err;
})

