import express, { Request, Response } from "express"

const application = express()

const PORT=1338

application.get("/ping",(request:Request, response:Response) => {
    response.send("Pong")
})

application.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})