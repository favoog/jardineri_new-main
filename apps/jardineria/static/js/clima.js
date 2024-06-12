function load(){
    api();
}
function api(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&appid=df61bc5bb5fc666cd784d9857f306354')
        .then(response => response.json())
        .then(data =>{  
            let clima = document.getElementById("clima");
            clima.innerHTML += (data.main.temp - 273.15).toFixed(1) + "°C";
        })
        console.log(clima);
}