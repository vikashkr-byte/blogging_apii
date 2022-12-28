import User from '../models/User'
import bcrypt from 'bcryptjs'
export const getAllUser = async (req, res, next) => {
    let users
    try {
        users = await User.find()
    } catch (error) {
        console.log('error:', error)
    }
    if (!users) {
        return res.status(404).json({ message: "No user found!!" })
    }
    return res.status(200).json({ users })
}

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    } catch (error) {
        return console.log('error:', error)
    }
    if (existingUser) {
        return res.status(400).json({ message: "User Already Exists!!.. Try login instead?" })
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[]
    })
    try {
        await user.save()
    } catch (error) {
        return console.log('error:', error)
    }
    return res.status(201).json({ user })
}

export const login = async (req, res, next) => {
    const { email, password } = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    } catch (error) {
        return console.log('error:', error)
    }
    if (!existingUser) {
        return res.status(404).json({ message: "User Doesn't Exist!!.. Try signup instead?" })
    }
    const isPasswordCorrect =  bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect password!!" })
    }
    return res.status(200).json({ message: "Login Successful. Welcome Back!!" })
}

