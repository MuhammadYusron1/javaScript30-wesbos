// link to endpoint
// create empty cities' array
// fetch (promise) from endpoint, return promise to blob (json) and push (...data) to cities array
// function to find matches
    // return the array filtered rexexp 
// function to replace number with commas
    // return tostring() and replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// function to display matches
    // 
// select search and suggestion class
// eventlistener to search class with change and display matches function
// eventlistener to suggestion class with keyup and display matches function

const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// Push data from url to array
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

