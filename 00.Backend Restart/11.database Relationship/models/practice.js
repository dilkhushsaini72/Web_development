const mongoose = require("mongoose");
const { Schema } = mongoose;

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Food_Menu");
    console.log("Mongoose connected..");
  } catch (error) {
    console.log(error);
  }
};

main();

// Menu Schema
const menuSchema = new Schema({
  item: String,
  price: Number,
});

// Customer Schema
const customerSchema = new Schema({
  username: String,
  email: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
});

// mongoose middleware----------
// customerSchema.pre("findOneAndDelete", async (data) => {
//   console.log("PRE MIDDLEWARE");
// });
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Menu.deleteMany({ _id: { $in: customer.orders } });

    console.log(res);
  }
});

const Menu = mongoose.model("Menu", menuSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Creating Menu
const createMenu = async () => {
  const res = await Menu.insertMany([
    {
      item: "snacks",
      price: 29,
    },
    {
      item: "chocolate",
      price: 30,
    },
    {
      item: "cold coffee",
      price: 80,
    },
  ]);

  console.log(res);
};

// createMenu();

// Create order for customer
const addCustomerOrder = async () => {
  const user = new Customer({
    username: "krishna",
    email: "krishna@gmail.com",
  });

  let order1 = await Menu.findOne({ item: "cold coffee" });
  let order2 = await Menu.findOne({ item: "chocolate" });

  user.orders.push(order1);
  user.orders.push(order2);

  // await user.save();
  // console.log(user);

  const customer1 = await Customer.find({}).populate("orders");
  const customer2 = await Customer.find({});
  console.log(customer1);

  console.log(customer2);
};

// addCustomerOrder();

const addNewCustomer = async () => {
  const newUser = new Customer({
    username: "Rahul kumar",
    email: "rahul@gmail.com",
  });

  await newUser.save();
  console.log("new user added..");
};

// addNewCustomer();

// Assign order to user
const addNewOrder = async () => {
  const user = await Customer.findById("69edf9b2fc3a5637ac293601");

  const newOrder = new Menu({
    item: "pizza",
    price: 300,
  });

  await newOrder.save();
  user.orders.push(newOrder);

  await user.save();
  console.log("order added successfully...");
};

// addNewOrder();

// Delete customers
const delCustomer = async () => {
  const user = await Customer.findByIdAndDelete("69ede61d8b88de72e9b21a50");

  console.log(user);
};

delCustomer();
