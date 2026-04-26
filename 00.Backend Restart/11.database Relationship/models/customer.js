const mongoose = require("mongoose");
const { Schema } = mongoose;

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dbRelationship");
    console.log("Mongoose connected..");
  } catch (error) {
    console.log(error);
  }
};

main();

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cust2 = new Customer({
    name: "krishna",
  });

  let data = await cust2.save();

  // let order1 = await Order.findOne({ item: "cold coffee" });
  // let order2 = await Order.findOne({ item: "snacks" });

  // cust1.orders.push(order1);
  // cust1.orders.push(order2);

  // let res = await cust1.save();
  console.log(data);
};
