const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
       useNewUrlParser: true,
       useUnifiedTopology: true

       //useNewUrlParser is used to ensure that the MongoDB driver uses the new MongoDB connection string parser. 
       //This parser is required when using certain connection string options like authSource, replicaSet, or ssl.
       // By setting this option to true, you ensure that the new parser is used instead of the legacy parser.

       //useUnifiedTopology is used to enable the new unified topology engine in the MongoDB driver. 
       //This new engine provides a more modern and efficient way of handling connections and server discovery. 
       //By setting this option to true, you ensure that the new engine is used instead of the legacy engine.
       //Both options are recommended for use in modern MongoDB applications, as they provide better performance 
       //and compatibility with modern MongoDB features. When connecting to a MongoDB server using the 
       //MongoDB driver, it is a good practice to include these options in the client constructor

        })

        console.log(`mongodb connected ${conn.connection.host}`);
    } catch (error) {
    console.log(`error : ${error.message}`);
    process.exit();
    }
}

module.exports= connectDB;