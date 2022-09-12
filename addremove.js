//Users should be able to add/remove objects to an array by creating `input` elements, entering data into those elements, and pressing a "SUBMIT" `button`.
//Array is responsive and rendered accurately in the browser window.
//Can enter the street address, property type (house, apartment, loft, etc.), city, and state into `input` elements`.


// const searchData = {
//     address: ["123 Main Street"],
//     propertyType: ["house", "apartment", "condo"],
//     city: ["Anytown"],
//     state: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
// }

const addressSearch = document.querySelector(".street-address"); //address searchbar
const propertySearch = document.querySelector(".property-type"); //property dropdown
const citySearch = document.querySelector(".city"); //city searchbar
const stateSearch = document.querySelector(".state"); //state dropdown

//Submit Button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function() {
    let addressInput = addressSearch.value;
    let propertyInput = propertySearch.value;
    let cityInput = citySearch.value;
    let stateInput = stateSearch.value;
  
    const li = document.createElement("li");
    console.log(addressInput + propertyInput + cityInput + stateInput);
    li.textContent = addressInput + propertyInput + cityInput + stateInput;
    const ul = document.querySelector("ul");
    ul.appendChild("li");
});


//Street Address
const street = document.querySelector(".street-address");
street.addEventListener("input", function () {
    return street.input.value;
    //input information needs to be added to searchEngine in the 'address' key
});