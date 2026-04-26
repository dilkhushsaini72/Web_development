const mongoose = require("mongoose");

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dbRelationship");
    console.log("Mongoose connected..");
  } catch (error) {
    console.log(error);
  }
};

main();

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const createUser = async () => {
  let user1 = new User({
    username: "sherlockhomes",
    addresses: [
      {
        location: "2b street road",
        city: "London",
      },
    ],
  });
  user1.addresses.push({
    location: "3hr walnut road",
    city: "London",
  });

  const result = await user1.save();
  console.log(result);
};

createUser();