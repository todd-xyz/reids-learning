const express = require('express')
const { json } = require('express/lib/response')
const sqlite3 = require('sqlite3').verbose()
const redis = require('redis')

const app = express()

const dbFilePath = "/home/todd/dev/learn/demo.db"
let db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('错误:', err)
    }
})

const REDIS_PORT = 6379
const client = redis.createClient(REDIS_PORT)
client.on('connect', () => {
    console.log('connected to redis')
})

client.connect()

app.get('/', async (req, res) => {
    if (await client.exists('user') == true) {
        console.log('存在iiiiii');
        res.send(await client.get('user'))

    } else {
        console.log('不存在');
        db.all('select * from student', (err, data) => {
            if (err) {
                console.error('错误:', err.message)
            } else {
                res.status(200).json(data)
                client.setEx('user', 3600, JSON.stringify(data))

            }

        })
    }

})
app.listen(3000, () => {
    console.log("Listening on 3000");
})