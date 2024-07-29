import { request, Request, Response } from "express";
import User from "../models/user-model";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import bcrypt from "bcrypt";


interface IUser {
    email: string;
    name: string;
    password: string;
}

const getUserToken=(id:string|Types.ObjectId) => {
    const authenticatedUserToken = jwt.sign({id}, "express", {expiresIn: "7d",})
    return authenticatedUserToken;
}

export const createUser = async (request: Request, response: Response) => {
    try {
        const { name, email, password } = request.body

        const exisistingUser = await User.findOne({ email })

        if(exisistingUser){
            return response.status(400).send("User already exists")
        }

        const hashPassword = await bcrypt.hash(password, 12)

        const user = await User.create({
            name: name,
            email: email,
            password: hashPassword,
        })

        return response.status(200).send({message: "User created successfully"})

    } catch (error) {
        console.log("error in createUser", error);
        throw error
    }
}

export const loginUser = async (request: Request, response: Response) => {
    try {
        const {email, password}:IUser = request.body
        const exisistingUser = await User.findOne({email})
        if(!exisistingUser) {
            return response.status(404).send("User not found")
        }
        const isPasswordUnique = await bcrypt.compare(password, (await exisistingUser).password)
        if(isPasswordUnique) {
            const token = getUserToken(await exisistingUser.id)
            return response.send({
                token,
                user: {
                    email: exisistingUser.email,
                    name: exisistingUser.name,
                }
            })
        }
        else{
            return response.status(401).send({message: "Invalid credentials"})
        }
    } catch (error) {
        console.log("error in loginUser", error);
        throw error
    }
}