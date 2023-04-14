import logo from './logo.svg';
import './TaskManager.css';

function TaskManager() {
  return (
    <div>
  <div>
    <div class="sidebar">
      <div class="logo">
      </div>
      <ul class="nav-links">
        <li><a href="#">User Accounts</a></li>
        <li class="active"><a href="#">Task Management</a></li>
        <li><a href="#">Task Tracker</a></li>
        <li><a href="#">Data Analysis</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>
      <div class="user-info">
        <span class="username">John Doe</span>
        <span class="sign-out"><a href="#">X</a></span>
      </div>
    </div>
	<div class="main">
		<header>
			<h1>TaskManager</h1>
		</header>
		<center>
			<div class="report-chart">
				<div class="chart-container">
                <h2>Table area</h2>
					<div class="chart-area">
                        
					</div>
				</div>
			</div>
		</center>
	</div>
    <script src="script.js"></script>
  </div>
    </div>
  );
}

// Define the table and settings button elements
const table = document.querySelector('table');
const settingsButton = document.querySelector('#settings-button');

// Define the functions to add, edit, and delete rows and columns
function addRow() {
  const newRow = table.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  cell1.innerHTML = 'New Row, Column 1';
  cell2.innerHTML = 'New Row, Column 2';
  cell3.innerHTML = 'New Row, Column 3';
  cell4.innerHTML = 'New Row, Column 4';
}

function editCell(row, col, value) {
  table.rows[row].cells[col].innerHTML = value;
}

function deleteRow(row) {
  table.deleteRow(row);
}

function addColumn() {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].insertCell(-1);
    cell.innerHTML = 'New Column';
  }
}

function deleteColumn(col) {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(col);
  }
}

// Add event listeners to the settings button
settingsButton.addEventListener('click', () => {
  // Add row button
  const addRowButton = document.createElement('button');
  addRowButton.innerText = 'Add Row';
  addRowButton.addEventListener('click', addRow);

  // Edit cell button
  const editCellButton = document.createElement('button');
  editCellButton.innerText = 'Edit Cell';
  editCellButton.addEventListener('click', () => {
    const row = prompt('Enter the row number:');
    const col = prompt('Enter the column number:');
    const value = prompt('Enter the new cell value:');
    editCell(row, col, value);
  });
// Delete row button
const deleteRowButton = document.createElement('button');
deleteRowButton.innerText = 'Delete Row';
deleteRowButton.addEventListener('click', () => {
const row = prompt('Enter the row number:');
deleteRow(row);
});

// Add column button
const addColumnButton = document.createElement('button');
addColumnButton.innerText = 'Add Column';
addColumnButton.addEventListener('click', addColumn);

// Delete column button
const deleteColumnButton = document.createElement('button');
deleteColumnButton.innerText = 'Delete Column';
deleteColumnButton.addEventListener('click', () => {
const col = prompt('Enter the column number:');
deleteColumn(col);
});

// Create a div to hold the buttons
const buttonsDiv = document.createElement('div');
buttonsDiv.appendChild(addRowButton);
buttonsDiv.appendChild(editCellButton);
buttonsDiv.appendChild(deleteRowButton);
buttonsDiv.appendChild(addColumnButton);
buttonsDiv.appendChild(deleteColumnButton);

// Add the buttons div to the table container
const tableContainer = document.querySelector('#table-container');
tableContainer.appendChild(buttonsDiv);
});


function addRow() {
  const table = document.querySelector('table');
  const numRows = table.rows.length;
  const newRow = table.insertRow(numRows);
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const newCell = newRow.insertCell(i);
    newCell.innerText = '';
  }
}

function editCell(row, col, value) {
  const table = document.querySelector('table');
  const cell = table.rows[row].cells[col];
  const input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  input.addEventListener('blur', () => {
    cell.innerText = input.value;
  });
  cell.innerText = '';
  cell.appendChild(input);
  input.focus();
}

function deleteRow(row) {
  const table = document.querySelector('table');
  table.deleteRow(row);
}

function addColumn() {
  const table = document.querySelector('table');
  const numCols = table.rows[0].cells.length;
  for (let i = 0; i < table.rows.length; i++) {
    const newRow = table.rows[i];
    const newCell = newRow.insertCell(numCols);
    newCell.innerText = '';
  }
}
function deleteColumn(col) {
  const table = document.querySelector('table');
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    row.deleteCell(col);
  }
}

export default TaskManager;
