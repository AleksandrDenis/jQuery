const API_KEY = "X3U__buRzIRt9Qo6gy5qlmzDvog";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e)); // e stands for event

// Make a GET request to the API URL with teh API Key
// Pass the data to a display function
async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
        displayStatus(data);
       // console.log(data.expiry); // display in console
    } else {
        throw new Error(data.error);
    }


}
// set headig text
// set body text
// show modal
function displayStatus(data) {

    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;
    resultsModal.show();

}