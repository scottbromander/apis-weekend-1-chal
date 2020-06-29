$(document).ready(onReady);

function onReady() {
  $('#js-form-add-employee').on('submit', submitForm);
}

function submitForm(event) {
  event.preventDefault();

  const employee = {
    first_name: $('#js-input-firstName').val(),
    last_name: $('#js-input-lastName').val(),
    id: $('#js-input-id').val(),
    position: $('#js-input-position').val(),
    salary: parseInt($('#js-input-salary').val()),
  };

  console.table(employee);
}
