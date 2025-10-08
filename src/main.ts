import "./style.css";

// Create a new button
const dialogButton = document.createElement('button');
dialogButton.textContent = 'Click Me!';
dialogButton.onclick = () => {
  alert('Hello my name is Dylan and this is a start');
};

// Insert it into the page, just above the "Read the docs" paragraph
const docs = document.querySelector('.read-the-docs');
if (docs) {
  docs.parentNode?.insertBefore(dialogButton, docs);
}

