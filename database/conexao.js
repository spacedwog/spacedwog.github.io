var mysql = require('mysql');

var con = mysql.createConnection({
    host: "spacedwog.mysql.uhserver.com",
    user: "spacedwog",
    password: "KIMERAbeta12@"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});