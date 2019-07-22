const fetch = require('isomorphic-fetch')
let name = "un"
let population = 100090
let url = `https://jsonmock.hackerrank.com/api/countries/search?name=${name}&&population>=${population}`

fetch(url)
.then(response => response.json())
.then(data => console.log(data.total))
.catch(error => console.error(error))