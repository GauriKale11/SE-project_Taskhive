require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.listen(3000);

app.use(express.json());

const posts = [
    {
        username:'jim',
        title:'post 1'
    },
    {
        username:'kyle',
        title: 'post 2'
    }
]

app.get('/posts', authenticateToken, (req,res)=>{
    res.json(posts.filter(post => post.username === req.user.name))
})

//auth 
app.post('/login',(req,res)=>{
    const username = req.body.username
    const user = {name:username}

    const accToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accToken})
});

function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user 
        next()
    })
}