const saveToDB = (data) => {
  return new Promise((resolve, reject) => {
    // console.log(data);
    let netSpeed = Math.floor(Math.random() * 10) + 1;
    // console.log(netSpeed);
    if (netSpeed > 5) {
      resolve("success: ");
    } else {
      reject("Failure:");
    }
  });
};

saveToDB("apna college")
  .then((result) => {
    console.log("data saved", result);
    return saveToDB("hellow");
  })
  .catch((error) => {
    console.log("having some error: ", error);
  });
