import mongoose from "mongoose"

export const connectdb = async () =>{

    try {
        const {connection} = await mongoose.connect(process.env.mongodb_uri!, {
            dbName: "aditya",
        })
    } catch (error) {
        console.log("error")
    }
}