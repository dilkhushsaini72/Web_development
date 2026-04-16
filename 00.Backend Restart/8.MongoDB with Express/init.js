const mongoose = require("mongoose");
const chatModel = require("./models/chat.js");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
    console.log("MongoDB connected::");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

let chats = [
  {
    from: "rahul",
    to: "dilkhush",
    msg: "Hi , How are you",
    created_at: new Date(),
  },
  {
    from: "adam",
    to: "joe",
    msg: "Hi , My name is adam",
    created_at: new Date(),
  },
  {
    from: "ram",
    to: "krishna",
    msg: "where are you going tommorow",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "priya",
    msg: "Hey, I'm neha",
    created_at: new Date(),
  },
];

chatModel.insertMany(chats).then((res) => {
  console.log(res);
});
