// Fetch expenses and display them on the page
async function fetchExpenses() {
    const response = await fetch('/expenses');
    const expenses = await response.json();
  
    const expensesList = document.getElementById('expenses-list');
    expensesList.innerHTML = '';
    expenses.forEach(expense => {
      const div = document.createElement('div');
      div.textContent = `${expense.description}: $${expense.amount}`;
      expensesList.appendChild(div);
    });
  }
  
  // Fetch income and display them on the page
  async function fetchIncome() {
    const response = await fetch('/income');
    const income = await response.json();
  
    const incomeList = document.getElementById('income-list');
    incomeList.innerHTML = '';
    income.forEach(income => {
      const div = document.createElement('div');
      div.textContent = `${income.description}: $${income.amount}`;
      incomeList.appendChild(div);
    });
  }
  
  // Add event listener to the expense form
  document.getElementById('expense-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const description = document.getElementById('expense-description').value;
    const amount = document.getElementById('expense-amount').value;
  
    await fetch('/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description, amount })
    });
  
    document.getElementById('expense-description').value = '';
    document.getElementById('expense-amount').value = '';
  
    fetchExpenses();
  });
  
  // Fetch and display expenses and income on page load
  fetchExpenses();
  fetchIncome();
  