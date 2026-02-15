let url = "https://catfact.ninja/fact?max_length=140";

const getData = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}

getData();