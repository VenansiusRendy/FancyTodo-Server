const axios = require("axios");

class WeatherController {
	static checkWeather(req, res, next) {
		const options = {
			method: "GET",
			url: "https://community-open-weather-map.p.rapidapi.com/find",
			params: {
				q: "Jakarta",
			},
			headers: {
				"x-rapidapi-key": process.env.WEATHER_API_KEY,
				"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
			},
		};
		axios
			.request(options)
			.then((response) => {
				// console.log(response);
				const weatherForecast = response.data.list[0].weather[0].main;
				res.status(200).json({ success: true, message: weatherForecast });
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = WeatherController;
