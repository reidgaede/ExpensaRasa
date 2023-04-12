/* Data Flow ("Expense List" Branch of Component Tree): `<ExpenseDate />` -> `<ExpenseItem />` -> 
`<ExpensesList />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

/* Initializing `ExpensesList()` function, which builds `<ExpensesList />` component; note 
passage of "props" as function parameter, which allows function/component to make use of 
"filteredExpenses" array passed as value of `items` prop in `<ExpensesList />` invocation in 
"Expenses.js": */
const ExpensesList = (props) => {

    /* If "filteredExpenses" array contained within `props.items` has `.length` value of 0, 
    return message in HTML element informing user that no expenses were found for that year: */
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found for this year.</h2>
    }

    /* Returning, within single `<ul>` element, `.map()` invocation that invokes 
    `<ExpenseItem />` instance for each "expense" object in "filteredExpenses" array stored 
    within `props.items`; note property values from each "expense" object stored within 
    `props.items` passed as each `<ExpenseItem />` invocation's 'prop' values so that said 
    values are accessible within "ExpenseItem.js": */
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
            <ExpenseItem 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                category={expense.category}
                key={expense.id}
            />
            ))}
        </ul>
    );
}

export default ExpensesList;