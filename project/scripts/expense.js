
document.addEventListener('DOMContentLoaded', () => {
  const expenseForm = document.getElementById('expense-form');
  const expensesTable = document.getElementById('expenses-table').getElementsByTagName('tbody')[0];
  const totalExpenses = document.getElementById('total-expenses');
  const filterCategory = document.getElementById('filter-category');
  const categorySelect = document.getElementById('category');

  const categories = ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Other'];

  populateCategoryOptions(categorySelect, categories);
  populateCategoryOptions(filterCategory, ['All', ...categories]);

  let editingRowIndex = null;

  loadExpenses();

  expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (editingRowIndex !== null) {
      updateRow(editingRowIndex, date, description, amount, category);
    } else {
      addRow(date, description, amount, category);
    }

    expenseForm.reset();
    editingRowIndex = null;
    saveExpenses();
    updateTotalExpenses();
  });

  expensesTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      deleteRow(e.target);
    } else if (e.target.classList.contains('edit-btn')) {
      editRow(e.target);
    }
  });

  filterCategory.addEventListener('change', () => {
    filterExpenses(filterCategory.value);
  });

  function populateCategoryOptions(selectElement, categories) {
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.toLowerCase();
      option.textContent = category;
      selectElement.appendChild(option);
    });
  }

  function addRow(date, description, amount, category) {
    const newRow = expensesTable.insertRow();
    newRow.innerHTML = `
      <td>${date}</td>
      <td>${description}</td>
      <td>${amount.toFixed(2)}</td>
      <td>${category}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
  }

  function updateRow(index, date, description, amount, category) {
    const row = expensesTable.rows[index];
    row.cells[0].textContent = date;
    row.cells[1].textContent = description;
    row.cells[2].textContent = amount.toFixed(2);
    row.cells[3].textContent = category;
  }

  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    saveExpenses();
    updateTotalExpenses();
  }

  function editRow(button) {
    const row = button.parentNode.parentNode;
    editingRowIndex = row.rowIndex - 1;

    document.getElementById('date').value = row.cells[0].textContent;
    document.getElementById('description').value = row.cells[1].textContent;
    document.getElementById('amount').value = row.cells[2].textContent;
    document.getElementById('category').value = row.cells[3].textContent;

    document.getElementById('rowIndex').value = row.rowIndex;
  }

  function saveExpenses() {
    const expenses = [];
    for (let i = 0; i < expensesTable.rows.length; i++) {
      const row = expensesTable.rows[i];
      const expense = {
        date: row.cells[0].textContent,
        description: row.cells[1].textContent,
        amount: row.cells[2].textContent,
        category: row.cells[3].textContent
      };
      expenses.push(expense);
    }
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(expense => {
      addRow(expense.date, expense.description, parseFloat(expense.amount), expense.category);
    });
    updateTotalExpenses();
  }

  function updateTotalExpenses() {
    let total = 0;
    for (let i = 0; i < expensesTable.rows.length; i++) {
      total += parseFloat(expensesTable.rows[i].cells[2].textContent);
    }
    totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
  }

  function filterExpenses(category) {
    for (let i = 0; i < expensesTable.rows.length; i++) {
      const row = expensesTable.rows[i];
      const rowCategory = row.cells[3].textContent.toLowerCase();
      if (category === 'all' || rowCategory === category) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  }

  updateTotalExpenses();
});




const currentYear = document.querySelector("#currentYear");

// use the date object
const today = new Date();

currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "medium",
    timeStyle: "medium",
  }
).format(today)}</span>`; 

