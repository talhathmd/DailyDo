import express, { Request, Response } from "express"
import connectToDatabase from "./db"
import userRoutes from "./routes/user.routes"


const application = express()

application.use(express.json())

const PORT=1338

connectToDatabase();

application.get("/ping",(request:Request, response:Response) => {
    response.send("Pong")
})

application.use("/user", userRoutes)

application.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})