const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


//mongoose.connect(db);
const connectDB = async () => {
  try {
    await mongoose.connect(db,{
      useNewUrlParser: true,
      //Current Server Discovery and Monitoring engine is deprecated, 
      //and will be removed in a future version. 
      //To use the new Server Discover and Monitoring engine,
      //pass option { useUnifiedTopology: true } to the MongoClient
      //constructor. 
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('MongoDB Connected...');
  }catch(err){
    console.error(err.message);
    //process exist with failure 
    process.exit(1);
  }
}

module.exports = connectDB;