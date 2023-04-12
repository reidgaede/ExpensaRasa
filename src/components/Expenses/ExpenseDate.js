/* Data Flow ("Expense List" Branch of Component Tree): `<ExpenseDate />` -> `<ExpenseItem />` 
-> `<ExpensesList />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import "./ExpenseDate.css";

/* Initializing `ExpenseDate()` function, which builds `<ExpenseDate />` component; note 
passage of "props" as function parameter, which allows function/component to make use of 
value passed to `date` prop in `<ExpenseItem />` invocation in "ExpensesList.js": */
function ExpenseDate (props) {

    /* Obtaining, from `Date()` object contained within a particular "expense" object's `date` 
    property, human-readable representations of month and day on which said expense was 
    incurred, as well as year in which said expense was incurred: */
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.toLocaleString("en-us", {day: "2-digit"});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;