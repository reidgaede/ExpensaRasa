/* Data Flow ("Expense List" Branch of Component Tree): `<ExpenseDate />` -> `<ExpenseItem />` 
-> `<ExpensesList />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

/* Initializing `ExpenseItem()` function, which builds `<ExpenseItem />` component; note 
passage of "props" as function parameter, which allows function/component to make use of 
values passed to `key`, `title`, `amount`, `date`, and `category` props in `<ExpenseItem />` 
invocation in "ExpensesList.js": */
function ExpenseItem(props) {

    /* Because `<ExpenseItem />` rendered within `<ul>` element in "ExpensesList.js", best 
    practice is to structure `<ExpenseItem />` as "list item" by enclosing component's 
    contents in `<li>` element; use `className` prop within `<Card>` component to ensure that 
    "expense-item" class selector within "ExpenseItem.css" applied to this specific `<Card>` 
    invocation for styling purposes; invoking `<ExpenseDate />` component with value of 
    `props.date` for `date` prop so as to ensure that value assigned to `date` property 
    within JavaScript "expense" object passed to `<ExpenseItem />` invocation in "Expenses-
    List.js" accessible in "ExpenseDate.js": */
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <div className="expense-item__stacked-data">
                        <h2>{props.title}</h2>
                        <h6>{props.category}</h6>
                    </div>
                </div>
                <div className="expense-item__price">${props.amount}</div>
            </Card>
        </li>
    );
};

export default ExpenseItem;