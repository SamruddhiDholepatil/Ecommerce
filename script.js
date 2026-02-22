
// Select all "Add to Cart" buttons

const addToCartButtons = document.querySelectorAll('.add-to-cart');


// Function to handle "Add to Cart" button click

function addToCartClicked(event) {
 
 // Get the parent product element
  
const product = event.target.parentElement;
  
 
 // Get product information
  
const productName = product.querySelector('h2').innerText;
  const productPrice = product.querySelector('p').innerText;

 
 // Create an object to represent the product
  
const item = {
    
name: productName,
    
price: parseFloat(productPrice.replace('$', '')),
   
 quantity: 1
 
 };

  
// Add the product to the cart (You can implement your cart logic here)
  addToCart(item);

}


// Add click event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
 
 button.addEventListener('click', addToCartClicked);

});


// Dummy function to add product to cart (replace with your actual cart logic)
function addToCart(item) {
  
console.log('Added to cart:', item);
  
// Implement your cart logic here, e.g., updating a shopping cart object
}