import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
            const response = await mongoose.connect(
                "mongodb+srv://talhathmd:IwlSwJ9MymDYTQmg@dailydo.djtoagb.mongodb.net/DailyDo?retryWrites=true&w=majority&appName=DailyDo"
                );
            if(response){
                console.log('Connected to MongoDB');
            }    
        } catch (error) {
            console.error('Error: connecting to Database', error);
            throw error;
        }
    }

    export default connectToDatabase;