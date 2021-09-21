# Sample React App: Checkout cart

The app has two separate views/components. The Product Listing Component and Cart Component. The list of products to be displayed is already provided in the app. 

The Product Listing component implements the following functionalities:

- Clicking on each 'Add To Cart' button should add the item to the shopping cart. When an item is added to the cart, 
  - 'Add To Cart' button should be removed from view and 'Remove From Cart' button should be displayed.
  - An entry should be added to the table in Cart Component.

- Clicking on each 'Remove From Cart' button should remove the item from the cart and display 'Add to Cart' button for the corresponding product item.

- The Cart Component should has the following functionalities:

  - Displays all the items in the cart in a table.

  - Displays the Cart Subtotal, Discount Value, and Total Price. 

  - The Cart has a Coupon Select Input. On selecting a coupon from this input, an appropriate discount is applied and the total price is calculated and displayed. `(Subtotal - Discount = Total Price)`

- Items displayed in the Cart Component in the order they are added to Cart. 


## Environment 

- React Version: 16.13.1
- Node Version: 12.18.3
- Default Port: 8000

## Functionality Requirements


## How to deploy and run 

* install:  npm install

* run:  npm run start

* test: npm run test