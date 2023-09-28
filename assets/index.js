const API_KEY = `aLFWtvmRBhqufToLKCXJ2k0pLvSdsHhb1aroA73Y`
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`

function getWeather (){
     fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("failed to retrieve data from NASA");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
            console.log('Title:', data.title);
            console.log('Explanation', data.explanation)
            console.log('Image Url:', data.url);
        })
        .catch((error) => {
            console.error(error);
        });
    }

getWeather()        