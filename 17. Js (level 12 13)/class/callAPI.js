let url = "https://catfact.ninja/fact?max_length=140";

const getData = async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (err) {
    console.log("Error! : ", err);
  }
};

getData();
