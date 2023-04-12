/* Data Flow ("Expenses Stats" Branch of Component Tree): `<YearNumberOfExpenses />` -> 
`<ExpenseStats />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import "./YearNumberOfExpenses.css";

const YearNumberOfExpenses = (props) => {

    let expenseCount = props.expenseItems.length;

    return (
        <div className="year-number-of-expenses">
            <h4>Number of Expenses in Calendar Year</h4>
            <div className="vertical-line"></div>
            <h5>{expenseCount}</h5>
        </div>
    );
};

export default YearNumberOfExpenses;