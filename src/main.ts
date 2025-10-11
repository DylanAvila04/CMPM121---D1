import "./style.css";

// style = "display : block, margin : 0 auto"; font - size: 20px;"

// Create a new button
document.body.innerHTML = `
  <button> 🥐 Click for a Crossiant</button>
`;
const button = document.querySelector("button");

// Add an event listener to the button
button?.addEventListener("click", () => {
  alert("You have gained a crossiant!");
}); 
