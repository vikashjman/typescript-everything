const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://animi.p.rapidapi.com/name',
  params: {name: 'Levi'},
  headers: {
    'X-RapidAPI-Key': 'bb5c6e561cmsh8422f31a7de9e33p12f5e2jsnba218b41420f',
    'X-RapidAPI-Host': 'animi.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});