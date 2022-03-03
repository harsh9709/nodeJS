const {Client} = require('pg')


const client = new Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "harshit",
    database: "API_learn"
})
client.connect(err => {
    if (err) {
      console.error('connection error')
    } else {
      console.log('connected')
    }
  })

client.query(`select * from accounts`, (err,res)=>{
    if(!err){
        console.log(res.rows);
    }else {
        console.log(err.message);
    }
    client.end;
})