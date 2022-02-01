const express = require("express")
const cors = require("cors")
let Pool = require("pg").Pool


//DB CONFIG

const db = new Pool({
    user: "postgres",
    password: "109109109",
    host: "localhost",
    port: 5432,
    database: "todo_api"
});

db.connect()


///////////////////////////////////////





// CONFIG SERVER

const app = express();
const PORT = 1112;

app.use(cors({
    origin: "*" // CONNECT EVERYBODY
}));

app.use(express.json());

///////////////////////////////////////







// ROUTES
app.get("/api/getAll", async(req, res) => {
    await db.query(`SELECT * FROM todo_api ORDER BY id desc`, (err, result) => {
        try {
            res.status(200).json(result.rows)
        }
        catch(err) {
            console.log(err)
        }
    })
})


app.post("/api/createTodo", async(req, res) => {
    postName = req.body.name
    console.log(postName)

    await db.query(`INSERT INTO todo_api(name) VALUES('${postName}');`, (err, result) => {
        try {
            res.status(200).json()
        }
        catch(err) {
            console.log(err)
        }
    })
})


app.delete("/api/deleteTodo", async(req, res) => {
    let id = req.body.id

    await db.query(`DELETE FROM todo_api WHERE id = ${id};`, (err, result) => {
        try {
            res.status(200).json()
        }
        catch(err) {
            console.log(err)
        }
    })
})


app.put("/api/checked", async(req, res) => {
    let id = req.body.id

    await db.query(`UPDATE todo_api SET checked = true WHERE id = ${id};`, (err, result) => {
        try {
            res.status(200).json()
        }
        catch(err) {
            console.log(err)
        }
    })
})


///////////////////////////////////////



app.listen(PORT, () => {
    console.log(`Server start ${PORT}`)
})