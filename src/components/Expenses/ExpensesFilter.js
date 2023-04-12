/* Data Flow ("Expense Filter" Branch of Component Tree): `<ExpensesFilter />` -> 
`<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import './ExpensesFilter.css';

/* Initializing `ExpensesFilter()` function, which builds `<ExpensesFilter />` component; 
note passage of "props" as function parameter, which allows function/component to make 
use of values passed to `selected` and `onSelectYear` props in `<ExpensesFilter />` 
invocation in "Expenses.js": */
const ExpensesFilter = (props) => {

    /* Whenever user interacts with `<select>` element in `ExpenseFilter()` function's 
    `return` statement on app's front-end (as "drop-down menu") to change "filter year", 
    execute `filterChangeHandler()` function from "Expenses.js" (stored in 
    `props.onSelectYear`) to obtain user's selected "year" value and accordingly update 
    value of "filteredYear" variable in "Expenses.js": */
    const yearSelectHandler = (event) => {
        props.onSelectYear(event.target.value);
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Year</label>
        {/* Note this `<select>` element's `value` prop having a "dynamic" value of 
        `props.selected` (which allows `<ExpensesFilter />` to access value of "filtered-
        Year" variable from "Expenses.js" and render said value as "selected" "filter 
        year" value within "Filter by Year" "drop-down menu"); note as well `onChange` 
        prop's value of `yearSelectHandler`, which ensures that whenever user selects new 
        "filter year" value on app's front-end, `yearSelectHandler()` function defined 
        above will execute: */}
        <select value={props.selected} onChange={yearSelectHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
