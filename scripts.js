const temperature = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const humid = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

search = document.querySelector(".search button");

search.addEventListener("click", () => {
	let api = process.env.api;
	const city = document.querySelector(".search input").value;
	const location = document.querySelector(".city");
	console.log(location);
	const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;
	const img = document.querySelector(".background-image");

	if (city === "") return;
	fetch(base)
		.then((response) => response.json())
		.then((json) => {
			const { temp } = json.main;
			let tempRound = Math.trunc(temp);
			const place = json.name;
			const { description } = json.weather[0];
			const { humidity } = json.main;
			const { id } = json.weather[0];

			const { dt } = json.weather[0];
			console.log(dt);

			location.textContent = `Weather in ${place}`;
			temperature.textContent = `${tempRound}° `;
			desc.textContent = `${description}`;
			humid.textContent = `${humidity}`;

			switch (true) {
				case id == 800:
					img.src = "./images/day/clear.jpg";

					break;
				case id >= 801 && id <= 804:
					img.src = "images/day/cloudy.jpg";
					break;
				case id >= 500 && id <= 531:
					img.src = "images/day/rain.jpg";
					break;
				case id >= 600 && id <= 622:
					img.src = "images/day/snow.jpg";

					break;
				default:
			}
		});
});
