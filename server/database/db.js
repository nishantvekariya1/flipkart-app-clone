import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.b5eyurn.mongodb.net/flipkart-clone?retryWrites=true&w=majority&appName=ecommerce-web`;
  try {
    // await mongoose.connect(URL, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    // });
    await mongoose.connect(URL);
    console.log("Connection successfully...");
  } catch (error) {
    console.log(`Error while connecting with the database : ${error.message}`);
  }
};

export default Connection;
