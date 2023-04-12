import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import "./App.css";

/* "expenseArray" contains user-uploaded objects modeling expenses, which are then 
rendered on front-end: */
const expenseArray = [];

/* Initializing `App()` function, which builds `<App />` component: */
function App() {

  /* Initializing "expenses" "state variable" and `setExpenses()` "state-updating 
  function" for purposes of facilitating addition/rendering of new user-submitted 
  "expense items" to app's front-end; "expenses" contains initial value of 
  "DUMMY_EXPENSES" array: */
  const [expenses, setExpenses] = useState(expenseArray);

  /* When "Add Expense" button within "add expense" form on front-end clicked, re-
  evaluate "App.js" such that new user-submitted expense object appended to front of 
  array stored in "expenses" state variable: */
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  /* Render one `<NewExpense />` component and one `<Expenses />` component; use 
  `onAddExpense` prop to make `addExpenseHandler()` function available for use within 
  "NewExpense.js" as `props.onAddExpense()`; use `expenses` prop to make "expenses" 
  "state variable" available for use in "Expenses.js" as `props.expenses`: */
  return (
    <div>
      <h1 className="site-title">ExpensaRasa</h1>
      <div className="site-subtitle">
        <h4>Your personal <i><a href="https://en.wikipedia.org/wiki/Tabula_rasa" 
        target="_blank">blank slate</a></i>, purpose-hewn for quick, convenient, and 
        private expense logging and analysis:</h4>
        <ul className="expensa-rasa-bullets">
          <li>Add your expense items,</li>
          <li>Filter your expenses by the year in which they were incurred,</li>
          <li>Check out the chart for a month-by-month, real-time expense breakdown, and</li>
          <li>Wipe your slate clean when you're done by refreshing or closing your browser window.</li>
        </ul>
        <h4>We do not obtain or store any of your data in exchange for using 
        ExpensaRasa (nor would we ever want to). The expenses you input are your 
        business and your business only. Respect for user privacy, as well as for ease 
        of use, drive development and ongoing improvement of ExpensaRasa, and therein 
        lie its beauty.</h4>
      </div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      <p className="viewport-width-disclaimer">ExpensaRasa is currently designed for use on 
      desktop computers and tablets only. For optimized use experience, please maintain a 
      browser window width of at least 550px while engaging with ExpensaRasa.</p>
    </div>
  );
};

/* Making `<App />` available for import into other JavaScript files (namely 
"index.js"): */
export default App;