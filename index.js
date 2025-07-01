// 1. Remove <main id="main">
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement("h1");

// 3. Set its id to 'victory'
newHeader.id = "victory";

// 4. Set its inner text
newHeader.textContent = "Queentel Joi is the champion"; // Replace with your actual name

// 5. Append it to the body
document.body.appendChild(newHeader);
