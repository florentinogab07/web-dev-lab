// Step 3: Create an array of fruits
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Get the <ul> element
const fruitList = document.getElementById("fruit-list");

// Loop through the fruits array
for (let i = 0; i < fruits.length; i++) {
  // Create a new <li> element
  const li = document.createElement("li");

  // Add fruit name to the <li>
  li.textContent = fruits[i];

  // Append the <li> to the <ul>
  fruitList.appendChild(li);
}
