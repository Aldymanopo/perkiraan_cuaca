const weatherAPI =
    "https://api.weatherapi.com/v1/current.json?key=e090ce90580d4968b64103830231210&q=manado&aqi=no";
const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");

const container = document.getElementById("container");

btnSearch.onclick = () => {
    fetch(`${weatherAPI}&q=${keyword.value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let element = "";

            element = showElement(data);

            container.innerHTML = element;
        });
};

function showElement(data) {
    return `<h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
    <div class="box">
        <img src="https:${data.current.condition.icon}" alt="">
        <h1>${data.current.temp_c} ℃</h1>
    </div>
    <p>${data.current.last_updated}</p>
    <p>${data.current.condition.text}</p>`;
}
