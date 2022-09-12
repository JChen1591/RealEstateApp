//Users should be able to add/remove objects to an array by creating `input` elements, entering data into those elements, and pressing a "SUBMIT" `button`.
//Array is responsive and rendered accurately in the browser window.
//Can enter the street address, property type (house, apartment, loft, etc.), city, and state into `input` elements`.


const searchEngine = {
    address: "",
    propertyType: ["house", "apartment", "condo"],
    city: "",
    state: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
}

const addressInput = document.querySelector(".street-address"); //address searchbar
const propertyInput = document.querySelector(".property-type"); //property dropdown
const cityInput = document.querySelector(".city"); //city searchbar
const stateInput = document.querySelector(".state"); //state dropdown

//Submit Button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function() {
//submit button needs to add items to array from all inputs
});


//Street Address
const street = document.querySelector(".street-address");
street.addEventListener("input", function () {
    return street.input.value;
    //input information needs to be added to searchEngine in the 'address' key
});