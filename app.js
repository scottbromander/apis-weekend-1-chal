$(document).ready(onReady);

const employees = [];

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

  clearInputs();

  employees.push(employee);

  console.table(employees);
}

function clearInputs() {
  $('#js-input-firstName').val('');
  $('#js-input-lastName').val('');
  $('#js-input-id').val('');
  $('#js-input-position').val('');
  $('#js-input-salary').val('');
}
