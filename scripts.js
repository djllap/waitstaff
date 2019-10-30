'use strict';

const store = {
  mealCount: 0,
  tipTotal: 0,
  currentMeal: {
    subtotal: 0,
    tip: 0
  }
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
        <button class="cancel-button btn" type="reset">Cancel</button>
      </div>
    </form>
  `;
}

function generateCustomerCharges() {
  const subtotal = Number.parseFloat(store.currentMeal.subtotal);
  const tip = Number.parseFloat(store.currentMeal.tip);
  const total = subtotal + tip;

  return `
    <header class="charges-header box-header">
      <h2>Customer Charges</h2>
    </header>
    <p class="subtotal">
      <span class="charges-label">Subtotal: $</span>
      <span class="charges-value">${subtotal.toFixed(2)}</span>
    </p>
    <p class="tip">
      <span class="charges-label">Tip: $</span>
      <span class="charges-value">${tip.toFixed(2)}</span>
    </p>
    <p class="charges-total">
      <span class="charges-label">Total: $</span>
      <span class="charges-value">${total.toFixed(2)}</span>
    </p>
  `;
}

function generateEarningsInfo() {
  const tipTotal = store.tipTotal;
  const mealCount = store.mealCount;
  const average = tipTotal / mealCount || 0;

  return `
    <header class="earnings-header box-header">
        <h2>My Earnings Info</h2>
    </header>
    <p class="tip-total">
        <span class="tips-label">Tip Total: $</span>
        <span class="tips-value">${tipTotal.toFixed(2)}</span>
      </p>
      <p class="mealcount-total">
        <span class="tips-label">Meal Count: </span>
        <span class="tips-value">${mealCount}</span>
      </p>
      <p class="average-tips">
        <span class="tips-label">Average Tip Per Meal: $</span>
        <span class="tips-value">${average.toFixed(2)}</span>
      </p>
  `;
}

//
// Renders
//

function renderMealDetails() {
  $('.meal-box').html(generateMealDetails());
}

function renderCustomerCharges() {
  $('.customer-charges-box').html(generateCustomerCharges());
}

function renderEarningsInfo() {
  $('.earnings-box').html(generateEarningsInfo());
}

function render() {
  renderMealDetails();
  renderCustomerCharges();
  renderEarningsInfo();
}

//
// data functions
//

function addMeal(base, taxRate, tipRate) {
  const subtotal = base + (base * taxRate / 100);
  const tip = subtotal * tipRate / 100;
  store.currentMeal.subtotal = subtotal;
  store.currentMeal.tip = tip;

  incrementMealcount(1);
  addToTotalTip(tip);
}

function incrementMealcount(num) {
  store.mealCount += num;
}

function addToTotalTip(num) {
  store.tipTotal += num;
}

function resetStore() {
  store.mealCount = 0;
  store.tipTotal = 0;
  store.currentMeal.subtotal = 0;
  store.currentMeal.tip = 0;
}

function clearInputs() {
  $('.meal-box').find('#price-input').val('');
  $('.meal-box').find('#tax-input').val('');
  $('.meal-box').find('#tip-input').val('');
}

//
// Handlers
//

function handleMealFormSubmit() {
  $('.meal-box').on('submit', '#meal-form', event => {
    event.preventDefault();
    const price = parseFloat($(event.currentTarget).find('#price-input').val());
    const taxRate = parseFloat($(event.currentTarget).find('#tax-input').val());
    const tipRate = parseFloat($(event.currentTarget).find('#tip-input').val());
    addMeal(price, taxRate, tipRate);

    clearInputs();
    render();
  });
}

function handleReset() {
  $('.reset-button').click(event => {
    resetStore();
    render();
  });
}

function handleWaitstaffCalculator() {
  handleMealFormSubmit();
  handleReset();
  render();
}

handleWaitstaffCalculator();
