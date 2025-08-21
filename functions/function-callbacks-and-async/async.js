async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const data = getData(`https://api.sampleapis.com/coffee/hot`);

data.then(coffee => {
    console.log(coffee);
});