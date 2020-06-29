$(document).ready(onReady);

function onReady() {
  $('#js-form-add-employee').on('submit', submitForm);
}

function submitForm(event) {
  event.preventDefault();
}
