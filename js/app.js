const weatherAPI = "a0fef9f1e2d8bc8e9cc81c153fd2045d";
const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");

btnSearch.onclick = () => {
    const location = keyword.value.trim();
    if (!location) {
        alert("Masukkan lokasi yang valid");
        return;
    }

    const apiURL = `a0fef9f1e2d8bc8e9cc81c153fd2045d`;

    fetch(apiURL)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Gagal mengambil data cuaca');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let element = showElement(data);
            container.innerHTML = element;
        })
        .catch((error) => {
            console.error('Ada kesalahan:', error);
            alert('Terjadi kesalahan saat mengambil data cuaca.');
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

