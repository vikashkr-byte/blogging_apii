import express from 'express'
import { AddBlogs, deleteById, getAllBlogs, getById, getUserBlogs, UpdateBlog } from '../controllers/blog-controller'

const blogRouter=express.Router()

blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",AddBlogs)
blogRouter.put("/update/:id",UpdateBlog)
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteById)
blogRouter.get("/user/:id",getUserBlogs)
export default blogRouter
