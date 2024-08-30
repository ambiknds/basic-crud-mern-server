const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    
  }  
});
//create schema if it doesnot exist
const Blog = mongoose.model("Blog", BlogSchema)

module.export = Blog