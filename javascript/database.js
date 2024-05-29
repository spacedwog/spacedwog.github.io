const {
    createPool
} = require('mysql');
const pool = createPool({
    host: "spacedwog.mysql.uhserver.com",
    user: "spacedwog",
    password: "KIMERAbeta12@",
    database: "spacedwog",
    connectionLimit: 10
});

pool.query('select * from projetos', (err, result, fields)=>{
    if(err){
        alert(err);
    }
    alert(result);
});

module.exports = pool;