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
  render();
}

function clearInputs() {
  $('#js-input-firstName').val('');
  $('#js-input-lastName').val('');
  $('#js-input-id').val('');
  $('#js-input-position').val('');
  $('#js-input-salary').val('');
}

function render() {
  $('#js-table-body').empty();

  let totalSalary = 0;

  for (let employee of employees) {
    totalSalary += employee.salary;

    $('#js-table-body').append(`
            <tr>
                <td>${employee.first_name}</td>
                <td>${employee.last_name}</td>
                <td>${employee.id}</td>
                <td>${employee.position}</td>
                <td>${employee.salary}</td>
                <td><button>X</button></td>
            </tr>
        `);
  }

  totalSalary = totalSalary / 12;

  if (totalSalary > 20000) {
    $('#js-monthly-total').addClass('red');
  } else {
    $('#js-monthly-total').removeClass('red');
  }

  totalSalary = totalSalary.toFixed(2);

  $('#js-monthly-total').text(`Monthly Total: $${totalSalary}`);

  //   if(totalSalary > 20000) {}
}
