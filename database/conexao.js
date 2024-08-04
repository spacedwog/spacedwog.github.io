var mysql = require('mysql');

var con = mysql.createConnection({
    host: "spacedwog.mysql.uhserver.com",
    user: "spacedwog",
    password: "6z2h1j3k9F!"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});