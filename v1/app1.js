const inputEl = document.querySelector("#goal"); 
const buttonEl = document.querySelector("button");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inputEl.value; // Get the value from the input field
  const listItemEl = document.createElement("li"); // Create a new list item element
  listItemEl.textContent = enteredValue; // Set the text content of the list item to the entered value
  listEl.appendChild(listItemEl); // Append the new list item to the unordered list
  inputEl.value = ""; // Clear the input field after adding the goal
}

buttonEl.addEventListener("click", addGoal); // Add an event listener to the button to call addGoal when clicked