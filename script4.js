const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e15388975mshc6cfaaeb6a3c482p116d6ajsn8cc0b64f788f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())  /* it is taking the response of the data that  is coming from fetch */
		.then((response) => {
			console.log(response)
			sunset.innerHTML = response.sunset /* yaha par sunset.innerhtml id hai and response.sunset provide kar raha degree and all */


			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			feels_like.innerHTML = response.feels_like;


		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Chennai")


// shangaai api call and its code
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shangai', options)
	.then(response => response.json())  /* it is taking the response of the data that  is coming from fetch */
	.then((response) => {
		console.log(response)
		sunsetS.innerHTML = response.sunset;
		sunriseS.innerHTML = response.sunrise;
		cloud_pctS.innerHTML = response.cloud_pct;
		feels_likeS.innerHTML = response.feels_like;
		tempS.innerHTML = response.temp;
		max_tempS.innerHTML = response.max_temp;
		min_tempS.innerHTML = response.min_temp;
		humidityS.innerHTML = response.humidity;
		wind_degreesS.innerHTML = response.wind_degrees;
		wind_speedS.innerHTML = response.wind_speed


	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});


// mumbai  api call and its code

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
	.then(response => response.json())  /* it is taking the response of the data that  is coming from fetch */
	.then((response) => {
		console.log(response)
		sunsetM.innerHTML = response.sunset;
		sunriseM.innerHTML = response.sunrise;
		cloud_pctM.innerHTML = response.cloud_pct;
		feels_likeM.innerHTML = response.feels_like;
		tempM.innerHTML = response.temp;
		max_tempM.innerHTML = response.max_temp;
		min_tempM.innerHTML = response.min_temp;
		humidityM.innerHTML = response.humidity;
		wind_degreesM.innerHTML = response.wind_degrees;
		wind_speedM.innerHTML = response.wind_speed


	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});

	// CALIFORNIA API CALLS AND ITS VALUES 

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=california', options)
	.then(response => response.json())  /* it is taking the response of the data that  is coming from fetch */
	.then((response) => {
		console.log(response)
		sunsetC.innerHTML = response.sunset;
		sunriseC.innerHTML = response.sunrise;
		cloud_pctC.innerHTML = response.cloud_pct;
		feels_likeC.innerHTML = response.feels_like;
		tempC.innerHTML = response.temp;
		max_tempC.innerHTML = response.max_temp;
		min_tempC.innerHTML = response.min_temp;
		humidityC.innerHTML = response.humidity;
		wind_degreesC.innerHTML = response.wind_degrees;
		wind_speedC.innerHTML = response.wind_speed


	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});

    //  TOKYO API CALL 
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
	.then(response => response.json())  /* it is taking the response of the data that  is coming from fetch */
	.then((response) => {
		console.log(response)
		sunsetT.innerHTML = response.sunset;
		sunriseT.innerHTML = response.sunrise;
		cloud_pctT.innerHTML = response.cloud_pct;
		feels_likeT.innerHTML = response.feels_like;
		tempT.innerHTML = response.temp;
		max_tempT.innerHTML = response.max_temp;
		min_tempT.innerHTML = response.min_temp;
		humidityT.innerHTML = response.humidity;
		wind_degreesT.innerHTML = response.wind_degrees;
		wind_speedT.innerHTML = response.wind_speed


	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});





