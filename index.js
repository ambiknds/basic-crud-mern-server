const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3001
const mySecret = process.env['DB_URL']
const Blog = require('./models/Blog')
const cors = require('cors')

mongoose.connect(mySecret, {
  useNewUrlParser: true
})
app.use(express.json())
app.use(cors())

app.get('/blogs', async (req, res) => {
  await Blog.find({ title: title, description: description, author: author }, (err, result) => {
    if (err) {
      return res.send(err)
    }
    res.send(result)
  })
})
app.post("/create", async (req, res) => {
  const { title, description, author } = req.body;
  const blog = new Blog({
    title: title,
    description: description,
    author: author,
  });
  try {
    await blog.save()
    res.send("inserted data")
  }
  catch (error) {
    console.log(error)
  }
})
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})