
    // Get all elements with class "cart-btn"
    var addToCartButtons = document.querySelectorAll('.cart-btn');

    // Loop through each button and add click event listener
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert("Item added to cart!");
            // You can add further functionality here such as updating the cart in the backend
        });
    });