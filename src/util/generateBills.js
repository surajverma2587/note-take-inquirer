const generateBill = (bill) => {
  return `<div class="card" id="${bill.id}">
    <div class="card-body">
      <h5 class="card-title">${bill.message}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${bill.getFormattedAmount()}</h6>
      <p class="card-text">${bill.getFormattedDate()}</p>
    </div>
  </div>`;
};

const generateBills = (bills) => {
  const billCards = bills.map(generateBill).join("\n");
  return `<div class="accordion-item">
    <h2 class="accordion-header" id="bills">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Bills
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="bills"
      data-bs-parent="#notes"
    >
      <div class="accordion-body">
        ${billCards}
      </div>
    </div>
  </div>`;
};

module.exports = generateBills;
