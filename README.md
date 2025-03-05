---
# Add to Cart Product Feature

![image](https://github.com/user-attachments/assets/4a9fb845-d122-4224-9ac1-dfe619f58728)

This project is a simple "Add to Cart" feature for an e-commerce website. It displays a list of products with prices. When a user clicks the "Add to Cart" button, the product will be added to the cart and the total will be updated accordingly.

##Demo:
https://mushtaqs-product.netlify.app/

## Project Structure

The project consists of the following files:

- `index.html`: Contains the HTML structure of the page, including product listings and cart details.
- `style.css`: Handles the visual presentation of the page, including layout, design, and responsive styling.
- `work.js`: Contains the JavaScript logic to handle product addition to the cart, updating the total price, and managing the cart state.

## Features

- Displays a list of products with names, prices, and an "Add to Cart" button.
- When a product is added to the cart, the total price is automatically updated.
- Cart contents and total price are displayed in real-time.
- Responsive design for mobile and desktop view.

## How It Works

1. **Products Display**: Products are displayed with their names and prices.
2. **Add to Cart**: Each product has an "Add to Cart" button. When clicked, the product is added to the cart, and the total is updated.
3. **Total Update**: As products are added, the total price is recalculated and displayed.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Mushtaq1295/product_cart.git
   ```

2. Navigate to the project folder:
   ```bash
   cd product_cart
   ```

3. Open the `index.html` file in your browser to view the project.

## Usage

1. Open the `index.html` file in your browser.
2. Browse through the product list, and click the "Add to Cart" button on any product to add it to the cart.
3. The total price will update each time an item is added to the cart.
4. You can add multiple items, and the cart will keep a running total.

## Example of Product List

Here is an example of how the product list might look:

- **Product 1**: $25.00 [Add to Cart]
- **Product 2**: $15.00 [Add to Cart]
- **Product 3**: $40.00 [Add to Cart]

Once a user adds products, the cart section will show:

- **Cart**:
  - Product 1: $25.00
  - Product 2: $15.00
  - **Total: $40.00**

## Files Explanation

### `index.html`

Contains the structure of the page, including:

- A product list with names and prices.
- A cart section that displays the current items in the cart.
- A button to trigger the `Add to Cart` functionality.

### `style.css`

Handles the page's visual styling, including:

- Layout and positioning of product listings and cart.
- Styling for buttons, text, and containers.
- Responsive design for mobile-friendly layouts.

### `work.js`

Handles the interactivity of the page:

- Event listeners for "Add to Cart" buttons.
- Function to update the cart when a product is added.
- Function to calculate and display the total price.
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
