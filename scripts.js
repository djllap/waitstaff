'use strict';

const store = {
  meals: 0,
  tipTotal: 0,

};

//
// Generators
//

function generateMealDetails() {
  return `
    <header class="mealbox-header box-header">
      <h2>Enter the Meal Details</h2>
    </header>
    <form action="submit" id="meal-form" class="meal-form">
      <div class='form-box'>
        <div class="form-line">
          <label for="price">Base Meal Price: $</label>
          <input type="text" name="price" id="price-input">
        </div>
        <div class="form-line">
          <label for="tax">Tax Rate: %</label>
          <input type="text" name="tax" id="tax-input">
        </div> 
        <div class="form-line">
          <label for="tip">Tip Percentage: %</label>
          <input type="text" name="tip" id="tip-input">
        </div>
      </div>
      <div class="button-group">
        <button class="btn" type="submit">Submit</button>
        <button class="btn">Cancel</button>
      </div>
    </form>
  `;
}

function generateCustomerCharges() {
  return `
    <div class="customer-charges-box box">
      <header class="charges-header box-header">
        <h2>Customer Charges</h2>
      </header>
      <p class="subtotal">
        <span class="charges-label">Subtotal: $</span>
        <span class="charges-value">0.00</span>
      </p>
      <p class="tip">
        <span class="charges-label">Tip: $</span>
        <span class="charges-value">0.00</span>
      </p>
      <p class="charges-total">
        <span class="charges-label">Total: $</span>
        <span class="charges-value">0.00</span>
      </p>
    </div>
  `;
}

function generateEarningsInfo() {
  return `
    <header class="earnings-header box-header">
        <h2>My Earnings Info</h2>
    </header>
    <p class="tip-total">
        <span class="tips-label">Tip Total: $</span>
        <span class="tips-value">0.00</span>
      </p>
      <p class="mealcount-total">
        <span class="tips-label">Meal Count: </span>
        <span class="tips-value">0</span>
      </p>
      <p class="average-tips">
        <span class="tips-label">Average Tip Per Meal: $</span>
        <span class="tips-value">0.00</span>
      </p>
  `;
}

//
// Renders
//

function renderMealDetails() {
  
}

function renderCustomerCharges() {

}

function renderEarningsInfo() {

}

function render() {
  renderMealDetails();
  renderCustomerCharges();
  renderEarningsInfo();
};
