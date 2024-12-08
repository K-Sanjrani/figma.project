console.log("Welcome to the e-commerce website!");

// Example of adding interactivity
document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});