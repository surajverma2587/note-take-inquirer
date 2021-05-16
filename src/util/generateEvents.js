const generateEvent = (event) => {
  return `<div class="card" id="${event.id}">
    <div class="card-body">
      <h5 class="card-title">${event.message}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        ${event.getFormattedLocation()}
      </h6>
      <p class="card-text">${event.getFormattedDateTime()}</p>
    </div>
  </div>`;
};

const generateEvents = (events) => {
  const eventCards = events.map(generateEvent).join("\n");
  return `<div class="accordion-item">
    <h2 class="accordion-header" id="events">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Events
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="events"
      data-bs-parent="#notes"
    >
      <div class="accordion-body">
        ${eventCards}
      </div>
    </div>
  </div>`;
};

module.exports = generateEvents;
